///////////////////////////////////////////////////////////////////////////////
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('calc-ss');
        nextSlide('service-ss');
        nextSlide('home-valuation-ss');
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

const calculator = 'mortgage-prequalification-widget';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
const tabcontents = document.getElementById(calculator).getElementsByClassName("tabcontent");
const messages = document.getElementById('dti_messages').getElementsByClassName("message");

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
// Flyers Section - Animated Collapsible - Event Listener ---------------------/
////////////////////////////////////////////////////////////////////////////////

const flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
const contents = document.getElementById("flyers").getElementsByClassName("content");
for (let i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        for (let j = 0; j < contents.length; j++) {
            contents[j].style.height = '0px';
        }
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (let k = 0; k < flyers.length; k++) {
                flyers[k].classList.remove("active");
            }
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.height = content.scrollHeight + "px";
        }
    });
}

///////////////////////////////////////////////////////////////////////////////
// Miscs ---------------------------------------------------------------------/
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

function show_slide(id) {
    slide_up(widget_slides);
    slide_down(id);
    document.getElementById(calculator).scrollIntoView();
}

income1 = 0;
income2 = 0;
income3 = 0;
income4 = 0;
income5 = 0;
income_total = 0;
monthly_liability = 0;

calc();
slide_up(widget_slides);
slide_down('slide-1');

function calc() {
    // Step 1 - Get Purchase Price
    purchase_price = Number(get_value("pp"));
    toString('PP', purchase_price, 0);
    // Step 2 - Get Loan Program
    loan_program = get_value("mySelect");
    show_tab_content(loan_program);
    // var i, tabcontent;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }
    // document.getElementById(loan_program).style.display = "block"; // Show associated loan program note
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
    // Set Min Purchase Price for Loan Program
    if (loan_program === "Jumbo") {
        document.getElementById("pp").min = 500000; // Set min purchase price if JUMBO
        document.getElementById("pp").max = 2000000; // Set max purchase price if JUMBO
    } else {
        document.getElementById("pp").min = 100000;
        document.getElementById("pp").max = 1000000;
    }
    // Step 2 - Get Loan Term
    loan_term = get_value("mySelect2");
    // Step 3 - Get Down Payment
    down_payment_percent = Number(get_value("dp"));
    // Set Minimum Down
    if (loan_program === "FHA" && dp < 3.5) {
        down_payment_percent = 3.5; // Min Down for FHA
    }
    if (loan_program === "Conventional" && dp < 3) {
        down_payment_percent = 3.0; // Min Down for Conventional
    }
    if (loan_program === "Jumbo" && dp < 10) {
        down_payment_percent = 10; // Set min down payment for Jumbo
    }
    toString('DP%', down_payment_percent, 1);
    down_payment = purchase_price * (down_payment_percent / 100);
    toString('DP', down_payment, 0);
    // Calculate Loan Amount
    loan_amount = (purchase_price - down_payment);
    toString('P', loan_amount, 0);
    // High Loan Amount Warning for Conforming Loans
    if ((loan_program !== "Jumbo") && loan_amount > 417000) {
        show("loanMaxNote");
    } else {
        hide("loanMaxNote");
    }
    //Low Loan Amount warning for Jumbo Loan
    if (loan_program === "Jumbo" && loan_amount < 484350) {
        show("jumboLoan");
    } else {
        hide("jumboLoan");
    }
    // Calculate Loan To Value Ratio
    loan_to_value = (100 - down_payment_percent);
    toString('LTV', loan_to_value, 1);
    // Get Expected Interest Rate
    interest_rate = Number(get_value("apr"));
    toString('APR', interest_rate, 3);
    // Get MI Rate
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
        mi_rate = Number(get_value("mi"));
    }
    toString('MI%', mi_rate, 2);
    // Get Property Tax
    property_tax_rate = Number(get_value("pt"));
    toString('PT%', property_tax_rate, 2);
    // Calculate Homeowner Insurance
    home_owner_insurance = (purchase_price * (0.25 / 1200));
    toString('HOI', home_owner_insurance, 2);
    // Calculate Housing Expense
    var n = loan_term * 12;
    var r = interest_rate / 1200;
    principal_interest = loan_amount * r / (1 - (Math.pow(1 / (1 + r), n)));
    toString('PI', principal_interest, 2);
    property_tax = ((property_tax_rate * purchase_price) / 1200);
    toString('T', property_tax, 2);
    mortgage_insurance = ((mi_rate * loan_amount) / 1200);
    toString('I', mortgage_insurance, 2);
    housing_expense = principal_interest + property_tax + mortgage_insurance + home_owner_insurance;
    toString('MP', housing_expense, 2);
    // Calculate DTI
    toString('total_income', income_total, 2);
    toString('MTL', monthly_liability, 2);
    if (income_total == 0) {
        return;
    }
    calc_dti();
}

function show_income_source() {
    if (income_total === 0) {
        income_source = "Income 1";
        show_income(1);
    } else {
        show_income_summary();
    }
}

function show_income(id) {
    income_source = "Income " + id;
    document.getElementById("income-source").innerHTML = income_source;
    if (income_source === "Income 1") {
        hide("remove");
    } else {
        show("remove");
    }
    show_slide('income-info');
}

