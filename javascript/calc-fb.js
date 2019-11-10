// collapsible Containers
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
// Displaying and Collapsing Containers
document.getElementById("house").style.display = "block";
document.getElementById("income").style.display = "none";
document.getElementById("mortgage").style.display = "none";
document.getElementById("tax").style.display = "none";
document.getElementById("payment").style.display = "block";

function house() {
    document.getElementById("house").style.display = "block";
    document.getElementById("income").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("tax").style.display = "none";
}

function income() {
    document.getElementById("house").style.display = "none";
    document.getElementById("income").style.display = "block";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("tax").style.display = "none";
}

function mortgage() {
    document.getElementById("house").style.display = "none";
    document.getElementById("income").style.display = "none";
    document.getElementById("mortgage").style.display = "block";
    document.getElementById("tax").style.display = "none";
}

function tax() {
    document.getElementById("house").style.display = "none";
    document.getElementById("income").style.display = "none";
    document.getElementById("mortgage").style.display = "none";
    document.getElementById("tax").style.display = "block";
}

// Get Loan Program and Loan Term
var x = document.getElementById("mySelect").value; // Loan Program Select
var i, tabcontent;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
document.getElementById(x).style.display = "block";
var y = document.getElementById("mySelect2").value; // Loan Term Select

// Mortgage Calculation
var pp = Number(document.getElementById("pp").value);
document.getElementById("PP").innerHTML = pp.toFixed(2);
var dp = Number(document.getElementById("dp").value);
document.getElementById("DP%").innerHTML = dp.toFixed(1);
document.getElementById("loanProgram").innerHTML = x;
document.getElementById("DP1%").innerHTML = dp.toFixed(1);
var MTI = Number(document.getElementById("mti").value);
document.getElementById("MTI").innerHTML = MTI.toFixed(2);
document.getElementById("MI$").innerHTML = MTI.toFixed(2);
var MTL = Number(document.getElementById("mtl").value);
document.getElementById("MTL").innerHTML = MTL.toFixed(2);
document.getElementById("ML$").innerHTML = MTL.toFixed(2);
if (y === "15 Yrs") {
    var lt = 15;
}
if (y === "30 Yrs") {
    var lt = 30;
}
document.getElementById("LT").innerHTML = lt.toFixed(0);
var apr = Number(document.getElementById("apr").value);
document.getElementById("APR").innerHTML = apr.toFixed(3);
document.getElementById("APR%").innerHTML = apr.toFixed(3);
var pt = Number(document.getElementById("pt").value);
document.getElementById("PT%").innerHTML = pt.toFixed(2);
document.getElementById("PT1%").innerHTML = pt.toFixed(2);
if (x === "VA") {
    var mi = 0;
}
if (x === "FHA" && dp < 5) {
    var mi = 0.85;
}
if (x === "FHA" && dp >= 5) {
    var mi = 0.80;
}
if (x === "Conventional" && dp < 20) {
    var mi = Number(document.getElementById("mi").value);
}
if (x === "Conventional" && dp >= 20) {
    var mi = 0;
}
document.getElementById("MI%").innerHTML = mi.toFixed(2);
document.getElementById("MI1%").innerHTML = mi.toFixed(2);
var DP = pp * (dp / 100);
var P = (pp - DP);
var n = lt * 12;
var r = apr / 1200;
var PI = P * r / (1 - (Math.pow(1 / (1 + r), n)));
var LTV = (100 - dp);
var T = (pt * pp) / 1200;
var I = (mi * P) / 1200;
document.getElementById("I").innerHTML = I.toFixed(2);
var HOI = P * (0.3 / 1200);
var MP = PI + T + I + HOI;
var MP2 = (MP + MTL) * 1; // Monthly Total Expenses
var fr = (MP / MTI) * 100;
if (fr > 37) {
    document.getElementById("FR").style.color = "red";
} else {
    document.getElementById("FR").style.color = "green";
}
document.getElementById("FR").innerHTML = fr.toFixed(2); // Actual Front Ratio (%)
document.getElementById("FR%").value = fr.toFixed(2); // Actual Front Ratio (%)
var br = (MP2 / MTI) * 100;
if (br > 47) {
    document.getElementById("BR").style.color = "red";
    document.getElementById("ratio").style.color = "red";
} else {
    document.getElementById("BR").style.color = "green";
    document.getElementById("ratio").style.color = "green";
}
document.getElementById("BR").innerHTML = br.toFixed(2);
document.getElementById("BR%").value = br.toFixed(2);
// Warning High Debt Ratio
if (br > 47) {
    document.getElementById("dtiNote").style.display = "block";
} else {
    document.getElementById("dtiNote").style.display = "none";
}
if (br > 50) {
    document.getElementById("ratio").style.display = "block";
} else {
    document.getElementById("ratio").style.display = "none";
}
//
document.getElementById("dtim").innerHTML = "Your Debt Ratio: " + br.toFixed(2) + " %";
document.getElementById("MP").innerHTML = MP.toFixed(2);
document.getElementById("PI").innerHTML = PI.toFixed(2);
document.getElementById("T").innerHTML = T.toFixed(2);
document.getElementById("HOI").innerHTML = HOI.toFixed(2);
document.getElementById("P").innerHTML = P.toFixed(2);
document.getElementById("LTV").innerHTML = LTV.toFixed(1);
document.getElementById("DP").innerHTML = DP.toFixed(2);

