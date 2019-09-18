function show_auto_slide(id) {
  hide_auto_slides();
  var element = "#" + id;
  $(element).slideDown("slow");
  auto_scrollIntoView();
}
function hide_auto_slides() {
  var widget_slides = document.getElementById("auto-insurance-widget").getElementsByClassName("widget-slide");
  for (var i = 0; i < widget_slides.length; i++) {
    $(widget_slides[i]).hide();
  }
}
function auto_scrollIntoView() {
  if (screen && screen.width <= 768) {
    document.getElementById("auto-insurance-widget").scrollIntoView();
  } else {
    document.getElementById("life-widgets").scrollIntoView();
  }
}
function q1_1() {
  ownership = "Yes";
  $("#ownership-select").html(ownership);
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
};
function q1_2() {
  ownership = "No, it's financed";
  $("#ownership-select").html(ownership);
  show_auto_slide('q2'); // Is your car brand new?
};
function q1_3() {
  ownership = "No, it's leased";
  $("#ownership-select").html(ownership);
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
};
function q3_1() {
  $("#Gap-lowest-rate").hide();
  $("#Gap-best-protection").hide();
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
};
function q3_2() {
  $("#Gap-lowest-rate").show();// Need GAP insurance
  $("#Gap-best-protection").show();// Need GAP insurance
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
};
function q4_1() {
  $("#health-insurance-select").html("Yes");
  $("#Med-Pay-lowest-rates").hide();
  $("#Med-Pay-best-protection").hide();
  if (ownership === "Yes") {
    show_auto_slide('q6'); // Could you afford to replace your car without the help of insurance?
  } else {
    show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
  }
};
function q4_2() {
  $("#health-insurance-select").html("No");
  $("#Med-Pay-lowest-rates").show();
  $("#medical-payments-lowest-rates").html("$5,000");
  $("#Med-Pay-best-protection").show();
  $("#medical-payments-best-protection").html("$5,000");
  if (ownership === "Yes") {
    show_auto_slide('q6'); // Could you afford to replace your car without the help of insurance?
  } else {
    show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
  }
};
function q6_1() {
  $("#comprehensive-collision-select").html("Yes");
  show_auto_slide('q8'); // Do you want the lowest possible rates or the best protection?
};
function q6_2() {
  $("#comprehensive-collision-select").html("No");
  show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
};
function q7_1() {
  var x = "$250";
  deductible(x);
};
function q7_2() {
  var x = "$500";
  deductible(x);
};
function q7_3() {
  var x = "$1000";
  deductible(x);
};
function q8_1() {
  rate_protection = "Lowest rates";
  $("#lowest-rate-best-protection-select").html(rate_protection);
  $("#lowest-rates").show();
  $("#best-protection").hide();
  $("#uninsured-motorist").hide();
  show_auto_slide('q9'); // What is your net worth?
};
function q8_2() {
  rate_protection = "Best protection";
  $("#lowest-rate-best-protection-select").html(rate_protection);
  $("#bodily-injury-liability-coverage").html("$250,000 per person / $500,000 per accident");
  $("#property-damage-liability-coverage").html("$100,000 per accident");
  $("#lowest-rates").hide();
  $("#best-protection").show();
  $("#uninsured-motorist").show();
  show_auto_slide('q9'); // What is your net worth?
};
function q9_1() {
  net_worth = "Less than $25,000";
  $("#net-worth-select").html(net_worth);
  $("#bodily-injury-liability-lowest-rates").html("$15,000 per person / $30,000 per accident");
  $("#property-damage-liability-lowest-rates").html("$5,000 per accident");
  $("#bodily-injury-liability-best-protection").html("$100,000 per person / $300,000 per accident");
  $("#property-damage-liability-best-protection").html("$50,000 per accident");
  $("#uninsured-motorist-lowest-rates").html("$15,000 per person / $30,000 per person");
  $("#uninsured-motorist-best-protection").html("$100,000 per person / $300,000 per person");
  $("#U-lowest-rates").hide();
  $("#U-best-protection").hide();
  show_auto_slide('auto-calc-results');
};
function q9_2() {
  net_worth = "$25,000 - $50,000";
  $("#net-worth-select").html(net_worth);
  $("#bodily-injury-liability-lowest-rates").html("$50,000 per person / $100,000 per accident");
  $("#property-damage-liability-lowest-rates").html("$50,000 per accident");
  $("#bodily-injury-liability-best-protection").html("$100,000 per person / $300,000 per accident");
  $("#property-damage-liability-best-protection").html("$100,000 per accident");
  $("#uninsured-motorist-lowest-rates").html("$50,000 per person / $100,000 per person");
  $("#uninsured-motorist-best-protection").html("$100,000 per person / $300,000 per person");
  $("#U-lowest-rates").hide();
  $("#U-best-protection").hide();
  show_auto_slide('auto-calc-results');
};
function q9_3() {
  net_worth = "$50,000 - $100,000";
  $("#net-worth-select").html(net_worth);
  $("#bodily-injury-liability-lowest-rates").html("$100,000 per person / $300,000 per accident");
  $("#property-damage-liability-lowest-rates").html("$100,000 per accident");
  $("#bodily-injury-liability-best-protection").html("$100,000 per person / $300,000 per accident");
  $("#property-damage-liability-best-protection").html("$100,000 per accident");
  $("#uninsured-motorist-lowest-rates").html("$50,000 per person / $100,000 per person");
  $("#uninsured-motorist-best-protection").html("$250,000 per person / $500,000 per person");
  $("#U-lowest-rates").hide();
  $("#U-best-protection").hide();
  show_auto_slide('auto-calc-results');
};
function q9_4() {
  net_worth = "More than $100,000";
  $("#net-worth-select").html(net_worth);
  $("#bodily-injury-liability-lowest-rates").html("250,000 per person / $500,000 per accident");
  $("#property-damage-liability-lowest-rates").html("$100,000 per accident");
  $("#bodily-injury-liability-best-protection").html("250,000 per person / $500,000 per accident");
  $("#property-damage-liability-best-protection").html("$100,000 per accident");
  $("#uninsured-motorist-lowest-rates").html("$50,000 per person / $100,000 per person");
  $("#uninsured-motorist-best-protection").html("$250,000 per person / $500,000 per person");
  $("#U-lowest-rates").show();
  $("#U-best-protection").show();
  $("#umbrella-liability-lowest-rates").html("$1,000,000 per person");
  $("#umbrella-liability-best-protection").html("$1,000,000 per person");
  show_auto_slide('auto-calc-results');
};
function deductible(x) {
  $("#deductible-select").html(x);
  $("#deductible-select").html(x);
  $("#deductible-lowest-rates").html(x);
  $("#deductible-best-protection").html(x);
  $("#Comp-and-Collision-lowest-rates").show();
  $("#Comp-and-Collision-best-protection").show();
  show_auto_slide('q8');; // Do you want the lowest possible rates or the best protection?
};
function show_lowest_rates() {
  $("#lowest-rates").show();
  $("#best-protection").hide();
  $("#uninsured-motorist").hide();
  show_auto_slide('auto-calc-results');
};
function show_best_protection() {
  $("#lowest-rates").hide();
  $("#best-protection").show();
  $("#uninsured-motorist").hide();
  show_auto_slide('auto-calc-results');
};
function start_over() {
  $(":radio").prop('checked', false);
  show_auto_slide('slide-1');
}