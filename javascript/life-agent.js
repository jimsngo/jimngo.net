// Animated Collapsible ------------------------------------------------------/
var flyers = document.getElementById("QA").getElementsByClassName("collapsible");
for (var i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("QA").getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.maxHeight = null;
        }
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (var k = 0; k < flyers.length; k++) {
                flyers[k].classList.remove("active");
            }
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
// Life Need Widget
function show_life_need_slide(id) {
    calc();
    hide_life_need_widget_slides();
    var element = "#" + id;
    $(element).slideDown("slow");
    life_need_scrollIntoView();
}

function hide_life_need_widget_slides() {
    var widget_slides = document.getElementById("life-need-widget").getElementsByClassName("widget-slide");
    for (var i = 0; i < widget_slides.length; i++) {
        $(widget_slides[i]).hide();
    }
}

function life_need_scrollIntoView() {
    if (screen && screen.width <= 768) {
        document.getElementById("life-need-widget").scrollIntoView();
    } else {
        document.getElementById("life-widgets").scrollIntoView();
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
// Life Product Widget
function show_life_product_slide(id) {
    hide_life_product_slides();
    var element = "#" + id;
    $(element).slideDown("slow");
    life_product_scrollIntoView();
}

function hide_life_product_slides() {
    var widget_slides = document.getElementById("life-product-widget").getElementsByClassName("widget-slide");
    for (var i = 0; i < widget_slides.length; i++) {
        $(widget_slides[i]).hide();
    }
}

function life_product_scrollIntoView() {
    if (screen && screen.width <= 768) {
        document.getElementById("life-product-widget").scrollIntoView();
    } else {
        document.getElementById("life-widgets").scrollIntoView();
    }
}

function reStart() {
    $(":radio").prop('checked', false);
    show_life_product_slide('life-product-slide-1');
}