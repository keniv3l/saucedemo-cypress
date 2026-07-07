class CartPage {

    // ====== Elementos ======

    getTitle() {
        return cy.get("[data-test='title']");
    }

    getCartItems() {
        return cy.get(".cart_item");
    }

    getCartItemByName(productName) {
        return cy.contains(".cart_item", productName);
    }

    getContinueShoppingButton() {
        return cy.get("[data-test='continue-shopping']");
    }

    getCheckoutButton() {
        return cy.get("[data-test='checkout']");
    }

    // ====== Validaciones ======

    validateCartIsDisplayed() {
        this.getTitle()
            .should("be.visible")
            .and("have.text", "Your Cart");
    }

    validateProductIsDisplayed(productName) {
        this.getCartItemByName(productName)
            .should("be.visible");
    }

    validateProductQuantity(productName, quantity) {
        this.getCartItemByName(productName)
            .find(".cart_quantity")
            .should("have.text", String(quantity));
    }

    validateProductsCount(count) {
        this.getCartItems().should("have.length", Number(count));
    }

    validateProductIsNotDisplayed(productName) {
        cy.contains(".cart_item", productName).should("not.exist");
    }

    // ====== Acciones ======

    removeProduct(productName) {
        this.getCartItemByName(productName)
            .contains("button", "Remove")
            .click();
    }

    continueShopping() {
        this.getContinueShoppingButton().click();
    }

    checkout() {
        this.getCheckoutButton().click();
    }
}

module.exports = CartPage;
