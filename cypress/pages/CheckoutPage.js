class CheckoutPage {

    // ====== Elementos ======

    getTitle() {
        return cy.get("[data-test='title']");
    }

    getFirstNameInput() {
        return cy.get("[data-test='firstName']");
    }

    getLastNameInput() {
        return cy.get("[data-test='lastName']");
    }

    getPostalCodeInput() {
        return cy.get("[data-test='postalCode']");
    }

    getContinueButton() {
        return cy.get("[data-test='continue']");
    }

    getCancelButton() {
        return cy.get("[data-test='cancel']");
    }

    getFinishButton() {
        return cy.get("[data-test='finish']");
    }

    getErrorMessage() {
        return cy.get("[data-test='error']");
    }

    getCompleteHeader() {
        return cy.get("[data-test='complete-header']");
    }

    // ====== Validaciones ======

    validateCheckoutOverviewIsDisplayed() {
        this.getTitle()
            .should("be.visible")
            .and("have.text", "Checkout: Overview");
    }

    validateCheckoutCompleteIsDisplayed() {
        this.getTitle()
            .should("be.visible")
            .and("have.text", "Checkout: Complete!");

        this.getCompleteHeader()
            .should("be.visible")
            .and("have.text", "Thank you for your order!");
    }

    validateErrorMessage(message) {
        this.getErrorMessage()
            .should("be.visible")
            .and("contain.text", message);
    }

    // ====== Acciones ======

    typeFirstName(firstName) {
        if (firstName) {
            this.getFirstNameInput().type(firstName);
        }
    }

    typeLastName(lastName) {
        if (lastName) {
            this.getLastNameInput().type(lastName);
        }
    }

    typePostalCode(postalCode) {
        if (postalCode) {
            this.getPostalCodeInput().type(postalCode);
        }
    }

    fillInformation(firstName, lastName, postalCode) {
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typePostalCode(postalCode);
    }

    continue() {
        this.getContinueButton().click();
    }

    cancel() {
        this.getCancelButton().click();
    }

    finish() {
        this.getFinishButton().click();
    }
}

module.exports = CheckoutPage;
