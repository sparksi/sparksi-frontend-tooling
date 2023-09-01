<?php

use Behat\Behat\Tester\Exception\PendingException;
use Behat\Behat\Context\Context;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;

/**
 * Defines application features from the specific context.
 */
class FeatureContext implements Context
{
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
        /**
     * @Given I am on the login page
     */
    }

    public function iAmOnTheLoginPage()
    {
        throw new PendingException();
    }

    /**
     * @When I enter the username :arg1 and the password :arg2
     */
    public function iEnterTheUsernameAndThePassword($arg1, $arg2)
    {
        throw new PendingException();
    }

    /**
     * @When I click the login button
     */
    public function iClickTheLoginButton()
    {
        throw new PendingException();
    }

    /**
     * @Then I should be logged in
     */
    public function iShouldBeLoggedIn()
    {
        throw new PendingException();
    }
}
