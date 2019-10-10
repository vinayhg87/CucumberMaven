package CCRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"feature/Chapter1.feature", "feature/Chapter2.feature"},
				 glue = {"Chapter1_Tests", "Chapter2_Tests"},
				 dryRun = false,
				 monochrome = false,
				 format={"html:TestReports"},
				 plugin={"rerun:rerun/failed_scenarios.txt"})


public class RunAll{}
