package Chapter1_Tests;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import Exceptions.CucumberFailedException;
import OracleDBOperation.ConnOracleDB;
import Screenshots.GetScreenShots;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import logging.loggingLog4j;


public class Chapter_1_Webelements {
	
	WebDriver driver = null;
	int count=0;
	GetScreenShots scr = new GetScreenShots();
	int tempsessionID = (int)(Math.random()*9999);
	String sessionID = Integer.toString(tempsessionID);
	static loggingLog4j logging = new loggingLog4j();
	Logger log = logging.log4jlogger("DropDowns.class");
	ConnOracleDB db = new ConnOracleDB();

	
	@Given("^Create driver instance and open the browser$")
	public void Create_driver_instance_and_open_the_browser() throws InterruptedException, IOException {
		log.info("Execution started with session-id : "+sessionID);
		String CurrDir = System.getProperty("user.dir");
		String driverconfigProperties = CurrDir + File.separator + "driverConfig.properties";
		Properties property = new Properties();
		property.load(new FileInputStream((driverconfigProperties)));
		String URL = "http://book.theautomatedtester.co.uk/";
		String chromedriverFlag = property.getProperty("chromeBrowser");
		String firefoxdriverFlag = property.getProperty("firefoxBrowser");
		if (chromedriverFlag.equals("enabled"))
		{
			String ccdriver = property.getProperty("chromedriver");
			String ChromeDriverPath = CurrDir + File.separator + "drivers" + File.separator + ccdriver;
			System.setProperty("webdriver.chrome.driver", ChromeDriverPath);
			driver = new ChromeDriver();
		}
		else if (firefoxdriverFlag.equals("enabled"))
		{
			String ffdriver = property.getProperty("firefoxdriver");
			String FirefoxDriverPath = CurrDir + File.separator + "drivers" + File.separator + ffdriver;
			System.setProperty("webdriver.gecko.driver", FirefoxDriverPath);
			driver = new FirefoxDriver();
		}
		else
		{
			System.out.println("Error : Check if the parameter is correctly configured in driverConfig.properties file");
			System.exit(1);
		}

		log.info("opening URL "+ URL);
		driver.get(URL);
		driver.manage().window().maximize();
	}
	
	
	@Given("^click on the Chapter1 page$")
	public void click_on_the_Chapter1_page() throws IOException, ClassNotFoundException, SQLException
	{
		//scr.GetScreenShot(driver, "Chapter1_main_Screen_"+sessionID);
		driver.findElement(By.linkText("Chapter1")).click();
		log.info("Clicking Chapter1 link");
		//String DBvalue = db.connectDB("select lastname from persons where personid = 1");
		//System.out.println("DB value is "+DBvalue);	
	}
	
	
	@When("^pick the dropdown and select Selenium Core option$")
	public void pick_the_dropdown_and_select_Selenium_core_option() throws IOException
	{
		log.info("Fetching dropdown options");
		WebElement dropdownoption = driver.findElement(By.id("selecttype"));
		Select select = new Select(dropdownoption);
		List<WebElement> dropdown = select.getOptions();
		for(WebElement ele : dropdown)
		{
			if(ele.getText().equals("Selenium Core"))
			{
				log.info("Selecting dropdown "+ele.getText());
				select.selectByVisibleText(ele.getText());
				//scr.GetScreenShot(driver, "Chapter1_DropDown_"+sessionID);
				log.info(ele.getText()+ " Found on the webpage");
				count++;
			}
		}
	}
	
	
	@When("^pick the dropdown and select below option$")
	public void pick_the_dropdown_and_select_below_option(DataTable Dt) throws IOException
	{
		List<String> dropdownoptionlist = Dt.asList(String.class);
		WebElement dropdownoption = driver.findElement(By.id("selecttype"));
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
		WebElement dropdownoption = driver.findElement(By.id("selecttype"));
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
		WebElement radio = driver.findElement(By.id("radiobutton"));
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