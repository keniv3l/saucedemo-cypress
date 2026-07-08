class ProductDetailPage {

    // ====== Elementos ======

    getBackToProductsButton() {
        return cy.get("[data-test='back-to-products']");
    }

    getProductName() {
        return cy.get("[data-test='inventory-item-name']");
    }

    getProductDescription() {
        return cy.get("[data-test='inventory-item-desc']");
    }

    getProductPrice() {
        return cy.get("[data-test='inventory-item-price']");
    }

    getProductImage() {
        return cy.get("[data-test^='item-']");
    }

    getAddToCartButton() {
        return cy.get("[data-test='add-to-cart']");
    }

    // ====== Validaciones ======

    validateProductDetails(productName) {
        this.getProductName()
            .should("be.visible")
            .and("have.text", productName);

        this.getProductDescription()
            .should("be.visible")
            .and("not.be.empty");

        this.getProductPrice()
            .invoke("text")
            .should("match", /^\$\d+\.\d{2}$/);

        this.getProductImage()
            .should("be.visible")
            .and("have.attr", "src");

        this.getAddToCartButton()
            .should("be.visible")
            .and("have.text", "Add to cart");

        this.getBackToProductsButton()
            .should("be.visible")
            .and("have.text", "Back to products");
    }

    // ====== Acciones ======

    backToProducts() {
        this.getBackToProductsButton().click();
    }
}

module.exports = ProductDetailPage;
