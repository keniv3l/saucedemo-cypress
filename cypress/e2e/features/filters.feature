Feature: Filtros de productos

  Background:
    Given que el usuario inició sesión correctamente

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

  @regression
  Scenario: Ordenar por precio de mayor a menor
    When ordena los productos de "Price (high to low)"
    Then los productos se muestran ordenados por precio descendente

  @regression
  Scenario: Cambiar entre distintos criterios de ordenamiento
    When ordena los productos de "Name (Z to A)"
    Then los productos se muestran en orden alfabético descendente
    When ordena los productos de "Price (low to high)"
    Then los productos se muestran ordenados por precio ascendente
    When ordena los productos de "Price (high to low)"
    Then los productos se muestran ordenados por precio descendente
