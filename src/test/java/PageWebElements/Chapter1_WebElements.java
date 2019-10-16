package PageWebElements;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Chapter1_WebElements {
	
	public WebDriver driver;
	
	public Chapter1_WebElements(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="Chapter1")
	public WebElement Chapter1_link;
	
	
	@FindBy(id="selecttype")
	public WebElement dropdown;
	
	
	@FindBy(id="radiobutton")
	public WebElement radioButton;
}
