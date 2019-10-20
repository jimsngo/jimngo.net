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
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('life-insurance-ss');
        nextSlide('life-headings-ss');
    }, 2000);
}

function nextSlide(id) {
    var elems = document.getElementById(id).getElementsByClassName('slide');
    elems.index = elems.index || 0;
    elems[elems.index].className = 'slide';
    elems.index = (elems.index + 1) % elems.length;
    elems[elems.index].className = 'slide showing';
}

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

function show_life_product_slide(id) {
    slide_up(life_need_widgets);
    slide_down(id);
    document.getElementById(life_need_widget).scrollIntoView();
}

////////////////////////////////////////////////////////////////////////////////
// Life Need Section ----------------------------------------------------------/
////////////////////////////////////////////////////////////////////////////////

const life_need_widget = 'life-need-widget';
const life_need_widgets = document.getElementById("life-need-widget").getElementsByClassName("widget-slide");

calc();
slide_up(life_need_widgets);
slide_down('life-need-slide-1');

function show_life_need_slide(id) {
    calc();
    slide_up(life_need_widgets);
    slide_down(id);
    if (screen && screen.width <= 768) {
        document.getElementById(life_need_widget).scrollIntoView();
    }
}

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
    }
}

function get_final_expense() {
    final_expense = Number(document.getElementById("fe").value); // Final Expense
    document.getElementById("FE").innerHTML = final_expense.toLocaleString();
}

function get_outstanding_debt() {
    outstanding_debt = Number(document.getElementById("od").value); // Outstanding Debt
    document.getElementById("OD").innerHTML = outstanding_debt.toLocaleString();
}

function get_outstanding_mortgage() {
    outstanding_mortgage = Number(document.getElementById("om").value); // Outstanding Mortgage
    document.getElementById("OM").innerHTML = outstanding_mortgage.toLocaleString();
}

function get_annual_income() {
    annual_income = Number(document.getElementById("ai").value); // Annual Income
    document.getElementById("AI").innerHTML = annual_income.toLocaleString();
}

function get_years_need_income() {
    years_need_income = Number(document.getElementById("yrs").value); // Number of years income need
    document.getElementById("YRS").innerHTML = years_need_income.toLocaleString();
}

function get_college_funding() {
    college_funding = Number(document.getElementById("cf").value); // College Funding need per child
    document.getElementById("CF").innerHTML = college_funding.toLocaleString();
}

function get_number_of_child() {
    number_of_child = Number(document.getElementById("child").value); // Number of child
    document.getElementById("CHILD").innerHTML = number_of_child.toLocaleString();
}

function get_savings_investments() {
    savings_investments = Number(document.getElementById("si").value); // Savings & Investment
    document.getElementById("SI").innerHTML = savings_investments.toLocaleString();
}

function get_ira() {
    ira = Number(document.getElementById("ira").value); // Individual Retirement Account
    document.getElementById("IRA").innerHTML = ira.toLocaleString();
}

function get_life_in_force() {
    life_in_force = Number(document.getElementById("li").value); // Life Insurance in force
    document.getElementById("LI").innerHTML = life_in_force.toLocaleString();
}

////////////////////////////////////////////////////////////////////////////////
// Life Product Section -------------------------------------------------------/
////////////////////////////////////////////////////////////////////////////////

const life_product_widget = 'life-product-widget';
const life_product_widgets = document.getElementById(life_product_widget).getElementsByClassName("widget-slide");
const checkboxes = document.getElementsByTagName('input');

slide_up(life_product_widgets);
slide_down('life-product-slide-1');

function show_life_product_slide(id) {
    slide_up(life_product_widgets);
    slide_down(id);
    if (screen && screen.width <= 768) {
        document.getElementById(life_product_widget).scrollIntoView();
    }
}

function reStart() {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'radio') {
            checkboxes[i].checked = false;
        }
    }
    show_life_product_slide('life-product-slide-1');
}

////////////////////////////////////////////////////////////////////////////////
// Auto Coverage Section ------------------------------------------------------/
////////////////////////////////////////////////////////////////////////////////

const liability_minimum = '$15,000 per person / $30,000 per accident';
const liability_2 = '$50,000 per person / $100,000 per accident';
const liability_3 = '$100,000 per person / $300,000 per accident';
const liability_4 = '$250,000 per person / $500,000 per accident';
const property_damage_minimum = '$5,000 per accident';
const property_damage_2 = '$50,000 per accident';
const property_damage_3 = '$100,000 per accident';
const umbrella = '$1,000,000';
const auto_widget_slides = document.getElementById("auto-insurance-widget").getElementsByClassName("widget-slide");

slide_up(auto_widget_slides);
slide_down('auto-slide-1');

