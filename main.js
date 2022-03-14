function isEmail(email) {
    var regex =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
  }
  document.getElementById("submit").onclick = function () {
    var errorMessage = "";
    var fieldsMissing = "";
    if (document.getElementById("email").value == "") {
      fieldsMissing += "<br>Email";
    }
    if (document.getElementById("phone").value == "") {
      fieldsMissing += "<br>phone";
    }
    if (document.getElementById("password").value == "") {
      fieldsMissing += "<br>password";
    }
    if (document.getElementById("passwordConfirm").value == "") {
      fieldsMissing += "<br>passwordConfirm";
    }
    if (fieldsMissing != "") {
      document.getElementById("errorMessage").innerHTML =
        "The following field(s) are missing:" + fieldsMissing;
    }
    if (isEmail(document.getElementById("email").value) == false) {
      errorMessage += "<p>Your email address is not valid</p>";
    }
    if(isNaN(document.getElementById("phone").value)==true){
      errorMessage += "Phone number is not numeric";
    }
    if(document.getElementById("password").value != document.getElementById("passwordConfirm").value){
      errorMessage += "password mismatched";
    }
    if (errorMessage != "") {
      // document.getElementById("errorMessage").innerHTML = errorMessage;
      alert(errorMessage);
            document.getElementById("errorMessage").style.display="block";
            document.getElementById("successMessage").style.display="none";
      
    } else {
    //   document.getElementById("successMessage").show();
    document.getElementById("successMessage").style.display="block";
    document.getElementById("errorMessage").style.display="none";
      
    }
  };

  