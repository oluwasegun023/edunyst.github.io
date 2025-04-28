function _logout(){
  document.getElementById('logoutform').submit();
}


function _toggle_profile_pix_div() {
  $(".toggle-profile-div").toggle("slow");
}

function select_search() {
  $(".srch-select").toggle("fast");
}

function srch_custom(text) {
  $("#srch-text").html(text);
  $(".custom-srch-div").fadeIn(500);
}

function _next_page(next_id, icon, divid) {
  $("#account_settings_id,#account_detail,#channge_password").hide();
  $("#" + next_id).fadeIn(1000);
  $("#panel-title").html($("#" + icon).html() + $("#" + divid).html());
}

function _prev_page(next_id) {
  $("#account_settings_id,#account_detail,#channge_password").hide();
  $("#" + next_id).fadeIn(1000);
  $("#panel-title").html(
    '<i class="bi-gear"></i> </span id="app_text"> APP SETTINGS'
  );
}

function _alert_close() {
  $("#get-more-div").fadeOut(300);
}

function _alert_close2() {
  $("#get-more-div").fadeOut(300);
  closeVideo(); // Call the closeVideo function to stop the video and mute the audio
  // Add any additional code to close the div or perform other actions here
}

function _collapse(div_id,div_id1,div_id2) {
  var x = document.getElementById(div_id + "num");
  if (x.innerHTML === '&nbsp;<i class="bi-plus"></i>&nbsp;') {
    x.innerHTML = '&nbsp;<i class="bi-dash"></i>&nbsp;';
    //$('#'+div_id).addClass('active-faq');
    _get_fetch_sub_topic(div_id,div_id1,div_id2);
  } else {
    x.innerHTML = '&nbsp;<i class="bi-plus"></i>&nbsp;';
    //  $('#'+div_id).removeClass('active-faq');
  }
	$('#'+div_id+'answer').slideToggle('slow');
}

///// accept number ////
function isNumber_Check() {
  var e = window.event;
  var key = e.keyCode && e.which;

  if (!((key >= 48 && key <= 57) || key == 43 || key == 45)) {
    if (e.preventDefault) {
      e.preventDefault();
      $("#mobile_info").fadeIn(300);
      document.getElementById("reg_mobile", "updt_mobile", "subscription_price").style.border =
        "#F00 1px solid";
    } else {
      e.returnValue = false;
    }
  } else {
    $("#mobile_info").fadeOut(300);
    document.getElementById("reg_mobile", "updt_mobile", "subscription_price").style.border =
      "rgba(0, 0, 0, .1) 1px solid";
  }
}

function _get_active_link(divid) {
  $("#dashboard, #admin, #user, #exam, #subject, #blogs, #faqs").removeClass(
    "active-li"
  );
  $("#" + divid).addClass("active-li");
  $("#_" + divid).addClass("active-li");
  $("#page-title").html($("#_" + divid).html());
}


function _get_page(page, divid) {
  _get_active_link(divid);
  $("#page-content").html('<div class="ajax-loader"><img src="' +website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
  var action = "get_page";
  var dataString = "action=" + action + "&page=" + page;
  $.ajax({
    type: "POST",
    url: admin_local_portal_url,
    data: dataString,
    cache: false,
    success: function (html) {
      $("#page-content").html(html);
    },
  });
}


function _get_page_with_id(page, ids, other_ids, other_ids1) {
  $("#page-content")
    .html(
      '<div class="ajax-loader"><img src="' +
        website_url +
        '/all-images/images/ajax-loader.gif"/></div>'
    )
    .fadeIn("fast");
  var action = "_get_page_with_id";
  var dataString = "action=" + action + "&page=" + page + "&ids=" + ids + "&other_ids=" + other_ids + "&other_ids1=" + other_ids1;
  $.ajax({
    type: "POST",
    url: admin_local_portal_url,
    data: dataString,
    cache: false,
    success: function (html) {
      $("#page-content").html(html);
    },
  });
}



function _get_form(page) {
  $("#get-more-div").html('<div class="ajax-loader"><img src="' +website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
  var action = "get_form";
  var dataString = "action=" + action + "&page=" + page;
  $.ajax({
    type: "POST",
    url: admin_local_portal_url,
    data: dataString,
    cache: false,
    success: function (html) {
      $("#get-more-div").html(html);
    },
  });
}


function _get_form_with_id(page, ids, other_ids, other_ids1) {
  $("#get-more-div").html('<div class="ajax-loader"><img src="'+website_url+'/all-images/images/ajax-loader.gif"/></div>').fadeIn(500);
  var action = "get_form_with_id";
  var dataString = "action=" + action + "&page=" + page + "&ids=" + ids + "&other_ids=" + other_ids + "&other_ids1=" + other_ids1;
  $.ajax({
    type: "POST",
    url: admin_local_portal_url,
    data: dataString,
    cache: false,
    success: function (html) {
      $("#get-more-div").html(html);
    },
  });
}




$(function () {
  exam_pix = {
    UpdatePreview: function (obj) {
      // if IE < 10 doesn't support FileReader
      if (!window.FileReader) {
        // don't know how to proceed to assign src to image tag
      } else {
        var reader = new FileReader();
        var target = null;

        reader.onload = function (e) {
          target = e.target || e.srcElement;
          $("#exam-pix").prop("src", target.result);
        };
        reader.readAsDataURL(obj.files[0]);
      }
    },
  };
});


$(function () {
  blog_pics = {
    UpdatePreview: function (obj) {
      // if IE < 10 doesn't support FileReader
      if (!window.FileReader) {
        // don't know how to proceed to assign src to image tag
      } else {
        var reader = new FileReader();
        var target = null;

        reader.onload = function (e) {
          target = e.target || e.srcElement;
          $("#blog_pics").prop("src", target.result);
        };
        reader.readAsDataURL(obj.files[0]);
      }
    },
  };
});



// VIDEO SCRIPT //
function showVideo(video) {
  if (video.files[0]){
      var reader = new FileReader();

      reader.onload = function(video) {
          document.querySelector('#videoDisplay').setAttribute('src', video.target.result);
      }
      reader.readAsDataURL(video.files[0]);
  }
}








function _get_staff_login(staff_id) {
  var action = "fetch_staff_api";
  $("#login_user_fullname,#login_user_login_time").html("XXXXX");
  var dataString = "action=" + action + "&staff_id=" + staff_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
        var fetch = info.data;
        var fullname = info.fullname;
        var mobile = fetch.mobile;
        var role_name = fetch.role_name;
        var updated_time = fetch.updated_time;
        var passport = fetch.passport;
        $("#login_user_fullname,#profile_name,#header_profile_name").html(fullname);
        $("#user_id").html(staff_id);
        $("#header_role_name").html(role_name);
        $("#user_mobile").html(mobile);
        $("#login_user_login_time").html(updated_time);
        _get_header_pix(passport);
      }else{
      _logout();
      }
      
    },
  });
}



function _get_header_pix(passport) {
  var header_pix = "";
  if (passport == "") {
    header_pix =
      '<img src="' +
      website_url +
      '/uploaded_files/staff_pix/friends.png" id="passportimg1" alt="profile picture" />' +
      '<img src="' +
      website_url +
      '/uploaded_files/staff_pix/friends.png" id="passportimg2" alt="profile picture" />';
  } else {
    header_pix =
      '<img src="' +
      website_url +
      "/uploaded_files/staff_pix/" +
      passport +
      '" id="passportimg1" alt="profile picture" />';
    '<img src="' +
      website_url +
      "/uploaded_files/staff_pix/" +
      passport +
      '" id="passportimg2" alt="profile picture" />';
  }
  $("#header_pix,#toggle_header_pix").html(header_pix);
}



function _get_select_status(select_id,status_id){
	var action='fetch_status_api';
	var dataString ='action='+ action+'&status_id='+ status_id;
	$.ajax({
		type: "POST",   
		url: api,
		data: dataString,
		dataType: 'json',
		cache: false,
		success: function(info){
			var login_check = info.check;
      if(login_check>0){
      var result = info.result;
      var message = info.message;
      var fetch=info.data
      if (result == true) {
      
				for (var i = 0; i < fetch.length; i++) {
				  var status_id = fetch[i].status_id;
				  var status_name = fetch[i].status_name;
					$('#'+select_id).append('<option value="'+status_id+'">'+status_name+'</option>');
				}
      }else{
				$('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> CAUTION ALERT!<br /><span>'+message+'</span>').fadeIn(500).delay(5000).fadeOut(100);
      }
			}else{
        _logout();
      }
		}
	});
}


function _get_select_video_pricing(select_id) {
  var action = "fetch_subscription_pricing_api";
  var dataString = "action=" + action;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var result = info.result;
      var message = info.message;
      var fetch = info.data;

      if (result == true) {
        for (var i = 0; i < fetch.length; i++) {
          var subscription_pricing_id = fetch[i].subscription_pricing_id;
          var subscription_pricing_name = fetch[i].subscription_pricing_name;
          /// for subscription duration update profile loop option ////
          $('#'+select_id).append('<option value="'+subscription_pricing_id+'">'+subscription_pricing_name+'</option>');
        }
      } else {
        $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> CAUTION ALERT!<br /><span>'+message+'</span>').fadeIn(500).delay(5000).fadeOut(100);
      }
    }else{
    _logout();
    }
    },
  });
}




function _get_select_role(select_id, role_id) {
  var action = "fetch_role_api";

  var dataString = "action=" + action + "&role_id=" + role_id;
  $.ajax({
    type: "POST",
    url: api,
    dataType: "json",
    data: dataString,
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var result = info.result;
      var message = info.message;
      var fetch = info.data;
      var text = "";

      if (result == true) {
        for (var i = 0; i < fetch.length; i++) {
          var role_id = fetch[i].role_id;
          var role_name = fetch[i].role_name;
          /// for role update profile loop option ////
          text +=
            '<option value="' +
            role_id +
            '">' +
            role_name.toUpperCase() +
            "</option>";
        }
      } else {
        text = '<option value="" >' + message + " </option>";
      }
      $("#" + select_id).append(text);
    }else{
    _logout();
    }
    },
  });
}




function _get_select_duration(select_id) {
  var action = "fetch_duration_api";
  var dataString = "action=" + action ;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var result = info.result;
      var message = info.message;
      var fetch = info.data;

      if (result == true) {
        for (var i = 0; i < fetch.length; i++) {
          var subscription_duration_id = fetch[i].subscription_duration_id;
          /// for status update profile loop option ////
        	$('#'+select_id).append('<option value="'+subscription_duration_id+'">'+subscription_duration_id +'</option>');
        }
      } else {
        $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> CAUTION ALERT!<br /><span>'+message+'</span>').fadeIn(500).delay(5000).fadeOut(100);
      }
    }else{
    _logout();
    }
    },
  });
}





function _get_select_video_volume(select_id) {
  var action = "fetch_video_volume_api";
  var dataString = "action=" + action ;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var result = info.result;
      var message = info.message;
      var fetch = info.data;

      if (result == true) {
        for (var i = 0; i < fetch.length; i++) {
          var video_volume_id = fetch[i].video_volume_id;
          var video_volume_name = fetch[i].video_volume_name;
          /// for status update profile loop option ////
          $('#'+select_id).append('<option value="'+video_volume_id+'">'+video_volume_name +'</option>');
        }
      } else {
        $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> CAUTION ALERT!<br /><span>'+message+'</span>').fadeIn(500).delay(5000).fadeOut(100);
      }
    }else{
    _logout();
    }
    },
  });
}




function _get_cat(select_id) {
  var action = "fetch_cat_api";
  var dataString = "action=" + action;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var result = info.result;
      var message = info.message;
      var fetch = info.data;
      var text = "";

      if (result == true) {
        for (var i = 0; i < fetch.length; i++) {
          var cat_id = fetch[i].cat_id;
          var cat_desc = fetch[i].cat_desc;
          /// for status update profile loop option ////
          text +=
            '<option value="' +
            cat_id +
            '" >' +
            cat_desc +
            "</option>";
        }
      } else {
        text += "<option>" + message + "</option>";
      }
      $("#" + select_id).append(text);
    }else{
    _logout();
    }
    },
  });
}



