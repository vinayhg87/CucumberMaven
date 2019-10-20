package OracleDBOperation;

/* mvn install:install-file -Dfile=ojdbc8.jar -DgroupId=com.oracle -DartifactId=ojdbc8 -Dversion=19.3 -Dpackaging=jar */

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class ConnOracleDB {
	
	public String connectDB(String sqlquery) throws ClassNotFoundException, SQLException, IOException
	{
		String Name = null;
		String DBconnectionFile = System.getProperty("user.dir") + File.separator + "DBconnection.properties";
		Properties prop = new Properties();
		prop.load(new FileInputStream(DBconnectionFile));
		
		/* Fetching data from properties file */
		String connection = prop.getProperty("connection");
		String username = prop.getProperty("username");
		String password = prop.getProperty("password");	
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection dbconn = DriverManager.getConnection(connection,username,password);
		Statement stm = dbconn.createStatement();
		ResultSet rs = stm.executeQuery(sqlquery);
		while(rs.next())
		{
			Name = rs.getString(1);
		}
		
		return Name;
	}

}
