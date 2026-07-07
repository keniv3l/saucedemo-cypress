const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const InventoryPage = require("../../pages/InventoryPage");
const CartPage = require("../../pages/CartPage");

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

When("agrega el producto {string} al carrito", (productName) => {
    inventoryPage.addProductToCart(productName);
});

When("agrega los productos al carrito", (dataTable) => {
    dataTable.raw().forEach(([productName]) => {
        inventoryPage.addProductToCart(productName);
    });
});

When("abre el carrito", () => {
    inventoryPage.openCart();
});

When("remueve el producto {string} desde el inventario", (productName) => {
    inventoryPage.removeProductFromInventory(productName);
});

When("remueve el producto {string} desde el carrito", (productName) => {
    cartPage.removeProduct(productName);
});

When("continua comprando desde el carrito", () => {
    cartPage.continueShopping();
});

Then("el contador del carrito muestra {string}", (count) => {
    inventoryPage.validateCartBadgeCount(count);
});

Then("el boton del producto {string} cambia a Remove", (productName) => {
    inventoryPage.validateProductButtonIsRemove(productName);
});

Then("se muestra el carrito", () => {
    cartPage.validateCartIsDisplayed();
});

Then("se muestra el producto {string} en el carrito", (productName) => {
    cartPage.validateProductIsDisplayed(productName);
});

Then("el producto {string} muestra cantidad {string} en el carrito", (productName, quantity) => {
    cartPage.validateProductQuantity(productName, quantity);
});

Then("se muestran {string} productos en el carrito", (count) => {
    cartPage.validateProductsCount(count);
});

Then("no se muestra el producto {string} en el carrito", (productName) => {
    cartPage.validateProductIsNotDisplayed(productName);
});
