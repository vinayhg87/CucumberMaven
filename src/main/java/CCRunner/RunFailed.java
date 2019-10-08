package CCRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"@rerun/failed_scenarios.txt"},
				 glue = {"Chapter1_Tests"},
				 dryRun = false,
				 monochrome = false,
				 format = { "pretty", "html:target/cucumber-report/single"})


public class RunFailed {}
