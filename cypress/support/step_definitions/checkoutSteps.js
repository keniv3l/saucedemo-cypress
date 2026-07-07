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

Then("se muestra el resumen de checkout", () => {
    checkoutPage.validateCheckoutOverviewIsDisplayed();
});

Then("se muestra la confirmación de compra", () => {
    checkoutPage.validateCheckoutCompleteIsDisplayed();
});

Then("se muestra el mensaje de checkout {string}", (message) => {
    checkoutPage.validateErrorMessage(message);
});
