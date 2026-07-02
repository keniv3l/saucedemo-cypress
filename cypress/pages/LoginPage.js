class LoginPage {

    open() {
        cy.visit("https://www.saucedemo.com/");
    }

    getUsernameInput() {
        return cy.get("[data-test='username']");
    }

    getPasswordInput() {
        return cy.get("[data-test='password']");
    }

    getLoginButton() {
        return cy.get("[data-test='login-button']");
    }

    typeUsername(username) {
    if (username) {
        this.getUsernameInput().type(username);
    }
}

    typePassword(password) {
    if (password) {
        this.getPasswordInput().type(password);
    }
}

    clickLogin() {
        this.getLoginButton().click();
    }

    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
    getErrorMessage() {
        return cy.get("[data-test='error']");
    }

    validateErrorMessage(message) {
        this.getErrorMessage()
            .should("be.visible")
            .and("contain.text", message);
    }
}

module.exports = LoginPage;