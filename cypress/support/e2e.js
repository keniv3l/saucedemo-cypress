import './commands'
const LoginPage = require("../pages/LoginPage");

const loginPage = new LoginPage();

Cypress.Commands.add("login", (username, password) => {
    loginPage.open();
    loginPage.login(username, password);
});

Cypress.on("uncaught:exception", (err) => {
    console.log("ERROR JS:", err);
    debugger;
});