function _add_staff(staff_id) {
  var action = "add_or_update_staff_api";

  var fullname = $("#reg_fullname").val();
  var email = $("#reg_email").val();
  var mobile = $("#reg_mobile").val();
  var address = $("#reg_address").val();
  var role_id = $("#reg_role_id").val();
  var status_id = $("#reg_status_id").val();

  $(
    "#reg_fullname, #reg_email, #reg_mobile, #reg_address, #reg_role_id, #reg_status_id"
  ).removeClass("complain");

  if (fullname == "") {
    $("#reg_fullname").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> FULLNAME ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (email == "" || $("#reg_email").val().indexOf("@") <= 0) {
    $("#reg_email").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> EMAIL ERROR!<br /><span>Fill Correct Email To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (mobile == "") {
    $("#reg_mobile").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> MOBILE ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (address == "") {
    $("#reg_address").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> ADDRESS ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (role_id == "") {
    $("#reg_role_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> ROLE NAME ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (status_id == "") {
    $("#reg_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS NAME ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else {
    $(
      "#reg_fullname, #reg_email, #reg_mobile, #reg_address, #reg_role_id, #reg_status_id"
    ).removeClass("complain");

    var btn_text = $("#submit_btn").html();
    $("#submit_btn").html(
      '<i class="fa fa-spinner fa-spin"></i> PROCESSING...'
    );
    document.getElementById("submit_btn").disabled = true;

    var dataString =
      "action=" +
      action +
      "&staff_id=" +
      staff_id +
      "&fullname=" +
      fullname +
      "&email=" +
      email +
      "&mobile=" +
      mobile +
      "&address=" +
      address +
      "&role_id=" +
      role_id +
      "&status_id=" +
      status_id;
    $.ajax({
      type: "POST",
      url: api,
      dataType: "json",
      data: dataString,
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var result = info.result;
        var message1 = info.message1;
        var message2 = info.message2;
        if (result == true) {
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
          _alert_close();
          _get_page('view_staff', 'admin');
        } else {
          $("#reg_email").addClass("complain");
          $("#warning-div")
            .html(
              '<div><i class="bi-check"></i></div> ' +
                message1 +
                " <br> " +
                message2 +
                message2 +
                " "
            )
            .fadeIn(500)
            .delay(3000)
            .fadeOut(100);
          $("#submit_btn").html(btn_text);
          document.getElementById("submit_btn").disabled = false;
        }  
      }else{
      _logout();
      }
      },
    });
  }
}






function _get_fetch_all_staff() {
  var action = "fetch_staff_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {
    var dataString =
      "action=" +
      action +
      "&status_id=" +
      status_id +
      "&search_txt=" +
      search_txt;
    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var staff_id = fetch[i].staff_id;
            var fullname = fetch[i].fullname;
            var mobile = fetch[i].mobile;
            var status_name = fetch[i].status_name;
            var passport = fetch[i].passport;

            text +=
              '<div class="user-div animated fadeIn" title="View Profile" onclick="_get_form_with_id(' +
              "'staff_profile'" +
              "," +
              "'" +
              staff_id +
              "'" +
              ')">' +
              '<div class="pix-div"><img src="' +
              website_url +
              "/uploaded_files/staff_pix/" +
              passport +
              '"/></div>' +
              '<div class="detail">' +
              '<div class="name-div"><div class="name">' +
              fullname.toUpperCase() +
              "</div><hr /><br/></div>" +
              '<div class="text">ID:' +
              staff_id +
              "</div>" +
              '<div class="text">' +
              mobile +
              "</div>" +
              '<div class="status-div '+ status_name +'">' +
              status_name +
              "</div>" +
              "</div>" +
              '<br clear="all"/>' +
              "</div>";
          }
          $("#fetch").html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            '<button class="btn" onclick="_get_form(' +
            "'staff_reg'" +
            ')"><i class="bi-person-plus"></i>ADD NEW ADMIN/STAFF</button>' +
            "</div>";
          $("#fetch").html(text);
        }
      }else{
      _logout();
      }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      '<button class="btn" onclick="_get_form(' +
      "'staff_reg'" +
      ')"><i class="bi-person-plus"></i>ADD NEW ADMIN/STAFF</button>' +
      "</div>";
    $("#fetch").html(text);
  }
}





function _get_fetch_all_user() {
  var action = "fetch_user_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {
    var dataString =
      "action=" +
      action +
      "&status_id=" +
      status_id +
      "&search_txt=" +
      search_txt;
    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
      var login_check = info.check;
      if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var user_id = fetch[i].user_id;
            var fullname = fetch[i].fullname;
            var mobile = fetch[i].mobile;
            var status_name = fetch[i].status_name;
            var passport = fetch[i].passport;
              if(passport==''){
                passport= 'friends.png';
              }
              
            text +=
              '<div class="user-div animated fadeIn" title="View Profile" onclick="_get_form_with_id(' +
              "'user_details'" +
              "," +
              "'" +
              user_id +
              "'" +
              ')">' +'<div class="pix-div"><img src="' + website_url +'/uploaded_files/user_pix/' + passport +'"/></div>' +
              '<div class="detail">' +
              '<div class="name-div"><div class="name">' +
              fullname.toUpperCase() +
              "</div><hr /><br/></div>" +
              '<div class="text">ID:' +
              user_id +
              "</div>" +
              '<div class="text"> ' +
              mobile +
              " </div>" +
              '<div class="status-div '+status_name +'"> ' +status_name +
              " </div>" +
              "</div>" +
              '<br clear="all"/>' +
              "</div>";
          }
          $("#fetch_user").html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
          $("#fetch_user").html(text);
        }
      }else{
        _logout();
        }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      "</div>";
    $("#fetch_user").html(text);
  }
}





function _get_staff_profile(staff_id) {
  var action = "fetch_staff_api";
  var dataString = "action=" + action + "&staff_id=" + staff_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var result = info.result;
      var login_check = info.check;
      if(login_check>0){

      if (result == true) {
        var data = info.data;
        var fullname = data.fullname;
        var mobile = data.mobile;
        var email = data.email;
        var address = data.address;
        var passport = data.passport;
        if (passport == "") {
          passport = "friends.png";
        }

        var role_id = data.role_id;
        var role_name = data.role_name;
        var status_id = data.status_id;
        var status_name = data.status_name;
        var created_time = data.created_time;
        var last_login = data.last_login;

        $("#staff_login_fullname").html(fullname);
        $("#staff_last_login").html(last_login);
        $("#staff_status_name").html(status_name);
        $("#current_user_passport1").html(
          '<img src="' +
            website_url +
            "/uploaded_files/staff_pix/" +
            passport +
            '" id="passportimg4" alt="profile picture"/>'
        );
        $("#current_user_passport2").html(
          '<img src="' +
            website_url +
            "/uploaded_files/staff_pix/" +
            passport +
            '" id="passportimg3" alt="profile picture"/>'
        );

        $("#updt_fullname").val(fullname);
        $("#updt_mobile").val(mobile);
        $("#updt_email").val(email);
        $("#updt_address").val(address);
        $("#updt_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
        $("#updt_role_id").append('<option value="' + role_id + '" selected="selected">' + role_name +"</option>");
        $("#staff_id").val(staff_id);
        $("#created_time").val(created_time);
        $("#last_login").val(last_login);
      }
    }else{
    _logout();
    }
    },
  });
}





function _update_staff_profile(staff_id) {
  var fullname = $("#updt_fullname").val();
  var email = $("#updt_email").val();
  var mobile = $("#updt_mobile").val();
  var address = $("#updt_address").val();
  var role_id = $("#updt_role_id").val();
  var status_id = $("#updt_status_id").val();

  $(
    "#updt_fullname, #updt_email, #updt_mobile, #updt_address, #updt_role_id, #updt_status_id"
  ).removeClass("complain");

  if (fullname == "") {
    $("#updt_fullname").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> FULLNAME ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (email == "" || $("#updt_email").val().indexOf("@") <= 0) {
    $("#updt_email").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> EMAIL ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (mobile == "") {
    $("#updt_mobile").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> MOBILE ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (address == "") {
    $("#updt_address").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> ADDRESS ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (role_id == "") {
    $("#updt_role_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> ROLE ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (status_id == "") {
    $("#updt_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else {
    $(
      "#updt_fullname, #updt_email, #updt_mobile, #updt_address, #updt_role_id, #updt_status_id"
    ).removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#update_btn").html();
      $("#update_btn").html('<i class="fa fa-spinner fa-spin"></i> UPDATING');
      document.getElementById("update_btn").disabled = true;

      var action = "add_or_update_staff_api";
      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("staff_id", staff_id);
      form_data.append("fullname", fullname);
      form_data.append("email", email);
      form_data.append("mobile", mobile);
      form_data.append("address", address);
      form_data.append("role_id", role_id);
      form_data.append("status_id", status_id);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;
          if (result == true) {
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
              _get_page('view_staff', 'admin');
          } else {
            $("#updt_email").addClass("complain");
            $("#warning-div")
              .html(
                '<div><i class="bi-exclamation-octagon-fill"></i></div> EMAIL ERROR!<br /><span>Fill Fields To Continue</span>'
              )
              .fadeIn(500)
              .delay(3000)
              .fadeOut(100);
            }
              $("#update_btn").html(btn_text);
              document.getElementById("update_btn").disabled = false;
        }else{
        _logout();
        }
        },
      });
    }
  }
}





function _upload_pix_(staff_id) {
  $(function () {
    Staff = {
      UpdatePreview: function (obj) {
        // if IE < 10 doesn't support FileReader
        if (!window.FileReader) {
          // don't know how to proceed to assign src to image tag
        } else {
          _upload_profile_pix(staff_id);
          var reader = new FileReader();
          var target = null;

          reader.onload = function (e) {
            target = e.target || e.srcElement;
            $("#passportimg1,#passportimg2,#passportimg3").prop(
              "src",
              target.result
            );
          };
          reader.readAsDataURL(obj.files[0]);
        }
      },
    };
  });
}





function _upload_staff_pix_(staff_id) {
  $(function () {
    Test = {
      UpdatePreview: function (obj) {
        // if IE < 10 doesn't support FileReader
        if (!window.FileReader) {
          // don't know how to proceed to assign src to image tag
        } else {
          _upload_profile_pix(staff_id);
          var reader = new FileReader();
          var target = null;

          reader.onload = function (e) {
            target = e.target || e.srcElement;
            $("#passportimg4").prop("src", target.result);
          };
          reader.readAsDataURL(obj.files[0]);
        }
      },
    };
  });
}




function _upload_profile_pix(staff_id) {
  var action = "get_passport_api";
  if (staff_id == "") {
    // do nothing
  } else {
    var file_data = $("#passport").prop("files")[0];
    if (file_data == "") {
    } else {
      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("passport", file_data);
      form_data.append("staff_id", staff_id);

      $.ajax({
        url: api,
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        success: function (data) {
          var db_passport = data.db_passport;
          _unlink_pix_file(staff_id, db_passport);
           //  move_file(db_passport);
        },
      });
    }
  }
}



function _unlink_pix_file(staff_id, db_passport) {
  var action = "unlink_passport";
  var passport_pix = $("#passport").prop("files")[0];

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("db_passport", db_passport);
  form_data.append("db_passport", passport_pix);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      _upload_pix_file(staff_id);
    },
  });
}

function _upload_pix_file(staff_id) {
  var action = "upload_passport_api";
  var passport_pix = $("#passport").prop("files")[0];

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("staff_id", staff_id);
  form_data.append("passport", passport);
  form_data.append("passport", passport_pix);

  $.ajax({
    url: api,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (data) {
      var message1 = data.message1;
      var message2 = data.message2;
      var passport = data.passport;
      _get_pix(message1, message2, passport);
    },
  });
}



function _get_pix(message1, message2, passport) {
  var action = "upload_pix_file";

  var passport_pix = $("#passport").prop("files")[0];
  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("passport", passport);
  form_data.append("passport", passport_pix);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
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
        _get_page('view_staff', 'admin');
    },
  });
}




function _add_and_update_subject(page, subject_id) {
  var subject_name = $("#subject_name").val();
  var subject_url = $("#subject_url").val();
  var seo_keywords = $("#seo_keywords").val();
  var seo_description = $("#seo_description").val();
  var status_id = $("#reg_status_id").val();
  var subject_picture = $("#subject_passport").val();
  var new_subject_pix = $("#subject_passport").prop("files")[0];

  $(
    "#subject_name, #subject_url, #seo_keywords, #seo_description ,#status_id"
  ).removeClass("complain");

  if (subject_name == "") {
    $("#subject_name").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SUBJECT NAME ERROR!<br /><span>Check Subject Name And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (subject_url == "") {
    $("#subject_url").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SUBJECT URL ERROR!<br /><span>Check Url And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (seo_keywords == "") {
    $("#seo_keywords").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SEO KEYWORDS ERROR!<br /><span>Check Seo Keywords And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (seo_description == "") {
    $("#seo_description").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SEO DESCRPITION ERROR!<br /><span>Check Seo Description And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (status_id == "") {
    $("#reg_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again <span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else {
    $(
      "#subject_name, #subject_url, #seo_keywords, #seo_description, #status_id"
    ).removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_or_update_subject_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("subject_id", subject_id);
      form_data.append("subject_name", subject_name);
      form_data.append("subject_url", subject_url);
      form_data.append("seo_keywords", seo_keywords);
      form_data.append("seo_description", seo_description);
      form_data.append("status_id", status_id);
      form_data.append("subject_picture", subject_picture);
      form_data.append("subject_picture", new_subject_pix);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
            var old_passport = info.old_passport;
            var subject_picture = info.subject_picture;

            if (subject_picture != "") {
              _upload_pix(
                page,
                message1,
                message2,
                subject_picture,
                "",
                old_passport
              );
            } else {
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
              _alert_close();
              _get_page('all_subject', 'subject');
            }
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
              $("#submit_btn").html(btn_text);
              document.getElementById("submit_btn").disabled = false;
          }
        
        }else{
          _logout();
          }
        },
      });
    }
  }
}




