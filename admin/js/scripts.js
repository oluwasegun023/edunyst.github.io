$(document).ready(function () {
  function trim(s) {
    return s.replace(/^\s*/, "").replace(/\s*$/, "");
  }
  $("#view_login").keydown(function (e) {
    if (e.keyCode == 13) {
      _log_in();
    }
  });

  $("#reset_password_info").keydown(function (e) {
    if (e.keyCode == 13) {
      _proceed_reset_password();
    }
  });

  $("#comfirmed_reset_password").keydown(function (e) {
    if (e.keyCode == 13) {
      _comfirmed_reset_password();
    }
  });
});

function _next_page(next_id, divid) {
  $("#view_login,#reset_password_info").hide();
  $("#" + next_id).fadeIn(1000);
  $("#page-title").html($("#" + divid).html());
}

function _alert_close() {
  $("#get-more-div").fadeOut(300);
}

function _togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const togglePasswordIcon = document.getElementById('togglePassword');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordIcon.innerHTML = '<i class="bi-eye-slash"></i>';
  } else {
    passwordInput.type = 'password';
    togglePasswordIcon.innerHTML = '<i class="bi-eye"></i>';
  }
}

function _keep_me_logged_in() {
// Check for a stored "Keep me logged in" preference when the page loads
window.addEventListener('load', () => {
  const keepLoggedInCheckbox = document.getElementById('keep-logged-in');
  const storedPreference = localStorage.getItem('keepLoggedIn');

  if (storedPreference === 'true') {
    keepLoggedInCheckbox.checked = true;
  } else {
    keepLoggedInCheckbox.checked = false;
  }
});

// Handle the "Keep me logged in" checkbox change
document.getElementById('keep-logged-in').addEventListener('change', (event) => {
  localStorage.setItem('keepLoggedIn', event.target.checked);
});
}



//////////// LOGIN ////////////
function _log_in() {
  var email = $("#email").val();
  var password = $("#password").val();
  $("#email,#password").removeClass("complain");
  if (email != "" && password != "") {
    user_login(email, password);
  } else {
    $("#email,#password").addClass("complain");
    $("#warning-div").fadeIn(500).delay(5000).fadeOut(100);
  }
}

/////////////////////////////////////

///////////////////// user login /////////////////////
function user_login(email, password) {
  var action = "login_api";
  /////////////// get btn text ////////////////
  var btn_text = $("#login_btn").html();
  $("#login_btn").html('Authenticating <i class="fa fa-spinner fa-spin"></i>');
  document.getElementById("login_btn").disabled = true;
  ////////////////////////////////////////////////
  var dataString =
    "action=" + action + "&email=" + email + "&password=" + password;

  $.ajax({
    type: "POST",
    url: api,
    dataType: "json",
    data: dataString,
    cache: false,
    success: function (data) {
      var result = data.result;
      var message1 = data.message1;
      var message2 = data.message2;
      if (result == true) {
        var staff_id = data.staff_id;
        var access_key = data.access_key;
        var role_id = data.role_id;
        $("#success-div")
          .html(
            '<div><i class="bi-check"></i></div> ' +
              message1 +
              " <br/> " +
              message2 +
              " "
          )
          .fadeIn(500)
          .delay(5000)
          .fadeOut(100);
        _proceed_to_login(staff_id, access_key, role_id);
      } else {
        $("#warning-div")
          .html(
            '<div><i class="bi-exclamation-octagon-fill"></i></div> ' +
              message1 +
              " <br/><span> " +
              message2 +
              " </span>"
          )
          .fadeIn(500)
          .delay(5000)
          .fadeOut(100);
          $("#login_btn").html(btn_text);
          document.getElementById("login_btn").disabled = false;
      }
     
    },
  });
}


function _proceed_to_login(staff_id, access_key, role_id) {
  var action = "login";
  var dataString =
    "action=" +
    action +
    "&staff_id=" +
    staff_id +
    "&access_key=" +
    access_key +
    "&role_id=" +
    role_id;
  $.ajax({
    type: "POST",
    url: admin_login_local_url,
    data: dataString,
    cache: false,
    success: function (html) {
      window.parent((location = admin_portal_url));
    },
  });
}



function _proceed_reset_password() {
  var action = "reset_password_api";
  var email = $("#reset_pass_email").val();

  //////////////// get btn text ////////////////
  var btn_text = $("#reset_password_btn").html();
  $("#reset_password_btn").html(
    'PROCESSING <i class="fa fa-spinner fa-spin"></i>'
  );
  document.getElementById("reset_password_btn").disabled = true;
  ////////////////////////////////////////////////

  var dataString = "action=" + action + "&email=" + email;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    cache: false,
    dataType: "json",
    cache: false,
    success: function (info) {
      var result = info.result;
      var message1 = info.message1;
      var message2 = info.message2;

      if (result == true) {
        var staff_id = info.staff_id;
        var fullname = info.fullname;
        var email = info.email;
        $("#reset_pass_email").removeClass("complain");
       
        _reset_password(staff_id, fullname, email);
      } else {
        $("#warning-div")
          .html(
            '<div><i class="bi-exclamation-octagon-fill"></i></div> ' +
              message1 +
              " <br /><span> " +
              message2 +
              " </span>"
          )
          .fadeIn(500)
          .delay(5000)
          .fadeOut(100);
        $("#reset_pass_email").addClass("complain");
      }
      $("#reset_password_btn").html(btn_text);
      document.getElementById("reset_password_btn").disabled = false;
    },
  });
}



