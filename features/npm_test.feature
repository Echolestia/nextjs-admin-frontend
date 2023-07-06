# This file is responsible for testing if a user's npm is working

Feature: 1

   Scenario: Viewing 'Articles' tab but no articles were added
        Given an admin lands in the admin dashboard for the first time
        When the admin click on the 'View Articles' tab
        And the admin deletes all articles
        Then the admin should see the text 'You have no articles, please create a new article!'
