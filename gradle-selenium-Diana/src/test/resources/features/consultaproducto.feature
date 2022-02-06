@consultaproducto
Feature: consultar producto

  Scenario: consultar un producto
    Given una pagina de productos bancarios
    When un usuario hace una consulta
    And hace clic al boton solicitar productos
    And selecciona inversiones
    And fija un filtro
    And selecciona un valor
    And verifica el producto
    Then la aplicacion muestra un resultado
    And puede iniciar un tramite