function _reset_password(staff_id, fullname, email) {
  $("#get-more-div")
    .html(
      '<div class="ajax-loader"><img src="' +
        website_url +
        '/all-images/images/ajax-loader.gif"/></div>'
    )
    .fadeIn("fast");
  var action = "reset_password";
  var dataString =
    "action=" +
    action +
    "&staff_id=" +
    staff_id +
    "&fullname=" +
    fullname +
    "&email=" +
    email;
  $.ajax({
    type: "POST",
    url: admin_login_local_url,
    data: dataString,
    cache: false,
    success: function (html) {
      $("#get-more-div").html(html);
      $("#username").html(fullname);
      $("#useremail").html(email);
    },
  });
}



function _resend_otp(ids, staff_id) {
  var action = "resend_otp_api";
  var btn_text = $("#" + ids).html();
  $("#" + ids).html('SENDING <i class="fa fa-spinner fa-spin"></i>');
  var dataString = "action=" + action + "&staff_id=" + staff_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    cache: false,
    success: function (data) {
      var message1 = data.message1;
      var message2 = data.message2;
      $("#success-div")
        .html(
          '<div><i class="bi-check"></i></div> ' +
            message1 +
            " <br> " +
            message2 +
            " "
        )
        .fadeIn(500)
        .delay(5000)
        .fadeOut(100);
      $("#" + ids).html(btn_text);
    },
  });
}



///// accept number ////
function isNumber_Check() {
  var e = window.event;
  var key = e.keyCode && e.which;

  if (!((key >= 48 && key <= 57) || key == 43 || key == 45)) {
    if (e.preventDefault) {
      e.preventDefault();
      $("#otp_info").fadeIn(300);
      document.getElementById("reset_password_otp").style.border =
        "#F00 1px solid";
    } else {
      e.returnValue = false;
    }
  } else {
    $("#otp_info").fadeOut(300);
    document.getElementById("reset_password_otp").style.border =
      "rgba(0, 0, 0, .1) 1px solid";
  }
}




function _check_password_match(){
  var password = $("#create_reset_password").val();
  var confirmed_reset_password = $("#confirmed_reset_password").val();
  if ((password!=confirmed_reset_password) && (confirmed_reset_password!='')){
   $('#message').show();
  }else{
    $('#message').hide();
  }
}





function _comfirmed_reset_password(staff_id) {
  var action = "confirm_otp_api";
  var otp = $("#reset_password_otp").val();
  var password = $("#create_reset_password").val();
  var confirmed_reset_password = $("#confirmed_reset_password").val();

  $("#reset_password_otp,#create_reset_password,#confirmed_reset_password").removeClass("complain");
 if (otp == "") {
    $("#reset_password_otp").addClass("complain");
    $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> OTP Error!  <br /><span> Fill fields to continue. </span>').fadeIn(500).delay(5000).fadeOut(100);
  } else if (password == "") {
    $("#create_reset_password").addClass("complain");
    $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> Create Password Error  <br /><span> Fill fields to continue. </span>').fadeIn(500).delay(5000).fadeOut(100);
  }else if(confirmed_reset_password== ""){
    $("#confirmed_reset_password").addClass('complain');
    $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> Confirm Password Error<br /><span>Fill fields to continue.</span>').fadeIn(500).delay(5000).fadeOut(100);
  } else if (password != confirmed_reset_password) {
    $("#create_reset_password,#confirmed_reset_password").addClass("complain");
    $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> Password Error <br /><span> Password Not Match </span>').fadeIn(500).delay(5000).fadeOut(100);
  } else if (password.length < 8) {
    $("#create_reset_password,#confirmed_reset_password").addClass("complain");
    $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> Password Not Accepted <br /><span> Please follow the instructon </span>').fadeIn(500).delay(5000).fadeOut(100);
 
  }else if (password.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/ )){
      //////////////// get btn text ////////////////
      var btn_text = $("#comfirmed_reset_btn").html();
      $("#comfirmed_reset_btn").html(
        'RESETTING <i class="fa fa-spinner fa-spin"></i>'
      );
      document.getElementById("comfirmed_reset_btn").disabled = true;
      ////////////////////////////////////////////////

      var dataString =
        "action=" +
        action +
        "&staff_id=" +
        staff_id +
        "&otp=" +
        otp +
        "&password=" +
        password;
      $.ajax({
        type: "POST",
        url: api,
        data: dataString,
        cache: false,
        dataType: "json",
        cache: false,
        success: function (data) {
          var result = data.result;
          var message1 = data.message1;
          var message2 = data.message2;
          if (result == true) {
            _get_page("password_reset_successful");
          } else {
            $("#warning-div")
              .html(
                '<div><i class="bi-exclamation-octagon-fill"></i></div> ' +
                  message1 +
                  " <br /><span> " +
                  message2 +
                  " </span>"
              )
              .fadeIn(500)
              .delay(5000)
              .fadeOut(100);
            $("#reset_password_otp").addClass("complain");
          }
          $("#comfirmed_reset_btn").html(btn_text);
          document.getElementById("comfirmed_reset_btn").disabled = false;
        },
      });
    } else {
      $("#create_reset_password,#confirmed_reset_password").addClass("complain");
      $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> Password Not Accepted <br /><span> Please follow the instructon </span>').fadeIn(500).delay(5000).fadeOut(100);
  
    }
}


function _get_page(page) {
  $("#get-more-div")
    .html(
      '<div class="ajax-loader"><img src="' +
        website_url +
        '/all-images/images/ajax-loader.gif"/></div>'
    )
    .fadeIn("fast");
  var action = "password_reset_successful";
  var dataString = "action=" + action + "&page=" + page;
  $.ajax({
    type: "POST",
    url: admin_login_local_url,
    data: dataString,
    cache: false,
    success: function (html) {
      $("#get-more-div").html(html);
    },
  });
}
