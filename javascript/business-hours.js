setInterval(current_date_time, 1000);

function current_date_time() {
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  // If Saturday after 4 pm
  if (day == 6 && hour >= 18) {
    open_monday();
  } else {
    // If Sunday
    if (day == 0) {
      open_tomorrow();
    } else {
      // Check if it's outside of business hours
      if (hour < 10) {
        open_soon();
      } else {
        if (hour >= 18) {
          open_tomorrow();
        } else {
          show_phone();
        }
      }
    }
  }
}

function open_monday() {
  $("#opening_monday").show();
  $("#opening_tomorrow").hide();
  $("#opening_soon").hide();
  hide_phone();
}

function open_tomorrow() {
  $("#opening_monday").hide();
  $("#opening_tomorrow").show();
  $("#opening_soon").hide();
  hide_phone();
}

function open_soon() {
  $("#opening_monday").hide();
  $("#opening_tomorrow").hide();
  $("#opening_soon").show();
  hide_phone();
}

function open() {
  $("#opening_monday").hide();
  $("#opening_tomorrow").hide();
  $("#opening_soon").hide();
  show_phone();
}

function hide_phone() {
  $("#phone").hide();
  $("#mobile-phone").hide();
  $("#mobile-sms-email").show();
}

function show_phone() {
  $("#phone").show();
  $("#mobile-phone").show();
  $("#mobile-sms-email").hide();
}