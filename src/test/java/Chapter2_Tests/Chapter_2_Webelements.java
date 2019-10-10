package Chapter2_Tests;

import Commons.DriverCaller;
import Exceptions.CucumberFailedException;
import OracleDBOperation.ConnOracleDB;
import Screenshots.GetScreenShots;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import logging.loggingLog4j;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import java.io.IOException;
import java.sql.SQLException;


public class Chapter_2_Webelements {

	
    DriverCaller caller = new DriverCaller();
    public WebDriver driver = caller.browserDriver();
    public int count=0;
    GetScreenShots scr = new GetScreenShots();
    public int tempSessionID = (int)(Math.random()*9999);
    public String sessionID = Integer.toString(tempSessionID);
    public static loggingLog4j logging = new loggingLog4j();
    public Logger log = logging.log4jlogger("Chapter_2_Webelements");
    ConnOracleDB db = new ConnOracleDB();

    public Chapter_2_Webelements() throws IOException {
    }
    
    @Given("^Create driver instance and open the browser for Chapter2 page$")
	public void Create_driver_instance_and_open_the_browser() throws InterruptedException, IOException {
		log.info("Execution started with session-id : "+sessionID);
		String URL = "http://book.theautomatedtester.co.uk/";
		log.info("opening URL "+ URL);
		driver.get(URL);
		driver.manage().window().maximize();
	}

    
    @Given("^click on the Chapter2 page$")
    public void click_on_the_Chapter2_page() throws IOException, ClassNotFoundException, SQLException, InterruptedException
    {
        Thread.sleep(3000);
    	//scr.GetScreenShot(driver, "Chapter2_main_Screen_"+sessionID);
        driver.findElement(By.linkText("Chapter2")).click();
        log.info("Clicking Chapter2 link");
        //String DBvalue = db.connectDB("select lastname from persons where personid = 1");
        //System.out.println("DB value is "+DBvalue);
    }
    
    
    @When("^Check if it is enabled or not and click on the button$")
    public void Check_if_it_is_enabled_or_not_and_click_on_the_button()
    {
    	WebElement button= driver.findElement(By.xpath("//input[@value='Button with name']"));
    	if(button.isEnabled() && button.isDisplayed())
    	{
    		button.click();
    		count++;
    	}
    	else
    	{
    		throw new ElementNotVisibleException("button not found.");
    	}
    }
    
    
    @Then("^Check if the element is found or not of chapter2$")
	public void Check_if_the_element_is_found_or_not()
	{
		if (count>0)
		{
			log.info("element found and test case passed");
		}
		else
		{		
			log.info("element not found and test case Failed");
			throw new CucumberFailedException("element not found and test case failed");		
		}
	}
    
    
    
    @And("^close the browser of chapter2$")
	public void close_the_browser()
	{
		log.info("Closing the driver");
		driver.close();	
	}


}
