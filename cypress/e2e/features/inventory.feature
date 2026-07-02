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

  @regression
  Scenario: Ordenar de A a Z
    When ordena los productos de "Name (A to Z)"
    Then los productos se muestran ordenados alfabéticamente

  @regression
  Scenario: Ordenar de Z a A
    When ordena los productos de "Name (Z to A)"
    Then los productos se muestran en orden alfabético descendente

  @regression
  Scenario: Ordenar por precio de menor a mayor
    When ordena los productos de "Price (low to high)"
    Then los productos se muestran ordenados por precio ascendente