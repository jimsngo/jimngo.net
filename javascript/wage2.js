var income1 = 0;
var income2 = 0;
var income3 = 0;
var income4 = 0;
var income5 = 0;
function add_income() {
  calc_inc_source();
  total_income();
}
function clear_income() {
  clear_inc_source();
  total_income();
}
function total_income() {
  var total_income = income1 + income2 + income3 + income4 + income5;
  document.getElementById("total_income").innerHTML = total_income.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function calc_inc_source() {
  var income_source = document.getElementById("a1").value; // Get Income Source
  var employmentType = document.getElementById("a2").value; // Get Employment Type
  if (employmentType === "Hourly") {
    var hr = Number(document.getElementById("a3a").value); // Get Hour Pay ($)
    if (hr <= 0) {
      alert("Please enter valid Hourly Rate");
      return;
    }
    var hpw = Number(document.getElementById("a3b").value); // Get Hours Per Week
    if (hpw <= 0 || hpw > 168) {
      alert("Please enter valid Hours Per Week");
      return;
    }
    var w2 = ((hr * hpw) * 52) / 12; // Hourly Pay - Monthly Income
    var vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
    var vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
    var vp = (vp1 + vp2) / 24; // Calculate Variable Pay
  } else if (employmentType === "Weekly") {
    var wp = Number(document.getElementById("a4").value); // Get Weekly Pay ($)
    if (wp <= 0) {
      alert("Please enter valid Weekly Rate");
      return;
    }
    var w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
    var vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
    var vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
    var vp = (vp1 + vp2) / 24; // Calculate Variable Pay
  } else if (employmentType === "Semi-Weekly") {
    var swp = Number(document.getElementById("a5").value); // Get Semi-Weekly Pay ($)
    if (swp <= 0) {
      alert("Please enter valid Semi-Weekly Rate");
      return;
    }
    var w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
    var vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
    var vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
    var vp = (vp1 + vp2) / 24; // Calculate Variable Pay
  } else if (employmentType === "Monthly") {
    var mp = Number(document.getElementById("a6").value); // Get Monthly Pay ($)
    if (mp <= 0) {
      alert("Please enter valid Monthly Salary");
      return;
    }
    var w2 = mp; // Monthly Pay Income
    var vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
    var vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
    var vp = (vp1 + vp2) / 24; // Calculate Variable Pay
  } else if (employmentType === "Annually") {
    var ap = Number(document.getElementById("a7").value); // Get Annual Pay ($)
    if (ap <= 0) {
      alert("Please enter valid Annual Salary");
      return;
    }
    var w2 = ap / 12;
    var vp1 = Number(document.getElementById("a8a").value); // Get OT & Bonuses 1
    var vp2 = Number(document.getElementById("a8b").value); // Get OT & Bonuses 2
    var vp = (vp1 + vp2) / 24; // Calculate Variable Pay
  } else if (employmentType === "1099 Employee") {
    var vp1 = Number(document.getElementById("a8a").value); // Get Variable Income 1
    var vp2 = Number(document.getElementById("a8b").value); // Get Variable Income 2
    var vp = (vp1 + vp2) / 24; // Calculate Variable Pay
  } else if (employmentType === "Self-Employed") {
    var w2 = 0; // Not W2 Employee
    var vp1 = Number(document.getElementById("a9a").value); // Get Variable Income 1
    var vp2 = Number(document.getElementById("a9b").value); // Get Variable Income 2
    if (vp1 <= 0 || vp2 <= 0) {
      alert("Please enter required income for 2 years");
      return;
    }
    var vp = (vp1 + vp2) / 24; // Get Variable Pay
  }
  var inc = (w2 + vp); // Effective Income
  if (inc > 0) {
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
      return income1 = inc;
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
      return income2 = inc;
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
      return income3 = inc;
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
      return income4 = inc;
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
      return income5 = inc;
    }
  }
}
function clear_inc_source() {
  // This will clear all input values with Class Name = "inputValue3"
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("inputValue3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].value = "";
  }
  var income_source = document.getElementById("a1").value; // Get Income Source
  if (income_source === "Income 1") {
    document.getElementById("inc_1").value = 0;
    document.getElementById("i1_w2").value = 0;
    document.getElementById("i1_vp").value = 0;
    document.getElementById("I1").style.display = "none";
    return income1 = 0;
  }
  if (income_source === "Income 2") {
    document.getElementById("inc_2").value = 0;
    document.getElementById("i2_w2").value = 0;
    document.getElementById("i2_vp").value = 0;
    document.getElementById("I2").style.display = "none";
    return income2 = 0;
  }
  if (income_source === "Income 3") {
    document.getElementById("inc_3").value = 0;
    document.getElementById("i3_w2").value = 0;
    document.getElementById("i3_vp").value = 0;
    document.getElementById("I3").style.display = "none";
    return income3 = 0;
  }
  if (income_source === "Income 4") {
    document.getElementById("inc_4").value = 0;
    document.getElementById("i4_w2").value = 0;
    document.getElementById("i4_vp").value = 0;
    document.getElementById("I4").style.display = "none";
    return income4 = 0;
  }
  if (income_source === "Income 5") {
    document.getElementById("inc_5").value = 0;
    document.getElementById("i5_w2").value = 0;
    document.getElementById("i5_vp").value = 0;
    document.getElementById("I5").style.display = "none";
    return income5 = 0;
  }
}
function a2() {
  var employmentType = document.getElementById("a2").value; // Get Employment Type
  if (employmentType === "Hourly") {
    show_hourly();
  } else if (employmentType === "Weekly") {
    show_weekly();
  } else if (employmentType === "Semi-Weekly") {
    show_semi_weekly();
  } else if (employmentType === "Monthly") {
    show_monthly();
  } else if (employmentType === "Annually") {
    show_annual();
  } else if (employmentType === "1099 Employee") {
    show_variable();
  } else if (employmentType === "Self-Employed") {
    show_variable();
  }
}
function hide_income() {
  // This will hide all elements with Class Name = "incomeField"
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("incomeField");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

function show_hourly() {
  hide_income();
  document.getElementById("q1").style.display = "block"; // Show Income Source
  document.getElementById("q2").style.display = "block"; // Show Type of Employment
  document.getElementById("q3").style.display = "block"; // Show Hourly Rate
  document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}
function show_weekly() {
  hide_income();
  document.getElementById("q4").style.display = "block"; // Show Weekly Rate
  document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}
function show_semi_weekly() {
  hide_income();
  document.getElementById("q5").style.display = "block"; // Show Weekly Rate
  document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}
function show_monthly() {
  hide_income();
  document.getElementById("q6").style.display = "block"; // Show Monthly Salary
  document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}
function show_annual() {
  hide_income();
  document.getElementById("q7").style.display = "block"; // Show Annual Salary
  document.getElementById("q8").style.display = "block"; // Show OT & Bonuses
}
function show_variable() {
  hide_income();
  document.getElementById("q9").style.display = "block"; // Show Variable Pay
}