function _upload_pix(
  page,
  message1,
  message2,
  subject_picture,
  exam_logo,
  old_passport
) {
  if (page == "add_and_update_subject") {
    var action = "upload_subject_pix";
    var new_subject_pix = $("#subject_passport").prop("files")[0];
  } else if (page == "add_and_update_exam") {
    var action = "upload_exam_pix";
    var new_exam_pix = $("#exam_passport").prop("files")[0];
  }

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("subject_picture", subject_picture);
  form_data.append("subject_picture", new_subject_pix);

  form_data.append("exam_logo", exam_logo);
  form_data.append("exam_logo", new_exam_pix);

  form_data.append("old_passport", old_passport);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
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
      if (page == "add_and_update_subject") {
        _get_page('all_subject', 'subject');
      } else if (page == "add_and_update_exam") {
         _get_page('exam_category', 'exam');
      }
      _alert_close();
    },
  });
}




function _get_fetch_all_subject(div_id) {
  var action = "fetch_subject_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {
    var dataString =
      "action=" +
      action +
      "&status_id=" +
      status_id +
      "&search_txt=" +
      search_txt;
    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var subject_id = fetch[i].subject_id;
            var subject_name = fetch[i].subject_name.toUpperCase();
            var status_name = fetch[i].status_name;
            var total_topic_count = fetch[i].total_topic_count;
            var subject_passport = fetch[i].subject_passport;

            if (subject_passport == "") {
              subject_passport = "default_pix.jpg";
            }
            
            if (div_id == "fetch_subject") {
              text +=
                '<div class="grid-div animated fadeIn">' +
                '<div class="div-in">' +
                '<div class="image-div">' +
                '<img src="' +
                website_url +
                "/uploaded_files/subject_pix/" +
                subject_passport +
                '" id="exam-pix" alt="' +
                subject_name +
                '"/>' +
                "</div>" +
                '<div class="ACTIVE '+status_name +'">' +status_name +
                "</div>" +
                '<div class="info-div">' +
                "<h2>" +
                subject_name +
                "</h2>" +
                "<hr></hr>" +
                '<div class="count-div"><i class="bi-book"></i> TOPICS: <span>'+total_topic_count +'</span> </div>' +
                '<button class="btn" title="EDIT" onclick="_get_form_with_id(' +
                "'add_and_update_subject'" +
                "," +
                "'" +
                subject_id +
                "'" +
                ')"><i class="bi-pencil-square"></i> EDIT</button>' +
                "</div>" +
                "</div>" +
                "</div>";
            } else {
              text +=
                "<label>" +
                '<input type="checkbox" class="child" id="' +
                subject_id +
                '" name="subject_id[]" data-value="' +
                subject_id +
                '"  />' +
                "<span>" +
                subject_name +
                "</span>" +
                "</label>";
            }
          }
          $("#" + div_id).html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            '<button class="btn" onclick="_get_form(' +"'add_and_update_subject'" +')"><i class="bi-person-plus"></i>ADD NEW SUBJECT</button>' +
            "</div>";
          $("#" + div_id).html(text);
        }
      }else{
        _logout();
        }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      '<button class="btn" onclick="_get_form(' +"'add_and_update_subject'" +')"><i class="bi-person-plus"></i>ADD NEW SUBJECT</button>' +
      "</div>";
    $("#" + div_id).html(text);
  }
}




function _fetch_each_subject(subject_id) {
  var action = "fetch_subject_api";
  var dataString = "action=" + action + "&subject_id=" + subject_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var fetch = info.data;
      var subject_name = fetch.subject_name.toUpperCase();
      var subject_url = fetch.subject_url;
      var seo_keywords = fetch.seo_keywords;
      var seo_description = fetch.seo_description;
      var status_id = fetch.status_id;
      var status_name = fetch.status_name;
      var subject_passport = fetch.subject_passport;

      $("#subject_name").val(subject_name);
      $("#subject_url").val(subject_url);
      $("#seo_keywords").val(seo_keywords);
      $("#seo_description").val(seo_description);
      $("#reg_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
      _get_viewpix(subject_passport);
    }else{
      _logout();
      }
    },
  });
}



function _get_viewpix(subject_passport) {
  var view_pix = "";
  if (subject_passport == "") {
    view_pix =
      '<img src="' +
      website_url +
      '/uploaded_files/subject_pix/default.png" id="exam-pix" alt="profile picture" />';
  } else {
    view_pix =
      '<img src="' +
      website_url +
      "/uploaded_files/subject_pix/" +
      subject_passport +
      '" id="exam-pix" alt="profile picture" />';
  }
  $("#view_pix").html(view_pix);
}



function _add_and_update_exam(page, exam_id) {
  var abbreviation = $("#abbreviation").val();
  var exam_name = $("#exam_name").val();
  var exam_url = $("#exam_url").val();
  var seo_keywords = $("#seo_keywords").val();
  var seo_description = $("#seo_description").val();
  var status_id = $("#reg_status_id").val();

  var exam_logo = $("#exam_passport").val();
  var new_exam_pix = $("#exam_passport").prop("files")[0];
  var check_exam_id=exam_id;
  var subject_id = [];
  $(".child:checked").each(function () {
    subject_id.push($(this).data("value"));
  });

  var checked = $('input[name="subject_id[]"]:checked').length;

  $(
    "#abbreviation, #exam_name, #exam_url, #seo_keywords, #seo_description, #subject_id, #status_id"
  ).removeClass("complain");

  if (abbreviation == "") {
    $("#abbreviation").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> ABBREVIATION ERROR!<br /><span>Check And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (exam_name == "") {
    $("#exam_name").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> EXAM NAME ERROR!<br /><span>Check Exam Name And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (exam_url == "") {
    $("#exam_url").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> EXAM URL ERROR!<br /><span>Check Exam URL And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (seo_keywords == "") {
    $("#seo_keywords").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SEO KEYWORDS ERROR!<br /><span>Check Seo Keywords And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (seo_description == "") {
    $("#seo_description").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SEO DESCRIPTION ERROR!<br /><span>Check Seo Description And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (checked < 1) {
    $("#subject_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SUBJECT ERROR!<br /><span>Pick at least 1 Subject And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (status_id == "") {
    $("#reg_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else {
    $(
      "#abbreviation, #exam_name, #exam_url, #seo_keywords, #seo_description, #subject_id, #status_id"
    ).removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_or_update_exam_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("exam_id", exam_id);
      form_data.append("abbreviation", abbreviation);
      form_data.append("exam_name", exam_name);
      form_data.append("exam_url", exam_url);
      form_data.append("seo_keywords", seo_keywords);
      form_data.append("seo_description", seo_description);
      form_data.append("status_id", status_id);
      form_data.append("exam_logo", exam_logo);
      form_data.append("exam_logo", new_exam_pix);
      form_data.append("subject_id", subject_id);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
            var old_passport = info.old_passport;
            var exam_logo = info.exam_logo;
            var exam_id = info.exam_id;
            var exam_url = info.exam_url;
            var all_subject_id = info.all_subject_id;
            var all_subject_urls = info.all_subject_urls;
            var db_exam_url = info.db_exam_url;
  
             if (check_exam_id != exam_id) {
            _create_exam_folder(check_exam_id, exam_id, exam_url, all_subject_id, all_subject_urls, message1, message2);
             }else {
            _update_exam_folder(exam_id, exam_url, db_exam_url, all_subject_id, all_subject_urls, message1, message2);
             }  
            if (exam_logo != '') {
              _upload_pix(page,message1,message2,'',exam_logo,old_passport);
            }
          } else {
            $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' + message1 + " <br /><span> " + message2 + " </span>").fadeIn(500).delay(5000).fadeOut(100);
            $("#submit_btn").html(btn_text);
            document.getElementById("submit_btn").disabled = false;
          }
          
        }else{
          _logout();
          }
        },
      });
    }
  }
}



function _create_exam_folder(check_exam_id, exam_id, exam_url, all_subject_id, all_subject_urls, message1, message2) {
  var action = "create_exam_folder";

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("check_exam_id", check_exam_id);
  form_data.append("exam_id", exam_id);
  form_data.append("exam_url", exam_url);
  form_data.append("all_subject_id", all_subject_id);
  form_data.append("all_subject_urls", all_subject_urls);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
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
              _alert_close();
              _get_page('exam_category', 'exam');
    },
  });
}



function _update_exam_folder(exam_id, exam_url, db_exam_url, all_subject_id, all_subject_urls, db_subject_url, message1, message2) {
  var action = "update_exam_folder";

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("exam_id", exam_id);
  form_data.append("exam_url", exam_url);
   form_data.append("db_exam_url", db_exam_url);
  form_data.append("all_subject_id", all_subject_id);
  form_data.append("all_subject_urls", all_subject_urls);
  form_data.append("db_subject_url", db_subject_url);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
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
              _alert_close();
              _get_page('exam_category', 'exam');
    },
  });
}







function _get_fetch_all_exam() {
  var action = "fetch_exam_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {
    var dataString =
      "action=" +
      action +
      "&status_id=" +
      status_id +
      "&search_txt=" +
      search_txt;
    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
      var login_check = info.check;
      if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var exam_id = fetch[i].exam_id;
            var abbreviation = fetch[i].abbreviation.toUpperCase();
            var seo_description = fetch[i].seo_description;
            var status_name = fetch[i].status_name;
            var exam_passport = fetch[i].exam_passport;
			      var total_exam_subject_count =  fetch[i].total_exam_subject_count;
            if (exam_passport == "") {
              exam_passport = "default_pix.jpg";
            }
           
            text +=
              '<div class="record-content-div animated fadeIn">' +
              '<div class="div-in">' +
              '<div class="image-div">' +
                '<img src="' + website_url + "/uploaded_files/exam_pix/" + exam_passport +'" alt="' + abbreviation +'"/>' +
              "</div>" +
              '<div class="text-div">' +
              "<h2>" +
              abbreviation +
              "</h2>" +
              "<p>" +
              seo_description +
              "</p>" +
              '<div class="count-div">' +
              '<div class="count-in"><i class="bi-book"></i> SUBJECTS: <span>'+ total_exam_subject_count +'</span> &nbsp;|&nbsp; STATUS: <span class="ACTIVE '+ status_name +'">' + status_name +
              "</span></div>" +
              '<button class="btn" title="EDIT" onClick="_get_form_with_id(' +
              "'add_and_update_exam'" +
              "," +
              "'" +
              exam_id +
              "'" +
              ');"><i class="bi-pencil-square"></i> EDIT</button>' +
              '<button class="btn btn2" title="EDIT" onClick="_get_page_with_id(' +"'subject'" +"," +"'" +exam_id + "'" +');"><i class="bi-pencil-square"></i> VIEW SUBJECT</button>' +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>";
          }
         
          $("#fetch_exam").html(text);
           
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            '<button class="btn" onclick="_get_form(' +
            "'add_and_update_exam'" +
            ')"><i class="bi-plus-square"></i>ADD NEW EXAM</button>' +
            "</div>";
          $("#fetch_exam").html(text);
        }
       
      }else{
        _logout();
        }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      '<button class="btn" onclick="_get_form(' +
      "'add_and_update_exam'" +
      ')"><i class="bi-plus-square"></i>ADD NEW EXAM</button>' +
      "</div>";
    $("#fetch_exam").html(text);
  }
}




function _fetch_each_exam(exam_id) {
  var action = "fetch_exam_api";
  var dataString = "action=" + action + "&exam_id=" + exam_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var fetch = info.data;
      var abbreviation = fetch.abbreviation;
      var exam_name = fetch.exam_name;
      var exam_url = fetch.exam_url;
      var seo_keywords = fetch.seo_keywords;
      var seo_description = fetch.seo_description;
      var subject_id = fetch.subject_id;
      var status_id = fetch.status_id;
      var status_name = fetch.status_name;
      var exam_passport = fetch.exam_passport;

      $("#abbreviation").val(abbreviation);
      $("#exam_name").val(exam_name);
      $("#exam_url").val(exam_url);
      $("#seo_keywords").val(seo_keywords);
      $("#seo_description").val(seo_description);
      $("#subject_id").val(subject_id);
      $("#reg_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
      _get_view(exam_passport);

      var fetch2 = info.data2;
      var text = "";
      for (var i = 0; i < fetch2.length; i++) {
        var s_subject_id = fetch2[i].subject_id;
        var s_subject_name = fetch2[i].subject_name;
        var checked = fetch2[i].checked;

        text +=
          "<label>" +
          '<input type="checkbox" class="child" id="' +
          s_subject_id +
          '" name="subject_id[]" data-value="' +
          s_subject_id +
          '" ' +
          checked +
          "  />" +
          "<span>" +
          s_subject_name +
          "</span>" +
          "</label>";
      }
      $("#subject_name_with_check").html(text);
    }else{
      _logout();
      }
    },
  });
}



