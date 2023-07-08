Feature: Admin Dashboard - Articles
    As a medical practitioner/professional/counsellor
    I want to be able to view, create and delete articles through the admin platform
    So that users can view articles which are curated properly for them.

    #1 - Sad path (tested)
    Scenario: Viewing 'Articles' tab but no articles were added
        Given an admin lands in the admin dashboard for the first time
        When the admin click on the 'View Articles' tab
        Then the admin should see the text 'You have no articles, please create a new article!'

    #2 (tested)
    Scenario: Accessing the page to create articles
        Given admin goes to create article page
        Then the admin should see a form to create articles

    #3 (Sad Path)(tested)
    Scenario: Can't create article
        Given admin is in the create articles page
        When admin clicks submit now
        Then admin will still be in the create articles page

    #4 (tested)
    Scenario: Creating article
        Given admin is in the create article page
        Given admin fill in all required fields
        When admin clicks submit
        Then admin should be in the view articles page

    #5 - Happy path(tested)
    Scenario: Viewing 'Articles' tab with articles added
        Given an admin lands in the admin dashboard for the first time
        When the admin click on the 'View Articles' tab
        Then the admin should see a list of all the articles that all admins have added to the page


    #6 (tested)
    Scenario: Opening one of the articles
        Given an admin is in the 'View Articles' page of the admin dashboard
        When the admin clicks on the 'Visit Link' button
        Then the admin is redirected to the article's original URL in a new browser tab



