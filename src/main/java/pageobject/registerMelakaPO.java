package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import utilities.SeleniumHelpers;

public class registerMelakaPO {
    WebDriver driver;
    SeleniumHelpers selenium;

    public registerMelakaPO(WebDriver driver) {
        this.driver = driver;
        selenium = new SeleniumHelpers(driver);

        PageFactory.initElements(new AjaxElementLocatorFactory(driver, 10), this);
    }

    @FindBy(xpath = "//input[@name='name']")
    WebElement inputName;

    @FindBy(xpath = "//input[@name='phone']")
    WebElement inputPhoneNumber;

    @FindBy(xpath = "//input[@name='businessName']")
    WebElement inputBusinessName;

    @FindBy(xpath = "(//input[@name='businessType'])[4]")
    WebElement BusinessType;

    @FindBy(xpath = "//input[@name='email']")
    WebElement inputEmail;

    @FindBy(xpath = "//input[@name='password']")
    WebElement inputPassword;

    @FindBy(xpath = "//input[@name='confirmPassword']")
    WebElement inputConfirmPassword;

    @FindBy(xpath = "//input[@name='isTncChecked']")
    WebElement tnc;

    @FindBy(xpath = "//button[@type='submit']")
    WebElement buttonRegister;

    @FindBy(xpath = "//h2[contains(text(),'Aktivasi Akun')]")
    WebElement infoActivation;

    @FindBy(xpath = "(//p[contains(text(),'Wajib diisi.')])[1]")
    WebElement errorName;

    @FindBy(xpath = "//p[@data-testid='register__text-field__phone-number__error']")
    WebElement errorPhoneNumb;

    @FindBy(xpath = "(//p[contains(text(),'Wajib diisi.')])[3]")
    WebElement errorBusName;

    @FindBy(xpath = "//p[@data-testid='register__text-field__email__error']")
    WebElement errorEmail;

    @FindBy(xpath = "//p[@data-testid='register__text-field__password__error']")
    WebElement errorPassword;

    @FindBy(xpath = "//p[@data-testid='register__text-field__confirm-password__error']")
    WebElement errorConfirmPassword;

    @FindBy(xpath = "//p[@data-testid='register__text-field__password__error']")
    WebElement errorMinPassword;

    @FindBy(xpath = "//p[@data-testid='register__text-field__confirm-password__error']")
    WebElement errorMatchPassword;


    public void directToMelakaRegister() throws InterruptedException {
        selenium.navigateToPage("https://dashboard.melaka.app/register");
    }
    public void inputName(String name) throws InterruptedException {
        selenium.hardWait(2);
        selenium.enterText(inputName, name, true);
    }
    public void inputPhoneNumber(String phoneNumber) throws InterruptedException {
        selenium.hardWait(2);
        selenium.enterText(inputPhoneNumber, phoneNumber, true);
    }

    public void inputBusinessName(String businessName) throws InterruptedException {
        selenium.hardWait(2);
        selenium.enterText(inputBusinessName, businessName, true);
    }

    public void chooseBusinessType () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(BusinessType);
    }

    public void inputEmail(String email) throws InterruptedException {
        selenium.hardWait(2);
        selenium.enterText(inputEmail, email, true);
    }

    public void inputPassword(String password) throws InterruptedException {
        selenium.hardWait(2);
        selenium.enterText(inputPassword, password, true);
    }

    public void inputConfirmPassword(String confirmPassword) throws InterruptedException {
        selenium.hardWait(2);
        selenium.enterText(inputConfirmPassword, confirmPassword, true);
    }

    public void clickTnc () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(tnc);
    }

    public void clickButtonRegister () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(buttonRegister);
    }

    public String displayInfoActivation () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(infoActivation);
    }

    public void clickFieldName () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(inputName);
    }

    public void clickFieldPhoneNumb () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(inputPhoneNumber);
    }

    public void clickFieldBusType () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(inputBusinessName);
    }

    public void clickFieldEmail () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(inputEmail);
    }

    public void clickFieldPassword () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(inputPassword);
    }

    public void clickFieldConfirm () throws InterruptedException {
        selenium.hardWait(2);
        selenium.click(inputConfirmPassword);
    }

    public String displayErrorName () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(errorName);
    }

    public String displayErrorPhoneNumb () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(errorPhoneNumb);
    }

    public String displayErrorBusName () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(errorBusName);
    }

    public String displayErrorEmail () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(errorEmail);
    }

    public String displayErrorPassword () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(errorPassword);
    }

    public String displayErrorConfirmPassword () throws InterruptedException {
        selenium.hardWait(2);
        return selenium.getText(errorConfirmPassword);
    }


}