function _get_view(exam_passport) {
  var view_exam = "";
  if (exam_passport == "") {
    view_exam =
      '<img src="' +
      website_url +
      '/uploaded_files/exam_pix/default.png" id="exam-pix" alt="profile picture" />';
  } else {
    view_exam =
      '<img src="' +
      website_url +
      "/uploaded_files/exam_pix/" +
      exam_passport +
      '" id="exam-pix" alt="profile picture" />';
  }
  $("#view_exam").html(view_exam);
}



function _get_fetch_exam_subject(exam_id) {
  var action = "fetch_exam_subject_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {
    var dataString =
      "action=" +
      action +
      "&exam_id=" +
      exam_id +
      "&status_id=" +
      status_id +
      "&search_txt=" +
      search_txt;
    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;
        var abbreviation = info.abbreviation.toUpperCase();

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var subject_id = fetch[i].subject_id;
            var exam_id = fetch[i].exam_id;
            var subject_name = fetch[i].subject_name.toUpperCase();
            var status_name = fetch[i].status_name;
            var subject_passport = fetch[i].subject_passport;
			      var total_topic_count = fetch[i].total_topic_count;
            if (subject_passport == "") {
              subject_passport = "default_pix.jpg";
            }

            text +=
              '<div class="grid-div animated fadeIn">' +
              '<div class="div-in">' +
              '<div class="image-div">' +
              '<img src="' +
              website_url +
              "/uploaded_files/subject_pix/" +
              subject_passport +
              '" id="exam-pix" alt="' +
              subject_name +
              '"/>' +
              "</div>" +
              '<div class="ACTIVE '+ status_name +'">' +
              status_name +
              "</div>" +
              '<div class="info-div">' +
              "<h2>" +
              subject_name +
              "</h2>" +
              "<hr></hr>" +
              '<div class="count-div"><i class="bi-book"></i> TOPICS: <span>' +total_topic_count +'</span></div>' +
              '<button class="btn btn2" title="EDIT" onClick="_get_page_with_id(' + "'topics'" + "," + "'" + '' +"'"  + "," +"'" +exam_id +"'"  + "," +"'" +subject_id +"'" +');"><i class="bi-pencil-square"></i> VIEW TOPICS</button>' +
              "</div>" +
              "</div>" +
              "</div>";
             
          }
            $("#fetch_exam_subject").html(text);
          $('#exam_abbreviation').html(abbreviation);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
          $("#fetch_exam_subject").html(text);
        }
      }else{
        _logout();
        }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      "</div>";
    $("#fetch_exam_subject").html(text);
  }
}






function _add_and_update_topic(topic_id, exam_id, subject_id) {
  var topic_name = $("#topic_name").val();
  var status_id = $("#reg_status_id").val();
  $("#topic_name, #status_id").removeClass("complain");

  if (topic_name == "") {
    $("#topic_name").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> TOPIC NAME ERROR!<br /><span>Check Topic Name And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (status_id == "") {
    $("#reg_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again <span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else {
    $("#topic_name, #status_id").removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_or_update_topic_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("exam_id", exam_id);
      form_data.append("subject_id", subject_id);
      form_data.append("topic_id", topic_id);
      form_data.append("topic_name", topic_name);
      form_data.append("status_id", status_id);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
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
              _alert_close();
              _get_page_with_id('topics', topic_id, exam_id, subject_id);
            
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
              $("#submit_btn").html(btn_text);
              document.getElementById("submit_btn").disabled = false;
          }
        
        }else{
          _logout();
          }
        },
      });
    }
  }
}




function _get_fetch_topic(topic_id, subject_id, exam_id) {
  var action = "fetch_topic_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {

    var dataString ="action=" + action + "&topic_id=" + topic_id + "&subject_id=" + subject_id + "&exam_id=" + exam_id + "&status_id=" + status_id + "&search_txt=" +search_txt;

    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var abbreviation = info.abbreviation.toUpperCase();
        var subject_name = info.subject_name.toUpperCase();
       
        $('#exam_abbreviation').html(abbreviation);
				$('#subject_name').html(subject_name);
        $('#db_subject_name').html(subject_name);
        var no=0;
        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
             no++;
            var exam_id = fetch[i].exam_id;
            var subject_id = fetch[i].subject_id;
            var topic_id = fetch[i].topic_id;
            var topic_name= fetch[i].topic_name.substr(0, 63);
            var status_name = fetch[i].status_name;
            var total_sub_topic_count = fetch[i].total_sub_topic_count;

            text +=
            '<div class="quest-faq-div animated fadeIn">'+
              '<div class="faq-title-text">'+
              '<h3>'+ topic_name +' <button class="btn" title="ADD NEW SUB TOPIC" onClick="_get_form_with_id(' + "'sub_topics_reg'" + "," + "'" + '' +"'" + ", " + "'" + subject_id +"'" + "," +"'" + topic_id +"'" +');"><i class="bi-plus-square"></i> ADD NEW SUB-TOPIC</button> <button class="btn btn-2" title="EDIT TOPIC" onClick="_get_form_with_id(' + "'topics_reg'" + "," +"'" + topic_id +"'" + "," +"'" + exam_id +"'" + "," +"'" + subject_id +"'" +');"><i class="bi-pencil-square"></i> EDIT</button></h3>'+
              '</div>'+
              
              '<div class="faq-answer-div" onclick="_collapse('+"'"+'view'+no+"'"+ "," + "'" + '' +"'"  +"," +"'" +topic_id +"'" +')">'+
                  '<span>Sub Topics: </span>&nbsp;&nbsp;<span class="count-div">'+ total_sub_topic_count +'</span> &nbsp;&nbsp;| &nbsp;'+
                  '<span>Status: </span>&nbsp;&nbsp;<span class="count-div status '+ status_name +'">'+ status_name +'</span>'+
                  '<div class="expand-div" id="'+"view"+no+"num"+'" onClick="_get_fetch_sub_topic('+"'"+'view'+no+"'"+ "," + "'" + '' +"'" + ", "  +"'" +topic_id +"'" +');">&nbsp;<i class="bi-plus"></i>&nbsp;</div>'+                         
              '</div>'+
  
              '<div class="faq-answer-div" id="'+"view"+no+"answer"+'" style="display: none;">'+
                '<div class="" id="sub_topic_view'+no+'">'+
                
                  //// fetch all sub topic under each topic
                  
                '</div>'+
              '</div>'+
          '</div>';
          }
          $("#fetch_topic").html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
          $("#fetch_topic").html(text);
        }
         }else{
          _logout();
          }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      "</div>";
    $("#fetch_topic").html(text);
  }
}




function _get_fetch_each_topic(topic_id,subject_id) {
  var action = "fetch_topic_api";
  var dataString = "action=" + action + "&topic_id=" + topic_id + "&subject_id=" + subject_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var fetch = info.data;
      var topic_name = fetch.topic_name.toUpperCase();
      var status_id = fetch.status_id;
      var status_name = fetch.status_name;

      $('#topic_name').val(topic_name);
      $("#reg_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
    }else{
      _logout();
    }
    },
  });
}



function _add_and_update_sub_topic(sub_topic_id,subject_id,topic_id) {
  var sub_topic_name = $("#sub_topic_name").val();
  var sub_topic_url = $("#sub_topic_url").val();
  var subscription_price = $("#subscription_price").val();
  var seo_keywords = $("#seo_keywords").val();
  var seo_description  = $("#seo_description").val();
  var sub_topic_logo = $("#sub_topic_passport").val();
  var new_sub_topic_pix = $("#sub_topic_passport").prop("files")[0];
  var status_id = $("#reg_status_id").val();
  var subscription_duration_id = $("#subscription_duration_id").val();
  var check_sub_topic_id=sub_topic_id;

  $("#sub_topic_name, #sub_topic_url, #subscription_price, #seo_keywords, #seo_description, #subscription_duration_id, #status_id").removeClass("complain");

  if (sub_topic_name == "") {
    $("#sub_topic_name").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>SUB TOPIC NAME ERROR!<br /><span>Check Sub Topic Name And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (sub_topic_url == "") {
    $("#sub_topic_url").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>SUB TOPIC URL ERROR!<br /><span>Check Sub Topic Url And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (subscription_price == "") {
      $("#subscription_price").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div>SUBSCRIPTION PRICE ERROR!<br /><span>Check Sub Price And Try Again</span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100);

  } else if (seo_keywords == "") {
    $("#seo_keywords").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> SEO KEYWORDS ERROR!<br /><span>Check Seo Keywords And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

    } else if (seo_description == "") {
      $("#seo_description").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> SEO DESCRIPTION ERROR!<br /><span>Check Seo Description And Try Again</span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100);

    } else if (subscription_duration_id == "") {
      $("#subscription_duration_id").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> SUBSCRIPTION DURATION ERROR!<br /><span>Check Sub Duration And Try Again</span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100);

  } else if (status_id == "") {
    $("#reg_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again <span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else {

     $("#sub_topic_name, #sub_topic_url, #subscription_price, #seo_keywords, #seo_description, #subscription_duration_id, #status_id").removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_or_update_sub_topic_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("subject_id", subject_id);
      form_data.append("topic_id", topic_id);
      form_data.append("sub_topic_id", sub_topic_id);
      form_data.append("sub_topic_name", sub_topic_name);
      form_data.append("sub_topic_url", sub_topic_url);
      form_data.append("subscription_price", subscription_price);
      form_data.append("seo_keywords", seo_keywords);
      form_data.append("seo_description", seo_description);
      form_data.append("subscription_duration_id", subscription_duration_id);
      form_data.append("status_id", status_id);
      form_data.append("sub_topic_logo", sub_topic_logo);
      form_data.append("sub_topic_logo", new_sub_topic_pix);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
            var result = info.result;
            var message1 = info.message1;
            var message2 = info.message2;

            if (result == true) {    
              var sub_topic_logo = info.sub_topic_logo;
              var old_sub_topic_passport = info.old_sub_topic_passport;
              var sub_topic_id = info.sub_topic_id;
              var exam_url = info.exam_url;
              var subject_url = info.subject_url;
              var sub_topic_url = info.sub_topic_url;
              var db_sub_topic_url = info.db_sub_topic_url;
              var exam_id = info.exam_id;
              var topic_id = info.topic_id;

              if (check_sub_topic_id != sub_topic_id) {
                _create_sub_topic_folder(check_sub_topic_id, sub_topic_id, sub_topic_url, exam_url, subject_url, exam_id, subject_id, topic_id);
              }else {
                _update_sub_topic_folder(sub_topic_id, sub_topic_url, exam_url, subject_url, db_sub_topic_url, exam_id, subject_id, topic_id);
              }
              if (sub_topic_logo != '') {
                _upload_sub_topic_pix(message1, message2, sub_topic_logo, old_sub_topic_passport, topic_id, exam_id, subject_id); 
              }
            }else{
              $("#warning-div").html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' +message1 +" <br /><span> " +message2 + " </span>").fadeIn(500) .delay(5000).fadeOut(100);
              $("#submit_btn").html(btn_text);
              document.getElementById("submit_btn").disabled = false;
            }
          }else{
            _logout();
          }
        },
      });
    }
  }
}



function _upload_sub_topic_pix(message1, message2, sub_topic_logo, old_sub_topic_passport, topic_id, exam_id, subject_id) {
  var action = "upload_sub_topic_pix";
  var new_sub_topic_pix = $("#sub_topic_passport").prop("files")[0];

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("sub_topic_logo", sub_topic_logo);
  form_data.append("sub_topic_logo", new_sub_topic_pix);

  form_data.append("old_sub_topic_passport", old_sub_topic_passport);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      $("#success-div").html('<div><i class="bi-check"></i></div> ' +message1 +" <br> " +message2 +" ").fadeIn(500).delay(5000).fadeOut(100);
      _alert_close();
      _get_page_with_id('topics', topic_id, exam_id, subject_id); 
     
    },
  });
}


function _create_sub_topic_folder(check_sub_topic_id, sub_topic_id, sub_topic_url, exam_url, subject_url, exam_id, subject_id ,topic_id) {
  var action = "create_sub_topic_folder";

  var form_data = new FormData();
  form_data.append("action", action);
   form_data.append("check_sub_topic_id", check_sub_topic_id);
   form_data.append("topic_id", topic_id);
  form_data.append("sub_topic_id", sub_topic_id);
  form_data.append("sub_topic_url", sub_topic_url);
  form_data.append("exam_url", exam_url);
  form_data.append("subject_url", subject_url);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      _alert_close();
      _get_page_with_id('topics', topic_id, exam_id, subject_id); 
    
    },
  });
}



function _update_sub_topic_folder(sub_topic_id, sub_topic_url, exam_url, subject_url, db_sub_topic_url, exam_id, subject_id, topic_id) {
  var action = "update_sub_topic_folder";

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("sub_topic_id", sub_topic_id);
  form_data.append("topic_id", topic_id);
  form_data.append("sub_topic_url", sub_topic_url);
  form_data.append("exam_url", exam_url);
  form_data.append("subject_url", subject_url);
  form_data.append("db_sub_topic_url", db_sub_topic_url);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      _alert_close();
      _get_page_with_id('topics', topic_id, exam_id, subject_id); 
    },
  });
}





