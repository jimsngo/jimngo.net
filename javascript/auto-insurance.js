const auto_widget_slides = document.getElementById("auto-insurance-widget").getElementsByClassName("widget-slide");

slide_up(auto_widget_slides);
slide_down('auto-slide-1');

// function show_life_product_slide(id) {
//     slide_up(life_product_widgets);
//     slide_down(id);
//     if (screen && screen.width <= 768) {
//         document.getElementById(life_product_widget).scrollIntoView();
//     }
// }

// function slide_up(array) {
//   for (var i = 0; i < array.length; i++) {
//     array[i].style.display = 'none';
//     array[i].style.height = '0px';
//   }
// }

function slide_down(id) {
  var content = document.getElementById(id);
  content.style.display = 'block';
  content.style.height = content.scrollHeight + 'px';
}

// function show(id) {
//   document.getElementById(id).style.display = "block";
// }

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show_auto_slide(id) {
  slide_up(auto_widget_slides);
  slide_down(id);
  auto_scrollIntoView();
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
  // document.getElementById('ownership-select').innerHTML = ownership;
  // $("#ownership-select").html(ownership);
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q1_2() {
  ownership = "No, it's financed";
  // document.getElementById('ownership-select').innerHTML = ownership;
  // $("#ownership-select").html(ownership);
  show_auto_slide('q2'); // Is your car brand new?
}

function q1_3() {
  ownership = "No, it's leased";
  // document.getElementById('ownership-select').innerHTML = ownership;
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q3_1() {
  hide('Gap-lowest-rate');
  // $("#Gap-lowest-rate").hide();
  hide('Gap-best-protection');
  // $("#Gap-best-protection").hide();
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q3_2() {
  show('Gap-lowest-rate');
  // $("#Gap-lowest-rate").show(); // Need GAP insurance
  show('Gap-best-protection');
  // $("#Gap-best-protection").show(); // Need GAP insurance
  show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q4_1() {
  // document.getElementById('health-insurance-select').innerHTML = 'Yes';
  // $("#health-insurance-select").html("Yes");
  hide('Med-Pay-lowest-rates');
  // $("#Med-Pay-lowest-rates").hide();
  hide('Med-Pay-best-protection');
  // $("#Med-Pay-best-protection").hide();
  if (ownership === "Yes") {
    show_auto_slide('q6'); // Could you afford to replace your car without the help of insurance?
  } else {
    show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
  }
}

function q4_2() {
  // document.getElementById('health-insurance-select').innerHTML = 'No';
  // $("#health-insurance-select").html("No");
  show('Med-Pay-lowest-rates');
  // $("#Med-Pay-lowest-rates").show();
  document.getElementById('medical-payments-lowest-rates').innerHTML = '$5,000';
  // $("#medical-payments-lowest-rates").html("$5,000");
  show('Med-Pay-best-protection');
  // $("#Med-Pay-best-protection").show();
  document.getElementById('medical-payments-best-protection').innerHTML = '$5,000';
  // $("#medical-payments-best-protection").html("$5,000");
  if (ownership === "Yes") {
    show_auto_slide('q6'); // Could you afford to replace your car without the help of insurance?
  } else {
    show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
  }
}

function q6_1() {
  document.getElementById('comprehensive-collision-select').innerHTML = 'Yes';
  // $("#comprehensive-collision-select").html("Yes");
  show_auto_slide('q8'); // Do you want the lowest possible rates or the best protection?
}

function q6_2() {
  document.getElementById('comprehensive-collision-select').innerHTML = '"No';
  // $("#comprehensive-collision-select").html("No");
  show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
}

function q7_1() {
  var x = "$250";
  deductible(x);
}

function q7_2() {
  var x = "$500";
  deductible(x);
}

function q7_3() {
  var x = "$1000";
  deductible(x);
}

function q8_1() {
  rate_protection = "Lowest rates";
  document.getElementById('lowest-rate-best-protection-select').innerHTML = rate_protection;
  // $("#lowest-rate-best-protection-select").html(rate_protection);
  show('lowest-rates');
  // $("#lowest-rates").show();
  hide('best-protection');
  // $("#best-protection").hide();
  hide('uninsured-motorist');
  // $("#uninsured-motorist").hide();
  show_auto_slide('q9'); // What is your net worth?
}

function q8_2() {
  rate_protection = "Best protection";
  // document.getElementById('lowest-rate-best-protection-select').innerHTML = rate_protection;
  // $("#lowest-rate-best-protection-select").html(rate_protection);
  // document.getElementById('bodily-injury-liability-coverage').innerHTML = '$250,000 per person / $500,000 per accident';
  // $("#bodily-injury-liability-coverage").html("$250,000 per person / $500,000 per accident");
  // document.getElementById('property-damage-liability-coverage').innerHTML = '$100,000 per accident';
  // $("#property-damage-liability-coverage").html("$100,000 per accident");
  hide('lowest-rates');
  // $("#lowest-rates").hide();
  show('best-protection');
  // $("#best-protection").show();
  // show('uninsured-motorist');
  // $("#uninsured-motorist").show();
  show_auto_slide('q9'); // What is your net worth?
}

function q9_1() {
  net_worth = "Less than $25,000";
  document.getElementById('net-worth-select').innerHTML = net_worth;
  // $("#net-worth-select").html(net_worth);
  document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = '$15,000 per person / $30,000 per accident';
  // $("#bodily-injury-liability-lowest-rates").html("$15,000 per person / $30,000 per accident");
  document.getElementById('property-damage-liability-lowest-rates').innerHTML = '$5,000 per accident';
  // $("#property-damage-liability-lowest-rates").html("$5,000 per accident");
  document.getElementById('bodily-injury-liability-best-protection').innerHTML = '$100,000 per person / $300,000 per accident';
  // $("#bodily-injury-liability-best-protection").html("$100,000 per person / $300,000 per accident");
  document.getElementById('property-damage-liability-best-protection').innerHTML = '$50,000 per accident';
  // $("#property-damage-liability-best-protection").html("$50,000 per accident");
  document.getElementById('uninsured-motorist-lowest-rates').innerHTML = '$15,000 per person / $30,000 per person';
  // $("#uninsured-motorist-lowest-rates").html("$15,000 per person / $30,000 per person");
  document.getElementById('uninsured-motorist-best-protection').innerHTML = '$100,000 per person / $300,000 per person';
  // $("#uninsured-motorist-best-protection").html("$100,000 per person / $300,000 per person");
  hide('U-lowest-rates');
  // $("#U-lowest-rates").hide();
  hide('U-best-protection');
  // $("#U-best-protection").hide();
  // show_auto_slide('auto-calc-results');
}

function q9_2() {
  net_worth = "$25,000 - $50,000";
  document.getElementById('net-worth-select').innerHTML = net_worth;
  // $("#net-worth-select").html(net_worth);
  document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = '$50,000 per person / $100,000 per accident';
  // $("#bodily-injury-liability-lowest-rates").html("$50,000 per person / $100,000 per accident");
  document.getElementById('property-damage-liability-lowest-rates').innerHTML = '$50,000 per accident';
  // $("#property-damage-liability-lowest-rates").html("$50,000 per accident");
  document.getElementById('bodily-injury-liability-best-protection').innerHTML = '$100,000 per person / $300,000 per accident';
  // $("#bodily-injury-liability-best-protection").html("$100,000 per person / $300,000 per accident");
  document.getElementById('property-damage-liability-best-protection').innerHTML = '$100,000 per accident';
  // $("#property-damage-liability-best-protection").html("$100,000 per accident");
  document.getElementById('uninsured-motorist-lowest-rates').innerHTML = '$50,000 per person / $100,000 per person';
  // $("#uninsured-motorist-lowest-rates").html("$50,000 per person / $100,000 per person");
  document.getElementById('uninsured-motorist-best-protection').innerHTML = '$100,000 per person / $300,000 per person';
  // $("#uninsured-motorist-best-protection").html("$100,000 per person / $300,000 per person");
  hide('U-lowest-rates');
  // $("#U-lowest-rates").hide();
  hide('U-best-protection');
  // $("#U-best-protection").hide();
  show_auto_slide('auto-calc-results');
}

function q9_3() {
  net_worth = "$50,000 - $100,000";
  document.getElementById('net-worth-select').innerHTML = net_worth;
  // $("#net-worth-select").html(net_worth);
  document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = '$100,000 per person / $300,000 per accident';
  // $("#bodily-injury-liability-lowest-rates").html("$100,000 per person / $300,000 per accident");
  document.getElementById('property-damage-liability-lowest-rates').innerHTML = '$100,000 per accident';
  // $("#property-damage-liability-lowest-rates").html("$100,000 per accident");
  document.getElementById('bodily-injury-liability-best-protection').innerHTML = '$100,000 per person / $300,000 per accident';
  // $("#bodily-injury-liability-best-protection").html("$100,000 per person / $300,000 per accident");
  document.getElementById('property-damage-liability-best-protection').innerHTML = '$100,000 per accident';
  // $("#property-damage-liability-best-protection").html("$100,000 per accident");
  document.getElementById('uninsured-motorist-lowest-rates').innerHTML = '$50,000 per person / $100,000 per person';
  // $("#uninsured-motorist-lowest-rates").html("$50,000 per person / $100,000 per person");
  document.getElementById('uninsured-motorist-best-protection').innerHTML = '$250,000 per person / $500,000 per person';
  // $("#uninsured-motorist-best-protection").html("$250,000 per person / $500,000 per person");
  hide('U-lowest-rates');
  // $("#U-lowest-rates").hide();
  hide('U-best-protection');
  // $("#U-best-protection").hide();
  show_auto_slide('auto-calc-results');
}

function q9_4() {
  net_worth = "More than $100,000";
  document.getElementById('net-worth-select').innerHTML = net_worth;
  // $("#net-worth-select").html(net_worth);
  document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = '250,000 per person / $500,000 per accident';
  // $("#bodily-injury-liability-lowest-rates").html("250,000 per person / $500,000 per accident");
  document.getElementById('property-damage-liability-lowest-rates').innerHTML = '$100,000 per accident';
  // $("#property-damage-liability-lowest-rates").html("$100,000 per accident");
  document.getElementById('bodily-injury-liability-best-protection').innerHTML = '$250,000 per person / $500,000 per accident';
  // $("#bodily-injury-liability-best-protection").html("250,000 per person / $500,000 per accident");
  document.getElementById('property-damage-liability-best-protection').innerHTML = '$100,000 per accident';
  // $("#property-damage-liability-best-protection").html("$100,000 per accident");
  document.getElementById('uninsured-motorist-lowest-rates').innerHTML = '$50,000 per person / $100,000 per person';
  // $("#uninsured-motorist-lowest-rates").html("$50,000 per person / $100,000 per person");
  document.getElementById('uninsured-motorist-best-protection').innerHTML = '$250,000 per person / $500,000 per person';
  // $("#uninsured-motorist-best-protection").html("$250,000 per person / $500,000 per person");
  document.getElementById('uninsured-motorist-best-protection').innerHTML = '$250,000 per person / $500,000 per person';
  show('U-lowest-rates');
  // $("#U-lowest-rates").show();
  show('U-best-protection');
  // $("#U-best-protection").show();
  document.getElementById('umbrella-liability-lowest-rates').innerHTML = '$1,000,000 per person';
  // $("#umbrella-liability-lowest-rates").html("$1,000,000 per person");
  document.getElementById('umbrella-liability-best-protection').innerHTML = '$1,000,000 per person';
  // $("#umbrella-liability-best-protection").html("$1,000,000 per person");
  show_auto_slide('auto-calc-results');
}

function deductible(x) {
  // document.getElementById('deductible-select').innerHTML = x;
  // $("#deductible-select").html(x);
  document.getElementById('deductible-lowest-rates').innerHTML = x;
  // $("#deductible-lowest-rates").html(x);
  document.getElementById('deductible-best-protection').innerHTML = x;
  // $("#deductible-best-protection").html(x);
  show('Comp-and-Collision-lowest-rates');
  // $("#Comp-and-Collision-lowest-rates").show();
  show('Comp-and-Collision-best-protection');
  // $("#Comp-and-Collision-best-protection").show();
  show_auto_slide('q8'); // Do you want the lowest possible rates or the best protection?
}

function show_lowest_rates() {
  show('lowest-rates');
  // $("#lowest-rates").show();
  show('best-protection');
  // $("#best-protection").hide();
  hide('uninsured-motorist');
  // $("#uninsured-motorist").hide();
  show_auto_slide('auto-calc-results');
}

function show_best_protection() {
  hide('lowest-rates');
  // $("#lowest-rates").hide();
  show('best-protection');
  // $("#best-protection").show();
  hide('uninsured-motorist');
  // $("#uninsured-motorist").hide();
  show_auto_slide('auto-calc-results');
}

function start_over() {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == 'radio') {
      checkboxes[i].checked = false;
    }
  }
  // $(":radio").prop('checked', false);
  show_auto_slide('slide-1');
}

// function reStart() {
//   for (var i = 0; i < checkboxes.length; i++) {
//       if (checkboxes[i].type == 'radio') {
//           checkboxes[i].checked = false;
//       }
//   }
//   show_life_product_slide('life-product-slide-1');
// }