$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registesMelaka.feature");
formatter.feature({
  "name": "Register new member in Melaka",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    }
  ]
});
formatter.scenario({
  "name": "Success register new member",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@successRegisterNewMember"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user input valid name \"Fakhriyani\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_input_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input phone number \"87880084500\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input business name \"Kobim\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_business_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose business type",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_choose_business_type()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email \"fanybroto@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password \"qatesting01\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password confirmation \"qatesting01\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_password_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click tnc checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_tnc_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button regsiter",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_button_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will get information about activation account \"Aktivasi Akun\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_will_get_information_about_activation_account(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Display error message under the field",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@displayFieldErrorMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user click field name without input the name",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_click_field_name_without_input_the_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field phone number without input number",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_phone_number_without_input_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field business name without input business name",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_business_name_without_input_business_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field email without input email",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_email_without_input_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field password without input password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_password_without_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field confirm password without input confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_confirm_password_without_input_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click tnc checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_tnc_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field name \"Wajib diisi.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field phone number \"Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field business name \"Wajib diisi.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_business_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field email \"Wajib diisi.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field password \"Wajib diisi.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field confirm password \"Wajib diisi.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_confirm_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Display error message phone number field less than 10 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@displayPhoneNumberErrorMessageLess"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user input valid name \"Fakhriyani\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_input_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input phone number \"878800845\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field business name without input business name",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_business_name_without_input_business_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field phone number \"Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Display error message phone number field more than 12 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@displayPhoneNumberErrorMessageMore"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user input valid name \"Fakhriyani\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_input_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input phone number \"87880084500123\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field business name without input business name",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_business_name_without_input_business_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field phone number \"Wajib diisi. Nomor telepon tidak boleh kurang dari 10 atau lebih dari 12 karakter.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Display error message password field less than 8 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@displayPasswordErrorMessageLess"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user input valid name \"Fakhriyani\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_input_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password \"test1\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field confirm password without input confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_confirm_password_without_input_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field password \"Min. 8 karakter, harus kombinasi dari huruf dan angka.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Display error message confirmation password field if the input is different with password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@displayConfirmPasswordErrorMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user input valid name \"Fakhriyani\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_input_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password \"qatesting01\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password confirmation \"testing01\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_password_confirmation(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click tnc checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_tnc_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field confirm password \"Belum sesuai dengan kata sandi.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_confirm_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Display an error message if the email format is incorrect.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@main"
    },
    {
      "name": "@registerMelaka"
    },
    {
      "name": "@displayFormatEmailErrorMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user access melaka register dashboard",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_access_melaka_register_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on register page user input valid name \"Fakhriyani\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_on_register_page_user_input_valid_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email \"fanybroto\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_input_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click field password without input password",
  "keyword": "And "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.user_click_field_password_without_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "display error message under field email \"Harap isi dengan format yang benar.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.RegisterMelaka.registerMelakaSteps.display_error_message_under_field_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});