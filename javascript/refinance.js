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
        nextSlide('refi-ss');
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
// Calculator Widget ---------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

const calculator = 'refi-calc';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
const tabcontents = document.getElementById(calculator).getElementsByClassName("tabcontent");

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

function updateScrollHeight(id) {
    var content = document.getElementById(id);
    content.style.height = content.scrollHeight + 'px';
}

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

///////////////////////////////////////////////////////////////////////////////
// Calculator                                                                 /
///////////////////////////////////////////////////////////////////////////////

function show(id) {
    document.getElementById(id).style.display = 'block';
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show_slide(id) {
    calc();
    slide_up(widget_slides);
    slide_down(id);
    document.getElementById('calculator').scrollIntoView();
}

loan_program = 'FHA';
current_loan_term = '30';
refi_option = 'Streamline Refinance';
get_current_loan_program();
get_current_loan_balance();
get_current_loan_term();
get_current_interest();
get_current_payment();
calc();
slide_up(widget_slides);
slide_down('slide-1');

function calc() {
    get_refi_option();
    get_new_loan_amount();
    get_new_loan_term();
    get_new_interest();
    get_closing_costs();
    calc_current_loan();
    calc_new_loan();
}

function get_current_loan_program() {
    loan_program = get_id_value("current-loan-program");
    show_tab_content(loan_program);
    if (loan_program === "Conventional") {
        hide('streamline');
        document.getElementById("refi-option").value = "Term Refinance";
        show('new-loan-term-select');
    } else {
        show('streamline');
        document.getElementById("refi-option").value = "Streamline Refinance";
    }
}

function get_current_loan_balance() {
    get_min_payment();
    toString("Current-Loan-Balance", current_loan_balance, 0);
    toString("Current-Loan-Balance-2", current_loan_balance, 0);
    // Reset closing costs to 2.0%
    set_id_value('closing-costs', 0.02);
}

function get_current_loan_term() {
    get_min_payment();
    document.getElementById('Current-Loan-Term-2').innerHTML = current_loan_term + ' Yrs';
}

function get_current_interest() {
    get_min_payment();
    toString("Current-Interest", current_interest, 3);
    toString("Current-Interest-2", current_interest, 3);
}

function get_min_payment() {
    current_loan_balance = Number(get_id_value("current-loan-balance"));
    current_loan_term = Number(get_id_value("current-loan-term"));
    current_interest = Number(get_id_value("current-interest"));
    minimum_payment = calc_monthly_payment(current_loan_balance, current_loan_term, current_interest);
    document.getElementById("current-payment").min = minimum_payment;
    document.getElementById("current-payment").max = minimum_payment + 1000;
    set_id_value('current-payment', minimum_payment);
    toString("Current-Payment", minimum_payment, 0);
    toString("Current-Payment-2", minimum_payment, 0);
}

function get_current_payment() {
    current_payment = Number(get_id_value("current-payment"));
    toString("Current-Payment", current_payment, 0);
    toString("Current-Payment-2", current_payment, 0);
}

function get_refi_option() {
    refi_option = get_id_value("refi-option");
    document.getElementById('refi-option-2').innerHTML = refi_option;
    if (refi_option === "Streamline Refinance") {
        hide('new-loan-amount-select');
        set_id_value('new-loan-amount', current_loan_balance);
        new_loan_amount = current_loan_balance;
        hide('new-loan-term-select');
        set_id_value('new-loan-term', current_loan_term);
        new_loan_term = current_loan_term;
        if (loan_program === "FHA") {
            // Set max interest 0.5% less than current interest
            max_interest = current_interest - 0.5;
            set_id_value('new-interest', max_interest);
            document.getElementById('new-interest').max = max_interest;
            new_interest = max_interest;
        } else {
            set_id_value('new-interest', current_interest);
            document.getElementById('new-interest').max = current_interest;
            new_interest = current_interest;
        }
        hide('cash-out');
    } else if (refi_option === "Term Refinance") {
        hide('new-loan-amount-select');
        set_id_value('new-loan-amount', current_loan_balance);
        new_loan_amount = current_loan_balance;
        show('new-loan-term-select');
        document.getElementById('new-interest').max = current_interest;
        new_interest = current_interest;
        hide('cash-out');
    } else {
        show('new-loan-amount-select');
        show('new-loan-term-select');
        document.getElementById('new-interest').max = 10;
        new_interest = current_interest;
        show('cash-out');
    }
    toString("New-Loan-Amount", new_loan_amount, 0);
    toString("New-Loan-Amount-2", new_loan_amount, 0);
    document.getElementById('new-loan-term-2').innerHTML = new_loan_term + " Yrs";
    toString('New-Interest', new_interest, 3);
    toString('New-Interest-2', new_interest, 3);
    closing_costs = new_loan_amount * 0.02 / 100;
    toString("Closing-Costs", closing_costs, 0);
    toString("Closing-Costs-2", closing_costs, 0);
    updateScrollHeight('new-loan');
}

function get_new_loan_amount() {
    new_loan_amount = Number(get_id_value("new-loan-amount"));
    toString("New-Loan-Amount", new_loan_amount, 0);
    toString("New-Loan-Amount-2", new_loan_amount, 0);
}

function get_new_loan_term() {
    new_loan_term = Number(get_id_value("new-loan-term"));
    document.getElementById('new-loan-term-2').innerHTML = new_loan_term + " Yrs";
}

function get_new_interest() {
    new_interest = Number(get_id_value("new-interest"));
    toString('New-Interest', new_interest, 3);
    toString('New-Interest-2', new_interest, 3);
}

function get_closing_costs() {
    closing_cost_percent = Number(get_id_value("closing-costs"));
    closing_costs = closing_cost_percent * new_loan_amount / 100;
    toString("Closing-Costs", closing_costs, 0);
    toString("Closing-Costs-2", closing_costs, 0);
}

function calc_current_loan() {
    // Calculate number of payment remaining
    var r = current_interest / 1200; // Current monthly interest rate
    var P = current_loan_balance; // Current loan balance
    var M = current_payment; // Current monthly payment
    var L = -(Math.log(1 - (r * P / M)) / (Math.log(1 + r))); // Calculate number of payments left
    var years = Math.floor(L / 12);
    var months = Math.floor((L / 12 - years) * 12);
    var yrsToPay = years + " years and " + months + " months";
    document.getElementById("years-to-pay").innerHTML = yrsToPay;
    var total_payment_current_loan = L * M;
    toString("total-payment-current-loan", total_payment_current_loan, 0);
    var total_interest_current_loan = total_payment_current_loan - current_loan_balance;
    toString("Current-Interest-Cost", total_interest_current_loan, 0);
}

function calc_new_loan() {
    cash_at_closing = new_loan_amount - current_loan_balance;
    toString("cash-at-closing", cash_at_closing, 0); // Display Cash @ Closing
    // Calculate Monthly Payment
    var M = calc_monthly_payment(new_loan_amount, new_loan_term, new_interest);
    toString("new-monthly-payment", M, 0);
    var total_payment_new_loan = M * new_loan_term * 12;
    toString("total-payment-new-loan", total_payment_new_loan, 0);
    var total_interest_new_loan = total_payment_new_loan - new_loan_amount;
    toString("New-Interest-Cost", total_interest_new_loan, 0);
}

function calc_monthly_payment(principal, years, interest_rate) {
    var P = principal;
    var n = years * 12;
    var r = interest_rate / 1200;
    return (P * r / (1 - (Math.pow(1 / (1 + r), n))));
}