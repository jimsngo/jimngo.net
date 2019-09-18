additional_payment = 0;
function hide_calc_slides() {
  var widget_slides = document.getElementById("extra-payment-calc").getElementsByClassName("widget-slide");
  for (var i = 0; i < widget_slides.length; i++) {
    $(widget_slides[i]).hide();
  }
}
function show_slide(id) {
  hide_calc_slides();
  var element = "#" + id;
  $(element).slideDown("slow");
  if($(window).width() <= 480) {
    document.getElementById("extra-payment-calc").scrollIntoView();
  }
}
function show_results() {
  calc();
  if (additional_payment <= 0 || current_interest <= 0) {
    return;
  };
  show_slide('results');
}
function calc() {
  current_loan_balance = Number(document.getElementById("current-loan-balance").value);
  if (current_loan_balance <= 0) {
    alert("Please enter your Current Loan Balance");
    document.getElementById("current-loan-balance").value = "";
    return;
  }
  current_payment = Number(document.getElementById("current-payment").value);
  if (current_payment <= 0) {
    alert("Please enter your current Monthly Payment");
    document.getElementById("current-payment").value = "";
    return;
  }
  document.getElementById("Current-Payment").innerHTML = current_payment.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  // Estimate Maximum Allowed Interest Rate
  max_int_rate = ((current_payment * 12) / (current_loan_balance)) * 100;
  current_interest = Number(document.getElementById("apr").value);
  if (current_interest <= 0) {
    alert("Please enter your current Interest Rate");
    document.getElementById("apr").value = "";
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
    document.getElementById("apr").value = "";
    current_interest = 0;
    return;
  }
  additional_payment = Number(document.getElementById("additional-payment").value);
  if (additional_payment <= 0) {
    alert("Please enter your monthly additional payment amount");
    return;
  }
  calc_years_to_pay(current_payment);
  document.getElementById("years-to-pay-current-payment").innerHTML = years_to_pay;
  total_cost_current_payment = number_of_payment_left * current_payment;
  document.getElementById("total-cost-current-payment").innerHTML = total_cost_current_payment.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  total_interest_cost_current_payment = total_cost_current_payment - current_loan_balance;
  new_payment = current_payment + additional_payment;
  document.getElementById("New-Payment").innerHTML = new_payment.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  calc_years_to_pay(new_payment);
  document.getElementById("years-to-pay-new-payment").innerHTML = years_to_pay;
  total_cost_new_payment = number_of_payment_left * new_payment;
  document.getElementById("total-cost-new-payment").innerHTML = total_cost_new_payment.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  total_interest_cost_new_payment = total_cost_new_payment - current_loan_balance;
  amount_saved = total_cost_current_payment - total_cost_new_payment;
  document.getElementById("amount-saved").innerHTML = amount_saved.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
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