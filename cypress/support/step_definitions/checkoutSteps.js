const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const CartPage = require("../../pages/CartPage");
const CheckoutPage = require("../../pages/CheckoutPage");

const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

When("inicia el checkout", () => {
    cartPage.checkout();
});

When("ingresa los datos de checkout {string}, {string} y {string}", (firstName, lastName, postalCode) => {
    checkoutPage.fillInformation(firstName, lastName, postalCode);
});

When("continua el checkout", () => {
    checkoutPage.continue();
});

When("cancela el checkout", () => {
    checkoutPage.cancel();
});

When("finaliza la compra", () => {
    checkoutPage.finish();
});

When("vuelve al catálogo desde la confirmación de compra", () => {
    checkoutPage.backToProducts();
});

Then("se muestra el resumen de checkout", () => {
    checkoutPage.validateCheckoutOverviewIsDisplayed();
});

Then("se muestra la confirmación de compra", () => {
    checkoutPage.validateCheckoutCompleteIsDisplayed();
});

Then("el resumen de checkout muestra el producto {string}", (productName) => {
    checkoutPage.validateSummaryProduct(productName);
});

Then("el resumen de checkout muestra cantidad {string} para {string}", (quantity, productName) => {
    checkoutPage.validateSummaryProductQuantity(productName, quantity);
});

Then("el resumen de checkout muestra precio {string} para {string}", (price, productName) => {
    checkoutPage.validateSummaryProductPrice(productName, price);
});

Then("el resumen de checkout muestra subtotal {string}", (subtotal) => {
    checkoutPage.validateSubtotal(subtotal);
});

Then("el resumen de checkout muestra impuesto {string}", (tax) => {
    checkoutPage.validateTax(tax);
});

Then("el resumen de checkout muestra total {string}", (total) => {
    checkoutPage.validateTotal(total);
});

Then("se muestra el mensaje de checkout {string}", (message) => {
    checkoutPage.validateErrorMessage(message);
});
