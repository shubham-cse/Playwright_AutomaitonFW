const { expect } = require('@playwright/test');

exports.login_page = class login_page {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.txtUserName = page.locator('[data-test="username"]');
    this.txtPassword = page.locator('[data-test="password"]');
    this.login_btn = page.getByRole('button', { name: 'LOGIN' });
  }

  async goto() {
    await this.page.goto('http://34.45.142.80:3000/');
  }

  async enter_username(username) {
    await this.txtUserName.fill(username);
  }

  async enter_password(password) {
    await this.txtPassword.fill(password);
  }

  async login_bttn() {
    await this.login_btn.click();
  }

};