function calc() {
    // Get Loan Program and Loan Term
    var x = document.getElementById("mySelect").value; // Loan Program Select
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(x).style.display = "block";
    var y = document.getElementById("mySelect2").value; // Loan Term Select
    // Mortgage Calculation
    if (x === "Jumbo") {
        document.getElementById("pp").min = 500000;
        document.getElementById("pp").max = 2000000;
    } else {
        document.getElementById("pp").min = 100000;
        document.getElementById("pp").max = 700000;
    }
    var pp = Number(document.getElementById("pp").value);
    document.getElementById("PP").innerHTML = pp.toFixed(2);
    var dp = Number(document.getElementById("dp").value);
    if (x === "FHA" && dp < 3.5) {
        dp = 3.5; // Min Down for FHA
    }
    if (x === "Conventional" && dp < 3) {
        dp = 3.0; // Min Down for Conventional
    }
    if (x === "Jumbo" && dp < 10) {
        dp = 10; // Set min down payment for Jumbo
    }
    document.getElementById("DP%").innerHTML = dp.toFixed(1);
    document.getElementById("loanProgram").innerHTML = x;
    document.getElementById("DP1%").innerHTML = dp.toFixed(1);
    var MTI = Number(document.getElementById("mti").value);
    document.getElementById("MTI").innerHTML = MTI.toFixed(2);
    document.getElementById("MI$").innerHTML = MTI.toFixed(2);
    var MTL = Number(document.getElementById("mtl").value);
    document.getElementById("MTL").innerHTML = MTL.toFixed(2);
    document.getElementById("ML$").innerHTML = MTL.toFixed(2);
    var lt;
    if (y === "15 Yrs") {
        lt = 15;
    }
    if (y === "30 Yrs") {
        lt = 30;
    }
    document.getElementById("LT").innerHTML = lt.toFixed(0);
    var apr = Number(document.getElementById("apr").value);
    document.getElementById("APR").innerHTML = apr.toFixed(3);
    document.getElementById("APR%").innerHTML = apr.toFixed(3);
    var pt = Number(document.getElementById("pt").value);
    document.getElementById("PT%").innerHTML = pt.toFixed(2);
    document.getElementById("PT1%").innerHTML = pt.toFixed(2);
    var mi;
    if (x === "VA") {
        mi = 0;
    } else if (x === "FHA" && dp < 5) {
        mi = 0.85;
    } else if (x === "FHA" && dp >= 5) {
        mi = 0.80;
    } else if (x === "USDA") {
        mi = 0.30;
    } else if (x === "Conventional" && dp >= 20) {
        mi = 0;
    } else if (x === "Jumbo" && dp >= 20) {
        mi = 0;
    } else {
        mi = Number(document.getElementById("mi").value);
    }
    document.getElementById("MI%").innerHTML = mi.toFixed(2);
    document.getElementById("MI1%").innerHTML = mi.toFixed(2);
    var DP = pp * (dp / 100);
    var P = (pp - DP);
    //FHA Loan Limit Warning
    if (!(x === "Jumbo") && P > 417000) {
        document.getElementById("loanMaxNote").style.display = "block";
    } else {
        document.getElementById("loanMaxNote").style.display = "none";
    }
    //Jumbo loan requirement
    if (x === "Jumbo" && P < 484350) {
        document.getElementById("jumboLoan").style.display = "block";
    } else {
        document.getElementById("jumboLoan").style.display = "none";
    }
    var n = lt * 12;
    var r = apr / 1200;
    var PI = P * r / (1 - (Math.pow(1 / (1 + r), n)));
    var LTV = (100 - dp);
    var T = (pt * pp) / 1200;
    var I = (mi * P) / 1200;
    document.getElementById("I").innerHTML = I.toFixed(2);
    var HOI = P * (0.3 / 1200);
    var MP = PI + T + I + HOI;
    var MP2 = (MP + MTL) * 1; // Monthly Total Expenses
    var fr = (MP / MTI) * 100;
    if (fr > 37) {
        document.getElementById("FR").style.color = "red";
    } else {
        document.getElementById("FR").style.color = "green";
    }
    document.getElementById("FR").innerHTML = fr.toFixed(2); // Actual Front Ratio (%)
    document.getElementById("FR%").value = fr.toFixed(2); // Actual Front Ratio (%)
    var br = (MP2 / MTI) * 100;
    if (br > 47) {
        document.getElementById("BR").style.color = "red";
        document.getElementById("ratio").style.color = "red";
    } else {
        document.getElementById("BR").style.color = "green";
        document.getElementById("ratio").style.color = "green";
    }
    document.getElementById("BR").innerHTML = br.toFixed(2);
    document.getElementById("BR%").value = br.toFixed(2);
    // Warning High Debt Ratio
    if (br > 47) {
        document.getElementById("dtiNote").style.display = "block";
    } else {
        document.getElementById("dtiNote").style.display = "none";
    }
    if (br > 50) {
        document.getElementById("ratio").style.display = "block";
    } else {
        document.getElementById("ratio").style.display = "none";
    }
    //
    document.getElementById("dtim").innerHTML = "Your Debt Ratio: " + br.toFixed(2) + " %";
    document.getElementById("FR").innerHTML = fr.toFixed(2);
    document.getElementById("BR").innerHTML = br.toFixed(2);
    document.getElementById("MP").innerHTML = MP.toFixed(2);
    document.getElementById("PI").innerHTML = PI.toFixed(2);
    document.getElementById("T").innerHTML = T.toFixed(2);
    document.getElementById("HOI").innerHTML = HOI.toFixed(2);
    document.getElementById("P").innerHTML = P.toFixed(2);
    document.getElementById("LTV").innerHTML = LTV.toFixed(1);
    document.getElementById("DP").innerHTML = DP.toFixed(2);
}