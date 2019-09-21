// Search New Homes
document.getElementById("HomeSearchBtnWidget").onclick = function (event) {
    var searchText = document.getElementById("SearchTextWidget").value;
    if (searchText === "" || typeof (searchText) == "undefined") {
        document.querySelector("#home-search-form #SearchValidationError").style.display = 'block';
        window.event.preventDefault();
    } else {
        document.querySelector("#home-search-form #SearchValidationError").style.display = 'none';
    }
};
// Toggle active class - id("main-dti-select")
btns = document.getElementById("main-dti-select").getElementsByClassName("selectable");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}
// Add active class to Calculator's Inputs
var btns = document.getElementById("afford-calc-widget").getElementsByClassName("selectable");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// Animated Collapsible - Flyers ---------------------------------------------/
var flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
for (var i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("flyers").getElementsByClassName("content");
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
hide_calc_slides();
$('#slide-1').slideDown('slow');
// Initialization
start();

function start() {
    income1 = 0, income2 = 0, income3 = 0, income4 = 0, income5 = 0, total_monthly_income = 0, monthly_liability = 0;
    auto_loan = 0, student_loan = 0, installment_loan = 0, revolving_account = 0, other_debt = 0;
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
    var i;
    var tabcontent = document.getElementById("loan-programs").getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        $(tabcontent[i]).hide();
    }
    // Get Loan Program
    loan_program = document.getElementById("mySelect").value;
    document.getElementById(loan_program).style.display = "block";
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
    loan_term = document.getElementById("mySelect2").value;
    // Get Interest Rate
    interest_rate = Number(document.getElementById("apr").value);
    document.getElementById("APR%").innerHTML = interest_rate.toFixed(3);
    // Get Down Payment
    down_payment_percent = Number(document.getElementById("dp").value);
    loan_to_value = 100 - down_payment_percent;
    document.getElementById("LTV").innerHTML = loan_to_value.toFixed(1);
    if (loan_program === "FHA" && down_payment_percent < 3.5) {
        down_payment_percent = 3.5; // Min Down for FHA
    }
    if (loan_program === "Conventional" && down_payment_percent < 3) {
        down_payment_percent = 3.0; // Min Down for Conventional
    }
    if (loan_program === "Jumbo" && down_payment_percent < 10) {
        down_payment_percent = 10; // Set min down payment for Jumbo
    }
    document.getElementById("DP%").innerHTML = down_payment_percent.toFixed(1);
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
    document.getElementById("MI%").innerHTML = mi_rate.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Get Lender's Required Ratios
    qualifying_front_ratio = Number(document.getElementById("efr").value);
    qualifying_back_ratio = Number(document.getElementById("ebr").value);
    document.getElementById("EFR").innerHTML = qualifying_front_ratio.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    if (qualifying_front_ratio > qualifying_back_ratio) {
        document.getElementById("ebr").value = qualifying_front_ratio;
        qualifying_back_ratio = Number(document.getElementById("ebr").value);
    }
    document.getElementById("EBR").innerHTML = qualifying_back_ratio.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function start_over() {
    start();
    show_slide('slide-1')
}

function show_slide(id) {
    hide_calc_slides();
    var element = "#" + id;
    $(element).slideDown("slow");
    document.getElementById("afford-calc-widget").scrollIntoView();
    get_input();
}

function hide_calc_slides() {
    var widget_slides = document.getElementById("afford-calc-widget").getElementsByClassName("widget-slide");
    for (var i = 0; i < widget_slides.length; i++) {
        $(widget_slides[i]).hide();
    }
}

function show_income_source() {
    if (total_monthly_income === 0) {
        show_income_1();
    } else {
        show_income_summary();
    }
}

function show_income_tab() {
    hide_calc_slides();
    $("#income_info").slideDown("slow");
    document.getElementById("afford-calc-widget").scrollIntoView();
    get_employment_type();
}

function show_income_1() {
    income_source = "Income 1";
    document.getElementById("income-source").innerHTML = "Income 1";
    document.getElementById("remove").style.display = "none";
    show_income_tab();
}

function show_income_2() {
    income_source = "Income 2";
    document.getElementById("income-source").innerHTML = "Income 2";
    document.getElementById("remove").style.display = "block";
    show_income_tab();
}

function show_income_3() {
    income_source = "Income 3";
    document.getElementById("income-source").innerHTML = "Income 3";
    document.getElementById("remove").style.display = "block";
    show_income_tab();
}

function show_income_4() {
    income_source = "Income 4";
    document.getElementById("income-source").innerHTML = "Income 4";
    document.getElementById("remove").style.display = "block";
    show_income_tab();
}

function show_income_5() {
    income_source = "Income 5";
    document.getElementById("income-source").innerHTML = "Income 5";
    document.getElementById("remove").style.display = "block";
    show_income_tab();
}

function show_income_summary() {
    update_income();
    hide_calc_slides();
    $("#income-summary").slideDown("slow");
    document.getElementById("afford-calc-widget").scrollIntoView();
    if (income2 === 0) {
        document.getElementById("income-2-details").style.display = "none";
    } else {
        document.getElementById("income-2-details").style.display = "block";
    }
    if (income3 === 0) {
        document.getElementById("income-3-details").style.display = "none";
    } else {
        document.getElementById("income-3-details").style.display = "block";
    }
    if (income4 === 0) {
        document.getElementById("income-4-details").style.display = "none";
    } else {
        document.getElementById("income-4-details").style.display = "block";
    }
    if (income5 === 0) {
        document.getElementById("income-5-details").style.display = "none";
    } else {
        document.getElementById("income-5-details").style.display = "block";
    }
}

function get_employment_type() {
    employmentType = document.getElementById("a2").value; // Get Employment Type
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
        hr = Number(document.getElementById("a3a").value); // Get Hour Pay ($)
        hpw = Number(document.getElementById("a3b").value); // Get Hours Per Week
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
        vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
        vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Weekly") {
        wp = Number(document.getElementById("a4").value); // Get Weekly Pay ($)
        if (wp <= 0) {
            alert("Please enter valid Weekly Rate");
            document.getElementById("a4").value = "";
            wp = 0;
            return;
        }
        w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
        vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
        vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Semi-Weekly") {
        swp = Number(document.getElementById("a5").value); // Get Semi-Weekly Pay ($)
        if (swp <= 0) {
            alert("Please enter valid Semi-Weekly Rate");
            document.getElementById("a5").value = "";
            swp = 0;
            return;
        }
        w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
        vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
        vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Monthly") {
        mp = Number(document.getElementById("a6").value); // Get Monthly Pay ($)
        if (mp <= 0) {
            alert("Please enter valid Monthly Salary");
            document.getElementById("a6").value = "";
            mp = 0;
            return;
        }
        w2 = mp; // Monthly Pay Income
        vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
        vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Annually") {
        ap = Number(document.getElementById("a7").value); // Get Annual Pay ($)
        if (ap <= 0) {
            alert("Please enter valid Annual Salary");
            document.getElementById("a7").value = "";
            ap = 0;
            return;
        }
        w2 = ap / 12;
        vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
        vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "1099 Employee") {
        w2 = 0; // Not W2 Employee
        vp1 = Number(document.getElementById("a9a").value); // Get Variable Income 1
        vp2 = Number(document.getElementById("a9b").value); // Get Variable Income 2
        if (vp1 <= 0 || vp2 <= 0) {
            alert("Please enter required income for 2 years");
            return;
        }
        vp = (vp1 + vp2) / 24; // Calculate Variable Pay
    } else if (employmentType === "Self-Employed") {
        w2 = 0; // Not W2 Employee
        vp1 = Number(document.getElementById("a9a").value); // Get Variable Income 1
        vp2 = Number(document.getElementById("a9b").value); // Get Variable Income 2
        if (vp1 <= 0 || vp2 <= 0) {
            alert("Please enter required income for 2 years");
            return;
        }
        vp = (vp1 + vp2) / 24; // Get Variable Pay
    }
    inc = (w2 + vp); // income inputed
    if (income_source === "Income 1") {
        document.getElementById("I1").style.display = "block";
        document.getElementById("inc_1").innerHTML = inc.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i1_w2").innerHTML = w2.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i1_vp").innerHTML = vp.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        income1 = inc; // update income1
    } else if (income_source === "Income 2") {
        document.getElementById("I2").style.display = "block";
        document.getElementById("inc_2").innerHTML = inc.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i2_w2").innerHTML = w2.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i2_vp").innerHTML = vp.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        income2 = inc; // update income2
    } else if (income_source === "Income 3") {
        document.getElementById("I3").style.display = "block";
        document.getElementById("inc_3").innerHTML = inc.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i3_w2").innerHTML = w2.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i3_vp").innerHTML = vp.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        income3 = inc; // update income3
    } else if (income_source === "Income 4") {
        document.getElementById("I4").style.display = "block";
        document.getElementById("inc_4").innerHTML = inc.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i4_w2").innerHTML = w2.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i4_vp").innerHTML = vp.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        income4 = inc; // update income4
    } else if (income_source === "Income 5") {
        document.getElementById("I5").style.display = "block";
        document.getElementById("inc_5").innerHTML = inc.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i5_w2").innerHTML = w2.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        document.getElementById("i5_vp").innerHTML = vp.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        income5 = inc; // update income5
    }
    show_income_summary();
}

