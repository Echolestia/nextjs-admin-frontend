import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Space, message } from "antd";
import MainLayout from "../../../components/MainLayout";
import axios from "axios";
import { useRouter } from "next/router";

const category = [
  "Pregnancy",
  "Postpartum",
  "Infant Care",
  "Dealing with anxiety",
  "Dealing with depression",
  "Financial struggles",
  "Adoption",
  "Abortion",
  "Miscarriage",
  "Parenting",
  "1st Trimester",
  "2nd Trimester",
  "3rd Trimester",
];
const tags = [
  "Pregnant teens",
  "Pregnant adults",
  "Partners",
  "Parents",
  "Friends",
  "New Parents",
];
const DEFAULT_IMG_URL =
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ArticleForm: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const router = useRouter();

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
      form.setFieldsValue({
        tags: selectedTags.filter((t) => t !== tag),
      });
    } else {
      setSelectedTags([...selectedTags, tag]);
      form.setFieldsValue({
        tags: [...selectedTags, tag],
      });
    }
  };

  const onFinish = async (values: any) => {
    const processedValues = {
      ...values,
      // Dont include the milliseconds
      published_date:
        values.published_date.toISOString().substring(0, 19) + "Z",
      created_date: new Date().toISOString().substring(0, 19) + "Z",
      id: Math.floor(Math.random() * 1000000),
      user_group: selectedTags,
      img_url: values.imgURL ? values.imgURL : DEFAULT_IMG_URL,
    };
    console.log(
      "Making post request with the following data to API",
      processedValues
    );

    const createArticleResponse = await axios.post(
      "/api/articles",
      JSON.stringify(processedValues),
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (createArticleResponse.status === 200) {
      const jsonData = await createArticleResponse;
      console.log("Article created successfully", jsonData);
      router.push("/articles");
    } else {
      console.log(
        "Error creating article",
        createArticleResponse.status,
        createArticleResponse.statusText
      );
    }
  };

  const onReset = () => {
    form.resetFields();
    setSelectedTags([]);
  };

  return (
    <>
      <div className="flex items-centre min-h-screen min-w-full justify-center my-8">
        <div>
          <h1 className="text-3xl font-bold">Add an Article</h1>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label="Article Title"
              name="title"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter the article title" />
            </Form.Item>
            <Form.Item
              label="Article Link"
              name="url"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter the article URL" />
            </Form.Item>
            <Form.Item
              label="Author"
              name="author"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter the article author" />
            </Form.Item>
            <Form.Item
              label="Date Published"
              name="published_date"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
            {/* <Form.Item
              label="Upload Article "
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item> */}
            <Form.Item label="Image Link" name="imgURL">
              <Input placeholder="Enter the article URL" />
            </Form.Item>
            <Form.Item
              label="Select target groups"
              rules={[{ required: true }]}
            >
              <Space wrap>
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    type={selectedTags.includes(tag) ? "primary" : "default"}
                  >
                    {tag}
                  </Button>
                ))}
              </Space>
            </Form.Item>

            <div className="flex justify-between">
              <Button htmlType="button" onClick={onReset} className="inline">
                Reset
              </Button>
              <Form.Item>
                <Button id="createArticleButton" type="primary" htmlType="submit" className="inline">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

const ArticleFormPage: React.FC = () => {
  return (
    <MainLayout>
      <ArticleForm />
    </MainLayout>
  );
};

export default ArticleFormPage;
