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

    getBackToProductsButton() {
        return cy.get("[data-test='back-to-products']");
    }

    getSummaryItemByName(productName) {
        return cy.contains(".cart_item", productName);
    }

    getSummarySubtotalLabel() {
        return cy.get(".summary_subtotal_label");
    }

    getSummaryTaxLabel() {
        return cy.get(".summary_tax_label");
    }

    getSummaryTotalLabel() {
        return cy.get(".summary_total_label");
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

    validateSummaryProduct(productName) {
        this.getSummaryItemByName(productName)
            .should("be.visible");
    }

    validateSummaryProductQuantity(productName, quantity) {
        this.getSummaryItemByName(productName)
            .find(".cart_quantity")
            .should("have.text", String(quantity));
    }

    validateSummaryProductPrice(productName, price) {
        this.getSummaryItemByName(productName)
            .find(".inventory_item_price")
            .should("have.text", price);
    }

    validateSubtotal(subtotal) {
        this.getSummarySubtotalLabel()
            .should("be.visible")
            .and("have.text", subtotal);
    }

    validateTax(tax) {
        this.getSummaryTaxLabel()
            .should("be.visible")
            .and("have.text", tax);
    }

    validateTotal(total) {
        this.getSummaryTotalLabel()
            .should("be.visible")
            .and("have.text", total);
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

    backToProducts() {
        this.getBackToProductsButton().click();
    }
}

module.exports = CheckoutPage;
