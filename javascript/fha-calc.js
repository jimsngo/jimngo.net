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
// End Collapsible
// Displaying and Collapsing Containers
document.getElementById("house").style.display = "block";
document.getElementById("income").style.display = "none";
document.getElementById("mortgage").style.display = "none";
document.getElementById("tax").style.display = "none";
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
// Get FHA Loan Limit and Loan Term 
var fhaloanlimit = 405950; // 2018 Loan Limit for Riverside - San Bernardino - Ontario, CA 
var x = document.getElementById("mySelect").value;
if (x === "15 Yrs") {
  var lt = 15;
}
if (x === "30 Yrs") {
  var lt = 30;
}
// Mortgage Calculation
var pp = Number(document.getElementById("pp").value);
document.getElementById("PP").innerHTML = pp.toFixed(2);
var dp = Number(document.getElementById("dp").value);
var DP = pp * (dp / 100);
document.getElementById("DP").innerHTML = DP.toFixed(1);// Down Payment ($)
document.getElementById("DP%").innerHTML = dp.toFixed(1);// Down Payment (%)
document.getElementById("DP1%").innerHTML = dp.toFixed(1);// Down Payment (%)
var MTI = Number(document.getElementById("mti").value);
document.getElementById("MTI").innerHTML = MTI.toFixed(2);// Monthly Total Income ($)
document.getElementById("MI$").innerHTML = MTI.toFixed(2);// Monthly Total Income ($)
var MTL = Number(document.getElementById("mtl").value);
document.getElementById("MTL").innerHTML = MTL.toFixed(2);// Monthly Totak Liability ($)
document.getElementById("ML$").innerHTML = MTL.toFixed(2);// Monthly Totak Liability ($)
document.getElementById("LT").innerHTML = lt.toFixed(0);
var apr = Number(document.getElementById("apr").value);
document.getElementById("APR").innerHTML = apr.toFixed(3);
document.getElementById("APR%").innerHTML = apr.toFixed(3);
var pt = Number(document.getElementById("pt").value);
document.getElementById("PT%").innerHTML = pt.toFixed(2);
document.getElementById("PT1%").innerHTML = pt.toFixed(2);
var hoi = Number(document.getElementById("hoi").value);
document.getElementById("HOI%").innerHTML = hoi.toFixed(2);
// Calculate Monthly Payment
var P = (pp - DP);
document.getElementById("P").innerHTML = P.toFixed(2);// Loan Amount
var LTV = (100 - dp);
document.getElementById("LTV").innerHTML = LTV.toFixed(1);// Loan To Value (%)
var n = lt * 12;// Loan Term (mos)
var r = apr / 1200;// Interest Rate Per Month (dec)
var PI = P * r / (1 - (Math.pow(1 / (1 + r), n)));
document.getElementById("PI").innerHTML = PI.toFixed(2);// Principal & Interest ($)
var T = (pt * pp) / 1200;
document.getElementById("T").innerHTML = T.toFixed(2);// Property Tax ($)
if (dp < 5) {
  var mi = 0.85;
}
if (dp >= 5) {
  var mi = 0.80;
}
document.getElementById("MI1%").innerHTML = mi.toFixed(2);
var I = (mi * P) / 1200;
document.getElementById("I").innerHTML = I.toFixed(2);// Mortgage Insurance Per Month ($)
var HOI = P * (hoi / 1200);
document.getElementById("HOI").innerHTML = HOI.toFixed(2);
var MP = PI + T + I + HOI;
document.getElementById("MP").innerHTML = MP.toFixed(2);// Housing Expenses ($)
var MP2 = (MP + MTL) * 1; // Housing Expenses & Liability ($)
var fr = (MP / MTI) * 100;
if (fr > 37) {
  document.getElementById("FR").style.color = "red";
} else {
  document.getElementById("FR").style.color = "green";
}
document.getElementById("FR").innerHTML = fr.toFixed(2);// Actual Front Ratio (%)
document.getElementById("FR%").value = fr.toFixed(2);// Actual Front Ratio (%)
var br = (MP2 / MTI) * 100;
if (br > 47) {
  document.getElementById("BR").style.color = "red";
  document.getElementById("ratio").style.color = "red";
} else {
  document.getElementById("BR").style.color = "green";
  document.getElementById("ratio").style.color = "green";
}
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
// End High Debt Warning
document.getElementById("dtim").innerHTML = "Your Debt Ratio: " + br.toFixed(2) + " %";
document.getElementById("BR").innerHTML = br.toFixed(2);// Actual Back Ratio (%)
document.getElementById("BR%").value = br.toFixed(2);// Actual Front Ratio (%)
document.getElementById("dtim").innerHTML = "Your Debt Ratio: " + br.toFixed(2) + " %";// Actual Back Ratio (%)

