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

  @regression
  Scenario: Usuario bloqueado
    When ingresa el usuario "locked_out_user"
    And ingresa la contraseña "secret_sauce"
    And presiona el botón de inicio de sesión
    Then se muestra el mensaje "Sorry, this user has been locked out."

  @regression
  Scenario Outline: Validaciones de inicio de sesión
    When ingresa el usuario "<usuario>"
    And ingresa la contraseña "<password>"
    And presiona el botón de inicio de sesión
    Then se muestra el mensaje "<mensaje>"

    Examples:
      | usuario        | password      | mensaje                                                   |
      | standard_user  | incorrecta    | Username and password do not match any user in this service |
      | usuario_falso  | secret_sauce  | Username and password do not match any user in this service |
      |                | secret_sauce  | Username is required                                      |
      | standard_user  |               | Password is required                                     |
      |                |               | Username is required                                     |