function _get_fetch_sub_topic(div_id,sub_topic_id,topic_id) {
  var action = "fetch_sub_topic_api";
    var dataString ="action=" + action +"&sub_topic_id=" + sub_topic_id + "&topic_id=" + topic_id;
    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var topic_name = info.topic_name.toUpperCase();

        $('#db_topic_name').html(topic_name);

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {

            var sub_topic_id = fetch[i].sub_topic_id;
            var sub_topic_name= fetch[i].sub_topic_name.toUpperCase();
            var subject_id= fetch[i].subject_id;
            var subscription_price = fetch[i].subscription_price;
            var subscription_duration_id = fetch[i].subscription_duration_id;
            var seo_description = fetch[i].seo_description;
            var sub_topic_passport = fetch[i].sub_topic_passport;
            var status_name = fetch[i].status_name;
            var total_sub_topic_video_count = fetch[i].total_sub_topic_video_count;

            if (sub_topic_passport == "") {
              sub_topic_passport = "default_pix.jpg";
            }
            text +=
            '<div class="topics-content-div">'+
              '<div class="image-div"><img src="'+ website_url + "/uploaded_files/sub_topic_pix/" + sub_topic_passport + '" alt="'+ sub_topic_name +'"/>'+
              '</div>'+

              '<div class="text">'+
                '<h4>'+ sub_topic_name +'</h4>'+
                '<p>'+ seo_description +'</p>'+
                '<div class="bottom-div">'+
                  '<button class="btn edit" title="EDIT SUB-TOPIC" onClick="_get_form_with_id(' +"'sub_topics_reg'" + "," +"'" + sub_topic_id +"'" + "," +"'" + subject_id +"'" + "," +"'" +topic_id +"'" + "," + "'" + '' +"'" +');"><i class="bi-pencil-square"></i> EDIT</button>'+
                  '<div class="numbs"><button class="btn" title="VIEW VIDEOS" onClick="_get_page_with_id(' + "'videos'" + "," + "''" + "," +"'" + topic_id +"'" + "," +"'" + sub_topic_id +"'"  +');">NUMBER OF VIDEOS <span class="count">'+total_sub_topic_video_count+'</span> </button> <span class="status '+ status_name +'">'+ status_name +'</span></div>'+
                  '<div class="amount">Subcription Price (N):&nbsp; ₦ <span>'+ subscription_price +'</span>&nbsp;|&nbsp;Subcription Duration:&nbsp; ₦ <span>'+ subscription_duration_id +' Days</span></div>'+
                '</div>'+
              '</div>'+
            '</div>';
          }
          $('#'+"sub_topic_"+div_id).html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
            $('#'+"sub_topic_"+div_id).html(text);
        }
        }else{
          _logout();
        }
      }
    });
}


  function _get_fetch_each_sub_topic(sub_topic_id,subject_id,topic_id) {
  var action = "fetch_sub_topic_api";

  var dataString = "action=" + action + "&sub_topic_id=" + sub_topic_id+ "&subject_id=" + subject_id+ "&topic_id=" + topic_id;

  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
        if(login_check>0){
      var fetch = info.data;
    
      var sub_topic_name = fetch.sub_topic_name.toUpperCase();
      var sub_topic_url = fetch.sub_topic_url;
      var subscription_price = fetch.subscription_price;
      var seo_keywords = fetch.seo_keywords;
      var seo_description = fetch.seo_description;
      var subscription_duration_id = fetch.subscription_duration_id;
      var sub_topic_passport = fetch.sub_topic_passport;
      var status_id = fetch.status_id;
      var status_name = fetch.status_name;

      $('#sub_topic_name').val(sub_topic_name);
      $('#sub_topic_url').val(sub_topic_url);
      $('#subscription_price').val(subscription_price);
      $('#seo_keywords').val(seo_keywords);
      $('#seo_description').val(seo_description);
      $('#subscription_duration_id').append('<option value="' + subscription_duration_id +'" selected="selected">' + subscription_duration_id +"</option>");
      $('#reg_status_id').append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
      _get_sub_view(sub_topic_passport);
       }else{
          _logout();
        }
    }
  });
}




function _get_sub_view(sub_topic_passport) {
  var view_sub_topic = "";
  if (sub_topic_passport == "") {
    view_sub_topic =
    '<img src="'+ website_url + '"/uploaded_files/sub_topic_pix/default.png" alt="default"/>';
  } else {
    view_sub_topic ='<img src="' +website_url +
      "/uploaded_files/sub_topic_pix/" +
      sub_topic_passport +
      '" id="exam-pix" alt="profile picture" />';
  }
  $('#view_sub_topic').html(view_sub_topic);
}





function _add_and_update_sub_topic_video(video_id,topic_id,sub_topic_id) {
  tinyMCE.triggerSave();
  var video_title = $("#video_title").val();
  var video_objective = $("#video_objective").val();
  var video_duration = $("#video_duration").val();
  var video_volume_id = $("#video_volume_id").val();
  var subscription_pricing_id  = $("#subscription_pricing_id").val();
  var new_video = $("#video").prop("files")[0];
  var video_logo = $("#video_passport").val();
  var new_video_pix = $("#video_passport").prop("files")[0];
  var status_id = $("#reg_status_id").val();

  $("#video_title, #video_objective, #video_duration, #subscription_pricing_id, #new_video, #status_id").removeClass("complain");

  if (video_title == "") {
    $("#video_title").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>VIDEO TITLE ERROR!<br /><span>Check  Video Title And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (video_objective == "") {
    $("#video_objective").addClass("complain");
    $("#warning-div")
      .html('<div><i class="bi-exclamation-octagon-fill"></i></div> VIDEO OBJECTIVE ERROR!<br /><span>Check Video Objective And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (video_duration == "") {
    $("#video_duration").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>VIDEO DURATION ERROR!<br /><span>Check Video Duration And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (video_volume_id == "") {
    $("#video_volume_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>VIDEO VOLUME ERROR!<br /><span>Check Video Volume And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (new_video == "") {
    $("#video").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> VIDEO ERROR!<br /><span>Upload Video And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else if (subscription_pricing_id == "") {
      $("#subscription_pricing_id").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> SUB PRICING ERROR!<br /><span>Check Sub Pricing And Try Again <span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100);

  } else if (status_id == "") {
    $("#reg_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again <span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);

  } else {
    $("#video_title, #video_objective, #video_duration, #subscription_pricing_id, #new_video, #status_id").removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_or_update_sub_topic_video_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("topic_id", topic_id);
      form_data.append("sub_topic_id", sub_topic_id);
      form_data.append("video_id", video_id);
      form_data.append("video_title", video_title);
      form_data.append("video_objective", video_objective);
      form_data.append("video_duration", video_duration);
      form_data.append("video_volume_id", video_volume_id);
      form_data.append("subscription_pricing_id", subscription_pricing_id);
      form_data.append("status_id", status_id);
      form_data.append("video", new_video);
      form_data.append("video_logo", video_logo);
      form_data.append("video_logo", new_video_pix);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
            var video_id = info.video_id;
            var topic_id = info.topic_id;
            var sub_topic_id = info.sub_topic_id;
            var video_logo = info.video_logo;
            var old_video_passport = info.old_video_passport;
            var video = info.video;
            var old_video = info.old_video;

            _upload_sub_video(video, old_video, video_id, topic_id, sub_topic_id);
            if (video_logo !='') {
              _upload_video_pix(message1, message2, video_logo, old_video_passport, video_id, topic_id, sub_topic_id);
            }
          } else {
            $("#warning-div")
              .html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' + message1 + " <br /><span> " +message2 +" </span>").fadeIn(500).delay(5000).fadeOut(100);
              $("#submit_btn").html(btn_text);
              document.getElementById("submit_btn").disabled = false;
            }
        }else{
          _logout();
        }
        },
      });
    }
  }
}


function _upload_sub_video(video, old_video, video_id, topic_id, sub_topic_id){
  var action = "upload_sub_topic_video";
  var new_video = $("#video").prop("files")[0];

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("video_id", video_id);
  form_data.append("video", video);
  form_data.append("video", new_video);
  form_data.append("old_video", old_video);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
        _alert_close2();
        _get_page_with_id('videos', '', topic_id, sub_topic_id);
    },
  });
}



function _upload_video_pix(message1, message2, video_logo, old_video_passport, video_id, topic_id, sub_topic_id) {
  var action = "upload_video_pix";
  var new_video_pix = $("#video_passport").prop("files")[0];

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("video_id", video_id);
  form_data.append("video_logo", video_logo);
  form_data.append("video_logo", new_video_pix);
  form_data.append("old_video_passport", old_video_passport);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      $("#success-div")
        .html('<div><i class="bi-check"></i></div> ' +message1 +" <br> " +message2 +" ").fadeIn(500).delay(5000).fadeOut(100);
        _alert_close();
        _get_page_with_id('videos', '', topic_id, sub_topic_id);
    },
  });
}





function _get_fetch_sub_topic_video(video_id,topic_id,sub_topic_id) {
  var action = "fetch_sub_topic_video_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();
  if (search_txt.length > 2 || search_txt == "") {

    var dataString ="action=" + action + "&video_id=" + video_id + "&topic_id=" + topic_id + "&sub_topic_id=" + sub_topic_id + "&status_id=" + status_id + "&search_txt=" + search_txt;

    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var sub_topic_name = info.sub_topic_name.toUpperCase();
        var topic_name = info.topic_name.toUpperCase();
        var subject_name = info.subject_name.toUpperCase();
        var abbreviation = info.abbreviation.toUpperCase();

        $('#sub_topic_video_name').html(sub_topic_name);
        $('#sub_topic_name').html(sub_topic_name);
        $('#v_sub_topic_name').html(sub_topic_name);
        $('#v_topic_name').html(topic_name);
        $('#v_subject_name').html(subject_name);
        $('#exam_abbreviation').html(abbreviation);
        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var video_id = fetch[i].video_id;
            var topic_id = fetch[i].topic_id;
            var sub_topic_id = fetch[i].sub_topic_id;
            var video_title= fetch[i].video_title.toUpperCase();
            var video_objective = fetch[i].video_objective.substr(0, 120);
            var video_duration  = fetch[i].video_duration;
            var video_passport = fetch[i].video_passport;
            var video_volume_name = fetch[i].video_volume_name;
            var subscription_pricing_name  = fetch[i].subscription_pricing_name;
            var status_name = fetch[i].status_name;

            text +=  
                  '<div class="sub-video-content-div">'+
                    '<div class="div-in">'+
                      '<div class="video-img">'+
                          '<img src="'+ website_url +'/uploaded_files/sub_topic_video_pix/'+ video_passport +'" alt="'+ video_title +'"/>'+
                      '</div>'+

                      '<div class="video-text">'+
                          '<h2>'+ video_title +'</h2>'+
                          '<div class="text">'+ video_objective +'...</div>'+
                          '<div class="bottom-div"><button class="btn" title="EDIT SUB-TOPIC VIDEO" onClick="_get_form_with_id(' + "'video_reg'" + "," +"'" + video_id +"'" + "," +"'" + topic_id +"'" + "," +"'" + sub_topic_id +"'" + ');"><i class="bi-pencil-square"></i> EDIT</button>&nbsp;<span class="volume">'+ video_volume_name +'&nbsp; |</span><span class="volume">'+ subscription_pricing_name +'&nbsp; |</span><span class="volume">'+ video_duration +'&nbsp; | &nbsp;</span><span class="status '+ status_name +'">'+ status_name +'</span></div>'+
                      '</div>'+
                    '</div>'+
                  '</div>';
          }
          $("#fetch_sub_topic_video").html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
          $("#fetch_sub_topic_video").html(text);
        }
        }else{
          _logout();
        }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      "</div>";
    $("#fetch_sub_topic_video").html(text);
  }
}





function _get_fetch_each_sub_video_topic(video_id,topic_id,sub_topic_id) {
  var action = "fetch_sub_topic_video_api";

  var dataString = "action=" + action + "&video_id=" + video_id + "&topic_id=" + topic_id + "&sub_topic_id=" + sub_topic_id;

  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var fetch = info.data;
      var sub_topic_name = info.sub_topic_name;
    
      var video_title = fetch.video_title.toUpperCase();
      var video_objective = fetch.video_objective;
      var video_duration = fetch.video_duration
      var video_volume_id = fetch.video_volume_id;
      var video_volume_name = fetch.video_volume_name;
      var subscription_pricing_id = fetch.subscription_pricing_id;
      var subscription_pricing_name = fetch.subscription_pricing_name;
      var video_passport = fetch.video_passport;
      var video = fetch.video;
      var status_id = fetch.status_id;
      var status_name = fetch.status_name;

      $("#video_title").val(video_title);
      $("#video_objective").val(video_objective);
      $("#video_duration").val(video_duration);
      $('#video_volume_id').append('<option value="' + video_volume_id +'" selected="selected">' + video_volume_name +"</option>");
      $('#subscription_pricing_id').append('<option value="' + subscription_pricing_id +'" selected="selected">' + subscription_pricing_name +"</option>");
      $('#reg_status_id').append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
      $("#sub_topic_name").html(sub_topic_name);
   
      _get_sub_video_pix_view(video_passport);
      _get_sub_video_view(video);
    }else{
      _logout();
    }
    }
  });
}


