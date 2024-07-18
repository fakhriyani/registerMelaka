package runners;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        plugin = {"json:target/results/swagLabs/cucumber-report.json", "html:target/results/swagLabs"},
        features = "src/test/resources/features",
        glue = "steps",
        tags = {"@registerMelaka"}
)


public class TestRunner extends BaseTestRunner{
}
