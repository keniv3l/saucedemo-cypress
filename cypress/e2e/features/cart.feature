Feature: Carrito de compras

  Background:
    Given que el usuario inició sesión correctamente

  @smoke
  Scenario: Agregar un producto al carrito y validar el contador
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el contador del carrito muestra "1"

  @smoke
  Scenario: Validar que al agregar un producto el botón cambie a Remove
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el boton del producto "Sauce Labs Backpack" cambia a Remove

  @smoke
  Scenario: Abrir el carrito y validar el producto agregado
    When agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito
    Then se muestra el carrito
    And se muestra el producto "Sauce Labs Backpack" en el carrito
    And el producto "Sauce Labs Backpack" muestra cantidad "1" en el carrito

  @regression
  Scenario: Agregar múltiples productos y validar el contador
    When agrega los productos al carrito
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    Then el contador del carrito muestra "2"

  @regression
  Scenario: Remover un producto desde el carrito
    When agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito
    And remueve el producto "Sauce Labs Backpack" desde el carrito
    Then no se muestra el producto "Sauce Labs Backpack" en el carrito

  @regression
  Scenario: Continuar comprando desde el carrito y validar el regreso al catálogo
    When agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito
    And continua comprando desde el carrito
    Then se muestra el catálogo de productos

  @regression
  Scenario: Validar que el carrito mantenga los productos al navegar entre inventario y carrito
    When agrega los productos al carrito
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    And abre el carrito
    And continua comprando desde el carrito
    And abre el carrito
    Then se muestran "2" productos en el carrito
    And se muestra el producto "Sauce Labs Backpack" en el carrito
    And se muestra el producto "Sauce Labs Bike Light" en el carrito
