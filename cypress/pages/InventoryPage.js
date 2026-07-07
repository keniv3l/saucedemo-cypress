class InventoryPage {

    // ====== Elementos ======

    getTitle() {
        return cy.get("[data-test='title']");
    }

    getProducts() {
        return cy.get(".inventory_item");
    }

    getProductNames() {
        return cy.get(".inventory_item_name");
    }

    getProductPrices() {
        return cy.get(".inventory_item_price");
    }

    getProductImages() {
        return cy.get(".inventory_item_img img");
    }

    getSortDropdown() {
        return cy.get("[data-test='product-sort-container']");
    }

    getCartLink() {
        return cy.get(".shopping_cart_link");
    }

    getCartBadge() {
        return cy.get(".shopping_cart_badge");
    }

    getProductByName(productName) {
        return cy.contains(".inventory_item", productName);
    }

    // ====== Validaciones ======

    validateInventoryIsDisplayed() {
        this.getTitle()
            .should("be.visible")
            .and("have.text", "Products");
    }

    validateProductsCount() {
        this.getProducts().should("have.length", 6);
    }

    validateProductNames() {
        this.getProductNames().each(($product) => {
            cy.wrap($product)
                .should("be.visible")
                .invoke("text")
                .should("not.be.empty");
        });
    }

    validateProductPrices() {
        this.getProductPrices().each(($price) => {
            cy.wrap($price)
                .should("be.visible")
                .invoke("text")
                .should("match", /^\$\d+\.\d{2}$/);
        });
    }

    validateProductImages() {
        this.getProductImages().each(($image) => {
            cy.wrap($image)
                .should("be.visible")
                .and("have.attr", "src");
        });
    }

    validateProductsSortedAZ() {
    this.getProductNames().then(($items) => {
        const names = [...$items].map(item => item.innerText);
        const sorted = [...names].sort();

        expect(names).to.deep.equal(sorted);
    });
    }

    validateProductsSortedZA() {
    this.getProductNames().then(($items) => {
        const names = [...$items].map(item => item.innerText);
        const sorted = [...names].sort().reverse();

        expect(names).to.deep.equal(sorted);
    });
    }

    validateProductsSortedByPrice() {
    this.getProductPrices().then(($items) => {
        const prices = [...$items].map(item =>
            Number(item.innerText.replace("$", ""))
        );

        const sorted = [...prices].sort((a, b) => a - b);

        expect(prices).to.deep.equal(sorted);
    });
    }

    validateProductsSortedByPriceDesc() {
    this.getProductPrices().then(($items) => {
        const prices = [...$items].map(item =>
            Number(item.innerText.replace("$", ""))
        );

        const sorted = [...prices].sort((a, b) => b - a);

        expect(prices).to.deep.equal(sorted);
    });
    }

    validateCartBadgeCount(count) {
        if (Number(count) === 0) {
            this.getCartBadge().should("not.exist");
        } else {
            this.getCartBadge()
                .should("be.visible")
                .and("have.text", String(count));
        }
    }

    validateProductButtonIsRemove(productName) {
        this.getProductByName(productName)
            .contains("button", "Remove")
            .should("be.visible");
    }

    // ====== Acciones ======

    sortBy(option) {
        this.getSortDropdown().select(option);
    }

    addProductToCart(productName) {
        this.getProductByName(productName)
            .contains("button", "Add to cart")
            .click();
    }

    removeProductFromInventory(productName) {
        this.getProductByName(productName)
            .contains("button", "Remove")
            .click();
    }

    openCart() {
        this.getCartLink().click();
    }
    

}

module.exports = InventoryPage;
