package steps.RegisterMelaka;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageobject.registerMelakaPO;
import utilities.SeleniumHelpers;
import utilities.ThreadManager;

public class registerMelakaSteps {

    private WebDriver driver = ThreadManager.getDriver();
    private SeleniumHelpers selenium = new SeleniumHelpers(driver);
    private registerMelakaPO registerMelaka =  new registerMelakaPO(driver);

    @Given("user access melaka register dashboard")
    public void user_access_melaka_register_dashboard () throws InterruptedException {
        registerMelaka.directToMelakaRegister ();
    }

    @When("user on register page user input valid name {string}")
    public void user_on_register_page_user_input_valid_name (String name) throws InterruptedException {
        registerMelaka.inputName (name);
    }

    @And("user input phone number {string}")
    public void user_input_phone_number (String phoneNumber) throws InterruptedException {
        registerMelaka.inputPhoneNumber (phoneNumber);
    }

    @And("user input business name {string}")
    public void user_input_business_name (String businessName) throws InterruptedException {
        registerMelaka.inputBusinessName (businessName);
    }

    @And("user choose business type")
    public void user_choose_business_type () throws InterruptedException {
        registerMelaka.chooseBusinessType ();
    }

    @And("user input email {string}")
    public void user_input_email (String email) throws InterruptedException {
        registerMelaka.inputEmail (email);
    }

    @And("user input password {string}")
    public void user_input_password (String password) throws InterruptedException {
        registerMelaka.inputPassword (password);
    }

    @And("user input password confirmation {string}")
    public void user_input_password_confirmation (String confirmPassword) throws InterruptedException {
        registerMelaka.inputConfirmPassword (confirmPassword);
    }

    @And("user click tnc checkbox")
    public void user_click_tnc_checkbox () throws InterruptedException {
        registerMelaka.clickTnc ();
    }

    @And("user click button regsiter")
    public void user_click_button_register () throws InterruptedException {
        registerMelaka.clickButtonRegister ();
    }

    @Then("user will get information about activation account {string}")
    public void user_will_get_information_about_activation_account (String infoActivation) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayInfoActivation());
        Assert.assertTrue(registerMelaka.displayInfoActivation().contains(infoActivation));
    }

    @When("user on register page user click field name without input the name")
    public void user_on_register_page_user_click_field_name_without_input_the_name () throws InterruptedException {
        registerMelaka.clickFieldName ();
    }

    @And("user click field phone number without input number")
    public void user_click_field_phone_number_without_input_number () throws InterruptedException {
        registerMelaka.clickFieldPhoneNumb ();
    }

    @And("user click field business name without input business name")
    public void user_click_field_business_name_without_input_business_name () throws InterruptedException {
        registerMelaka.clickFieldBusType ();
    }

    @And("user click field email without input email")
    public void user_click_field_email_without_input_email () throws InterruptedException {
        registerMelaka.clickFieldEmail ();
    }

    @And("user click field password without input password")
    public void user_click_field_password_without_input_password () throws InterruptedException {
        registerMelaka.clickFieldPassword ();
    }

    @And("user click field confirm password without input confirm password")
    public void user_click_field_confirm_password_without_input_confirm_password () throws InterruptedException {
        registerMelaka.clickFieldConfirm ();
    }

    @Then("display error message under field name {string}")
    public void display_error_message_under_field_name (String errorName) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayErrorName());
        Assert.assertTrue(registerMelaka.displayErrorName().contains(errorName));
    }

    @Then("display error message under field phone number {string}")
    public void display_error_message_under_field_phone_number (String errorPhoneNumb) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayErrorPhoneNumb());
        Assert.assertTrue(registerMelaka.displayErrorPhoneNumb().contains(errorPhoneNumb));
    }

    @Then("display error message under field business name {string}")
    public void display_error_message_under_field_business_name (String errorBusName) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayErrorBusName());
        Assert.assertTrue(registerMelaka.displayErrorBusName().contains(errorBusName));
    }


    @Then("display error message under field email {string}")
    public void display_error_message_under_field_email (String errorEmail) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayErrorEmail());
        Assert.assertTrue(registerMelaka.displayErrorEmail().contains(errorEmail));
    }

    @Then("display error message under field password {string}")
    public void display_error_message_under_field_password (String errorPassword) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayErrorPassword());
        Assert.assertTrue(registerMelaka.displayErrorPassword().contains(errorPassword));
    }

    @Then("display error message under field confirm password {string}")
    public void display_error_message_under_field_confirm_password (String errorConfirmPassword) throws InterruptedException {
        System.out.println("Actual : " + registerMelaka.displayErrorConfirmPassword());
        Assert.assertTrue(registerMelaka.displayErrorConfirmPassword().contains(errorConfirmPassword));
    }

}
