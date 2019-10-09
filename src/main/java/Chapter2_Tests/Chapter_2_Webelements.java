package Chapter2_Tests;

import Commons.DriverCaller;
import OracleDBOperation.ConnOracleDB;
import Screenshots.GetScreenShots;
import cucumber.api.java.en.Given;
import logging.loggingLog4j;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
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

    @Given("^click on the Chapter2 page$")
    public void click_on_the_Chapter2_page() throws IOException, ClassNotFoundException, SQLException
    {
        //scr.GetScreenShot(driver, "Chapter2_main_Screen_"+sessionID);
        driver.findElement(By.linkText("Chapter2")).click();
        log.info("Clicking Chapter2 link");
        //String DBvalue = db.connectDB("select lastname from persons where personid = 1");
        //System.out.println("DB value is "+DBvalue);
    }


}
