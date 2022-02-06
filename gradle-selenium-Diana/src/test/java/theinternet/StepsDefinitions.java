package theinternet;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class StepsDefinitions {
        private Map<String, Object> vars;
    JavascriptExecutor js;
    private WebDriver driver;

    @Before
    public void setUp() {
        driver = new ChromeDriver();
        js = (JavascriptExecutor) driver;
        vars = new HashMap<String, Object>();
    }
    @After
    public void tearDown() {
        driver.quit();
    }
    public String waitForWindow(int timeout) {
        try {
            Thread.sleep(timeout);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Set<String> whNow = driver.getWindowHandles();
        Set<String> whThen = (Set<String>) vars.get("window_handles");
        if (whNow.size() > whThen.size()) {
            whNow.removeAll(whThen);
        }
        return whNow.iterator().next();
    }
    @Given("una pagina de productos bancarios")
    public void UnaPaginaDeProductosBancarios() {
        driver.get("https://www.bancolombia.com/personas");
    }

    @When("un usuario hace una consulta")
    public void UnUsuarioHaceUnaConsulta(){
        driver.manage().window().setSize(new Dimension(1616, 876));
    }
    @And("hace clic al boton solicitar productos")
            public void HaceClicAlBotonSolicitarProductos(){
            driver.findElement(By.id("header-solicitud-productos")).click();
    }
    @And("selecciona inversiones")
        public void SeleccionaInversiones(){
            driver.findElement(By.id("filtro-inversiones")).click();
    }
    @And("fija un filtro")
    public void FijaUnFiltro(){
            driver.findElement(By.id("mostrar-filtros")).click();
    }
    @And("selecciona un valor")
            public void SeleccionaUnValor(){
            driver.findElement(By.id("tag-catMontoMinimo50000 icon-cash")).click();
            }
    @And("verifica el producto")
        public void VerificaElProducto(){
            js.executeScript("window.scrollTo(0,268)");
            driver.findElement(By.id("filtrado-conoce-inversion-0")).click();
    }
    @Then("la aplicacion muestra un resultado")
            public void LaAplicacionMuestraUnResultado(){
            vars.put("window_handles", driver.getWindowHandles());
            }
    @And("puede iniciar un tramite")
    public void PuedeIniciarUnTramite(){
                driver.findElement(By.cssSelector(".content-button .btn-yellow")).click();
                vars.put("win2553", waitForWindow(2000));
                driver.switchTo().window(vars.get("win2553").toString());
            }
}

