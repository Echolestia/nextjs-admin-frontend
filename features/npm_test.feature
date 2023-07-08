# This file is responsible for testing if a user's npm is working

Feature: 1


     #6
    Scenario: Opening one of the articles
        Given an admin is in the 'View Articles' page of the admin dashboard
        When the admin clicks on the 'Visit Link' button
        Then the admin is redirected to the article's original URL in a new browser tab
