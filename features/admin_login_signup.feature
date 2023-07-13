Feature: Admin Dashboard - Log in/Sign up
    As a medical practitioner/professional/counsellor
    I want to log in with my own account in to the dashboard
    So as to be able to see the different chatlogs from the users

    #11
    Scenario: Admin attempts to create an account
        Given an admin is on the log in page
        When the admin clicks on the 'register now!' button
        Then the admin will be directed to a sign up page

    #12
    Scenario: Admin successfully signs up for a new account
        Given an admin is on the sign up page
        And fills in the necessary details for signing up
        When the admin clicks Sign Up
        Then the admin will be directed to the home dashboard

    #13 - Sad path
    Scenario: Admin logs in with the incorrect details
        Given an admin is on the log in page
        When the admin left password field blank
        Then an error message 'Please input your Password!' will appear
        And the admin will still be on the log in page

    #14 - Happy path
    Scenario: Admin logs in with the correct details
        Given an admin is on the log in page
        When the admin fills in the correct email
        And fills in the correct password
        When the admin clicks Log in
        Then the admin will be redirected to the respective account's dashboard
