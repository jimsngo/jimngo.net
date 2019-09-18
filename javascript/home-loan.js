// Animated Collapsible - Flyers ---------------------------------------------/
var flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
for (var i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("flyers").getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.maxHeight = null;
        };
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (var k = 0; k < flyers.length; k++) {
                flyers[k].classList.remove("active");
            };
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Calculator Section
income1 = 0, income2 = 0, income3 = 0, income4 = 0, income5 = 0, income_total = 0, monthly_liability = 0;
calc();

function calc() {
    // Step 1 - Get Purchase Price
    purchase_price = Number(document.getElementById("pp").value);
    document.getElementById("PP").innerHTML = purchase_price.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // Step 2 - Get Loan Program
    loan_program = document.getElementById("mySelect").value;
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(loan_program).style.display = "block"; // Show associated loan program note
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
    loan_term = document.getElementById("mySelect2").value;
    // Step 3 - Get Down Payment
    down_payment_percent = Number(document.getElementById("dp").value);
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
    document.getElementById("DP%").innerHTML = down_payment_percent.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    down_payment = purchase_price * (down_payment_percent / 100);
    document.getElementById("DP").innerHTML = down_payment.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // Calculate Loan Amount
    loan_amount = (purchase_price - down_payment);
    document.getElementById("P").innerHTML = loan_amount.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // High Loan Amount Warning for Conforming Loans
    if (!(loan_program === "Jumbo") && loan_amount > 417000) {
        document.getElementById("loanMaxNote").style.display = "block";
    } else {
        document.getElementById("loanMaxNote").style.display = "none";
    }
    //Low Loan Amount warning for Jumbo Loan
    if (loan_program === "Jumbo" && loan_amount < 484350) {
        document.getElementById("jumboLoan").style.display = "block";
    } else {
        document.getElementById("jumboLoan").style.display = "none";
    }
    // Calculate Loan To Value Ratio
    loan_to_value = (100 - down_payment_percent);
    document.getElementById("LTV").innerHTML = loan_to_value.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    // Get Expected Interest Rate
    interest_rate = Number(document.getElementById("apr").value);
    document.getElementById("APR").innerHTML = interest_rate.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
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
        mi_rate = Number(document.getElementById("mi").value);
    }
    document.getElementById("MI%").innerHTML = mi_rate.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Get Property Tax
    property_tax_rate = Number(document.getElementById("pt").value);
    document.getElementById("PT%").innerHTML = property_tax_rate.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Calculate Homeowner Insurance
    home_owner_insurance = (purchase_price * (0.25 / 1200));
    document.getElementById("HOI").innerHTML = home_owner_insurance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Calculate Housing Expense
    var n = loan_term * 12;
    var r = interest_rate / 1200;
    principal_interest = loan_amount * r / (1 - (Math.pow(1 / (1 + r), n)));
    document.getElementById("PI").innerHTML = principal_interest.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    property_tax = ((property_tax_rate * purchase_price) / 1200);
    document.getElementById("T").innerHTML = property_tax.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    mortgage_insurance = ((mi_rate * loan_amount) / 1200);
    document.getElementById("I").innerHTML = mortgage_insurance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    housing_expense = principal_interest + property_tax + mortgage_insurance + home_owner_insurance;
    document.getElementById("MP").innerHTML = housing_expense.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Calculate DTI
    document.getElementById("total_income").innerHTML = income_total.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    document.getElementById("MTL").innerHTML = monthly_liability.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    if (income_total == 0) {
        return;
    }
    calc_dti();
};

function hide_calc_slides() {
    var widget_slides = document.getElementById("mortgage-prequalification-widget").getElementsByClassName("widget-slide");
    for (var i = 0; i < widget_slides.length; i++) {
        $(widget_slides[i]).hide();
    }
};

function show_slide(id) {
    hide_calc_slides();
    var element = "#" + id;
    $(element).slideDown("slow");
    document.getElementById("mortgage-prequalification-widget").scrollIntoView();
};

function show_income_source() {
    if (income_total === 0) {
        income_source = "Income 1";
        show_income(1);
    } else {
        show_income_summary();
    }
};

function show_income(id) {
    income_source = "Income " + id;
    document.getElementById("income-source").innerHTML = income_source;
    if (income_source === "Income 1") {
        document.getElementById("remove").style.display = "none";
    } else {
        document.getElementById("remove").style.display = "block";
    }
    show_slide('income-info');
};

