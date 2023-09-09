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

    /**
     * @Given I am on the Sector homepage
     */
    public function iAmOnTheSectorHomepage()
    {
        $this->getSession()->visit('https://sector10beta.sector.nz/');
    }

    /**
     * @Then I should see the page title containing text
     */
    public function iShouldSeeThePageTitleContainingText()
    {
        $actualTitle = $this->getSession()->getPage()->find('css', 'title')->getText();
        if (!str_contains($actualTitle, 'Design and build captivating digital experiences even faster.')) {
            throw new \Exception("Page title does not contain expected text");
        }
    }

    /**
     * @Then I should see the social block in the footer
     */
    public function iShouldSeeTheSocialBlockInTheFooter()
    {
        $socialBlock = $this->getSession()->getPage()->find('css', '.footer-post .block--menu-social--follow');
        if ($socialBlock === null) {
            throw new \Exception("Social block not found in footer");
        }
    }
}

