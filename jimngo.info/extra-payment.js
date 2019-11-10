///////////////////////////////////////////////////////////////////////////////
// Business Hours                                                             /
///////////////////////////////////////////////////////////////////////////////

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
  show('opening_monday');
  hide('opening_tomorrow');
  hide('opening_soon');
  hide_phone();
}

function open_tomorrow() {
  hide('opening_monday');
  show('opening_tomorrow');
  hide('opening_soon');
  hide_phone();
}

function open_soon() {
  hide('opening_monday');
  hide('opening_tomorrow');
  show('opening_soon');
  hide_phone();
}

function open() {
  hide('opening_monday');
  hide('opening_tomorrow');
  hide('opening_soon');
  show_phone();
}

function hide_phone() {
  show('text');
  hide('call');
  show('email');
}

function show_phone() {
  show('text');
  show('call');
  show('email');
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

///////////////////////////////////////////////////////////////////////////////
// Fixed Header                                                               /
///////////////////////////////////////////////////////////////////////////////

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

///////////////////////////////////////////////////////////////////////////////
// Misc ----------------------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

function get_value(id) {
  return document.getElementById(id).value;
}

function set_value(id, value) {
  document.getElementById(id).value = value;
}

function toString(id, value, digit) {
  document.getElementById(id).innerHTML = value.toLocaleString(undefined, {
    minimumFractionDigits: digit,
    maximumFractionDigits: digit
  });
}

///////////////////////////////////////////////////////////////////////////////
// Calculator                                                                 /
///////////////////////////////////////////////////////////////////////////////

const calculator = 'extra-payment-calc';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
additional_payment = 0;

slide_up(widget_slides);
slide_down('slide-1');

function slide_up(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].style.display = 'none';
    array[i].style.height = '0px';
  }
}

function slide_down(id) {
  var content = document.getElementById(id);
  content.style.display = 'block';
  content.style.height = content.scrollHeight + 'px';
}

function show_slide(id) {
  slide_up(widget_slides);
  slide_down(id);
  if (window.innerWidth < 480) {
    document.getElementById(calculator).scrollIntoView();
  }
}

function show_results() {
  calc();
  if (additional_payment <= 0 || current_interest <= 0) {
    return;
  }
  show_slide('results');
}

function calc() {
  current_loan_balance = Number(get_value("current-loan-balance"));
  if (current_loan_balance <= 0) {
    alert("Please enter your Current Loan Balance");
    set_value("current-loan-balance", '');
    return;
  }
  current_payment = Number(get_value("current-payment"));
  if (current_payment <= 0) {
    alert("Please enter your current Monthly Payment");
    set_value("current-payment", '');
    return;
  }
  toString('Current-Payment', current_payment, 0);
  // Estimate Maximum Allowed Interest Rate
  max_int_rate = ((current_payment * 12) / (current_loan_balance)) * 100;
  current_interest = Number(get_value("apr"));
  if (current_interest <= 0) {
    alert("Please enter your current Interest Rate");
    set_value("apr", '');
    current_interest = 0;
    return;
  }
  // Calculate Mininum Payment based on current loan amount and interest rate for 30 yrs
  var n = 360; // 30 years - 360 months
  var r = current_interest / 1200;
  min_payment = current_loan_balance * r / (1 - (Math.pow(1 / (1 + r), n)));
  // Verify that interest rate entered is valid
  if (current_payment < min_payment) {
    alert("Interest rate is too high - Please verify your current loan amount, monthly payment and interest rate");
    set_value("apr", '');
    current_interest = 0;
    return;
  }
  additional_payment = Number(get_value("additional-payment"));
  if (additional_payment <= 0) {
    alert("Please enter your monthly additional payment amount");
    return;
  }
  calc_years_to_pay(current_payment);
  document.getElementById("years-to-pay-current-payment").innerHTML = years_to_pay;
  total_cost_current_payment = number_of_payment_left * current_payment;
  toString('total-cost-current-payment', total_cost_current_payment, 0);
  total_interest_cost_current_payment = total_cost_current_payment - current_loan_balance;
  new_payment = current_payment + additional_payment;
  toString('New-Payment', new_payment, 0);
  calc_years_to_pay(new_payment);
  document.getElementById("years-to-pay-new-payment").innerHTML = years_to_pay;
  total_cost_new_payment = number_of_payment_left * new_payment;
  toString('total-cost-new-payment', total_cost_new_payment, 0)
  total_interest_cost_new_payment = total_cost_new_payment - current_loan_balance;
  amount_saved = total_cost_current_payment - total_cost_new_payment;
  toString('amount-saved', amount_saved, 0);
}

function calc_years_to_pay(payment_amount) {
  var r = current_interest / 1200; // Current monthly interest rate
  var P = current_loan_balance; // Current loan balance
  var M = payment_amount; // Current monthly payment
  number_of_payment_left = -(Math.log(1 - (r * P / M)) / (Math.log(1 + r))); // Calculate number of payment left  
  var years = Math.floor(number_of_payment_left / 12);
  var months = Math.floor((number_of_payment_left / 12 - years) * 12);
  years_to_pay = years + " years, " + months + " months";
}