function show_income_summary() {
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

function show_calc_results() {
    update_income();
    add_liability();
    calc_dti();
    show_slide('calc_results');
}

function remove_income() {
    clear_inc_source();
    update_income();
    calc_dti();
}

function calc_inc_source() {
    get_employment_type();
    if (employmentType === "Hourly") {
        hr = Number(get_value("a3a")); // Get Hour Pay ($)
        hpw = Number(get_value("a3b")); // Get Hours Per Week
        if (hr <= 0) {
            alert("Please enter valid Hourly Rate");
            set_value("a3a", '');
            hr = 0;
            return;
        }
        if (hpw <= 0 || hpw > 168) {
            alert("Please enter valid Hours Per Week");
            set_value("a3b", '');
            hpw = 0;
            return;
        }
        w2 = ((hr * hpw) * 52) / 12; // Hourly Pay - Monthly Income
        vp1 = Number(get_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Weekly") {
        wp = Number(get_value("a4")); // Get Weekly Pay ($)
        if (wp <= 0) {
            alert("Please enter valid Weekly Rate");
            set_value("a4", '');
            wp = 0;
            return;
        }
        w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
        vp1 = Number(get_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Semi-Weekly") {
        swp = Number(get_value("a5")); // Get Semi-Weekly Pay ($)
        if (swp <= 0) {
            alert("Please enter valid Semi-Weekly Rate");
            set_value("a5", '');
            swp = 0;
            return;
        }
        w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
        vp1 = Number(get_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Monthly") {
        mp = Number(get_value("a6")); // Get Monthly Pay ($)
        if (mp <= 0) {
            alert("Please enter valid Monthly Salary");
            set_value("a6", '');
            mp = 0;
            return;
        }
        w2 = mp; // Monthly Pay Income
        vp1 = Number(get_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Annually") {
        ap = Number(get_value("a7")); // Get Annual Pay ($)
        if (ap <= 0) {
            alert("Please enter valid Annual Salary");
            set_value("a7", '');
            ap = 0;
            return;
        }
        w2 = ap / 12;
        vp1 = Number(get_value("a8a")); // Get OT & Bonuses 1
        vp2 = Number(get_value("a8b")); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "1099 Employee") {
        w2 = 0; // Not W2 Employee
        vp1 = Number(get_value("a9a")); // Get Variable Income 1
        vp2 = Number(get_value("a9b")); // Get Variable Income 2
        if (vp1 <= 0 || vp2 <= 0) {
            alert("Please enter required income for 2 years");
            return;
        }
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Self-Employed") {
        w2 = 0; // Not W2 Employee
        vp1 = Number(get_value("a9a")); // Get Variable Income 1
        vp2 = Number(get_value("a9b")); // Get Variable Income 2
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
    income_total = income1 + income2 + income3 + income4 + income5; // update income_total
    toString('total_income', income_total, 2);
}

function add_liability() {
    auto_loan = Number(get_value("auto_loan"));
    student_loan = Number(get_value("student_loan"));
    installment_loan = Number(get_value("installment_loan"));
    revolving_account = Number(get_value("revolving_account"));
    other_debt = Number(get_value("other_debt"));
    monthly_liability = auto_loan + student_loan + installment_loan + revolving_account + other_debt;
    toString('MTL', monthly_liability, 0);
}

function clear_liability() {
    auto_loan = 0;
    student_loan = 0;
    installment_loan = 0;
    revolving_account = 0;
    other_debt = 0;
    set_value("auto_loan", '');
    set_value("student_loan", '');
    set_value("installment_loan", '');
    set_value("revolving_account", '');
    set_value("other_debt", '');
}

function calc_dti() {
    monthly_payment = housing_expense + monthly_liability;
    front_dti_ratio = (housing_expense / income_total) * 100;
    back_dti_ratio = (monthly_payment / income_total) * 100;
    hide("no_income_warning");
    show("dti_results");
    show("dti_messages");
    if (front_dti_ratio > 37) {
        document.getElementById("FR").style.color = "red";
    } else {
        document.getElementById("FR").style.color = "green";
    }
    toString('FR', front_dti_ratio, 2);
    document.getElementById("FR%").value = front_dti_ratio.toLocaleString(); // Actual Front Ratio (%)
    if (back_dti_ratio > 47) {
        document.getElementById("BR").style.color = "red";
    } else {
        document.getElementById("BR").style.color = "green";
    }
    toString('BR', back_dti_ratio, 2);
    document.getElementById("BR%").value = back_dti_ratio.toLocaleString();
    // Warning High Debt Ratio
    if (back_dti_ratio <= 36) {
        show("dti1");
        hide("dti2");
        hide("dti3");
    } else if (back_dti_ratio > 36 && back_dti_ratio <= 50) {
        hide("dti1");
        show("dti2");
        hide("dti3");
    } else {
        hide("dti1");
        hide("dti2");
        show("dti3");
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

function start_over() {
    income1 = 0;
    income2 = 0;
    income3 = 0;
    income4 = 0;
    income5 = 0;
    income_total = 0;
    monthly_liability = 0;
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
    clear_liability();
    show_slide('slide-1');
}

function get_employment_type() {
    employmentType = get_value("a2"); // Get Employment Type
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
    document.getElementById("q2").style.display = "block"; // Show Type of Employment
    document.getElementById("q3").style.display = "block"; // Show Hourly Rate
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}

function show_weekly_pay() {
    hide_income_input();
    document.getElementById("q4").style.display = "block"; // Show Weekly Rate
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}

function show_semi_weekly_pay() {
    hide_income_input();
    document.getElementById("q5").style.display = "block"; // Show Weekly Rate
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}

function show_monthly_pay() {
    hide_income_input();
    document.getElementById("q6").style.display = "block"; // Show Monthly Salary
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}

function show_annual_pay() {
    hide_income_input();
    document.getElementById("q7").style.display = "block"; // Show Annual Salary
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}

function show_variable_pay() {
    hide_income_input();
    document.getElementById("q9").style.display = "block"; // Show Variable Pay
}