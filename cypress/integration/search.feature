Feature: using search box

    As a guest
    i want to search computer in search box

    Scenario: valid login
    Given i open home page
    When i type computer in searchbox then click search
    Then i should get the result
