function login(string $username, string $password): void
{
  // Get the Mink driver.
  $mink = $this->getSession()->getDriver();

  // Go to the login page.
  $mink->visit('/user/login');

  // Fill in the username and password fields.
  $mink->fillField('username', $username);
  $mink->fillField('password', $password);

  // Click the login button.
  $mink->pressButton('Log in');
}