function show_income_summary() {
    hide_calc_slides();
    show_slide('income-summary');
    if (income2 === 0) {
        document.getElementById("income-2-details").style.display = "none";
    } else {
        document.getElementById("income-2-details").style.display = "block";
    };
    if (income3 === 0) {
        document.getElementById("income-3-details").style.display = "none";
    } else {
        document.getElementById("income-3-details").style.display = "block";
    };
    if (income4 === 0) {
        document.getElementById("income-4-details").style.display = "none";
    } else {
        document.getElementById("income-4-details").style.display = "block";
    };
    if (income5 === 0) {
        document.getElementById("income-5-details").style.display = "none";
    } else {
        document.getElementById("income-5-details").style.display = "block";
    };
};

function show_calc_results() {
    update_income();
    add_liability();
    calc_dti();
    hide_calc_slides();
    show_slide('calc_results');
};

function remove_income() {
    clear_inc_source();
    update_income();
    calc_dti();
};

function calc_inc_source() {
    get_employment_type();
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
    };
    show_income_summary();
};

function update_income() {
    income_total = income1 + income2 + income3 + income4 + income5; // update income_total
    document.getElementById("total_income").innerHTML = income_total.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

function add_liability() {
    auto_loan = Number(document.getElementById("auto_loan").value);
    student_loan = Number(document.getElementById("student_loan").value);
    installment_loan = Number(document.getElementById("installment_loan").value);
    revolving_account = Number(document.getElementById("revolving_account").value);
    other_debt = Number(document.getElementById("other_debt").value);
    monthly_liability = auto_loan + student_loan + installment_loan + revolving_account + other_debt;
    document.getElementById("MTL").innerHTML = monthly_liability.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
};

function clear_liability() {
    auto_loan = 0, student_loan = 0, installment_loan = 0, revolving_account = 0, other_debt = 0;
    document.getElementById("auto_loan").value = "";
    document.getElementById("student_loan").value = "";
    document.getElementById("installment_loan").value = "";
    document.getElementById("revolving_account").value = "";
    document.getElementById("other_debt").value = "";
};

function calc_dti() {
    monthly_payment = housing_expense + monthly_liability;
    front_dti_ratio = (housing_expense / income_total) * 100;
    back_dti_ratio = (monthly_payment / income_total) * 100;
    document.getElementById("no_income_warning").style.display = "none";
    document.getElementById("dti_results").style.display = "block";
    document.getElementById("dti_messages").style.display = "block";
    if (front_dti_ratio > 37) {
        document.getElementById("FR").style.color = "red";
    } else {
        document.getElementById("FR").style.color = "green";
    }
    document.getElementById("FR").innerHTML = front_dti_ratio.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    document.getElementById("FR%").value = front_dti_ratio.toLocaleString(); // Actual Front Ratio (%)
    if (back_dti_ratio > 47) {
        document.getElementById("BR").style.color = "red";
    } else {
        document.getElementById("BR").style.color = "green";
    }
    document.getElementById("BR").innerHTML = back_dti_ratio.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    document.getElementById("BR%").value = back_dti_ratio.toLocaleString();
    // Warning High Debt Ratio
    if (back_dti_ratio <= 36) {
        document.getElementById("dti1").style.display = "block";
        document.getElementById("dti2").style.display = "none";
        document.getElementById("dti3").style.display = "none";
    } else if (back_dti_ratio > 36 && back_dti_ratio <= 50) {
        document.getElementById("dti1").style.display = "none";
        document.getElementById("dti2").style.display = "block";
        document.getElementById("dti3").style.display = "none";
    } else {
        document.getElementById("dti1").style.display = "none";
        document.getElementById("dti2").style.display = "none";
        document.getElementById("dti3").style.display = "block";
    }
};

function clear_inc_source() {
    // This will clear all input values with Class Name = "inputValue3"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("inputValue3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].value = "";
    };
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
    };
    show_income_summary();
};

function start_over() {
    income1 = 0, income2 = 0, income3 = 0, income4 = 0, income5 = 0, income_total = 0, monthly_liability = 0;
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
};

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
};

function hide_income_input() {
    // This will hide all elements with Class Name = "incomeField"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("incomeField");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
};

function show_hourly_pay() {
    hide_income_input();
    document.getElementById("q2").style.display = "block"; // Show Type of Employment
    document.getElementById("q3").style.display = "block"; // Show Hourly Rate
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
};

function show_weekly_pay() {
    hide_income_input();
    document.getElementById("q4").style.display = "block"; // Show Weekly Rate
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
};

function show_semi_weekly_pay() {
    hide_income_input();
    document.getElementById("q5").style.display = "block"; // Show Weekly Rate
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
};

function show_monthly_pay() {
    hide_income_input();
    document.getElementById("q6").style.display = "block"; // Show Monthly Salary
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
};

function show_annual_pay() {
    hide_income_input();
    document.getElementById("q7").style.display = "block"; // Show Annual Salary
    document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
};

function show_variable_pay() {
    hide_income_input();
    document.getElementById("q9").style.display = "block"; // Show Variable Pay
};