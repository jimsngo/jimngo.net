// Toggle active class - id("main-dti-select")
btns = document.getElementById("main-dti-select").getElementsByClassName("selectable");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		this.classList.toggle("active");
	});
}
// Add active class to Calculator's Inputs
var btns = document.getElementById("mortgage-income-widget").getElementsByClassName("selectable");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
// Animated Collapsible - Flyers Section id="flyers"
var flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
for (var i = 0; i < flyers.length; i++) {
	flyers[i].addEventListener("click", function () {
		this.classList.toggle("active");
		this.scrollIntoView();
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			document.getElementById("flyers").scrollIntoView();
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}
// Front DTI
$("#dti_1").click(function () {
	if (screen && screen.width < 768) {
		document.getElementById("dti_1").scrollIntoView(true);
	} else {
		document.getElementById("page_description").scrollIntoView();
	}
	$("#front_dti").slideToggle("slow");
});
// Back DTI
$("#dti_2").click(function () {
	if (screen && screen.width < 768) {
		document.getElementById("dti_2").scrollIntoView();
	} else {
		document.getElementById("page_description").scrollIntoView();
	}
	$("#back_dti").slideToggle("slow");
});
function hide_income_calc_slides() {
	var widget_slides = document.getElementById("mortgage-income-widget").getElementsByClassName("widget-slide");
	for (var i = 0; i < widget_slides.length; i++) {
		$(widget_slides[i]).hide();
	}
};
function show_slide(id) {
	hide_income_calc_slides();
	var element = "#" + id;
	$(element).slideDown("slow");
	document.getElementById("mortgage-income-widget").scrollIntoView();
	initialize();
};
function initialize() {		
	get_loan_program();
	get_loan_term();
	get_sales_price();
	get_down_payment_percent();
	get_mi_rate();
	get_interest_rate();	
	get_property_tax_rate();
	get_lenders_required_dti();
};
initialize();
function get_loan_program() {
	loan_program = document.getElementById("mySelect").value;
	var i, tabcontent;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	document.getElementById(loan_program).style.display = "block";// Show associated loan program note
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
	};
	// Set Min Purchase Price for Loan Program
	if (loan_program === "Jumbo") {
		document.getElementById("pp").min = 500000;// Set min purchase price if JUMBO
		document.getElementById("pp").max = 2000000;// Set max purchase price if JUMBO
	} else {
		document.getElementById("pp").min = 100000;
		document.getElementById("pp").max = 1000000;
	};
};
function get_loan_term() {
	loan_term = document.getElementById("mySelect2").value;
};
function get_sales_price() {
	purchase_price = Number(document.getElementById("pp").value);
	document.getElementById("PP").innerHTML = purchase_price.toLocaleString(undefined, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
	// High Loan Amount Warning for Conforming Loans
	if (!(loan_program === "Jumbo") && purchase_price > 417000) {
		document.getElementById("loanMaxNote").style.display = "block";
	  } else {
		document.getElementById("loanMaxNote").style.display = "none";
	  }
	  //Low Loan Amount warning for Jumbo Loan
	  if (loan_program === "Jumbo" && purchase_price < 484350) {
		document.getElementById("jumboLoan").style.display = "block";
	  } else {
		document.getElementById("jumboLoan").style.display = "none";
	  }
};
function get_down_payment_percent() {
	down_payment_percent = Number(document.getElementById("dp").value);
	loan_to_value = 100 - down_payment_percent;
	document.getElementById("DP%").innerHTML = down_payment_percent.toFixed(1);
	document.getElementById("LTV").innerHTML = loan_to_value.toFixed(1);
};
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
		mi_rate = Number(document.getElementById("mi").value);
	}
	document.getElementById("MI%").innerHTML = mi_rate.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
};
function get_interest_rate() {
	interest_rate = Number(document.getElementById("apr").value);
	document.getElementById("APR%").innerHTML = interest_rate.toLocaleString(undefined, {
		minimumFractionDigits: 3,
		maximumFractionDigits: 3
	});
};
function get_property_tax_rate() {
	property_tax_rate = Number(document.getElementById("pt").value);
	document.getElementById("PT%").innerHTML = property_tax_rate.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
};
function get_lenders_required_dti() {
	qualifying_front_ratio = Number(document.getElementById("efr").value);
	qualifying_back_ratio = Number(document.getElementById("ebr").value);
	document.getElementById("EFR%").innerHTML = qualifying_front_ratio.toLocaleString(undefined, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
	if (qualifying_front_ratio > qualifying_back_ratio) {
		document.getElementById("ebr").value = qualifying_front_ratio;
		qualifying_back_ratio = Number(document.getElementById("ebr").value);
	}
	document.getElementById("EBR%").innerHTML = qualifying_back_ratio.toLocaleString(undefined, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
};
function get_liability() {
	auto_loan = Number(document.getElementById("auto_loan").value);
	if (auto_loan < 0) {
		alert("Please enter only positive number");
		auto_loan = 0;
		document.getElementById("auto_loan").value = "";
		return;
	};
	student_loan = Number(document.getElementById("student_loan").value);
	if (student_loan < 0) {
		alert("Please enter only positive number");
		student_loan = 0;
		document.getElementById("student_loan").value = "";
		return;
	};
	installment_loan = Number(document.getElementById("installment_loan").value);
	if (installment_loan < 0) {
		alert("Please enter only positive number");
		installment_loan = 0;
		document.getElementById("installment_loan").value = "";
		return;
	};
	revolving_account = Number(document.getElementById("revolving_account").value);
	if (revolving_account < 0) {
		alert("Please enter only positive number");
		revolving_account = 0;
		document.getElementById("revolving_account").value = "";
		return;
	};
	other_debt = Number(document.getElementById("other_debt").value);
	if (other_debt < 0) {
		alert("Please enter only positive number");
		other_debt = 0;
		document.getElementById("other_debt").value = "";
		return;
	};
	total_monthly_liability = auto_loan + student_loan + installment_loan + revolving_account + other_debt;
	document.getElementById("ML").innerHTML = total_monthly_liability.toLocaleString(undefined, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
	calc();
	show_slide('calc-results');
};
function calc() {
	var n = loan_term * 12; // Number of Months
	var r = interest_rate / 1200; // Monthly Interest Rate (%)
	var down_payment_dollar = purchase_price * (down_payment_percent / 100); // Down Payment ($)
	document.getElementById("DP").innerHTML = down_payment_dollar.toLocaleString(undefined, {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
	loan_amount = purchase_price - down_payment_dollar;
	document.getElementById("LA").innerHTML = loan_amount.toLocaleString(undefined, {
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
	var PI = loan_amount * r / (1 - (Math.pow(1 / (1 + r), n)));
	document.getElementById("PI").innerHTML = PI.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	var T = (property_tax_rate * purchase_price) / 1200;
	document.getElementById("T").innerHTML = T.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	var I = (mi_rate * loan_amount) / 1200;
	document.getElementById("I").innerHTML = I.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	var HOI = loan_amount * (.25 / 1200);
	document.getElementById("HOI").innerHTML = HOI.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	housing_expense = PI + T + I + HOI; // Housing Payment
	document.getElementById("MP").innerHTML = housing_expense.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	var a1 = qualifying_front_ratio / 100;
	var a2 = qualifying_back_ratio / 100;
	var a3 = a2 - a1; // decimal
	if (total_monthly_liability > (housing_expense * (a3 / a1))) {
		required_monthly_income = (housing_expense + total_monthly_liability) / a2;
	} else {
		required_monthly_income = (housing_expense / a1);
	}
	document.getElementById("TMI").innerHTML = required_monthly_income.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	var AFR = (housing_expense / required_monthly_income) * 100;
	if (AFR > 37) {
		document.getElementById("AFR").style.color = "red";
	} else {
		document.getElementById("AFR").style.color = "green";
	}
	document.getElementById("AFR").innerHTML = AFR.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	document.getElementById("FR%").value = AFR.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	var ABR = ((housing_expense + total_monthly_liability) / required_monthly_income) * 100;
	if (ABR > 47) {
		document.getElementById("ABR").style.color = "red";
	} else {
		document.getElementById("ABR").style.color = "green";
	};
	document.getElementById("ABR").innerHTML = ABR.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
	document.getElementById("BR%").value = ABR.toLocaleString(undefined, {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
};
function show_dti_message_1() {
	$("#dti_message_1").slideDown("slow");
	$("#dti_message_2").hide();
	$("#dti_message_3").hide();
};
function show_dti_message_2() {
	$("#dti_message_1").hide();
	$("#dti_message_2").slideDown("slow");
	$("#dti_message_3").hide();
};
function show_dti_message_3() {
	$("#dti_message_1").hide();
	$("#dti_message_2").hide();
	$("#dti_message_3").slideDown("slow");
};