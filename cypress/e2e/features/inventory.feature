Feature: Catálogo de productos

  Background:
    Given que el usuario inició sesión correctamente

  @smoke
  Scenario: Visualizar el catálogo
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
