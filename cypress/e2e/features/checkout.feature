Feature: Checkout

  Background:
    Given que el usuario inició sesión correctamente
    When agrega el producto "Sauce Labs Backpack" al carrito
    And abre el carrito
    And inicia el checkout

  @smoke
  Scenario: Checkout exitoso hasta la pantalla de resumen
    When ingresa los datos de checkout "Lucas", "QA" y "1234"
    And continua el checkout
    Then se muestra el resumen de checkout

  @regression
  Scenario: Validacion de nombre obligatorio
    When ingresa los datos de checkout "", "QA" y "1234"
    And continua el checkout
    Then se muestra el mensaje de checkout "First Name is required"

  @regression
  Scenario: Validacion de apellido obligatorio
    When ingresa los datos de checkout "Lucas", "" y "1234"
    And continua el checkout
    Then se muestra el mensaje de checkout "Last Name is required"

  @regression
  Scenario: Validacion de codigo postal obligatorio
    When ingresa los datos de checkout "Lucas", "QA" y ""
    And continua el checkout
    Then se muestra el mensaje de checkout "Postal Code is required"

  @regression
  Scenario: Cancelar el checkout
    When cancela el checkout
    Then se muestra el carrito

  @smoke
  Scenario: Completar una compra correctamente
    When ingresa los datos de checkout "Lucas", "QA" y "1234"
    And continua el checkout
    And finaliza la compra
    Then se muestra la confirmación de compra

  @regression
  Scenario: Validar el resumen de checkout con informacion del producto y totales
    When ingresa los datos de checkout "Lucas", "QA" y "1234"
    And continua el checkout
    Then se muestra el resumen de checkout
    And el resumen de checkout muestra el producto "Sauce Labs Backpack"
    And el resumen de checkout muestra cantidad "1" para "Sauce Labs Backpack"
    And el resumen de checkout muestra precio "$29.99" para "Sauce Labs Backpack"
    And el resumen de checkout muestra subtotal "Item total: $29.99"
    And el resumen de checkout muestra impuesto "Tax: $2.40"
    And el resumen de checkout muestra total "Total: $32.39"

  @regression
  Scenario: Volver al catalogo despues de completar la compra y dejar el carrito vacio
    When ingresa los datos de checkout "Lucas", "QA" y "1234"
    And continua el checkout
    And finaliza la compra
    Then se muestra la confirmación de compra
    When vuelve al catálogo desde la confirmación de compra
    Then se muestra el catálogo de productos
    And abre el carrito
    And se muestran "0" productos en el carrito
