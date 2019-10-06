package Screenshots;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class GetScreenShots {
	
	public void GetScreenShot(WebDriver driver, String fileName) throws IOException
	{
		String currDir = System.getProperty("user.dir");
		String ScreenshotPath = currDir + File.separator + "ScreenShorts" + File.separator;		
		File scr = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scr, new File(ScreenshotPath+fileName+".jpg"));
	}

}