function calc() {
  // Get FHA Loan Limit and Loan Term 
  var fhaloanlimit = 405950; // 2018 Loan Limit for Riverside - San Bernardino - Ontario, CA 
  var x = document.getElementById("mySelect").value;
  if (x === "15 Yrs") {
    var lt = 15;
  }
  if (x === "30 Yrs") {
    var lt = 30;
  }
  // Calculations
  var pp = Number(document.getElementById("pp").value);
  document.getElementById("PP").innerHTML = pp.toFixed(2);// Purchase Price (4)
  var dp = Number(document.getElementById("dp").value);
  var DP = pp * (dp / 100);
  document.getElementById("DP").innerHTML = DP.toFixed(1);// Down Payment ($)
  document.getElementById("DP%").innerHTML = dp.toFixed(1);// Down Payment (%)
  document.getElementById("DP1%").innerHTML = dp.toFixed(1);// Down Payment (%)
  var MTI = Number(document.getElementById("mti").value);
  document.getElementById("MTI").innerHTML = MTI.toFixed(2);// Total Monthly Income ($)
  document.getElementById("MI$").innerHTML = MTI.toFixed(2);// Total Monthly Income ($)
  var MTL = Number(document.getElementById("mtl").value);
  document.getElementById("MTL").innerHTML = MTL.toFixed(2);// Total Monthly Liability ($)
  document.getElementById("ML$").innerHTML = MTL.toFixed(2);// Total Monthly Liability ($)
  document.getElementById("LT").innerHTML = lt.toFixed(0);// Loan Term (Yrs)
  var apr = Number(document.getElementById("apr").value);
  document.getElementById("APR").innerHTML = apr.toFixed(3);
  document.getElementById("APR%").innerHTML = apr.toFixed(3);
  var pt = Number(document.getElementById("pt").value);
  document.getElementById("PT%").innerHTML = pt.toFixed(2);
  document.getElementById("PT1%").innerHTML = pt.toFixed(2);
  var hoi = Number(document.getElementById("hoi").value);
  document.getElementById("HOI%").innerHTML = hoi.toFixed(2);
  var P = (pp - DP);
  document.getElementById("P").innerHTML = P.toFixed(2);// Loan Amount
  //FHA Loan Limit Warning
  if (P > fhaloanlimit) {
    document.getElementById("loanMaxNote").style.display = "block";
  } else {
    document.getElementById("loanMaxNote").style.display = "none";
  }
  //
  var n = lt * 12;
  var r = apr / 1200;
  var PI = P * r / (1 - (Math.pow(1 / (1 + r), n)));
  document.getElementById("PI").innerHTML = PI.toFixed(2);// Principal & Interest (PI)
  var LTV = (100 - dp);
  var T = (pt * pp) / 1200;
  document.getElementById("T").innerHTML = T.toFixed(2);// Property Tax (T)
  if (dp < 5) {
    var mi = 0.85;
  }
  if (dp >= 5) {
    var mi = 0.80;
  }
  document.getElementById("MI1%").innerHTML = mi.toFixed(2);
  var I = (mi * P) / 1200;
  document.getElementById("I").innerHTML = I.toFixed(2);// Mortgage Insurance (I)
  var HOI = P * (hoi / 1200);
  document.getElementById("HOI").innerHTML = HOI.toFixed(2);// Homeowner Insurance
  var MP = PI + T + I + HOI;
  document.getElementById("MP").innerHTML = MP.toFixed(2);// Monthly Housing Expenses
  var MP2 = (MP + MTL) * 1; // Monthly Total Expenses
  var fr = (MP / MTI) * 100;
  if (fr > 37) {
    document.getElementById("FR").style.color = "red";
  } else {
    document.getElementById("FR").style.color = "green";
  }
  document.getElementById("FR").innerHTML = fr.toFixed(2);// Actual Front Ratio (%)
  document.getElementById("FR%").value = fr.toFixed(2);// Actual Front Ratio (%)
  var br = (MP2 / MTI) * 100;
  if (br > 47) {
    document.getElementById("BR").style.color = "red";
    document.getElementById("ratio").style.color = "red";
  } else {
    document.getElementById("BR").style.color = "green";
    document.getElementById("ratio").style.color = "green";
  }
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
  // End High Debt Warning
  document.getElementById("dtim").innerHTML = "Your Debt Ratio: " + br.toFixed(2) + " %";
  document.getElementById("BR").innerHTML = br.toFixed(2);
  document.getElementById("BR%").value = br.toFixed(2);// Actual Front Ratio (%)
  document.getElementById("LTV").innerHTML = LTV.toFixed(1);
}