$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/consultaproducto.feature");
formatter.feature({
  "name": "consultar producto",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@consultaproducto"
    }
  ]
});
formatter.scenario({
  "name": "consultar un producto",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@consultaproducto"
    }
  ]
});
formatter.step({
  "name": "una pagina de productos bancarios",
  "keyword": "Given "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.UnaPaginaDeProductosBancarios()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat theinternet.StepsDefinitions.UnaPaginaDeProductosBancarios(StepsDefinitions.java:62)\r\n\tat ✽.una pagina de productos bancarios(file:///C:/Users/Diana/IdeaProjects/gradle_selenium/src/test/resources/features/consultaproducto.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "un usuario hace una consulta",
  "keyword": "When "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.UnUsuarioHaceUnaConsulta()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hace clic al boton solicitar productos",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.HaceClicAlBotonSolicitarProductos()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecciona inversiones",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.SeleccionaInversiones()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fija un filtro",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.FijaUnFiltro()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecciona un valor",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.SeleccionaUnValor()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verifica el producto",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.VerificaElProducto()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "la aplicacion muestra un resultado",
  "keyword": "Then "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.LaAplicacionMuestraUnResultado()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "puede iniciar un tramite",
  "keyword": "And "
});
formatter.match({
  "location": "theinternet.StepsDefinitions.PuedeIniciarUnTramite()"
});
formatter.result({
  "status": "skipped"
});
});