function _get_sub_video_pix_view(video_passport) {
  var view_sub_topic_video_view = "";
  if (video_passport == "") {
    view_sub_topic_video_view =
    '<img src="'+ website_url + '"/uploaded_files/sub_topic_video_pix/default.png" alt="default"/>';
  } else {
    view_sub_topic_video_view =
    '<img src="' +website_url +"/uploaded_files/sub_topic_video_pix/" +video_passport +'" id="exam-pix" alt="profile picture" />';
  }
  $("#view_sub_topic_video_view").html(view_sub_topic_video_view);
}


function _get_sub_video_view(video) {
  var videoDisplay = document.getElementById('videoDisplay');
  // Set the source of the video element
  videoDisplay.src = website_url + "/uploaded_files/videos/" + video;
  // Hide the default background image
  var videoBackground = document.getElementById('video-background');
  videoBackground.style.display = 'none';
  // Show the video
  videoDisplay.style.display = 'block';
}


function closeVideo() {
  var videoDisplay = document.getElementById('videoDisplay');
  videoDisplay.src = '';  // Set the source to an empty string to stop the video
  videoDisplay.muted = true;  // Mute the audio
}



    
  function _check_password_match() {
  var new_password = $('#new_password').val();
  var confirmed_password = $('#confirmed_password').val();
  if (new_password !== confirmed_password && confirmed_password !== '') {
    $('#message').show();
  } else {
    $('#message').hide();
  }
}

    


function _update_user_password(staff_id) {
  var old_password=$('#old_password').val();
  var new_password=$('#new_password').val();
  var confirmed_password=$('#confirmed_password').val();
  $('#old_password, #new_password, #confirmed_password').removeClass('complain');

  if(old_password==''){
  $('#old_password').addClass('complain');
  $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> Please Fill The Old Passwords<br /><span>Fields cannot be empty</span>').fadeIn(500).delay(5000).fadeOut(100);
  } else if(new_password==''){
     $('#new_password').addClass('complain');
     $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> Please Fill New Passwords<br /><span>Fields cannot be empty</span>').fadeIn(500).delay(5000).fadeOut(100);

  }else if(confirmed_password==''){
     $('#confirmed_password').addClass('complain');
     $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> Please Fill Confirm Passwords<br /><span>Fields cannot be empty</span>').fadeIn(500).delay(5000).fadeOut(100);
  }else if(new_password !=confirmed_password){
     $('#new_password, #confirmed_password').addClass('complain');
     $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> Password Error <br /><span> Password Not Match </span>').fadeIn(500).delay(5000).fadeOut(100);
    } else if (new_password.length < 8) {
      $('#new_password,#confirmed_password').addClass("complain");
      $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> Password Not Accepted <br /><span> Please follow the instructon </span>').fadeIn(500).delay(5000).fadeOut(100);
   
    }else if (new_password.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/ )){
    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#update_btn").html();
      $('#update_btn').html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("update_btn").disabled = true;

      var action = "change_password_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("staff_id", staff_id);
      form_data.append("old_password", old_password);
      form_data.append("new_password", new_password);
      form_data.append("confirmed_password", confirmed_password);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

     if (result==true){
      $('#success-div').html('<div><i class="bi-check"></i></div> ' + message1 +" <br> " + message2 +" ").fadeIn(500).delay(5000).fadeOut(100);
        _alert_close();
      $('#login_user_fullname').html('XXXXX');
      _get_form('access_key_validation_info');
     }else{
      $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> ' +message1 +" <br /><span> " +message2 + " </span>").fadeIn(500) .delay(5000).fadeOut(100);
     $('#old_password').addClass('complain');
     }
     $('#update_btn').html(btn_text);
     document.getElementById('update_btn').disabled=false;
    }else{
      _logout();
    }
  }
  });
} else {
  $('#new_password,#confirmed_password').addClass("complain");
  $('#warning-div').html('<div><i class="bi-exclamation-octagon-fill"></i></div> Password Not Accepted <br /><span> Please follow the instructon </span>').fadeIn(500).delay(5000).fadeOut(100);

  }
}
}













function _add_or_register_faq(faq_id) {
  tinyMCE.triggerSave();
  var cat_id = $("#cat_id").val();
  var faq_question = $("#faq_question").val();
  var faq_answer = $("#faq_answer").val();
  var status_id = $("#reg_status_id").val();
  $("#cat_id, #faq_question, #faq_answer, #status_id").removeClass("complain");

  if (cat_id == "") {
    $("#cat_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>FAQ CATEGORY ERROR!<br /><span>Check Faq Category And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
    } else if (faq_question == "") {
      $("#faq_question").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> FAQ QUESTION ERROR!<br /><span>Check Faq Question Try Again <span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100); 
    } else if (faq_answer == "") {
    $("#faq_answer").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> FAQ ANSWER ERROR!<br /><span>Check Faq Answer Try Again <span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
    } else if (status_id == "") {
      $("#reg_status_id").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again <span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100);
  } else {
    $("#cat_id, #faq_question, #faq_answer, #status_id").removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_or_update_faq_api";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("cat_id", cat_id);
      form_data.append("faq_id", faq_id);
      form_data.append("faq_question", faq_question);
      form_data.append("faq_answer", faq_answer);
      form_data.append("status_id", status_id);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
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
              _alert_close();
              _get_page('faqs', 'faqs');
            
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
              $("#submit_btn").html(btn_text);
              document.getElementById("submit_btn").disabled = false;
          }
          
        }else{
          _logout();
        }
        },
      });
    }
  }
}





function _get_fetch_faq(faq_id) {
  var action = "fetch_faq_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();

  if (search_txt.length > 2 || search_txt == "") {

    var dataString ="action=" + action + "&faq_id=" + faq_id + "&status_id=" + status_id + "&search_txt=" +search_txt;

    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var login_check = info.check;
        if(login_check>0){
        var fetch = info.data;
        var result = info.result;
        var message = info.message;
        var no=0;
        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
             no++;
            var faq_id = fetch[i].faq_id;
            var faq_question = fetch[i].faq_question;
            var faq_answer = fetch[i].faq_answer;
  
            text +=
                  '<div class="quest-faq-div main-faqs active-faq animated fadeIn">'+
                      '<div class="faq-title-text main-faqs-title-div" id="faq12">'+
                          '<span>'+no+'</span>'+
                      '</div>'+

                      '<div class="faq-title-text main-faqs-title-div main-faqs-title-div2" onclick="_collapse('+"'"+'view'+no+"'"+')" style="cursor:pointer;">'+
                          '<i class="bi-pencil-square"></i> <span>'+ faq_question +'</span>'+
                          '<button class="btn" title="EDIT FAQ" onClick="_get_form_with_id(' + "'faqs_reg'" + "," +"'" + faq_id +"'" +');"><i class="bi-pencil-square"></i> EDIT</button>'+
                          '<div class="expand-div" id="'+"view"+no+"num"+'">&nbsp;<i class="bi-plus"></i>&nbsp;</div>	'+
                      '</div>'+
                      
                      '<div class="faq-answer-div faq-answer-div2" id="'+"view"+no+"answer"+'" style="display: none;">'+  
                          '<p>'+ faq_answer +'</p>'+
                      '</div>'+ 
                  '</div>';
          }
          $("#fetch_faq").html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            '<button class="btn" onclick="_get_form(' +"'faqs_reg'" +')"><i class="bi-plus-square"></i>ADD NEW FAQ</button>' +
            "</div>";
          $("#fetch_faq").html(text);
        }
      }else{
        _logout();
      }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      "</div>";
    $("#fetch_faq").html(text);
  }
}





function _get_fetch_each_faq(faq_id) {
  var action = "fetch_faq_api";

  var dataString = "action=" + action + "&faq_id=" + faq_id;

  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var fetch = info.data;
    
      var cat_id = fetch.cat_id.toUpperCase();
      var faq_question = fetch.faq_question;
      var faq_answer = fetch.faq_answer;
      var status_id = fetch.status_id;
      var status_name = fetch.status_name;

      $("#cat_id").val(cat_id);
      $("#faq_question").val(faq_question);
      $("#faq_answer").val(faq_answer);
      $("#reg_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
    }else{
      _logout();
    }
    }
  });
}




function _add_and_update_blog(blog_id) {
  tinyMCE.triggerSave();
  var cat_id = $("#cat_id").val();
  var blog_title = $("#blog_title").val();
  var blog_summary = $("#blog_summary").val();
  var blog_url = $("#blog_url").val();
  var seo_keywords = $("#seo_keywords").val();
  var blog_detail = $("#blog_detail").val();
  var blog_photo = $("#blog_pix").val();
  var new_blog_image = $("#blog_pix").prop("files")[0];
  var status_id = $("#reg_status_id").val();
  var check_blog_id= blog_id;
  $("#blog_cat_id, #blog_title, #blog_url, #seo_keywords, #blog_summary, #blog_detail, #reg_status_id").removeClass("complain");

  if (cat_id == "") {
    $("#blog_cat_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div>BLOG CATEGORY ERROR!<br /><span>Check Blog Category And Try Again</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
    } else if (blog_title == "") {
      $("#blog_title").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> BLOG TITLE ERROR!<br /><span>Check Blog Title And Try Again <span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100); 
    } else if (blog_summary == "") {
        $("#blog_summary").addClass("complain");
        $("#warning-div")
          .html(
            '<div><i class="bi-exclamation-octagon-fill"></i></div> BLOG SUMMARY ERROR!<br /><span>Check Blog Summary And Try Again <span>'
          )
          .fadeIn(500)
          .delay(3000)
          .fadeOut(100); 
     } else if (blog_url == "") {
    $("#blog_url").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> BLOG URL ERROR!<br /><span>Check Blog Url And Try Again <span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
      } else if (seo_keywords == "") {
      $("#seo_keywords").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div>SEO KEYWORDS ERROR!<br /><span>Check Seo Keywords And Try Again <span>'
        )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);  
    } else if (blog_detail == "") {
      $("#blog_detail").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> BLOG DETAIL ERROR!<br /><span>Check Blog Detail And Try Again <span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100); 
    } else if (status_id == "") {
      $("#reg_status_id").addClass("complain");
      $("#warning-div")
        .html(
          '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Check Status And Try Again <span>'
        )
        .fadeIn(500)
        .delay(3000)
        .fadeOut(100);
  } else {

    $("#blog_cat_id, #blog_title, #blog_url, #seo_keywords, #blog_summary, #blog_detail, #reg_status_id").removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#submit_btn").html();
      $("#submit_btn").html('<i class="fa fa-spinner fa-spin"></i> PROCESSING');
      document.getElementById("submit_btn").disabled = true;

      var action = "add_and_update_blog";

      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("blog_id", blog_id);
      form_data.append("cat_id", cat_id);
      form_data.append("blog_title", blog_title);
      form_data.append("blog_url", blog_url);
      form_data.append("seo_keywords", seo_keywords);
      form_data.append("blog_summary", blog_summary);
      form_data.append("blog_detail", blog_detail);
      form_data.append("blog_photo", blog_photo);
      form_data.append("blog_photo", new_blog_image);
      form_data.append("status_id", status_id);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
            var blog_id = info.blog_id;
            var blog_photo = info.blog_photo;
            var old_blog_pix = info.old_blog_pix;
            var blog_url = info.blog_url;
            var db_blog_url = info.db_blog_url;
            
           if (check_blog_id != blog_id) {
            _create_blog_folder(check_blog_id, blog_id, blog_url);
             }else {
            _update_blog_folder(blog_id, blog_url, db_blog_url);
              }  
             _upload_blog_pix(message1, message2, blog_photo, old_blog_pix, blog_id);
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
              $("#submit_btn").html(btn_text);
              document.getElementById("submit_btn").disabled = false;
          }
        
           }else{
        _logout();
      }
        },
      });
    }
  }
}



function _upload_blog_pix(message1, message2, blog_photo, old_blog_pix, blog_id) {
  var action = "upload_blog_pix";
  var new_blog_image = $("#blog_pix").prop("files")[0];

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("blog_id", blog_id);
  form_data.append("blog_photo", blog_photo);
  form_data.append("blog_photo", new_blog_image);

  form_data.append("old_blog_pix", old_blog_pix);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      $("#success-div")
        .html('<div><i class="bi-check"></i></div> ' +message1 +" <br> " +message2 +" ").fadeIn(500).delay(5000).fadeOut(100);
        _get_page('blogs', 'blogs');
      _alert_close();
    },
  });
}



function _create_blog_folder(check_blog_id, blog_id, blog_url) {
  var action = "create_blog_folder";

  var form_data = new FormData();
  form_data.append("action", action);
    form_data.append("check_blog_id", check_blog_id);
  form_data.append("blog_id", blog_id);
  form_data.append("blog_url", blog_url);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      _get_page('blogs', 'blogs');
      _alert_close();
    },
  });
}



