package CCRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"@rerun/failed_scenarios.txt"},
				 glue = {"Chapter1_Tests"},
				 dryRun = false,
				 monochrome = false,
				 plugin = { "pretty", "html:target/cucumber-report/single",
					        "json:target/cucumber-report/single/rerun_cucumber.json"})


public class RunFailed {}
