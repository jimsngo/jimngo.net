const counties = [
    // Los Angeles County Orange County
    {
        loan: 'CalHFA FHA',
        county: 'Los Angeles',
        loan_limit: 726525,
        down_payment: 0.035,
        zip: 0.00
    },
    {
        loan: 'CalPLUS FHA with 2% ZIP',
        county: 'Los Angeles',
        loan_limit: 726525,
        down_payment: 0.035,
        zip: 0.02
    },
    {
        loan: 'CalPLUS FHA with 3% ZIP',
        county: 'Los Angeles',
        loan_limit: 726525,
        down_payment: 0.035,
        zip: 0.03
    },
    {
        loan: 'CalHFA Conventional',
        county: 'Los Angeles',
        loan_limit: 726525,
        down_payment: 0.03,
        zip: 0.00
    },
    {
        loan: 'CalPLUS Conventional with 2% ZIP',
        county: 'Los Angeles',
        loan_limit: 726525,
        down_payment: 0.03,
        zip: 0.02
    },
    {
        loan: 'CalPLUS Conventional with 3% ZIP',
        county: 'Los Angeles',
        loan_limit: 726525,
        down_payment: 0.03,
        zip: 0.03
    },
    // San Bernardino Riverside County
    {
        loan: 'CalHFA FHA',
        county: 'San Bernardino',
        loan_limit: 431250,
        down_payment: 0.035,
        zip: 0.00
    },
    {
        loan: 'CalPLUS FHA with 2% ZIP',
        county: 'San Bernardino',
        loan_limit: 431250,
        down_payment: 0.035,
        zip: 0.02
    },
    {
        loan: 'CalPLUS FHA with 3% ZIP',
        county: 'San Bernardino',
        loan_limit: 431250,
        down_payment: 0.035,
        zip: 0.03
    },
    {
        loan: 'CalHFA Conventional',
        county: 'San Bernardino',
        loan_limit: 484350,
        down_payment: 0.03,
        zip: 0.00
    },
    {
        loan: 'CalPLUS Conventional with 2% ZIP',
        county: 'San Bernardino',
        loan_limit: 484350,
        down_payment: 0.03,
        zip: 0.02
    },
    {
        loan: 'CalPLUS Conventional with 3% ZIP',
        county: 'San Bernardino',
        loan_limit: 484350,
        down_payment: 0.03,
        zip: 0.03
    },
    // Others - https://entp.hud.gov/idapp/html/hicostlook.cfm
    {
        loan: 'CalHFA_FHA',
        county: 'others',
        loan_limit: 431250,
        down_payment: 0.035,
        zip: 0.00
    },
    {
        loan: 'CalPLUS FHA with 2% ZIP',
        county: 'others',
        loan_limit: 431250,
        down_payment: 0.035,
        zip: 0.02
    },
    {
        loan: 'CalPLUS FHA with 3% ZIP',
        county: 'others',
        loan_limit: 431250,
        down_payment: 0.035,
        zip: 0.03
    },
    {
        loan: 'CalHFA Conventional',
        county: 'others',
        loan_limit: 484350,
        down_payment: 0.03,
        zip: 0.00
    },
    {
        loan: 'CalPLUS Conventional with 2% ZIP',
        county: 'others',
        loan_limit: 484350,
        down_payment: 0.03,
        zip: 0.02
    },
    {
        loan: 'CalPLUS Conventional with 3% ZIP',
        county: 'others',
        loan_limit: 484350,
        down_payment: 0.03,
        zip: 0.03
    },
]

const dpas = [
    // MyHome
    {
        dpa_program: 'MyHome',
        second_loan_percent: 0.035
    },
    // School Program
    {
        dpa_program: 'School Program',
        second_loan_percent: 0.04
    },
    {
        dpa_program: 'None',
        second_loan_percent: 0
    },
]

/// Animated Collapsible - Flyers ---------------------------------------------/
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

calc()

