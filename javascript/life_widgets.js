// Life Need Widget
function hide_life_need_widget_slides() {
  var widget_slides = document.getElementById("life-need-widget").getElementsByClassName("widget-slide");
  for (var i = 0; i < widget_slides.length; i++) {
    $(widget_slides[i]).hide();
  }
};
function show_life_need_slide_1() {
  hide_life_need_widget_slides();
  $("#life-need-slide-1").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-need-slide-1").scrollIntoView();
  } else {
    document.getElementById("life-need-widget").scrollIntoView();
  }
};
function show_life_need_q1() {
  hide_life_need_widget_slides();
  $("#life-need-q1").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-need-q1").scrollIntoView();
  } else {
    document.getElementById("life-need-widget").scrollIntoView();
  }
};
function show_life_need_q2() {
  hide_life_need_widget_slides();
  $("#life-need-q2").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-need-q2").scrollIntoView();
  } else {
    document.getElementById("life-need-widget").scrollIntoView();
  }
};
function show_life_need_q3() {
  hide_life_need_widget_slides();
  $("#life-need-q3").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-need-q3").scrollIntoView();
  } else {
    document.getElementById("life-need-widget").scrollIntoView();
  }
};
function show_life_need_results() {
  hide_life_need_widget_slides();
  $("#life-need-results").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-need-results").scrollIntoView();
  } else {
    document.getElementById("life-need-widget").scrollIntoView();
  };
  calc();
};
function calc() {
  get_final_expense();
  get_outstanding_debt();
  get_outstanding_mortgage();
  debt_obligation = (final_expense + outstanding_debt + outstanding_mortgage);
  document.getElementById("totalDebt").innerHTML = debt_obligation.toLocaleString();
  get_annual_income();
  get_years_need_income();
  get_college_funding();
  get_number_of_child();
  income_need = Number((annual_income * years_need_income) + (college_funding * number_of_child));
  document.getElementById("incomeNeed").innerHTML = income_need.toLocaleString();
  get_savings_investments();
  get_ira();
  get_life_in_force();
  current_savings = (savings_investments + ira + life_in_force);
  document.getElementById("totalSavings").innerHTML = current_savings.toLocaleString();
  life_insurance_need = debt_obligation + income_need - current_savings;
  if (life_insurance_need <= 0) {
    document.getElementById("insuranceNeed").innerHTML = "You Don't Need Insurance";
  } else {
    document.getElementById("insuranceNeed").innerHTML = "Your Life Insurance Need: $" + life_insurance_need.toLocaleString();
  };
};
function get_final_expense() {
  final_expense = Number(document.getElementById("fe").value);// Final Expense
  document.getElementById("FE").innerHTML = final_expense.toLocaleString();
};
function get_outstanding_debt() {
  outstanding_debt = Number(document.getElementById("od").value);// Outstanding Debt
  document.getElementById("OD").innerHTML = outstanding_debt.toLocaleString();
};
function get_outstanding_mortgage() {
  outstanding_mortgage = Number(document.getElementById("om").value);// Outstanding Mortgage
  document.getElementById("OM").innerHTML = outstanding_mortgage.toLocaleString();
};
function get_annual_income() {
  annual_income = Number(document.getElementById("ai").value);// Annual Income
  document.getElementById("AI").innerHTML = annual_income.toLocaleString();
};
function get_years_need_income() {
  years_need_income = Number(document.getElementById("yrs").value);// Number of years income need
  document.getElementById("YRS").innerHTML = years_need_income.toLocaleString();
};
function get_college_funding() {
  college_funding = Number(document.getElementById("cf").value);// College Funding need per child
  document.getElementById("CF").innerHTML = college_funding.toLocaleString();
};
function get_number_of_child() {
  number_of_child = Number(document.getElementById("child").value);// Number of child
  document.getElementById("CHILD").innerHTML = number_of_child.toLocaleString();
};
function get_savings_investments() {
  savings_investments = Number(document.getElementById("si").value);// Savings & Investment
  document.getElementById("SI").innerHTML = savings_investments.toLocaleString();
};
function get_ira() {
  ira = Number(document.getElementById("ira").value);// Individual Retirement Account
  document.getElementById("IRA").innerHTML = ira.toLocaleString();
};
function get_life_in_force() {
  life_in_force = Number(document.getElementById("li").value);// Life Insurance in force
  document.getElementById("LI").innerHTML = life_in_force.toLocaleString();
};
// Life Product Widget
function reStart() {
  $(":radio").prop('checked', false);
  hide_life_product_slides();
  show_life_product_slide_1();
}
function hide_life_product_slides() {
  var widget_slides = document.getElementById("life-product-widget").getElementsByClassName("widget-slide");
  for (var i = 0; i < widget_slides.length; i++) {
    $(widget_slides[i]).hide();
  }
};
function show_life_product_slide_1() {
  hide_life_product_slides();
  $("#life-product-slide-1").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-slide-1").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q1() {
  hide_life_product_slides();
  $("#life-product-q1").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q1").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q2() {
  hide_life_product_slides();
  $("#life-product-q2").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q2").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q3() {
  hide_life_product_slides();
  $("#life-product-q3").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q3").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q4() {
  hide_life_product_slides();
  $("#life-product-q4").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q4").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q5() {
  hide_life_product_slides();
  $("#life-product-q5").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q5").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q6() {
  hide_life_product_slides();
  $("#life-product-q6").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q6").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_life_product_q7() {
  hide_life_product_slides();
  $("#life-product-q7").show("slow");
  if (screen && screen.width < 768) {
    document.getElementById("life-product-q7").scrollIntoView();
  } else {
    document.getElementById("life-product-widget").scrollIntoView();
  }
};
function show_term_life() {
  hide_life_product_slides();
  $("#resp_1").show();// Display "Term Life"
};
function show_term_permanent_life() {
  hide_life_product_slides();
  $("#resp_2").show();// Display "Term & Permanent Life"
};
function show_whole_life() {
  hide_life_product_slides();
  $("#resp_3").show();// Display "Whole Life"
};
function show_variable_life() {
  hide_life_product_slides();
  $("#resp_4").show();// Display "Variable Life"
};
function show_universal_life() {
  hide_life_product_slides();
  $("#resp_5").show();// Display "Universal Life"
};
function show_variable_universal_life() {
  hide_life_product_slides();
  $("#resp_6").show();// Display "Variable Universal Life"
};