function _update_blog_folder(blog_id, blog_url, db_blog_url) {
  var action = "update_blog_folder";

  var form_data = new FormData();
  form_data.append("action", action);
  form_data.append("blog_id", blog_id);
  form_data.append("blog_url", blog_url);
  form_data.append("db_blog_url", db_blog_url);

  $.ajax({
    url: admin_local_portal_url,
    type: "POST",
    data: form_data,
    dataType: "json",
    contentType: false,
    cache: false,
    processData: false,
    success: function (html) {
      _get_page('blogs', 'blogs');
      _alert_close();
    },
  });
}






function _get_fetch_blog(blog_id) {
  var action = "fetch_blog_api";
  var search_txt = $("#search_txt").val();
  var status_id = $("#status_id").val();

  if (search_txt.length > 2 || search_txt == "") {

    var dataString ="action=" + action + "&blog_id=" + blog_id + "&status_id=" + status_id + "&search_txt=" +search_txt;

    $.ajax({
      type: "POST",
      url: api,
      data: dataString,
      dataType: "json",
      cache: false,
      success: function (info) {
        var fetch = info.data;
        var result = info.result;
        var message = info.message;

        var text = "";

        if (result == true) {
          for (var i = 0; i < fetch.length; i++) {
            var blog_id = fetch[i].blog_id;
            var blog_title = fetch[i].blog_title;
            var status_name = fetch[i].status_name;
            var blog_pix = fetch[i].blog_pix;
 
            var date = fetch[i].updated_time;
            var originalDate = new Date(date);
            var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var day = originalDate.getDate();
            var month = monthNames[originalDate.getMonth()];
            var year = originalDate.getFullYear();
            var formattedDate = day + ' ' + month + ' ' + year;
            console.log(formattedDate);

            text +=
              '<div class="blog-div animated fadeIn">'+
                '<div class="btn-div">'+
                    '<button class="btn" onclick="_get_form_with_id(' + "'blog_reg'" + "," +"'" + blog_id +"'" +')">EDIT BLOG DETAILS</button>'+                    '<br clear="all">'+
                '</div>'+

                '<div class="ACTIVE '+ status_name +'">'+ status_name +'</div>'+
                '<div class="img-div"><img src="'+ website_url +'/uploaded_files/blog_pix/'+ blog_pix +'" alt="'+ blog_title +'"></div>'+
                '<div class="text-div">'+
                  '<div class="text-in">'+
                    '<div class="text"><span>ANNOUNCEMENT</span> </div>'+
                  '</div>'+
                  '<h2>'+ blog_title +'</h2>'+
                  '<div class="text-in">'+
                      '<div class="text">UPDATED ON: <span>'+ formattedDate +'</span> </div>'+
                      '<div class="text"><span>10</span> VIEWS</div>'+
                  '</div>'+
                '</div>'+
                '<br>'+
              '</div>';
            }
            $("#fetch_blog").html(text);
        } else {
          text +=
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            '<button class="btn" onclick="_get_form(' +"'blog_reg'" +')"><i class="bi-plus-square"></i>ADD NEW BLOG</button>' +
            "</div>";
          $("#fetch_blog").html(text);
        }
      },
    });
  } else {
    text +=
      '<div class="false-notification-div">' +
      "<p> " +
      message1 +
      " </p>" +
      "</div>";
    $("#fetch_blog").html(text);
  }
}




function _get_fetch_each_blog(blog_id) {
  var action = "fetch_blog_api";

  var dataString = "action=" + action + "&blog_id=" + blog_id;

  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var fetch = info.data;
    
      var cat_id = fetch.cat_id.toUpperCase();
      var blog_title = fetch.blog_title;
      var blog_summary = fetch.blog_summary;
      var blog_url = fetch.blog_url;
      var seo_keywords = fetch.seo_keywords;
      var blog_detail = fetch.blog_detail;
      var blog_pix = fetch.blog_pix;
      var status_id = fetch.status_id;

      $("#cat_id").val(cat_id);
      $("#blog_title").val(blog_title);
      $("#blog_summary").val(blog_summary);
      $("#blog_url").val(blog_url);
      $("#seo_keywords").val(seo_keywords);
      $("#blog_detail").val(blog_detail);
      $("#reg_status_id").val(status_id);
      _get_blog_pix_view(blog_pix);
    }
  });
}


function _get_blog_pix_view(blog_pix) {
  var view_blog_pix_view = "";
  if (blog_pix == "") {
    view_blog_pix_view =
    '<img src="'+ website_url + '"/uploaded_files/blog_pix/default.png" alt="default"/>';
  } else {
    view_blog_pix_view =
    '<img src="'+ website_url +'/uploaded_files/blog_pix/'+ blog_pix +'" id="blog_pics" alt="' + blog_title +'" />';
  }
  $("#view_blog_pix_view").html(view_blog_pix_view);
}



function _get_dashboard_count() {
  var action = "fetch_dashboard_count_api";
  var dataString = "action=" + action;

  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var login_check = info.check;
      if(login_check>0){
      var fetch = info.data;

      var total_active_staff = fetch.total_active_staff;
      var total_active_user = fetch.total_active_user;
      var total_active_subject = fetch.total_active_subject;
      var total_active_exam = fetch.total_active_exam;
      var total_active_blog = fetch.total_active_blog;
      var total_active_faq = fetch.total_active_faq;

      $("#total_active_staff").html(total_active_staff);
      $("#total_active_user").html(total_active_user);
      $("#total_active_subject").html(total_active_subject);
      $("#total_active_exam").html(total_active_exam);
      $("#total_active_blog").html(total_active_blog);
      $("#total_active_faq").html(total_active_faq);
    }else{
      _logout();
    }
  },
  });
}







function _get_active_details(ids,text){
	$('#next-all, #next-sub, #next-trans, #next-wallet').removeClass('active-btn');
	$('#next-'+text).addClass('active-btn');
	$('#order-title').html('<span id="prev"><i class="fa fa-arrow-left" onClick="_get_details('+"'get_order_items1'"+','+"'"+ids+"'"+','+"'get_order_items'"+')"></i></span>');	 
}


function _get_details(page,ids,text,status_name,name){
	_get_active_details(ids,text);
	var action='get_details';
	$('#get_details').html('<div class="ajax-loader details-ajax"><img src="' +website_url +'/all-images/images/ajax-loader.gif"/></div>').fadeIn("fast");
	var dataString ='action='+ action+'&page='+ page+'&ids='+ ids+'&status_name='+ status_name+'&name='+ name;
	$.ajax({
	type: "POST",
	url: admin_local_portal_url,
	data: dataString,
	cache: false,
	success: function(html){
		$('#get_details').html(html);
	}
	});
}


