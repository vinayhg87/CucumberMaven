package Exceptions;

@SuppressWarnings("serial")
public class CucumberFailedException extends RuntimeException
{
	public CucumberFailedException(String message)
	{
		System.out.println(message);
	}

}
