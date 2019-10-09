package Commons;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class DriverCaller {


    public WebDriver browserDriver() throws IOException {

        WebDriver driver = null;
        String CurrDir = System.getProperty("user.dir");
        String osInfo = System.getProperty("os.name");
        String driverConfigProperties = CurrDir + File.separator + "driverConfig.properties";
        Properties property = new Properties();
        property.load(new FileInputStream((driverConfigProperties)));
        String chromedriverFlag = property.getProperty("chromeBrowser");
        String firefoxdriverFlag = property.getProperty("firefoxBrowser");
        System.out.println("Tests are running on "+osInfo);
        if (chromedriverFlag.equals("enabled"))
        {
            if(osInfo.contains("Mac"))
            {
                String ccdriver = property.getProperty("firefoxdriver_mac");
                String ChromeDriverPath = CurrDir + File.separator + "drivers" + File.separator + ccdriver;
                System.setProperty("webdriver.chrome.driver", ChromeDriverPath);
                driver = new ChromeDriver();
            }
            else
            {
                String ccdriver = property.getProperty("firefoxdriver_win");
                String ChromeDriverPath = CurrDir + File.separator + "drivers" + File.separator + ccdriver;
                System.setProperty("webdriver.chrome.driver", ChromeDriverPath);
                driver = new ChromeDriver();
            }
        }
        else if (firefoxdriverFlag.equals("enabled"))
        {
            if(osInfo.contains("Mac"))
            {
                String ffdriver = property.getProperty("firefoxdriver_mac");
                String FirefoxDriverPath = CurrDir + File.separator + "drivers" + File.separator + ffdriver;
                System.setProperty("webdriver.gecko.driver", FirefoxDriverPath);
                driver = new FirefoxDriver();
            }
            else
            {
                String ffdriver = property.getProperty("firefoxdriver_win");
                String FirefoxDriverPath = CurrDir + File.separator + "drivers" + File.separator + ffdriver;
                System.setProperty("webdriver.gecko.driver", FirefoxDriverPath);
                driver = new FirefoxDriver();
            }
        }
        else
        {
            System.out.println("Error : Check if the parameter is correctly configured in driverConfig.properties file");
            System.exit(1);
        }


        return driver;
    }
}
