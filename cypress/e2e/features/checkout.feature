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
  Scenario: Validación de nombre obligatorio
    When ingresa los datos de checkout "", "QA" y "1234"
    And continua el checkout
    Then se muestra el mensaje de checkout "First Name is required"

  @regression
  Scenario: Validación de apellido obligatorio
    When ingresa los datos de checkout "Lucas", "" y "1234"
    And continua el checkout
    Then se muestra el mensaje de checkout "Last Name is required"

  @regression
  Scenario: Validación de código postal obligatorio
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
