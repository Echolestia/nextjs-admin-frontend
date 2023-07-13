Feature: Admin Dashboard - Chat
    As a medical practitioner/professional/counsellor
    I want to be able to send and receieve messages and view users' profiles through the admin platform


    #1 - Happy path
    Scenario: Viewing 'Chat' tab with active chats
        Given an admin lands in the admin dashboard and clicks on 'Chat' button
        Then the admin should see a list of all the active chats under the 'Chat' tab

    #2
    Scenario: Opening one of the chats
        Given the admin is in the 'Chat' page
        When the admin sees a list of active chats and click on one of the chat
        Then the admin should see the chat history with the user and their profile

    #3
    Scenario: Sending a message to the selected chat
        Given the admin is in a chat
        When the admin fills in the 'Type your message here' field and press enter
        Then the admin should see the message appear in the chat

    #4 - Sad path
    Scenario: Sending a message with 'Type your message here' field empty
        Given the admin is in a chat again
        When the admin has not input anything into 'Type your message here' field
        Then the admin should not be able to send a new message when clicked on 'send'
