const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const InventoryPage = require("../../pages/InventoryPage");

const inventoryPage = new InventoryPage();

Then("se muestran 6 productos", () => {
    inventoryPage.validateProductsCount();
});

Then("todos los productos muestran un nombre", () => {
    inventoryPage.validateProductNames();
});

Then("todos los productos muestran un precio", () => {
    inventoryPage.validateProductPrices();
});

Then("todos los productos muestran una imagen", () => {
    inventoryPage.validateProductImages();
});

When("ordena los productos de {string}", (option) => {
    inventoryPage.sortBy(option);
});

Then("los productos se muestran ordenados alfabéticamente", () => {
    inventoryPage.validateProductsSortedAZ();
});

Then("los productos se muestran en orden alfabético descendente", () => {
    inventoryPage.validateProductsSortedZA();
});

Then("los productos se muestran ordenados por precio ascendente", () => {
    inventoryPage.validateProductsSortedByPrice();
});