function slide_down(id) {
    var content = document.getElementById(id);
    content.style.display = 'block';
    content.style.height = content.scrollHeight + 'px';
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
    show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q1_2() {
    ownership = "No, it's financed";
    show_auto_slide('q2'); // Is your car brand new?
}

function q1_3() {
    ownership = "No, it's leased";
    show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q3_1() {
    hide('Gap-lowest-rate');
    hide('Gap-best-protection');
    show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q3_2() {
    show('Gap-lowest-rate');
    show('Gap-best-protection');
    show_auto_slide('q4'); // Do you and your frequent passengers have health insurance?
}

function q4_1() {
    hide('Med-Pay-lowest-rates');
    hide('Med-Pay-best-protection');
    if (ownership === "Yes") {
        show_auto_slide('q6'); // Could you afford to replace your car without the help of insurance?
    } else {
        show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
    }
}

function q4_2() {
    show('Med-Pay-lowest-rates');
    document.getElementById('medical-payments-lowest-rates').innerHTML = '$5,000';
    show('Med-Pay-best-protection');
    document.getElementById('medical-payments-best-protection').innerHTML = '$5,000';
    if (ownership === "Yes") {
        show_auto_slide('q6'); // Could you afford to replace your car without the help of insurance?
    } else {
        show_auto_slide('q7'); // How much money do you have easy access to if your car is damaged?
    }
}

function q6_1() {
    show_auto_slide('q8'); // Do you want the lowest possible rates or the best protection?
}

function q6_2() {
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
    show('lowest-rates');
    hide('best-protection');
    show_auto_slide('q9'); // What is your net worth?
}

function q8_2() {
    rate_protection = "Best protection";
    hide('lowest-rates');
    show('best-protection');
    show_auto_slide('q9'); // What is your net worth?
}

function q9_1() {
    net_worth = "Less than $25,000";
    // Lowest rate
    document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = liability_minimum;
    document.getElementById('property-damage-liability-lowest-rates').innerHTML = property_damage_minimum;
    // Best protection
    document.getElementById('bodily-injury-liability-best-protection').innerHTML = liability_3;
    document.getElementById('property-damage-liability-best-protection').innerHTML = property_damage_2;
    // Uninsured Motorist
    document.getElementById('uninsured-motorist-lowest-rates').innerHTML = liability_minimum;
    document.getElementById('uninsured-motorist-best-protection').innerHTML = liability_3;
    hide('U-lowest-rates');
    hide('U-best-protection');
    show_auto_slide('auto-calc-results');
}

function q9_2() {
    net_worth = "$25,000 - $50,000";
    // Lowest rate
    document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = liability_2;
    document.getElementById('property-damage-liability-lowest-rates').innerHTML = property_damage_2;
    // Best protection
    document.getElementById('bodily-injury-liability-best-protection').innerHTML = liability_3;
    document.getElementById('property-damage-liability-best-protection').innerHTML = property_damage_3;
    // Uninsured Motorist
    document.getElementById('uninsured-motorist-lowest-rates').innerHTML = liability_2;
    document.getElementById('uninsured-motorist-best-protection').innerHTML = liability_3;
    hide('U-lowest-rates');
    hide('U-best-protection');
    show_auto_slide('auto-calc-results');
}

function q9_3() {
    net_worth = "$50,000 - $100,000";
    // Lowest rate
    document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = liability_3;
    document.getElementById('property-damage-liability-lowest-rates').innerHTML = property_damage_3;
    // Best protection
    document.getElementById('bodily-injury-liability-best-protection').innerHTML = liability_3;
    document.getElementById('property-damage-liability-best-protection').innerHTML = property_damage_3;
    // Uninsured Motorist
    document.getElementById('uninsured-motorist-lowest-rates').innerHTML = liability_2;
    document.getElementById('uninsured-motorist-best-protection').innerHTML = liability_4;
    hide('U-lowest-rates');
    hide('U-best-protection');
    show_auto_slide('auto-calc-results');
}

function q9_4() {
    net_worth = "More than $100,000";
    // Lowest rate
    document.getElementById('bodily-injury-liability-lowest-rates').innerHTML = liability_4;
    document.getElementById('property-damage-liability-lowest-rates').innerHTML = property_damage_3;
    // Best protection
    document.getElementById('bodily-injury-liability-best-protection').innerHTML = liability_4;
    document.getElementById('property-damage-liability-best-protection').innerHTML = property_damage_3;
    // Uninsured Motorist
    document.getElementById('uninsured-motorist-lowest-rates').innerHTML = liability_2;
    document.getElementById('uninsured-motorist-best-protection').innerHTML = liability_4;
    show('U-lowest-rates');
    show('U-best-protection');
    document.getElementById('umbrella-liability-lowest-rates').innerHTML = umbrella;
    document.getElementById('umbrella-liability-best-protection').innerHTML = umbrella;
    show_auto_slide('auto-calc-results');
}

function deductible(x) {
    document.getElementById('deductible-lowest-rates').innerHTML = x;
    document.getElementById('deductible-best-protection').innerHTML = x;
    show('Comp-and-Collision-lowest-rates');
    show('Comp-and-Collision-best-protection');
    show_auto_slide('q8'); // Do you want the lowest possible rates or the best protection?
}

function show_lowest_rates() {
    show('lowest-rates');
    show('best-protection');
    hide('uninsured-motorist');
    show_auto_slide('auto-calc-results');
}

function show_best_protection() {
    hide('lowest-rates');
    show('best-protection');
    hide('uninsured-motorist');
    show_auto_slide('auto-calc-results');
}

function start_over() {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'radio') {
            checkboxes[i].checked = false;
        }
    }
    slide_up(auto_widget_slides);
    slide_down('auto-slide-1');
}

////////////////////////////////////////////////////////////////////////////////
// Animated Collapsible - Event Listener --------------------------------------/
////////////////////////////////////////////////////////////////////////////////

function collapsible(idName, className, className2) {
    const array = document.getElementById(idName).getElementsByClassName(className);
    const contents = document.getElementById(idName).getElementsByClassName(className2);
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", function () {
            // Hide all elements with class content
            for (let j = 0; j < contents.length; j++) {
                contents[j].style.height = '0px';
            }
            if (this.classList.contains("active")) {
                this.classList.remove("active");
            } else {
                // Remove current active class
                for (let k = 0; k < array.length; k++) {
                    array[k].classList.remove("active");
                }
                // Add active class to clicked element
                this.classList.toggle("active");
                // Display content for only active element            
                var content = this.nextElementSibling;
                content.style.height = content.scrollHeight + "px";
            }
        });
    }

}

collapsible('QA', 'collapsible', 'content');