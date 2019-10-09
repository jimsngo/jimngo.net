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
    hide('phone');
    hide('mobile-phone');
    show('mobile-sms-email');
}

function show_phone() {
    show('phone');
    show('mobile-phone');
    hide('mobile-sms-email');
}

///////////////////////////////////////////////////////////////////////////////
// Delay images                                                               /
///////////////////////////////////////////////////////////////////////////////

function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            var src = imgDefer[i].getAttribute('data-src');
        }
    }
}

init();

///////////////////////////////////////////////////////////////////////////////
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('calc-ss');
        nextSlide('home-valuation-ss');
        nextSlide('service-ss');
        nextSlide('dpa-ss');
        nextSlide('refinance-ss');
        nextSlide('sfr-ss');
        nextSlide('flyer-ss');
    }, 2000);
}

function nextSlide(id) {
    var elems = document.getElementById(id).getElementsByClassName('slide');
    elems.index = elems.index || 0;
    elems[elems.index].className = 'slide';
    elems.index = (elems.index + 1) % elems.length;
    elems[elems.index].className = 'slide showing';
}

///////////////////////////////////////////////////////////////////////////////
// Calculator ----------------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

const calculator = 'afford-calc-widget';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
const tabcontents = document.getElementById(calculator).getElementsByClassName("tabcontent");
const messages = document.getElementById("dti_messages").getElementsByClassName("message");

// For DTI messages ----------------------------------------------------------/
function show_dti_message(id) {
    slide_up(messages);
    slide_down(id);
}

