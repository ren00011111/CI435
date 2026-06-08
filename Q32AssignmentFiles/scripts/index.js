window.addEventListener("load", function () {

   // COMPLETE INITIALISATION CODE HERE

   let password = document.getElementById("password");
   let code1 = document.getElementById("code1");
   let code2 = document.getElementById("code2");
   let code3 = document.getElementById("code3");
   let form = document.getElementById("CustomerDetails");

   // Focus on password box when the page loads
   password.focus();

   // Validate password when it loses focus
   password.addEventListener("blur", function () {
      validatePassword();
   });

   // Validate authentication code boxes when they lose focus
   code1.addEventListener("blur", function () {
      validateCode(code1);
   });

   code2.addEventListener("blur", function () {
      validateCode(code2);
   });

   code3.addEventListener("blur", function () {
      validateCode(code3);
   });

   // Validate all fields when submit button pressed
   form.addEventListener("submit", function (event) {

      let passwordOK = validatePassword();
      let code1OK = validateCode(code1);
      let code2OK = validateCode(code2);
      let code3OK = validateCode(code3);

      // Prevent submission if any field is invalid
      if (!(passwordOK && code1OK && code2OK && code3OK)) {
         event.preventDefault();
      }

   });

   // ADD NECESSARY FUNCTIONS HERE

});

function validatePassword() {

   let password = document.getElementById("password");

   if (password.value.length >= 8) {
      password.className = "fieldOK";
      return true;
   }
   else {
      password.className = "fieldError";
      return false;
   }

}

function validateCode(codeBox) {

   let pattern = /^[0-9]{2}$/;

   if (pattern.test(codeBox.value)) {
      codeBox.className = "fieldOK";
      return true;
   }
   else {
      codeBox.className = "fieldError";
      return false;
   }

}