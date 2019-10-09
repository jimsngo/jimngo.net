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
        nextSlide('hecm-ss');
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

collapsible('QA', 'collapsible', 'content');
collapsible('flyers', 'collapsible', 'content');

///////////////////////////////////////////////////////////////////////////////
// Sliding Container Up and Down ---------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

const calculator = 'reverse-calculator-widget';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
const tabcontents = document.getElementById(calculator).getElementsByClassName("tabcontent");
const messages = document.getElementById('slide-2').getElementsByClassName("message");

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
    // content.style.height = 'max-content';
}

function set_scrollHeight(id) {
    var content = document.getElementById(id);
    content.style.height = content.scrollHeight + 'px';
}

function show_tab_content(id) {
    slide_up(tabcontents);
    slide_down(id);
}

function show_slide(id) {
    calc();
    slide_up(widget_slides);
    slide_down(id);
    document.getElementById(calculator).scrollIntoView();
}

///////////////////////////////////////////////////////////////////////////////
// Misc ----------------------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function toString(id, value, digit) {
    document.getElementById(id).innerHTML = value.toLocaleString(undefined, {
        minimumFractionDigits: digit,
        maximumFractionDigits: digit
    });
}

function get_value(id) {
    return document.getElementById(id).value;
}

var max;
var ufmip;
var costs;

calc();
slide_up(widget_slides);
slide_down('slide-1');

function get_inputs() {
    get_age();
    get_loan_purpose();
    get_interest_rate_option();
    get_interest_rate();
    get_principal_limit_factor();
    get_loan_origination_fee();
    get_other_closing_costs();
    get_cash_available();
    get_home_appraised_value();
    get_current_mortgage_balance();
}

function calc() {
    get_inputs();
    if (loan_purpose === "Purchase") {
        show('max-hecm-warning');
        hide('no-equity-warning');
        max = (cash_available - loan_origination_fee - other_closing_costs) / (1.02 - plf); // Max Claim Amount($)
        if (max >= 726525) {
            max = 726525;
            document.getElementById('max-hecm-warning').innerHTML = "You've reached HECM Maximum Principal Limit";
        } else {
            document.getElementById('max-hecm-warning').innerHTML = '';
        }
        toString('maxClaim', max, 0);
        var pl$Purchase = max * plf; // Principal Limit $
        toString('pl$Purchase', pl$Purchase, 0);
        ufmip = max * 0.02; // UFMIP for purchase
        costs = loan_origination_fee + other_closing_costs + ufmip; // Sum of Loan Origination Fee + Closing Costs + UFMIP
        var erPurchase = cash_available - costs; // Equity Contribution $
        toString('erPurchase', erPurchase, 0);
        var purchasePrice = pl$Purchase + erPurchase;
        toString('purchasePrice', purchasePrice, 0);
    } else {
        hide('max-hecm-warning');
        show('no-equity-warning');
        get_home_appraised_value();
        document.getElementById("cmb").max = hav; // Set Max Current Mortgage Balance Value
        get_current_mortgage_balance();
        if (hav > 726525) {
            max = 726525;
        } else {
            max = hav;
        } // Set max claim amount
        toString('MAX', max, 0);
        ufmip = max * 0.02; // UFMIP for Refi
        costs = loan_origination_fee + other_closing_costs + ufmip; // Sum of Loan Origination Fee + Closing Costs + UFMIP
        var pl$ = max * plf; // Principal Limit $ for refi box
        toString('PL$', pl$, 0);
        var inilimit$ = pl$ * 0.6; // Initial Disbursement Limit $ @ Closing
        toString('IniLimit$', inilimit$, 0);
        var hecm = (pl$ - (costs + cmb)); // For Refi
        toString('HECM', hecm, 0);
        if (hecm <= 0) {
            document.getElementById('no-equity-warning').innerHTML = "You Don't Have Enough Equity";
        } else {
            document.getElementById('no-equity-warning').innerHTML = "";
        }
        var er = max * (1 - plf); // Equity Reserve
        toString('ER', er, 0);
    }
    set_scrollHeight('slide-2');
    set_scrollHeight('slide-3');
    toString('UFMIP', ufmip, 0);
    toString('COST$', costs, 0);
}

function get_age() {
    age = Number(get_value("age")); // Borrower's age
    toString('AGE', age, 0);
}

function get_loan_purpose() {
    loan_purpose = get_value("loan-purpose");
    if (loan_purpose === "Purchase") {
        show_tab_content('purchase');
        show('h4p-video');
        hide('hecm-video');
        show('purchaseResults');
        hide('refiResults');
        document.getElementById("rate-option").value = "Fixed";
        show('fixed-rate');
        hide("variable-rate");
        show("cash-available");
        hide("variable-option");
        hide("home-appraised-value");

    } else {
        show_tab_content('hecm');
        hide('h4p-video');
        show('hecm-video');
        hide("purchaseResults");
        show("refiResults");
        hide("cash-available");
        show("variable-option");
        show("home-appraised-value");
    }
}

function get_cash_available() {
    cash_available = Number(get_value("ca")); // Cash available ca
    toString('CA', cash_available, 0);
}

function get_interest_rate_option() {
    interest_rate_option = get_value("rate-option");
    if (interest_rate_option === "Fixed") {
        show("fixed-rate");
        hide("variable-rate");
    } else {
        hide("fixed-rate");
        show("variable-rate");
    }
}

function get_interest_rate() {
    int = Number(get_value("int")); // Interest Rate
    toString('INT', int, 3);
}

function get_principal_limit_factor() {
    result = plfs.find(plf => plf.age === age && plf.int === int); // Look up Principal Limit Factor
    plf = result.factor;
    toString('PLF1', plf, 3);
    toString('PLF2', plf, 3);
}

function get_loan_origination_fee() {
    loan_origination_fee = Number(get_value("lof"));
    toString('LOF', loan_origination_fee, 0);
    toString('LOF_2', loan_origination_fee, 0);
}

function get_other_closing_costs() {
    other_closing_costs = Number(get_value("cc"));
    toString('CC', other_closing_costs, 0);
    toString('CC_2', other_closing_costs, 0);
}

function get_home_appraised_value() {
    hav = Number(get_value("hav"));
    toString('HAV', hav, 0);
}

function get_current_mortgage_balance() {
    cmb = Number(get_value("cmb"));
    toString('CMB', cmb, 0);
}