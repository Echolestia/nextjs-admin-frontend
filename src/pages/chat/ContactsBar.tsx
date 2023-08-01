import VirtualList from "rc-virtual-list";
import {
  Layout,
  List,
  Avatar,
  Divider,
  Typography,
  Spin,
  Badge,
  Card,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import useUser from "../../../components/useUser";

const ContactsBar = ({ contacts, setSelectedChatId, selectedChatId }: any) => {
  const [user, token, loading] = useUser();

  // Filter out chatrooms without a last_message, then sort contacts by last updated date
  const sortedContacts = contacts
    .filter((chatroom: any) => chatroom.last_message != null)
    .sort((a: any, b: any) => {
      const aDate = a.last_message.updated_at;
      const bDate = b.last_message.updated_at;
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    });

  return (
    <Card className="h-full py-2 overflow-y-scroll">
      <List style={{ width: "100%" }}>
        {sortedContacts.map((chatroom: any) => {
          const isSelected = chatroom.id === selectedChatId;
          const lastMessageDate = new Date(chatroom.last_message.updated_at);
          const currentDate = new Date();

          let formattedTime = "";
          if (lastMessageDate.toDateString() === currentDate.toDateString()) {
            // Same day
            formattedTime = lastMessageDate.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });
          } else if (
            Math.floor(
              (currentDate.getTime() - lastMessageDate.getTime()) /
                (1000 * 60 * 60 * 24)
            ) <= 7
          ) {
            // Within the last 7 days
            formattedTime = lastMessageDate.toLocaleString("en-US", {
              weekday: "short",
            });
          } else {
            // More than 7 days ago
            formattedTime = lastMessageDate.toLocaleDateString("en-GB");
          }
          const notificationBadge =
            chatroom.last_message.sender_id !== user!.id ? (
              <Badge dot offset={[10, 10]} />
            ) : null;

          return (
            <List.Item
              key={chatroom.id}
              className={"cursor-pointer hover:bg-pink-100"}
              onClick={() => {
                setSelectedChatId(chatroom.id);
              }}
              style={{
                backgroundColor: `${isSelected ? "rgb(251 207 232)" : ""}`,
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    size={"large"}
                    className="ml-3"
                    icon={<UserOutlined />}
                  />
                }
                title={
                  chatroom.opponent_first_name && chatroom.opponent_second_name
                    ? `${chatroom.opponent_first_name} ${chatroom.opponent_second_name}`
                    : `Guest user ${chatroom.id}`
                }
                description={chatroom.last_message?.content}
              />
              {notificationBadge}
              <Typography.Text style={{ alignSelf: "center" }}>
                {formattedTime}
              </Typography.Text>
            </List.Item>
          );
        })}
      </List>
    </Card>
  );
};

export default ContactsBar;
