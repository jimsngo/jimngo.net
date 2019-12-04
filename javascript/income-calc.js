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
		hide_phone();
	} else {
		// If Sunday
		if (day == 0) {
			hide_phone();
		} else {
			// Check if it's outside of business hours
			if (hour < 10) {
				hide_phone();
			} else {
				if (hour >= 18) {
					hide_phone();
				} else {
					show_phone();
				}
			}
		}
	}
}

function hide_phone() {
	hide('call');
}

function show_phone() {
	show('call');
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

const calculator = 'mortgage-income-widget';
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

///////////////////////////////////////////////////////////////////////////////
// Misc ----------------------------------------------------------------------/
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
	document.getElementById('calculator').scrollIntoView();
	initialize();
}

initialize();
slide_up(widget_slides);
slide_down('slide-1');

function initialize() {
	get_loan_program();
	get_loan_term();
	get_sales_price();
	get_down_payment_percent();
	get_mi_rate();
	get_interest_rate();
	get_property_tax_rate();
	get_lenders_required_dti();
}

function get_loan_program() {
	loan_program = document.getElementById("mySelect").value;
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
	// Set Min Purchase Price for Loan Program
	if (loan_program === "Jumbo") {
		document.getElementById("pp").min = 500000; // Set min purchase price if JUMBO
		document.getElementById("pp").max = 2000000; // Set max purchase price if JUMBO
	} else {
		document.getElementById("pp").min = 100000;
		document.getElementById("pp").max = 1000000;
	}
}

function get_loan_term() {
	loan_term = get_id_value("mySelect2");
}

function get_sales_price() {
	purchase_price = Number(get_id_value("pp"));
	toString('PP', purchase_price, 0);
	// High Loan Amount Warning for Conforming Loans
	if ((loan_program !== "Jumbo") && purchase_price > 417000) {
		show("loanMaxNote");
	} else {
		hide("loanMaxNote");
	}
	//Low Loan Amount warning for Jumbo Loan
	if (loan_program === "Jumbo" && purchase_price < 484350) {
		show("jumboLoan");
	} else {
		hide("jumboLoan");
	}
	updateScrollHeight('sales-price');
}

function get_down_payment_percent() {
	down_payment_percent = Number(get_id_value("dp"));
	loan_to_value = 100 - down_payment_percent;
	toString('DP%', down_payment_percent, 1);
	toString('LTV', loan_to_value, 1);
}

function get_mi_rate() {
	if (loan_program === "FHA" && down_payment_percent < 5) {
		mi_rate = 0.85;
	} else if (loan_program === "FHA" && down_payment_percent >= 5) {
		mi_rate = 0.80;
	} else if (loan_program === "VA") {
		mi_rate = 0; // Min Down for Conventional
	} else if (loan_program === "USDA") {
		mi_rate = 0.35;
	} else if (loan_program === "Conventional" && down_payment_percent >= 20) {
		mi_rate = 0;
	} else if (loan_program === "Jumbo" && down_payment_percent >= 20) {
		mi_rate = 0;
	} else {
		mi_rate = Number(get_id_value("mi"));
	}
	toString('MI%', mi_rate, 2);
}

function get_interest_rate() {
	interest_rate = Number(get_id_value("apr"));
	toString('APR%', interest_rate, 3);
}

function get_property_tax_rate() {
	property_tax_rate = Number(get_id_value("pt"));
	toString('PT%', property_tax_rate, 2);
}

function get_lenders_required_dti() {
	qualifying_front_ratio = Number(get_id_value("efr"));
	qualifying_back_ratio = Number(get_id_value("ebr"));
	toString('EFR%', qualifying_front_ratio, 0);
	if (qualifying_front_ratio > qualifying_back_ratio) {
		document.getElementById("ebr").value = qualifying_front_ratio;
		qualifying_back_ratio = Number(get_id_value("ebr"));
	}
	toString('EBR%', qualifying_back_ratio, 0);
}

function get_liability() {
	auto_loan = Number(get_id_value("auto_loan"));
	if (auto_loan < 0) {
		alert("Please enter only positive number");
		auto_loan = 0;
		set_id_value("auto_loan", '');
		return;
	}
	student_loan = Number(get_id_value("student_loan"));
	if (student_loan < 0) {
		alert("Please enter only positive number");
		student_loan = 0;
		set_id_value("student_loan", '');
		return;
	}
	installment_loan = Number(get_id_value("installment_loan"));
	if (installment_loan < 0) {
		alert("Please enter only positive number");
		installment_loan = 0;
		set_id_value("installment_loan", '');
		return;
	}
	revolving_account = Number(get_id_value("revolving_account"));
	if (revolving_account < 0) {
		alert("Please enter only positive number");
		revolving_account = 0;
		set_id_value("revolving_account", '');
		return;
	}
	other_debt = Number(get_id_value("other_debt"));
	if (other_debt < 0) {
		alert("Please enter only positive number");
		other_debt = 0;
		set_id_value("other_debt", '');
		return;
	}
	total_monthly_liability = auto_loan + student_loan + installment_loan + revolving_account + other_debt;
	toString('ML', total_monthly_liability, 0);
	calc();
	show_slide('calc-results');
}

function calc() {
	var n = loan_term * 12; // Number of Months
	var r = interest_rate / 1200; // Monthly Interest Rate (%)
	var down_payment_dollar = purchase_price * (down_payment_percent / 100); // Down Payment ($)
	toString('DP', down_payment_dollar, 0);
	loan_amount = purchase_price - down_payment_dollar;
	toString('LA', loan_amount, 0);
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
	var PI = loan_amount * r / (1 - (Math.pow(1 / (1 + r), n)));
	toString('PI', PI, 2);
	var T = (property_tax_rate * purchase_price) / 1200;
	toString('T', T, 2);
	var I = (mi_rate * loan_amount) / 1200;
	toString('I', I, 2);
	var HOI = loan_amount * (0.25 / 1200);
	toString('HOI', HOI, 2);
	housing_expense = PI + T + I + HOI; // Housing Payment
	toString('MP', housing_expense, 2);
	var a1 = qualifying_front_ratio / 100;
	var a2 = qualifying_back_ratio / 100;
	var a3 = a2 - a1; // decimal
	if (total_monthly_liability > (housing_expense * (a3 / a1))) {
		required_monthly_income = (housing_expense + total_monthly_liability) / a2;
	} else {
		required_monthly_income = (housing_expense / a1);
	}
	toString('TMI', required_monthly_income, 2);
}