function _get_user_info(page, user_id) {
  var action = "fetch_user_api";
  var dataString = "action=" + action + "&user_id=" + user_id;
  $.ajax({
    type: "POST",
    url: api,
    data: dataString,
    dataType: "json",
    cache: false,
    success: function (info) {
      var result = info.result;
      var login_check = info.check;
      if(login_check>0){

      if (result == true) {
        if (page == 'user_details') {
        var data = info.data;
        var fullname = data.fullname;
        var mobile = data.mobile;
        var email = data.email;
        var passport = data.passport;
        if (passport == "") {
          passport = "friends.png";
        }

        var status_id = data.status_id;
        var status_name = data.status_name;
        var last_login = data.last_login;

        $("#user_login_fullname").html(fullname);
        $("#user_last_login").html(last_login);
        $("#user_status_name").html(status_name);
        $("#current_user_pass").html('<img src="' + website_url +"/uploaded_files/user_pix/" +passport +'" id="pass" alt="'+passport +'"/>');

        $("#updt_fullname").val(fullname);
        $("#updt_mobile").val(mobile);
        $("#updt_email").val(email);
        $("#updt_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
      
    }else if (page == 'user_profile_details') {
        var data = info.data;
        var fullname = data.fullname;
        var mobile = data.mobile;
        var email = data.email;
        var passport = data.passport;
        if (passport == "") {
          passport = "friends.png";
        }

        var status_id = data.status_id;
        var status_name = data.status_name;
        var last_login = data.last_login;

        $("#user_login_fullname").html(fullname);
        $("#user_last_login").html(last_login);
        $("#user_status_name").html(status_name);
        $("#current_user_pass").html('<img src="' + website_url +"/uploaded_files/user_pix/" +passport +'" id="pass" alt="'+passport +'"/>');

        $("#updt_fullname").val(fullname);
        $("#updt_mobile").val(mobile);
        $("#updt_email").val(email);
        $("#updt_status_id").append('<option value="' + status_id +'" selected="selected">' + status_name +"</option>");
      }
      
    }else{
     // do nothing
    }
    }else{
    _logout();
    }
    },
  });
}







function _update_user_profile(user_id) {
  var fullname = $("#updt_fullname").val();
  var email = $("#updt_email").val();
  var mobile = $("#updt_mobile").val();
  var status_id = $("#updt_status_id").val();

  $(
    "#updt_fullname, #updt_email, #updt_mobile, #updt_status_id"
  ).removeClass("complain");

  if (fullname == "") {
    $("#updt_fullname").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> FULLNAME ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (email == "" || $("#updt_email").val().indexOf("@") <= 0) {
    $("#updt_email").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> EMAIL ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (mobile == "") {
    $("#updt_mobile").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> MOBILE ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else if (status_id == "") {
    $("#updt_status_id").addClass("complain");
    $("#warning-div")
      .html(
        '<div><i class="bi-exclamation-octagon-fill"></i></div> STATUS ERROR!<br /><span>Fill Fields To Continue</span>'
      )
      .fadeIn(500)
      .delay(3000)
      .fadeOut(100);
  } else {
    $(
      "#updt_fullname, #updt_email, #updt_mobile, #updt_status_id"
    ).removeClass("complain");

    if (confirm("Confirm!!\n\n Are you sure to PERFORM THIS ACTION?")) {
      var btn_text = $("#update_btn").html();
      $("#update_btn").html('<i class="fa fa-spinner fa-spin"></i> UPDATING');
      document.getElementById("update_btn").disabled = true;

      var action = "update_user_api";
      var form_data = new FormData();
      form_data.append("action", action);
      form_data.append("user_id", user_id);
      form_data.append("fullname", fullname);
      form_data.append("email", email);
      form_data.append("mobile", mobile);
      form_data.append("status_id", status_id);

      $.ajax({
        type: "POST",
        url: api,
        data: form_data,
        dataType: "json",
        contentType: false,
        cache: false,
        processData: false,
        success: function (info) {
          var login_check = info.check;
          if(login_check>0){
          var result = info.result;
          var message1 = info.message1;
          var message2 = info.message2;

          if (result == true) {
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
              _get_page('active_users', 'user');
          } else {
            $("#updt_email").addClass("complain");
            $("#warning-div")
              .html(
                '<div><i class="bi-exclamation-octagon-fill"></i></div> EMAIL ERROR!<br /><span>Fill Fields To Continue</span>'
              )
              .fadeIn(500)
              .delay(3000)
              .fadeOut(100);
            }
              $("#update_btn").html(btn_text);
              document.getElementById("update_btn").disabled = false;
        }else{
        _logout();
        }
        },
      });
    }
  }
}






function _fetch_custom_report(page, user_id, view_report) {
	var datefrom = $('#datepicker-from').val();
	var dateto = $('#datepicker-to').val();

	if ((datefrom == '') || (dateto == '')) {
		$('#datepicker-from,#datepicker-to').addClass('complain');
		$('#warning-div').html('<div><i class="bi-exclamation-circle"></i></div>DATE ERROR<br /> <span>Select date to continue</span>').fadeIn(500).delay(3000).fadeOut(100);
	} else {

		$('#datepicker-from,#datepicker-to').removeClass('complain');
		if (page == 'wallet_history_details') {		
      $('#fetch_all_wallet_history').html('<div class="ajax-loader details-ajax"><img src="' + website_url + '/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
      _get_user_wallet_history_details(page, user_id, view_report, datefrom, dateto);

		} else if (page == 'subscription_history_details') {	
      $('#fetch_all_subscription_history').html('<div class="ajax-loader details-ajax"><img src="' + website_url + '/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
      _get_user_subscription_history(page, user_id, view_report, datefrom, dateto);

		} else if (page == 'transaction_history_detail') {
			$('#fetch_all_transaction_history').html('<div class="ajax-loader details-ajax"><img src="' + website_url + '/all-images/images/ajax-loader.gif"/></div>').fadeIn('fast');
      _get_user_transaction(page, user_id, '', view_report, datefrom, dateto);

		} else {
			/// do nothing
		}
  }

}




function _get_user_wallet_history_details(page, user_id, view_report, datefrom, dateto) {
	var action = 'fetch_wallet_history_api';
	var dataString = 'action=' + action + '&user_id=' + user_id + '&view_report=' + view_report + '&datefrom=' + datefrom + '&dateto=' + dateto;
	$.ajax({
		type: "POST",
		url: api,
		data: dataString,
		dataType: 'json',
		cache: false,
		success: function (info) {
				var fetch = info.data;
				var result = info.result;
				var message = info.message;
        var wallet_balance = info.wallet_balance;
        var amount_received = info.amount_received;
        var amount_withdraw = info.amount_withdraw;

				var no = 0;
				var text = '';

				text =
					'<tr class="tuple">' +
					'<td>SN</td>' +
					'<td>DATE</td>' +
					'<td>TRANSACTION ID</td>' +
					'<td>BALANCE BEFORE</td>' +
					'<td>AMOUNT LOADED</td>' +
					'<td>BALANCE AFTER</td>' +
					'<td>TRANSACTION TYPE</td>' +
					'<td>STATUS</td>' +
					'</tr>';

				if (result == true) {
          if (page == 'wallet_history_details') {
          for (var i = 0; i < fetch.length; i++) {
							no++;

							var date = fetch[i].date;
							var payment_id = fetch[i].payment_id;
							var balance_before = fetch[i].balance_before;
							var amount = fetch[i].amount;
							var balance_after = fetch[i].balance_after;
							var transaction_type_name = fetch[i].transaction_type_name;
							var status_name = fetch[i].status_name;
							var count_all = fetch[i].count_all;
							text +=
								'<tr>' +
								'<td>' + no + '</td>' +
								'<td>' + date + '</td>' +
								'<td>' + payment_id + '</td>' +
								'<td><span>₦</span> ' + balance_before + '</td>' +
								'<td class="amount_load"><span>₦</span> ' + amount + '</td>' +
								'<td><span>₦</span> ' + balance_after+ '</td>' +
								'<td>' + transaction_type_name + '</td>' +
								'<td><div class="status-div ' + status_name + '">' + status_name + '</div></td>' +
								'</tr>';

						}
            $('#wallet_balance').html(wallet_balance);
            $('#amount_received').html(amount_received);
            $('#amount_withdraw').html(amount_withdraw);
						$('#current_count').html(no);
						$('#total_count').html(count_all);
						$('#fetch_all_wallet_history').html(text);
          } else if(page=='user_details'){
            $('#wallet_balance').html(wallet_balance);
            $('#amount_received').html(amount_received);
            $('#amount_withdraw').html(amount_withdraw);
          }else{
            //do nothing
          }
				} else {
          $('#current_count,#total_count').html(no);
					text =
          '<div class="false-notification-div">' +
          "<p> " +
          message +
          " </p>" +
          "</div>";
					$('#fetch_all_wallet_history').html(text);
				}
		}
	});
}






function _get_user_subscription_history(page, user_id, view_report, datefrom, dateto) {
	var action = 'fetch_subscription_api';
	var dataString = 'action=' + action + '&user_id=' + user_id + '&view_report=' + view_report+ '&datefrom=' + datefrom + '&dateto=' + dateto;
	$.ajax({
		type: "POST",
		url: api,
		data: dataString,
		dataType: 'json',
		cache: false,
		success: function (info) {
				var fetch = info.data;
				var result = info.result;
				var message = info.message;
				var no = 0;
				var text = '';

				text =
					'<tr class="tuple">' +
					'<td>SN</td>' +
					'<td>EXAM</td>' +
					'<td>SUBJECT</td>' +
					'<td>TOPIC</td>' +
					'<td>SUB-TOPIC</td>' +
					'<td>DATE</td>' +
					'<td>DUE DATE</td>' +
					'<td>STATUS</td>' +
					'</tr>';

				if (result == true) {
          if (page == 'subscription_history_details') {
						for (var i = 0; i < fetch.length; i++) {
							no++;
							var abbreviation = fetch[i].abbreviation.toUpperCase();
							var exam_passport = fetch[i].exam_passport;
							var subject_name = fetch[i].subject_name.toUpperCase();
							var topic_name = fetch[i].topic_name.toUpperCase();
							var sub_topic_name = fetch[i].sub_topic_name.toUpperCase();
							var start_date = fetch[i].start_date;
							var due_date = fetch[i].due_date;
							var status_name = fetch[i].status_name.toUpperCase();
							var count_all = fetch[i].count_all;


							text +=
								'<tr>' +
								'<td>' + no + '</td>' +
								'<td class="logo-tb"><div class="logo-div"><img src="' + website_url + '/uploaded_files/exam_pix/' + exam_passport + '" alt="' + abbreviation + ' LOGO"/> </div><span id="">' + abbreviation + '</span>  </td>' +
								'<td>' + subject_name + '</td>' +
								'<td>' + topic_name + '</td>' +
								'<td>' + sub_topic_name + '</td>' +
								'<td>' + start_date + '</td>' +
								'<td>' + due_date + '</td>' +
								'<td><div class="status-div ' + status_name + '">' + status_name + '</div></td>' +
								'</tr>';
						}
						$('#sub_count').html(no);
						$('#sub_total_count').html(count_all);
						$('#fetch_all_subscription_history').html(text);
          } else {
						/// do nothing
					}
				} else {
					$('#sub_count,#sub_total_count').html(no);
					text =
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
					$('#fetch_all_subscription_history').html(text);
				}
		}
	});
}





function _get_user_transaction(page, user_id, payment_id, view_report, datefrom, dateto) {
	var action = 'fetch_transaction_history_api';
	var dataString = 'action=' + action + '&user_id=' + user_id + '&payment_id=' + payment_id+ '&view_report=' + view_report+ '&datefrom=' + datefrom+ '&dateto=' + dateto;
	$.ajax({
		type: "POST",
		url: api,
		data: dataString,
		dataType: 'json',
		cache: false,
		success: function (info) {
				var fetch = info.data;
				var fetch2 = info.data2;
				var result = info.result;
				var message = info.message;
				var db_payment_status_id = info.db_payment_status_id;

				var no = 0;
				var text = '';

				text =
					'<tr class="tuple">' +
					'<td>SN</td>' +
					'<td>DATE</td>' +
					'<td>TRANSACTION ID</td>' +
					'<td>TRANSACTION TYPE</td>' +
					'<td>TRANSACTION METHOD</td>' +
					'<td>AMOUNT</td>' +
					'<td>STATUS</td>' +
					'<td>ACTION</td>' +
					'</tr>';

				if (result == true) {
          if (page == 'transaction_history_detail') {
						for (var i = 0; i < fetch.length; i++) {
							no++;
							
							var date = fetch[i].date;
							var payment_id = fetch[i].payment_id;
							var transaction_type_name = fetch[i].transaction_type_name;
							var fund_method_name = fetch[i].fund_method_name;
							var amount = fetch[i].amount;
							var status_name = fetch[i].status_name;
							var count_all = fetch[i].count_all;

							text +=
								'<tr>' +
								'<td>' + no + '</td>' +
								'<td>' + date + '</td>' +
								'<td>' + payment_id + '</td>' +
								'<td>' + transaction_type_name + '</td>' +
								'<td>' + fund_method_name + '</td>' +
								'<td><span>₦</span> ' + amount + '</td>' +
								'<td><div class="status-div ' + status_name + '">' + status_name + '</div></td>' +
								'<td><button class="btn" onclick="_get_form_with_id(' + "'transaction_details'" + "," +"'" + user_id +"'" + "," +"'" + payment_id +"'" + "," + "'" + ' ' +"'" +');"><i class="bi bi-eye"></i> DETAILS</button></td>' +
								'</tr>';
						}

						$('#trans_count').html(no);
						$('#trans_total_count').html(count_all);
						$('#fetch_all_transaction_history').html(text);

          } else if (page == 'transaction_details') {
						//// TRANSACTION DETAILS
						var payment_id = fetch.payment_id;
						var payment_status_id = fetch.status_id;
						var transaction_type_name = fetch.transaction_type_name;
						var fund_method_name = fetch.fund_method_name;
						var amount = fetch.amount;
						var date = fetch.date;
						var payment_status_name = fetch.status_name;
						
						
						//// EXAM SUBCRIPTION DETAILS
						var abbreviation = fetch2.abbreviation.toUpperCase();
						var subject_name = fetch2.subject_name.toUpperCase();
						var topic_name = fetch2.topic_name.toUpperCase();
						var sub_topic_name = fetch2.sub_topic_name.toUpperCase();
					
						if(payment_status_id==db_payment_status_id){
							var subscription = fetch2.subscription;
						
							if((subscription=='yes')){
								var start_date = fetch2.start_date;
								var due_date = fetch2.due_date;
								var subscription_status_name = fetch2.status_name.toUpperCase();
	
							text= '<div class="alert alert-success">'+
								'<span>TRANSACTION DETAILS</span>'+
								'<div class="trans-statistics">Transaction ID: <div class="value" id="transaction_id">'+payment_id+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Transaction Type: <div class="value" id="transaction_type">'+transaction_type_name+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Transaction Method: <div class="value" id="transaction_method">'+fund_method_name+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Amount: <div class="value" id="amount"> '+amount+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Date: <div class="value" id="date">'+date+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Status: <div class="value" id="status">'+payment_status_name+'</div><br clear="all" /></div>'+
							'</div>'+

								

							'<div class="alert alert-success">'+
								'<span>EXAM SUBSCRIPTION DETAILS</span>'+
								'<div class="trans-statistics">Exam Name: <div class="value" id="view_abbreviation">'+abbreviation+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Subject Name: <div class="value" id="view_subject_name">'+subject_name+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Topic Name: <div class="value" id="view_topic_name">'+topic_name+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Sub-Topic Name: <div class="value" id="view_sub_topic_name">'+sub_topic_name+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Start Date: <div class="value" id="view_start_date"> '+start_date+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Due Date: <div class="value" id="view_due_date">'+due_date+'</div><br clear="all" /></div>'+
								'<div class="trans-statistics">Status: <div class="value" id="view_subcription_status_name">'+subscription_status_name+'</div><br clear="all" /></div>'+
							'</div>';

							}else{
								text= '<div class="alert">'+
									'<span>TRANSACTION DETAILS</span>'+
									'<div class="trans-statistics">Transaction ID: <div class="value text_details" id="transaction_id">'+payment_id+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Transaction Type: <div class="value text_details" id="transaction_type">'+transaction_type_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Transaction Method: <div class="value text_details" id="transaction_method">'+fund_method_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Amount: <div class="value text_details" id="amount"> '+amount+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Date: <div class="value text_details" id="date">'+date+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Status: <div class="value text_details" id="status">'+payment_status_name+'</div><br clear="all" /></div>'+
								'</div>'+

								'<div class="alert ">'+
									'<span>EXAM SUBSCRIPTION DETAILS</span>'+
									'<div class="trans-statistics">Exam Name: <div class="value text_details" id="view_abbreviation">'+abbreviation+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Subject Name: <div class="value text_details" id="view_subject_name">'+subject_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Topic Name: <div class="value text_details" id="view_topic_name">'+topic_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Sub-Topic Name: <div class="value text_details" id="view_sub_topic_name">'+sub_topic_name+'</div><br clear="all" /></div>'+
									// '<div class="trans-statistics">Start Date: <div class="value" id="view_start_date"> '+start_date+'</div><br clear="all" /></div>'+
									// '<div class="trans-statistics">Due Date: <div class="value" id="view_due_date">'+due_date+'</div><br clear="all" /></div>'+
									// '<div class="trans-statistics">Status: <div class="value" id="view_subcription_status_name">'+subscription_status_name+'</div><br clear="all" /></div>'+
								'</div>';
							}
						}else{
							
							text= '<div class="alert">'+
									'<span>TRANSACTION DETAILS</span>'+
									'<div class="trans-statistics">Transaction ID: <div class="value text_details" id="transaction_id">'+payment_id+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Transaction Type: <div class="value text_details" id="transaction_type">'+transaction_type_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Transaction Method: <div class="value text_details" id="transaction_method">'+fund_method_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Amount: <div class="value text_details" id="amount"> '+amount+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Date: <div class="value text_details" id="date">'+date+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Status: <div class="value text_details" id="status">'+payment_status_name+'</div><br clear="all" /></div>'+
								'</div>'+

								'<div class="alert ">'+
									'<span>EXAM SUBSCRIPTION DETAILS</span>'+
									'<div class="trans-statistics">Exam Name: <div class="value text_details" id="view_abbreviation">'+abbreviation+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Subject Name: <div class="value text_details" id="view_subject_name">'+subject_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Topic Name: <div class="value text_details" id="view_topic_name">'+topic_name+'</div><br clear="all" /></div>'+
									'<div class="trans-statistics">Sub-Topic Name: <div class="value text_details" id="view_sub_topic_name">'+sub_topic_name+'</div><br clear="all" /></div>'+
									// '<div class="trans-statistics">Start Date: <div class="value" id="view_start_date"> '+start_date+'</div><br clear="all" /></div>'+
									// '<div class="trans-statistics">Due Date: <div class="value" id="view_due_date">'+due_date+'</div><br clear="all" /></div>'+
									// '<div class="trans-statistics">Status: <div class="value" id="view_subcription_status_name">'+subscription_status_name+'</div><br clear="all" /></div>'+
								'</div>';
						}
						
						$('#View_transaction_details').html(text);
						////////////////
          } else {
						/// do nothing
					}
				} else {
					$('#trans_count,#trans_total_count').html(no);
					text =
            '<div class="false-notification-div">' +
            "<p> " +
            message +
            " </p>" +
            "</div>";
					$('#fetch_all_transaction_history').html(text);
				}
		}
	});
}