function calc() {
    // Get County
    county = document.getElementById("county").value;
    // Get Purchase Price
    purchase_price = Number(document.getElementById("purchase-price").value);
    document.getElementById("Purchase-Price").innerHTML = purchase_price.toLocaleString();
    document.getElementById("Purchase-Price-2").innerHTML = purchase_price.toLocaleString();
    closing_costs = purchase_price * 0.02;
    document.getElementById("Closing-Costs").innerHTML = closing_costs.toLocaleString();
    document.getElementById("Closing-Costs-2").innerHTML = closing_costs.toLocaleString();
    // Get Property Type
    property_type = document.getElementById("property-type").value;
    // Get Loan Program
    loan_program = document.getElementById("loan-program").value;
    document.getElementById("Loan-Program").innerHTML = loan_program;
    loan_limit = counties.find(loan_limit => loan_limit.loan === loan_program && loan_limit.county === county).loan_limit;
    down_payment = counties.find(down_payment => down_payment.loan === loan_program).down_payment;
    zip = counties.find(zip => zip.loan === loan_program).zip;
    // Get Mortgage Insurance
    if (loan_program === "VA") {
        mi_rate = 0;
    } else if (loan_program === 'CalHFA FHA' || loan_program === 'CalPLUS FHA with 2% ZIP' || loan_program === 'CalPLUS FHA with 3% ZIP') {
        mi_rate = 0.85;
    } else if (loan_program === 'CalHFA Conventional' || loan_program === 'CalPLUS Conventional with 2% ZIP' || loan_program === 'CalPLUS Conventional with 3% ZIP') {
        mi_rate = Number(document.getElementById("mi").value);
    }
    document.getElementById("MI%").innerHTML = mi_rate.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Get Subordinate Loans
    subordinate_loan = document.getElementById("subordinate-loan").value;
    document.getElementById("Subordinate-Loan").innerHTML = subordinate_loan;
    dpa = dpas.find(second_loan_percent => second_loan_percent.dpa_program === subordinate_loan).second_loan_percent;
    second_loan_amount = purchase_price * dpa;
    document.getElementById("second-loan-amount").innerHTML = second_loan_amount.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    var i, tabcontent;
    var tabcontent = document.getElementById("subordinate-loans").getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(subordinate_loan).style.display = "block"; // Show associated loan program note
    // Get Interest Rate
    interest_rate = Number(document.getElementById("expected-interest-rate").value);
    document.getElementById("Expected-Interest-Rate").innerHTML = interest_rate.toFixed(3);
    high_balance_fee_rate = Number(document.getElementById("high-balance-fee-rate").value);
    document.getElementById("High-Balance-Fee-Rate").innerHTML = high_balance_fee_rate.toFixed(3);
    // Calculate Base Loan
    base_loan = purchase_price * (1 - down_payment);
    // Loan amount exceeding county limit
    if (base_loan > loan_limit) {
        base_loan = loan_limit
    }
    // Loan exceeding $484,350
    if (base_loan > 484350) {
        document.getElementById('high-balance-loan').style.display = "block";
        document.getElementById('high-balance-fee').style.display = "block";
        calc_high_balance_fee();
    } else {
        document.getElementById('high-balance-loan').style.display = "none";
        document.getElementById('high-balance-fee').style.display = "none";
        high_balance_fee = 0;
    }
    // Calculate Upfront MIP
    if (loan_program === 'CalHFA FHA' || loan_program === 'CalPLUS FHA with 2% ZIP' || loan_program === 'CalPLUS FHA with 3% ZIP') {
        upfront_mip = base_loan * 0.0175;
    } else {
        upfront_mip = 0;
    }
    document.getElementById("upfront").innerHTML = upfront_mip.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // Calculate Total First Loan
    total_first_loan = base_loan + upfront_mip;
    document.getElementById("first-loan").innerHTML = total_first_loan.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // Calculate Mortgage Payment
    var n = 360;
    var r = interest_rate / 1200;
    loan_amount = total_first_loan;
    principal_interest = loan_amount * r / (1 - (Math.pow(1 / (1 + r), n)));
    document.getElementById("Principal-Interest").innerHTML = principal_interest.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    property_tax_rate = 0.0125;
    property_tax = (property_tax_rate * purchase_price) / 12;
    document.getElementById("Property-Tax").innerHTML = property_tax.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    mortgage_insurance = ((mi_rate * loan_amount) / 1200);
    document.getElementById("Mortgage-Insurance").innerHTML = mortgage_insurance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    homeowner_insurance = (purchase_price * 0.0025) / 12;
    document.getElementById("Homeowner-Insurance").innerHTML = homeowner_insurance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    housing_expense = principal_interest + property_tax + mortgage_insurance + homeowner_insurance;
    document.getElementById("Total-Housing-Expenses").innerHTML = housing_expense.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    // Calculate ZIP Loan
    zip_loan = total_first_loan * zip;
    document.getElementById("zip-loan").innerHTML = zip_loan.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // Calculate Total Financing From CalHFA
    total_loan = total_first_loan + second_loan_amount + zip_loan;
    document.getElementById("total-loan").innerHTML = total_loan.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    total_cost = purchase_price + upfront_mip + closing_costs + high_balance_fee;
    document.getElementById("total-cost").innerHTML = total_cost.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    // Calculate LTV
    loan_to_value = (base_loan / purchase_price) * 100;
    document.getElementById("LTV").innerHTML = loan_to_value.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    // Calculate CLTV
    combined_loan_to_value = (total_loan / purchase_price) * 100;
    document.getElementById("CLTV").innerHTML = combined_loan_to_value.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    // Calculate Buyer's Contribution
    buyer_contribution = total_cost - total_loan;
    if (buyer_contribution < 0) {
        document.getElementById("buyer-contribution").innerHTML = 0;
        zip_credit = -1 * buyer_contribution
        document.getElementById("zip_credit").style.display = "block";
        document.getElementById("ZIP_Credit").innerHTML = zip_credit.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    } else {
        document.getElementById('zip_credit').style.display = "none";
        document.getElementById("buyer-contribution").innerHTML = buyer_contribution.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
}

function calc_high_balance_fee() {
    high_balance_fee = base_loan * (high_balance_fee_rate / 100);
    document.getElementById('High-Balance-Fee').innerHTML = high_balance_fee.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function hide_calc_slides() {
    var widget_slides = document.getElementById("calHFA-Widget").getElementsByClassName("widget-slide");
    for (var i = 0; i < widget_slides.length; i++) {
        $(widget_slides[i]).hide();
    }
}

function show_slide(id) {
    hide_calc_slides();
    var element = "#" + id;
    $(element).slideDown("slow");
    document.getElementById("calHFA-Widget").scrollIntoView();
    calc();
}