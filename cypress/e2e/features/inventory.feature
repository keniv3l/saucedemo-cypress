Feature: Catalogo de productos

  Background:
    Given que el usuario inició sesión correctamente

  @smoke
  Scenario: Visualizar el catalogo
    Then se muestran 6 productos

  @regression
  Scenario: Todos los productos tienen nombre
    Then todos los productos muestran un nombre

  @regression
  Scenario: Todos los productos tienen precio
    Then todos los productos muestran un precio

  @regression
  Scenario: Todos los productos tienen imagen
    Then todos los productos muestran una imagen

  @regression
  Scenario: Abrir el detalle de un producto y volver al catalogo
    When abre el detalle del producto "Sauce Labs Backpack"
    Then se muestra el detalle del producto "Sauce Labs Backpack" con su informacion
    When vuelve al catalogo desde el detalle del producto
    Then se muestra el catálogo de productos
