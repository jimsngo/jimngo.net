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
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('calHFA-ss');
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
];

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
];

const calculator = 'calHFA-Widget';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
const tabcontents = document.getElementById(calculator).getElementsByClassName("tabcontent");

///////////////////////////////////////////////////////////////////////////////
// For CalHFA Loan Program Descriptions --------------------------------------/
///////////////////////////////////////////////////////////////////////////////
function show_tab_content(id) {
    slide_up(tabcontents);
    slide_down(id);
}

function slide_up(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = 'none';
        array[i].style.height = '0px';
    }
}

function slide_down(id) {
    var content = document.getElementById(id);
    content.style.display = 'block';
    content.style.height = content.scrollHeight + 'px';
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

///////////////////////////////////////////////////////////////////////////////
// Calculator - CalHFA                                                        /
///////////////////////////////////////////////////////////////////////////////

function show_slide(id) {
    slide_up(widget_slides);
    slide_down(id);
    document.getElementById(calculator).scrollIntoView();
    calc();
}

calc();
slide_up(widget_slides);
slide_down('slide-1');

function calc() {
    // Get County
    county = get_value("county");
    // Get Purchase Price
    purchase_price = Number(get_value("purchase-price"));
    toString('Purchase-Price', purchase_price, 0);
    toString('Purchase-Price-2', purchase_price, 0);
    closing_costs = purchase_price * 0.02;
    toString('Closing-Costs', closing_costs, 0);
    toString('Closing-Costs-2', closing_costs, 0);
    // Get Property Type
    property_type = get_value("property-type");
    // Get Loan Program
    loan_program = get_value("loan-program");
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
    toString('MI%', mi_rate, 2);
    // Get Subordinate Loans
    subordinate_loan = get_value("subordinate-loan");
    show_tab_content(subordinate_loan);
    document.getElementById("Subordinate-Loan").innerHTML = subordinate_loan;
    dpa = dpas.find(second_loan_percent => second_loan_percent.dpa_program === subordinate_loan).second_loan_percent;
    second_loan_amount = purchase_price * dpa;
    toString('second-loan-amount', second_loan_amount, 0);
    // Get Interest Rate
    interest_rate = Number(get_value("expected-interest-rate"));
    toString('Expected-Interest-Rate', interest_rate, 3);
    high_balance_fee_rate = Number(document.getElementById("high-balance-fee-rate").value);
    toString('High-Balance-Fee-Rate', high_balance_fee_rate, 3);
    // Calculate Base Loan
    base_loan = purchase_price * (1 - down_payment);
    // Loan amount exceeding county limit
    if (base_loan > loan_limit) {
        base_loan = loan_limit;
    }
    // Loan exceeding $484,350
    if (base_loan > 484350) {
        show('high-balance-loan');
        show('high-balance-fee');
        calc_high_balance_fee();
    } else {
        hide('high-balance-loan');
        hide('high-balance-fee');
        high_balance_fee = 0;
    }
    // Calculate Upfront MIP
    if (loan_program === 'CalHFA FHA' || loan_program === 'CalPLUS FHA with 2% ZIP' || loan_program === 'CalPLUS FHA with 3% ZIP') {
        upfront_mip = base_loan * 0.0175;
    } else {
        upfront_mip = 0;
    }
    toString('upfront', upfront_mip, 0);
    // Calculate Total First Loan
    total_first_loan = base_loan + upfront_mip;
    toString('first-loan', total_first_loan, 0);
    // Calculate Mortgage Payment
    var n = 360;
    var r = interest_rate / 1200;
    loan_amount = total_first_loan;
    principal_interest = loan_amount * r / (1 - (Math.pow(1 / (1 + r), n)));
    toString('Principal-Interest', principal_interest, 2);
    property_tax_rate = 0.0125;
    property_tax = (property_tax_rate * purchase_price) / 12;
    toString('Property-Tax', property_tax, 2);
    mortgage_insurance = ((mi_rate * loan_amount) / 1200);
    toString('Mortgage-Insurance', mortgage_insurance, 2);
    homeowner_insurance = (purchase_price * 0.0025) / 12;
    toString('Homeowner-Insurance', homeowner_insurance, 2);
    housing_expense = principal_interest + property_tax + mortgage_insurance + homeowner_insurance;
    toString('Total-Housing-Expenses', housing_expense, 2);
    // Calculate ZIP Loan
    zip_loan = total_first_loan * zip;
    toString('zip-loan', zip_loan, 0);
    // Calculate Total Financing From CalHFA
    total_loan = total_first_loan + second_loan_amount + zip_loan;
    toString('total-loan', total_loan, 0);
    total_cost = purchase_price + upfront_mip + closing_costs + high_balance_fee;
    toString('total-cost', total_cost, 0);
    // Calculate LTV
    loan_to_value = (base_loan / purchase_price) * 100;
    toString('LTV', loan_to_value, 1);
    // Calculate CLTV
    combined_loan_to_value = (total_loan / purchase_price) * 100;
    toString('CLTV', combined_loan_to_value, 1);
    // Calculate Buyer's Contribution
    buyer_contribution = total_cost - total_loan;
    if (buyer_contribution < 0) {
        document.getElementById("buyer-contribution").innerHTML = 0;
        zip_credit = -1 * buyer_contribution;
        show("zip_credit");
        toString('ZIP_Credit', zip_credit, 0);
    } else {
        hide('zip_credit');
        toString('buyer-contribution', buyer_contribution, 0);
    }
}

function calc_high_balance_fee() {
    high_balance_fee = base_loan * (high_balance_fee_rate / 100);
    toString('High-Balance-Fee', high_balance_fee, 2);
}