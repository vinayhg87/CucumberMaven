package CCRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "feature\\Chapter1.feature",
				 glue = {"Chapter1_Tests"},
				 dryRun = false,
				 monochrome = false,
				 plugin={"pretty", "html:target/cucumber-report/single",
						 "json:target/cucumber-report/single/cucumber.json",
						 "rerun:rerun/failed_scenarios.txt"})


public class RunAll {}
