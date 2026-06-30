Feature: Inicio de sesión

  Como usuario registrado
  Quiero iniciar sesión
  Para acceder al catálogo de productos

  Background:
    Given que el usuario se encuentra en la página de inicio de sesión

  @smoke
  Scenario: Inicio de sesión exitoso
    When ingresa el usuario "standard_user"
    And ingresa la contraseña "secret_sauce"
    And presiona el botón de inicio de sesión
    Then se muestra el catálogo de productos