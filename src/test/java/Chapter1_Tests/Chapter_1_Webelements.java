package Chapter1_Tests;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import Commons.DriverCaller;
import ExcelOperation.ExcelData;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import Exceptions.CucumberFailedException;
import OracleDBOperation.ConnOracleDB;
import PageWebElements.Chapter1_WebElements;
import Screenshots.GetScreenShots;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import logging.loggingLog4j;


public class Chapter_1_Webelements {

	public int count=0;
	DriverCaller caller = new DriverCaller();
	public WebDriver driver = caller.browserDriver();
	GetScreenShots scr = new GetScreenShots();
	public int tempSessionID = (int)(Math.random()*9999);
	public String sessionID = Integer.toString(tempSessionID);
	public static loggingLog4j logging = new loggingLog4j();
	public Logger log = logging.log4jlogger("Chapter_1_Webelements");
	ConnOracleDB db = new ConnOracleDB();
	Chapter1_WebElements webelement = new Chapter1_WebElements(driver);
	ExcelData excel = new ExcelData();

	public Chapter_1_Webelements() throws IOException {
	}


	@Given("^Create driver instance and open the browser for Chapter1 page$")
	public void Create_driver_instance_and_open_the_browser() throws InterruptedException, IOException {
		log.info("Execution started with session-id : "+sessionID);
		String URL = "http://book.theautomatedtester.co.uk/";
		log.info("opening URL "+ URL);
		driver.get(URL);
		driver.manage().window().maximize();
	}
	
	
	@Given("^click on the Chapter1 page$")
	public void click_on_the_Chapter1_page() throws IOException, ClassNotFoundException, SQLException
	{
		//scr.GetScreenShot(driver, "Chapter1_main_Screen_"+sessionID);
		webelement.Chapter1_link.click();
		log.info("Clicking Chapter1 link");
		//String DBvalue = db.connectDB("select lastname from persons where personid = 1");
		//System.out.println("DB value is "+DBvalue);
		//log.info("DB value is "+DBvalue);
	}
	
	
	@When("^pick the dropdown and select Selenium Core option$")
	public void pick_the_dropdown_and_select_Selenium_core_option() throws IOException
	{
		log.info("Fetching dropdown options");
		WebElement dropdownoption = webelement.dropdown;
		Select select = new Select(dropdownoption);
		List<WebElement> dropdown = select.getOptions();
		String ExData = excel.ExcelRead("Sheet1",0,0);
		for(WebElement ele : dropdown)
		{
			if(ele.getText().equals(ExData))
			{
				log.info("Selecting dropdown "+ele.getText());
				select.selectByVisibleText(ele.getText());
				//scr.GetScreenShot(driver, "Chapter1_DropDown_"+sessionID);
				log.info(ele.getText()+ " Found on the webpage");
				excel.ExcelWrite("Sheet1",1,1,"PASS");
				count++;
			}
		}
	}
	
	
	@When("^pick the dropdown and select below option$")
	public void pick_the_dropdown_and_select_below_option(DataTable Dt) throws IOException
	{
		List<String> dropdownoptionlist = Dt.asList(String.class);
		WebElement dropdownoption = webelement.dropdown;
		Select select = new Select(dropdownoption);
		List<WebElement> dropdown = select.getOptions();
		for(WebElement ele : dropdown)
		{
			if(ele.getText().equals(dropdownoptionlist.get(0)))
			{
				log.info("Selecting dropdown "+ele.getText());
				select.selectByVisibleText(ele.getText());
				//scr.GetScreenShot(driver, "Chapter1_DropDown_"+sessionID);
				log.info(ele.getText()+ " Found on the webpage");
				count++;
			}
		}	
	}
	
	
	@When("^pick the dropdown and select below incorrect option$")
	public void When_pick_the_dropdown_and_select_below_incorrect_option(DataTable dt) throws IOException
	{
		List<String> dropdownlist = dt.asList(String.class);
		WebElement dropdownoption = webelement.dropdown;
		Select select = new Select(dropdownoption);
		List<WebElement> dropdown = select.getOptions();
		for(WebElement ele : dropdown)
		{
			if(ele.getText().equals(dropdownlist.get(0)))
			{
				select.selectByVisibleText(ele.getText());
				log.info(ele.getText()+ " Found on the webpage");
			}
			else
			{
				log.info(dropdownlist.get(0)+" not found");
				count++;
			}
		}			
	}
	
	@When("^Click on the radio button$")
	public void Click_on_the_radio_button()
	{
		WebElement radio = webelement.radioButton;
		if (radio.isEnabled() && radio.isDisplayed())
		{
			radio.click();
			count++;
		}		
	}
	
	
	@Then("^Check if the element is found or not$")
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
	
	
	@And("^close the browser$")
	public void close_the_browser()
	{
		log.info("Closing the driver");
		driver.close();	
	}
}