function update_income() {
    total_monthly_income = income1 + income2 + income3 + income4 + income5; // update total_monthly_income
    document.getElementById("total-income").innerHTML = total_monthly_income.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
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
    document.getElementById("ML").innerHTML = total_monthly_liability.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
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
    document.getElementById("P").innerHTML = loan_amount.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    //FHA Loan Limit Warning
    if (!(loan_program === "Jumbo") && loan_amount > 417000) {
        document.getElementById("loanMaxNote").style.display = "block";
    } else {
        document.getElementById("loanMaxNote").style.display = "none";
    }
    //Jumbo loan requirement
    if (loan_program === "Jumbo" && loan_amount < 484350) {
        document.getElementById("jumboLoan").style.display = "block";
    } else {
        document.getElementById("jumboLoan").style.display = "none";
    }
    var M = loan_amount * k1; // Solve for M (Principal & Interest)
    document.getElementById("M").innerHTML = M.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    var HV = loan_amount / ltv; // Solve for Home Value
    document.getElementById("HV").innerHTML = HV.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    var DP = (HV - loan_amount); // Solve for Down Payment ($)
    document.getElementById("DP").innerHTML = DP.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    var T = loan_amount * k2; // Solve for Property Tax ($)
    document.getElementById("T").innerHTML = T.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    var I = loan_amount * (mi_rate / 1200); // Solve for Mortgage Insurance ($)
    document.getElementById("I").innerHTML = I.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    var HOI = (loan_amount * k3); // Solve for Homeowner Insurance ($)
    document.getElementById("HOI").innerHTML = HOI.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    var MP = M + T + I + HOI; // Solve for Monthly Housing Expenses
    document.getElementById("MP").innerHTML = MP.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
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
        document.getElementById("inc_1").value = 0;
        document.getElementById("i1_w2").value = 0;
        document.getElementById("i1_vp").value = 0;
        document.getElementById("I1").style.display = "none";
        income1 = 0;
    }
    if (income_source === "Income 2") {
        document.getElementById("inc_2").value = 0;
        document.getElementById("i2_w2").value = 0;
        document.getElementById("i2_vp").value = 0;
        document.getElementById("I2").style.display = "none";
        income2 = 0;
    }
    if (income_source === "Income 3") {
        document.getElementById("inc_3").value = 0;
        document.getElementById("i3_w2").value = 0;
        document.getElementById("i3_vp").value = 0;
        document.getElementById("I3").style.display = "none";
        income3 = 0;
    }
    if (income_source === "Income 4") {
        document.getElementById("inc_4").value = 0;
        document.getElementById("i4_w2").value = 0;
        document.getElementById("i4_vp").value = 0;
        document.getElementById("I4").style.display = "none";
        income4 = 0;
    }
    if (income_source === "Income 5") {
        document.getElementById("inc_5").value = 0;
        document.getElementById("i5_w2").value = 0;
        document.getElementById("i5_vp").value = 0;
        document.getElementById("I5").style.display = "none";
        income5 = 0;
    }
    total_monthly_income = income1 + income2 + income3 + income4 + income5;
    document.getElementById("total-income").innerHTML = total_monthly_income.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    if (total_monthly_income == 0) {
        document.getElementById("income-summary").style.display = "none";
        document.getElementById("HV").innerHTML = "0.00"
        document.getElementById("calc-results").style.display = "none";
        document.getElementById("FR").innerHTML = "NA";
        document.getElementById("AFR").value = 100;
        document.getElementById("BR").innerHTML = "NA";
        document.getElementById("ABR").value = 100;
        return;
    }
    calc_dti();
    afford_calc();
    show_slide('calc-results');
}

function get_income_source() {
    income_source = document.getElementById("a1").value;
}

function hide_income_input() {
    // This will hide all elements with Class Name = "incomeField"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("incomeField");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
}

function show_dti_message_1() {
    $("#dti_message_1").slideDown("slow");
    $("#dti_message_2").hide();
    $("#dti_message_3").hide();
}

function show_dti_message_2() {
    $("#dti_message_1").hide();
    $("#dti_message_2").slideDown("slow");
    $("#dti_message_3").hide();
}

function show_dti_message_3() {
    $("#dti_message_1").hide();
    $("#dti_message_2").hide();
    $("#dti_message_3").slideDown("slow");
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