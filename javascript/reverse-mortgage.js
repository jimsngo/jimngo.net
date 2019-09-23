// Add active class - id("users_inputs")
var btns = document.getElementById("users-inputs").getElementsByClassName("selectable");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// Users Inputs
$("#owners_select").click(function () {
    document.getElementById("calculator").scrollIntoView();
    $("#owner_info").slideDown("slow");
    $("#lenders_fees").slideUp("slow");
    $("#fixed_rate_explained").slideUp("slow");
    $("#variable_rate_explained").slideUp("slow");
});
$("#lenders_select").click(function () {
    document.getElementById("calculator").scrollIntoView();
    $("#owner_info").slideUp("slow");
    $("#lenders_fees").slideDown("slow");
    $("#fixed_rate_explained").slideUp("slow");
    $("#variable_rate_explained").slideUp("slow");
});
$("#fixed_selected").click(function () {
    document.getElementById("calculator").scrollIntoView();
    $("#owner_info").slideUp("slow");
    $("#lenders_fees").slideUp("slow");
    $("#fixed_rate_explained").slideDown("slow");
    $("#variable_rate_explained").slideUp("slow");
});
$("#variable_selected").click(function () {
    document.getElementById("calculator").scrollIntoView();
    $("#owner_info").slideUp("slow");
    $("#lenders_fees").slideUp("slow");
    $("#fixed_rate_explained").slideUp("slow");
    $("#variable_rate_explained").slideDown("slow");
});
$("#H4P").click(function () {
    document.getElementById("H4P").scrollIntoView();
    $("#h4p_explained").slideToggle("slow");
    $("#H4P").toggleClass("active");

});
$("#HECM_line_of_credit").click(function () {
    document.getElementById("HECM_line_of_credit").scrollIntoView();
    $("#hecm_explained").slideToggle("slow");
    $("#HECM_line_of_credit").toggleClass("active");
});
// Animated Collapsible - Q&A Section
var qa = document.getElementById("QA").getElementsByClassName("collapsible");
for (var i = 0; i < qa.length; i++) {
    qa[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("QA").getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.maxHeight = null;
        }
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (var k = 0; k < qa.length; k++) {
                qa[k].classList.remove("active");
            }
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
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

function hide_calc_slides() {
    var widget_slides = document.getElementById("reverse-calculator-widget").getElementsByClassName("widget-slide");
    for (var i = 0; i < widget_slides.length; i++) {
        $(widget_slides[i]).hide();
    }
}

function show_slide(id) {
    hide_calc_slides();
    var element = "#" + id;
    $(element).slideDown("slow");
    document.getElementById("reverse-calculator-widget").scrollIntoView();
}

function show(id) {
    return document.getElementById(id).style.display = "block";
}

function hide(id) {
    return document.getElementById(id).style.display = "none";
}

calc();

function calc() {
    get_loan_purpose();
    get_interest_rate_option();
    get_age();
    get_interest_rate();
    get_principal_limit_factor();
    get_loan_origination_fee();
    get_other_closing_costs();
    get_cash_available();
    if (loan_purpose === "Purchase") {
        var max = (cash_available - loan_origination_fee - other_closing_costs) / (1.02 - plf); // Max Claim Amount($)
        if (max >= 726525) {
            var max = 726525;
            show('warningPurchase');
            // document.getElementById("warningPurchase").style.display = "block";
        } else {
            hide('warningPurchase');
            // document.getElementById("warningPurchase").style.display = "none";
        }
        document.getElementById("maxClaim").innerHTML = max.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        var pl$Purchase = max * plf; // Principal Limit $
        document.getElementById("pl$Purchase").innerHTML = pl$Purchase.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        var ufmip = max * .02; // UFMIP for purchase
        var costs = loan_origination_fee + other_closing_costs + ufmip; // Sum of Loan Origination Fee + Closing Costs + UFMIP
        var erPurchase = cash_available - costs; // Equity Contribution $
        document.getElementById("erPurchase").innerHTML = erPurchase.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        var purchasePrice = pl$Purchase + erPurchase;
        document.getElementById("purchasePrice").innerHTML = purchasePrice.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
    if (loan_purpose === "Refinance") {
        var hav = Number(document.getElementById("hav").value); // Home Appraised Value
        document.getElementById("HAV").innerHTML = hav.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        document.getElementById("cmb").max = hav; // Set Max Current Mortgage Balance Value
        var cmb = Number(document.getElementById("cmb").value); // Current Mortgage Balance
        document.getElementById("CMB").innerHTML = cmb.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        if (hav > 726525) {
            var max = 726525
        } else {
            var max = hav
        }; // Set max claim amount
        document.getElementById("MAX").innerHTML = max.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        var ufmip = max * .02; // UFMIP for Refi
        var costs = loan_origination_fee + other_closing_costs + ufmip; // Sum of Loan Origination Fee + Closing Costs + UFMIP
        var pl$ = max * plf; // Principal Limit $ for refi box
        document.getElementById("PL$").innerHTML = pl$.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        var inilimit$ = pl$ * 0.6; // Initial Disbursement Limit $ @ Closing
        document.getElementById("IniLimit$").innerHTML = inilimit$.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        var hecm = (pl$ - (costs + cmb)); // For Refi
        document.getElementById("HECM").innerHTML = hecm.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        if (hecm <= 0) {
            document.getElementById("warning").style.display = "block";
        } else {
            document.getElementById("warning").style.display = "none";
        }
        var er = max * (1 - plf); // Equity Reserve
        document.getElementById("ER").innerHTML = er.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }
    document.getElementById("LOF").innerHTML = loan_origination_fee.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    document.getElementById("LOF_2").innerHTML = loan_origination_fee.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    document.getElementById("UFMIP").innerHTML = ufmip.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    document.getElementById("CC").innerHTML = other_closing_costs.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    document.getElementById("CC_2").innerHTML = other_closing_costs.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    document.getElementById("COST$").innerHTML = costs.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function get_loan_purpose() {
    loan_purpose = document.getElementById("mySelect1").value; // Purchase/Refinance Select x
    if (loan_purpose === "Purchase") {
        show('Purchase');
        hide('Refinance');
        hide('warning');
        show('purchaseResults');
        hide('refiResults');
        document.getElementById("mySelect2").value = "Fixed";
        hide('Fixed');
        document.getElementById("Variable").style.display = "none";
        document.getElementById("cash_available").style.display = "block"; // Show cash available element
        document.getElementById("Variable_Option").style.display = "none"; // Hide variable rate option element
        document.getElementById("home_appraised_value").style.display = "none"; // Hide Home Appraised Value element
        show('Purchase-Video');
        hide('Refinance-Video');
    } else {
        document.getElementById("Purchase").style.display = "none";
        document.getElementById("Refinance").style.display = "block";
        document.getElementById("warningPurchase").style.display = "none"; // Hide Purchase Warning
        document.getElementById("purchaseResults").style.display = "none";
        document.getElementById("refiResults").style.display = "block";
        document.getElementById("cash_available").style.display = "none"; // Show cash available element
        document.getElementById("Variable_Option").style.display = "block"; // Hide variable rate option element
        document.getElementById("home_appraised_value").style.display = "block"; // Hide Home Appraised Value element
        hide('Purchase-Video');
        show('Refinance-Video');
    }
}

function get_interest_rate_option() {
    interest_rate_option = document.getElementById("mySelect2").value; // Fixed/Variable Interest Select y
    if (interest_rate_option === "Fixed") {
        document.getElementById("Fixed").style.display = "block";
        document.getElementById("Variable").style.display = "none";
    } else {
        document.getElementById("Fixed").style.display = "none";
        document.getElementById("Variable").style.display = "block";
    }
}

function get_age() {
    age = Number(document.getElementById("age").value); // Borrower's age
    document.getElementById("AGE").innerHTML = age.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function get_interest_rate() {
    int = Number(document.getElementById("int").value); // Interest Rate
    document.getElementById("INT").innerHTML = int.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
}

function get_principal_limit_factor() {
    const result = plfs.find(plf => plf.age === age && plf.int === int); // Look up Principal Limit Factor
    plf = result.factor;
    document.getElementById("PLF1").innerHTML = plf.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
    document.getElementById("PLF2").innerHTML = plf.toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
}

function get_loan_origination_fee() {
    loan_origination_fee = Number(document.getElementById("lof").value); // Loan Origination Fee lof
}

function get_other_closing_costs() {
    other_closing_costs = Number(document.getElementById("cc").value); // Other Closing Costs cc
}

function get_cash_available() {
    cash_available = Number(document.getElementById("ca").value); // Cash available ca
    document.getElementById("CA").innerHTML = cash_available.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function show_owner_info() {
    document.getElementById("owner_info").style.display = "block";
    document.getElementById("lenders_fees").style.display = "none";
    if (screen && screen.width < 768) {
        window.open("#top_owner_info", "_top");
    } else {
        window.open("#calculator", "_top");
    }
}

function show_calc_results() {
    if (screen && screen.width < 768) {
        window.open("#top_calc_results", "_top");
    } else {
        window.open("#calculator", "_top");
    }
}