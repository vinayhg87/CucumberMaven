package logging;

import java.io.File;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class loggingLog4j {
	
	public Logger log4jlogger(String ClassName)
	{
		String currDir = System.getProperty("user.dir");
		String  log4j_properties = currDir + File.separator + "log4j.properties";
		Logger log = Logger.getLogger(ClassName);
		PropertyConfigurator.configure(log4j_properties);
		
		return log;
	}

}
