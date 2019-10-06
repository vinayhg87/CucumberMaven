package CCRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "feature\\Chapter1.feature",
				 glue = {"Chapter1_Tests"},
				 dryRun = false,
				 monochrome = false)


public class CucumberRunner {}
