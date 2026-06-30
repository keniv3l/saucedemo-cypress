class InventoryPage {

    getTitle() {
        return cy.get("[data-test='title']");
    }

    validateInventoryIsDisplayed() {
        this.getTitle()
            .should("be.visible")
            .and("have.text", "Products");
    }

}

module.exports = InventoryPage;