const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const InventoryPage = require("../../pages/InventoryPage");
const ProductDetailPage = require("../../pages/ProductDetailPage");

const inventoryPage = new InventoryPage();
const productDetailPage = new ProductDetailPage();

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

When("abre el detalle del producto {string}", (productName) => {
    inventoryPage.openProductDetails(productName);
});

When("vuelve al catalogo desde el detalle del producto", () => {
    productDetailPage.backToProducts();
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

Then("los productos se muestran ordenados por precio descendente", () => {
    inventoryPage.validateProductsSortedByPriceDesc();
});

Then("se muestra el detalle del producto {string} con su informacion", (productName) => {
    productDetailPage.validateProductDetails(productName);
});
