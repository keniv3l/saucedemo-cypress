const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const LoginPage = require("../../pages/LoginPage");
const InventoryPage = require("../../pages/InventoryPage");

const inventoryPage = new InventoryPage();
const loginPage = new LoginPage();

Given("que el usuario se encuentra en la página de inicio de sesión", () => {
    loginPage.open();
});

Given("que el usuario inició sesión correctamente", () => {
    cy.login("standard_user", "secret_sauce");
});

When("ingresa el usuario {string}", (username) => {
    loginPage.typeUsername(username);
});

When("ingresa la contraseña {string}", (password) => {
    loginPage.typePassword(password);
});

When("presiona el botón de inicio de sesión", () => {
    loginPage.clickLogin();
});

Then("se muestra el catálogo de productos", () => {
    inventoryPage.validateInventoryIsDisplayed();
});

Then("se muestra el mensaje {string}", (message) => {
    loginPage.validateErrorMessage(message);
});