// For Loan Program Descriptions ---------------------------------------------/
function show_tab_content(id) {
    slide_up(tabcontents);
    slide_down(id);
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

collapsible('flyers', 'collapsible', 'content');

///////////////////////////////////////////////////////////////////////////////
// Miscs ---------------------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

function get_id_value(id) {
    return document.getElementById(id).value;
}

function set_id_value(id, value) {
    document.getElementById(id).value = value;
}

function toString(id, value, digit) {
    document.getElementById(id).innerHTML = value.toLocaleString(undefined, {
        minimumFractionDigits: digit,
        maximumFractionDigits: digit
    });
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

// New Home Search
document.getElementById("HomeSearchBtnWidget").onclick = function (event) {
    var searchText = document.getElementById("SearchTextWidget").value;
    if (searchText === "" || typeof (searchText) == "undefined") {
        document.querySelector("#home-search-form #SearchValidationError").style.display = 'block';
        window.event.preventDefault();
    } else {
        document.querySelector("#home-search-form #SearchValidationError").style.display = 'none';
    }
};

///////////////////////////////////////////////////////////////////////////////
// Calculator                                                                 /
///////////////////////////////////////////////////////////////////////////////

function updateScrollHeight(id) {
    var content = document.getElementById(id);
    content.style.height = content.scrollHeight + 'px';
}

function show_slide(id) {
    slide_up(widget_slides);
    slide_down(id);
    document.getElementById(calculator).scrollIntoView();
}

start();
slide_up(widget_slides);
slide_down('slide-1');

function start() {
    income1 = 0;
    income2 = 0;
    income3 = 0;
    income4 = 0;
    income5 = 0;
    total_monthly_income = 0;
    monthly_liability = 0;
    auto_loan = 0;
    student_loan = 0;
    installment_loan = 0;
    revolving_account = 0;
    other_debt = 0;
    total_monthly_liability = 0;
    document.getElementById("inc_1").value = 0;
    document.getElementById("i1_w2").value = 0;
    document.getElementById("i1_vp").value = 0;
    document.getElementById("inc_1").innerHTML = 0;
    document.getElementById("inc_2").value = 0;
    document.getElementById("i2_w2").value = 0;
    document.getElementById("i2_vp").value = 0;
    document.getElementById("inc_2").innerHTML = 0;
    document.getElementById("inc_3").value = 0;
    document.getElementById("i3_w2").value = 0;
    document.getElementById("i3_vp").value = 0;
    document.getElementById("inc_3").innerHTML = 0;
    document.getElementById("inc_4").value = 0;
    document.getElementById("i4_w2").value = 0;
    document.getElementById("i4_vp").value = 0;
    document.getElementById("inc_4").innerHTML = 0;
    document.getElementById("inc_5").value = 0;
    document.getElementById("i5_w2").value = 0;
    document.getElementById("i5_vp").value = 0;
    document.getElementById("inc_5").innerHTML = 0;
    document.getElementById("a3a").value = "";
    document.getElementById("a3b").value = "";
    document.getElementById("a4").value = "";
    document.getElementById("a5").value = "";
    document.getElementById("a6").value = "";
    document.getElementById("a7").value = "";
    document.getElementById("a8a").value = "";
    document.getElementById("a8b").value = "";
    document.getElementById("a9a").value = "";
    document.getElementById("a9b").value = "";
    get_input();
}

function get_input() {
    loan_program = get_id_value("mySelect");
    show_tab_content(loan_program);
    // Set Min Down for Loan Program
    if (loan_program === "FHA") {
        document.getElementById("dp").min = 3.5; // Min Down for FHA
        document.getElementById("DP%").innerHTML = "3.5";
    } else if (loan_program === "VA" || loan_program === "USDA") {
        document.getElementById("dp").min = 0.0; // Min Down for VA & USDA
        document.getElementById("DP%").innerHTML = "0.0";
    } else if (loan_program === "Conventional") {
        document.getElementById("dp").min = 3.0; // Min Down for Conventional
        document.getElementById("DP%").innerHTML = "3.0";
    } else if (loan_program === "Jumbo") {
        document.getElementById("dp").min = 10; // Min Down for Jumbo
        document.getElementById("DP%").innerHTML = "10.0";
    }
    // Get Loan Term
    loan_term = get_id_value("mySelect2");
    // Get Interest Rate
    interest_rate = Number(get_id_value("apr"));
    toString('APR%', interest_rate, 3);
    // Get Down Payment
    down_payment_percent = Number(get_id_value("dp"));
    loan_to_value = 100 - down_payment_percent;
    toString('LTV', loan_to_value, 1);
    if (loan_program === "FHA" && down_payment_percent < 3.5) {
        down_payment_percent = 3.5; // Min Down for FHA
    }
    if (loan_program === "Conventional" && down_payment_percent < 3) {
        down_payment_percent = 3.0; // Min Down for Conventional
    }
    if (loan_program === "Jumbo" && down_payment_percent < 10) {
        down_payment_percent = 10; // Set min down payment for Jumbo
    }
    toString('DP%', down_payment_percent, 1);
    // Get Mortgage Insurance
    if (loan_program === "VA") {
        mi_rate = 0;
    } else if (loan_program === "FHA" && down_payment_percent < 5) {
        mi_rate = 0.85;
    } else if (loan_program === "FHA" && down_payment_percent >= 5) {
        mi_rate = 0.80;
    } else if (loan_program === "USDA") {
        mi_rate = 0.35;
    } else if (loan_program === "Conventional" && down_payment_percent >= 20) {
        mi_rate = 0;
    } else if (loan_program === "Jumbo" && down_payment_percent >= 20) {
        mi_rate = 0;
    } else {
        mi_rate = Number(document.getElementById("mi").value);
    }
    toString('MI%', mi_rate, 2);
    // Get Lender's Required Ratios
    qualifying_front_ratio = Number(get_id_value("efr"));
    qualifying_back_ratio = Number(get_id_value("ebr"));
    toString('EFR', qualifying_front_ratio, 0);
    if (qualifying_front_ratio > qualifying_back_ratio) {
        document.getElementById("ebr").value = qualifying_front_ratio;
        qualifying_back_ratio = Number(get_id_value("ebr"));
    }
    toString('EBR', qualifying_back_ratio, 0);
}

function start_over() {
    start();
    show_slide('slide-1');
}

function show_income_source() {
    if (total_monthly_income === 0) {
        show_income_1();
    } else {
        show_income_summary();
    }
}

function show_income_tab() {
    get_employment_type();
    show_slide('income_info');
}

function show_income_1() {
    income_source = "Income 1";
    document.getElementById("income-source").innerHTML = "Income 1";
    hide("remove");
    show_income_tab();
}

function show_income_2() {
    income_source = "Income 2";
    document.getElementById("income-source").innerHTML = "Income 2";
    show("remove");
    show_income_tab();
}

function show_income_3() {
    income_source = "Income 3";
    document.getElementById("income-source").innerHTML = "Income 3";
    show("remove");
    show_income_tab();
}

function show_income_4() {
    income_source = "Income 4";
    document.getElementById("income-source").innerHTML = "Income 4";
    show("remove");
    show_income_tab();
}

function show_income_5() {
    income_source = "Income 5";
    document.getElementById("income-source").innerHTML = "Income 5";
    show("remove");
    show_income_tab();
}

function show_income_summary() {
    update_income();
    if (income2 === 0) {
        hide("income-2-details");
    } else {
        show("income-2-details");
    }
    if (income3 === 0) {
        hide("income-3-details");
    } else {
        show("income-3-details");
    }
    if (income4 === 0) {
        hide("income-4-details");
    } else {
        show("income-4-details");
    }
    if (income5 === 0) {
        hide("income-5-details");
    } else {
        show("income-5-details");
    }
    show_slide('income-summary');
}

function get_employment_type() {
    employmentType = get_id_value("a2"); // Get Employment Type
    if (employmentType === "Hourly") {
        show_hourly_pay();
    } else if (employmentType === "Weekly") {
        show_weekly_pay();
    } else if (employmentType === "Semi-Weekly") {
        show_semi_weekly_pay();
    } else if (employmentType === "Monthly") {
        show_monthly_pay();
    } else if (employmentType === "Annually") {
        show_annual_pay();
    } else if (employmentType === "1099 Employee") {
        show_variable_pay();
    } else if (employmentType === "Self-Employed") {
        show_variable_pay();
    }
}

function clear_inc_source() {
    // This will clear all input values with Class Name = "inputValue3"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("inputValue3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].value = "";
    }
    if (income_source === "Income 1") {
        document.getElementById("inc_1").value = 0;
        document.getElementById("i1_w2").value = 0;
        document.getElementById("i1_vp").value = 0;
        income1 = 0;
    } else if (income_source === "Income 2") {
        document.getElementById("inc_2").value = 0;
        document.getElementById("i2_w2").value = 0;
        document.getElementById("i2_vp").value = 0;
        income2 = 0;
        document.getElementById("inc_2").innerHTML = 0;
    } else if (income_source === "Income 3") {
        document.getElementById("inc_3").value = 0;
        document.getElementById("i3_w2").value = 0;
        document.getElementById("i3_vp").value = 0;
        income3 = 0;
        document.getElementById("inc_3").innerHTML = 0;
    } else if (income_source === "Income 4") {
        document.getElementById("inc_4").value = 0;
        document.getElementById("i4_w2").value = 0;
        document.getElementById("i4_vp").value = 0;
        income4 = 0;
        document.getElementById("inc_4").innerHTML = 0;
    } else if (income_source === "Income 5") {
        document.getElementById("inc_5").value = 0;
        document.getElementById("i5_w2").value = 0;
        document.getElementById("i5_vp").value = 0;
        income5 = 0;
        document.getElementById("inc_5").innerHTML = 0;
    }
    show_income_summary();
}

function calc_inc_source() {
    if (employmentType === "Hourly") {
        hr = Number(get_id_value("a3a")); // Get Hour Pay ($)
        hpw = Number(get_id_value("a3b")); // Get Hours Per Week
        if (hr <= 0) {
            alert("Please enter valid Hourly Rate");
            document.getElementById("a3a").value = "";
            hr = 0;
            return;
        }
        if (hpw <= 0 || hpw > 168) {
            alert("Please enter valid Hours Per Week");
            document.getElementById("a3b").value = "";
            hpw = 0;
            return;
        }
        w2 = ((hr * hpw) * 52) / 12; // Hourly Pay - Monthly Income
        vp1 = Number(get_id_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_id_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Weekly") {
        wp = Number(get_id_value("a4")); // Get Weekly Pay ($)
        if (wp <= 0) {
            alert("Please enter valid Weekly Rate");
            document.getElementById("a4").value = "";
            wp = 0;
            return;
        }
        w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
        vp1 = Number(get_id_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_id_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Semi-Weekly") {
        swp = Number(get_id_value("a5")); // Get Semi-Weekly Pay ($)
        if (swp <= 0) {
            alert("Please enter valid Semi-Weekly Rate");
            document.getElementById("a5").value = "";
            swp = 0;
            return;
        }
        w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
        vp1 = Number(get_id_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_id_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Monthly") {
        mp = Number(get_id_value("a6")); // Get Monthly Pay ($)
        if (mp <= 0) {
            alert("Please enter valid Monthly Salary");
            document.getElementById("a6").value = "";
            mp = 0;
            return;
        }
        w2 = mp; // Monthly Pay Income
        vp1 = Number(get_id_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_id_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Annually") {
        ap = Number(get_id_value("a7")); // Get Annual Pay ($)
        if (ap <= 0) {
            alert("Please enter valid Annual Salary");
            document.getElementById("a7").value = "";
            ap = 0;
            return;
        }
        w2 = ap / 12;
        vp1 = Number(get_id_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_id_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "1099 Employee") {
        w2 = 0; // Not W2 Employee
        vp1 = Number(get_id_value("a9a")); // Get Variable Income 1
        vp2 = Number(get_id_value("a9b")); // Get Variable Income 2
        if (vp1 <= 0 || vp2 <= 0) {
            alert("Please enter required income for 2 years");
            return;
        }
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Self-Employed") {
        w2 = 0; // Not W2 Employee
        vp1 = Number(get_id_value("a9a")); // Get Variable Income 1
        vp2 = Number(get_id_value("a9b")); // Get Variable Income 2
        if (vp1 <= 0 || vp2 <= 0) {
            alert("Please enter required income for 2 years");
            return;
        }
        vp = (vp1 + vp2) / 24; // Get Variable Pay
    }
    inc = (w2 + vp); // income inputed
    if (income_source === "Income 1") {
        show("I1");
        toString('inc_1', inc, 2);
        toString('i1_w2', w2, 2);
        toString('i1_vp', vp, 2);
        income1 = inc; // update income1
    } else if (income_source === "Income 2") {
        show("I2");
        toString('inc_2', inc, 2);
        toString('i2_w2', w2, 2);
        toString('i2_vp', vp, 2);
        income2 = inc; // update income2
    } else if (income_source === "Income 3") {
        show("I3");
        toString('inc_3', inc, 2);
        toString('i3_w2', w2, 2);
        toString('i3_vp', vp, 2);
        income3 = inc; // update income3
    } else if (income_source === "Income 4") {
        show("I4");
        toString('inc_4', inc, 2);
        toString('i4_w2', w2, 2);
        toString('i4_vp', vp, 2);
        income4 = inc; // update income4
    } else if (income_source === "Income 5") {
        show("I5");
        toString('inc_5', inc, 2);
        toString('i5_w2', w2, 2);
        toString('i5_vp', vp, 2);
        income5 = inc; // update income5
    }
    show_income_summary();
}

function update_income() {
    total_monthly_income = income1 + income2 + income3 + income4 + income5; // update total_monthly_income
    toString('total-income', total_monthly_income, 2);
}

function update_liability() {
    auto_loan = Number(document.getElementById("auto_loan").value);
    if (auto_loan < 0) {
        alert("Please enter only positive number");
        document.getElementById("auto_loan").value = "";
        auto_loan = 0;
    }
    student_loan = Number(document.getElementById("student_loan").value);
    if (student_loan < 0) {
        alert("Please enter only positive number");
        document.getElementById("student_loan").value = "";
        student_loan = 0;
    }
    installment_loan = Number(document.getElementById("installment_loan").value);
    if (installment_loan < 0) {
        alert("Please enter only positive number");
        document.getElementById("installment_loan").value = "";
        installment_loan = 0;
    }
    revolving_account = Number(document.getElementById("revolving_account").value);
    if (revolving_account < 0) {
        alert("Please enter only positive number");
        document.getElementById("revolving_account").value = "";
        revolving_account = 0;
    }
    other_debt = Number(document.getElementById("other_debt").value);
    if (other_debt < 0) {
        alert("Please enter only positive number");
        document.getElementById("other_debt").value = "";
        other_debt = 0;
    }
    total_monthly_liability = auto_loan + student_loan + installment_loan + revolving_account + other_debt;
    toString('ML', total_monthly_liability, 0);
    calc_dti();
    afford_calc();
    show_slide('calc-results');
}

function calc_dti() {
    // Calculating actual debt to income ratios
    var a1 = qualifying_front_ratio / 100;
    var a2 = qualifying_back_ratio / 100;
    liability_allowance = (qualifying_back_ratio - qualifying_back_ratio) * total_monthly_income;
    var a3 = a2 - a1; // Liability allowance(decimal)
    var a4 = (total_monthly_liability / total_monthly_income); // Liability ONLY ratio (decimal) - Actual
    if (a4 < a3) {
        total_monthly_payment_allowed = (total_monthly_income * a1) + total_monthly_liability; // Total Monthly Payment restricted by Front Ratio
        final_front_ratio = a1 * 100;
        final_back_ratio = (a1 + a4) * 100;
    } else {
        total_monthly_payment_allowed = (total_monthly_income * a2); // Total Monthly Payment restricted by Back Ratio
        final_back_ratio = a2 * 100;
        final_front_ratio = (a2 - a4) * 100;
    }
}

function afford_calc() {
    var LTV = loan_to_value; // LTV (%)
    var ltv = LTV / 100; // LTV (decimal)
    var pt = (1.25 / 1200); // Property Tax Rate per month
    // P = M * (1 - (Math.pow(1 / (1 + r), n))) / r
    // P = Principal
    // M = Monthly Payment (P&I)
    // r = Monthly Interest Rate = (apr / 1200)
    // n = Term in months (lt * 12)
    var r = (interest_rate / 1200); // Monthly Interest Rate (%)
    var n = (loan_term * 12); // Loan Term in Months
    var k1 = r / (1 - (Math.pow(1 / (1 + r), n))); // Constant for solving Monthly Payment
    var k2 = pt * (1 + (down_payment_percent / 100)); // Contant for solving monthly Property Tax
    var k3 = (0.25 / 1200); // Constant for solving Monthly Homeowner Insurance Premium
    loan_amount = (total_monthly_payment_allowed - total_monthly_liability) / (k1 + k2 + (mi_rate / 1200) + k3); // Solve for Loan Principal Amount P
    if (loan_amount <= 0) {
        loan_amount = 0;
    }
    toString('P', loan_amount, 0);
    //FHA Loan Limit Warning
    if ((loan_program !== "Jumbo") && loan_amount > 417000) {
        show("loanMaxNote");
    } else {
        hide("loanMaxNote");
    }
    //Jumbo loan requirement
    if (loan_program === "Jumbo" && loan_amount < 484350) {
        show("jumboLoan");
    } else {
        hide("jumboLoan");
    }
    var M = loan_amount * k1; // Solve for M (Principal & Interest)
    toString('M', M, 2);
    var HV = loan_amount / ltv; // Solve for Home Value
    toString('HV', HV, 0);
    var DP = (HV - loan_amount); // Solve for Down Payment ($)
    toString('DP', DP, 0);
    var T = loan_amount * k2; // Solve for Property Tax ($)
    toString('T', T, 2);
    var I = loan_amount * (mi_rate / 1200); // Solve for Mortgage Insurance ($)
    toString('I', I, 2);
    var HOI = (loan_amount * k3); // Solve for Homeowner Insurance ($)
    toString('HOI', HOI, 2);
    var MP = M + T + I + HOI; // Solve for Monthly Housing Expenses
    toString('MP', MP, 2);
}

function remove_income() {
    // This will clear all input values with Class Name = "inputValue3"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("inputValue3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].value = "";
    }
    income_source = document.getElementById("a1").value; // Get Income Source
    if (income_source === "Income 1") {
        set_id_value("inc_1", 0);
        set_id_value("i1_w2", 0);
        set_id_value("i1_vp", 0);
        hide("I1");
        income1 = 0;
    }
    if (income_source === "Income 2") {
        set_id_value("inc_2", 0);
        set_id_value("i2_w2", 0);
        set_id_value("i2_vp", 0);
        hide("I2");
        income2 = 0;
    }
    if (income_source === "Income 3") {
        set_id_value("inc_3", 0);
        set_id_value("i3_w2", 0);
        set_id_value("i3_vp", 0);
        hide("I3");
        income3 = 0;
    }
    if (income_source === "Income 4") {
        set_id_value("inc_4", 0);
        set_id_value("i4_w2", 0);
        set_id_value("i4_vp", 0);
        hide("I4");
        income4 = 0;
    }
    if (income_source === "Income 5") {
        set_id_value("inc_5", 0);
        set_id_value("i5_w2", 0);
        set_id_value("i5_vp", 0);
        hide("I5");
        income5 = 0;
    }
    total_monthly_income = income1 + income2 + income3 + income4 + income5;
    toString('total-income', total_monthly_income, 2);
    if (total_monthly_income == 0) {
        hide("income-summary");
        set_id_value("HV", '0.00');
        hide("calc-results");
        set_id_value("FR", 'NA');
        set_id_value("AFR", 100);
        set_id_value("BR", 'NA');
        set_id_value("ABR", 100);
        return;
    }
    calc_dti();
    afford_calc();
    show_slide('calc-results');
}

function get_income_source() {
    income_source = get_id_value("a1");
}

function hide_income_input() {
    // This will hide all elements with Class Name = "incomeField"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("incomeField");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}

function show_hourly_pay() {
    hide_income_input();
    show("q2"); // Show Type of Employment
    show("q3"); // Show Hourly Rate
    show("q8"); // Show OT & Bonuses
}

function show_weekly_pay() {
    hide_income_input();
    show("q4"); // Show Weekly Rate
    show("q8"); // Show OT & Bonuses
}

function show_semi_weekly_pay() {
    hide_income_input();
    show("q5"); // Show Weekly Rate
    show("q8"); // Show OT & Bonuses
}

function show_monthly_pay() {
    hide_income_input();
    show("q6"); // Show Monthly Salary
    show("q8"); // Show OT & Bonuses
}

function show_annual_pay() {
    hide_income_input();
    show("q7"); // Show Annual Salary
    show("q8"); // Show OT & Bonuses
}

function show_variable_pay() {
    hide_income_input();
    show("q9"); // Show Variable Pay
}