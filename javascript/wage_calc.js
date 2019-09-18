var counter = 0
var incomes = []
var effective_income_1;
function calc_income() {

  // Income 1 Calculation
  i1();
  i2();
  i3();
}
function i1_start() {
  document.getElementById("income1").style.display = "block";
  document.getElementById("income2").style.display = "none";
  document.getElementById("income3").style.display = "none";
}
function i1_clear() {
  document.getElementById("i1_a3a").value = ""; // Hourly Rate
  document.getElementById("i1_a3b").value = ""; // Hours Per Week
  document.getElementById("i1_a4").value = ""; // Weekly Pay
  document.getElementById("i1_a5").value = ""; // Semi-Weekly Pay
  document.getElementById("i1_a6").value = ""; // Monthly Pay
  document.getElementById("i1_a7").value = ""; // Annual Pay
  document.getElementById("i1_a8a").value = ""; // Bonuses & OT
  document.getElementById("i1_a8b").value = ""; // Bonuses & OT
  document.getElementById("i1_a9a").value = ""; // Bonuses & OT
  document.getElementById("i1_a9b").value = ""; // Bonuses & OT
  document.getElementById("i1_w2").innerHTML = "0.00";
  document.getElementById("i1_vp").innerHTML = "0.00";
  document.getElementById("inc_1").innerHTML = "0.00";
  document.getElementById("I1").style.display = "none";
}
function i1_a1() {
  var employmentType = document.getElementById("i1_a1").value; // Get Employment Type
  if (employmentType === "W2 Employee") {
    document.getElementById("i1_W2").style.display = "block"; // Show W2 Employment
    document.getElementById("i1_SE").style.display = "none"; // Hide Self-Employed
  } else {
    document.getElementById("i1_W2").style.display = "none"; // Hide W2 Employment
    document.getElementById("i1_SE").style.display = "block"; // Show Self-Employed
  }
}
function i1_a2() {
  var employmentType = document.getElementById("i1_a2").value; // Get Employment Type
  if (employmentType === "Hourly") {
    show_hourly_i1();
  } else if (employmentType === "Weekly") {
    show_weekly_i1();
  } else if (employmentType === "Semi-Weekly") {
    show_semi_weekly_i1();
  } else if (employmentType === "Monthly") {
    show_monthly_i1();
  } else if (employmentType === "Annually") {
    show_annual_i1();
  } else if (employmentType === "1099 Employee") {
    show_variable_i1();
  } else if (employmentType === "Self-Employed") {
    show_variable_i1();
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
function clear_income() {
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
  }
  if (income_source === "Income 2") {
    document.getElementById("inc_2").value = 0;
    document.getElementById("i2_w2").value = 0;
    document.getElementById("i2_vp").value = 0;
    document.getElementById("I2").style.display = "none";
  }
  if (income_source === "Income 3") {
    document.getElementById("inc_3").value = 0;
    document.getElementById("i3_w2").value = 0;
    document.getElementById("i3_vp").value = 0;
    document.getElementById("I3").style.display = "none";
  }
  if (income_source === "Income 4") {
    document.getElementById("inc_4").value = 0;
    document.getElementById("i4_w2").value = 0;
    document.getElementById("i4_vp").value = 0;
    document.getElementById("I4").style.display = "none";
  }
  if (income_source === "Income 5") {
    document.getElementById("inc_5").value = 0;
    document.getElementById("i5_w2").value = 0;
    document.getElementById("i5_vp").value = 0;
    document.getElementById("I5").style.display = "none";
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
  hide_income_i1();
  document.getElementById("q9").style.display = "block"; // Show Variable Pay
}
function i1() {
  var employmentType = document.getElementById("i1_a1").value; // Get Employment Type
  var payFrequency = document.getElementById("i1_a2").value; // Get Pay Frequency
  if (employmentType === "W2 Employee") {
    if (payFrequency === "Hourly") {
      var hr = Number(document.getElementById("i1_a3a").value); // Get Hour Pay ($)
      if (hr <= 0) {
        alert("Please enter valid Hourly Rate");
        return;
      }
      var hpw = Number(document.getElementById("i1_a3b").value); // Get Hours Per Week
      if (hpw <= 0 || hpw > 168) {
        alert("Please enter valid Hours Per Week");
        return;
      }
      var i1_w2 = ((hr * hpw) * 52) / 12; // Hourly Pay - Monthly Income
    } else if (payFrequency === "Weekly") {
      var wp = Number(document.getElementById("i1_a4").value); // Get Weekly Pay ($)
      if (wp <= 0) {
        alert("Please enter valid Weekly Rate");
        return;
      }
      var i1_w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
    } else if (payFrequency === "Semi-Weekly") {
      var swp = Number(document.getElementById("i1_a5").value); // Get Semi-Weekly Pay ($)
      if (swp <= 0) {
        alert("Please enter valid Semi-Weekly Rate");
        return;
      }
      var i1_w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
    } else if (payFrequency === "Monthly") {
      var mp = Number(document.getElementById("i1_a6").value); // Get Monthly Pay ($)
      if (mp <= 0) {
        alert("Please enter valid Monthly Salary");
        return;
      }
      var i1_w2 = mp; // Monthly Pay Income
    } else if (payFrequency === "Annually") {
      var ap = Number(document.getElementById("i1_a7").value); // Get Annual Pay ($)
      if (ap <= 0) {
        alert("Please enter valid Annual Salary");
        return;
      }
      var i1_w2 = ap / 12;
    }
    var i1_vp1 = Number(document.getElementById("i1_a8a").value); // Get Variable Income 1
    var i1_vp2 = Number(document.getElementById("i1_a8b").value); // Get Variable Income 2
    var i1_vp = (i1_vp1 + i1_vp2) / 24; // Calculate Variable Pay
  } else {
    var i1_w2 = 0; // Not W2 Employee
    var i1_vp1 = Number(document.getElementById("i1_a9a").value); // Get Variable Income 1
    var i1_vp2 = Number(document.getElementById("i1_a9b").value); // Get Variable Income 2
    if (i1_vp1 <= 0 || i1_vp2 <= 0) {
      alert("Please enter required income for 2 years");
      return;
    }
    var i1_vp = (i1_vp1 + i1_vp2) / 24; // Get Variable Pay
  }

  var inc_1 = (i1_w2 + i1_vp); // Effective Income 1
  var effective_income_1 = inc_1;
  incomes.push(inc_1) // Saves effective income in "incomes[0]"



  if (inc_1 > 0) {
    document.getElementById("I1").style.display = "block";
  } else {
    document.getElementById("I1").style.display = "none";
  }
  document.getElementById("inc_1").innerHTML = inc_1.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  document.getElementById("i1_w2").innerHTML = i1_w2.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  document.getElementById("i1_vp").innerHTML = i1_vp.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  if (typeof inc_1 === "undefined") {
    var inc_1 = 0;
  }
  if (typeof inc_2 === "undefined") {
    var inc_2 = 0;
  }
  if (typeof inc_3 === "undefined") {
    var inc_3 = 0;
  }
}
function i2_start() {
  document.getElementById("income1").style.display = "none";
  document.getElementById("income2").style.display = "block";
  document.getElementById("income3").style.display = "none";
}
function i2_clear() {
  document.getElementById("i2_a3a").value = ""; // Hourly Rate
  document.getElementById("i2_a3b").value = ""; // Hours Per Week
  document.getElementById("i2_a4").value = ""; // Weekly Pay
  document.getElementById("i2_a5").value = ""; // Semi-Weekly Pay
  document.getElementById("i2_a6").value = ""; // Monthly Pay
  document.getElementById("i2_a7").value = ""; // Annual Pay
  document.getElementById("i2_a8a").value = ""; // Bonuses & OT
  document.getElementById("i2_a8b").value = ""; // Bonuses & OT
  document.getElementById("i2_a9a").value = ""; // Bonuses & OT
  document.getElementById("i2_a9b").value = ""; // Bonuses & OT
  document.getElementById("i2_w2").innerHTML = "0.00";
  document.getElementById("i2_vp").innerHTML = "0.00";
  document.getElementById("inc_2").innerHTML = "0.00";
  document.getElementById("I2").style.display = "none";
}
function i2_a1() {
  var employmentType = document.getElementById("i2_a1").value; // Get Employment Type
  if (employmentType === "W2 Employee") {
    document.getElementById("i2_W2").style.display = "block"; // Show W2 Employment
    document.getElementById("i2_SE").style.display = "none"; // Hide Self-Employed
  } else {
    document.getElementById("i2_W2").style.display = "none"; // Hide W2 Employment
    document.getElementById("i2_SE").style.display = "block"; // Show Self-Employed
  }
}
function i2_a2() {
  var payFrequency = document.getElementById("i2_a2").value; // Get Pay Frequency
  if (payFrequency === "Hourly") {
    document.getElementById("i2_q3").style.display = "block"; // Show Q3 - Hourly Pay
    document.getElementById("i2_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i2_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i2_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i2_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Weekly") {
    document.getElementById("i2_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i2_q4").style.display = "block"; // Show Q4 - Weekly Pay
    document.getElementById("i2_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i2_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i2_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Semi-Weekly") {
    document.getElementById("i2_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i2_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i2_q5").style.display = "block"; // Show Q5 - Semi-Weekly Pay
    document.getElementById("i2_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i2_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Monthly") {
    document.getElementById("i2_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i2_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i2_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i2_q6").style.display = "block"; // Show Q6 - Monthly Pay
    document.getElementById("i2_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Annually") {
    document.getElementById("i2_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i2_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i2_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i2_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i2_q7").style.display = "block"; // Show Q7 - Annual Pay
  }
}
function i2() {
  var employmentType = document.getElementById("i2_a1").value; // Get Employment Type
  var payFrequency = document.getElementById("i2_a2").value; // Get Pay Frequency
  if (employmentType === "W2 Employee") {
    if (payFrequency === "Hourly") {
      var hr = Number(document.getElementById("i2_a3a").value); // Get Hour Pay ($)
      if (hr <= 0) {
        alert("Please enter valid Hourly Rate");
        return;
      }
      var hpw = Number(document.getElementById("i2_a3b").value); // Get Hours Per Week
      if (hpw <= 0 || hpw > 168) {
        alert("Please enter valid Hours Per Week");
        return;
      }
      var i2_w2 = ((hr * hpw) * 52) / 12; // Hourly Pay - Monthly Income
    } else if (payFrequency === "Weekly") {
      var wp = Number(document.getElementById("i2_a4").value); // Get Weekly Pay ($)
      if (wp <= 0) {
        alert("Please enter valid Weekly Rate");
        return;
      }
      var i2_w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
    } else if (payFrequency === "Semi-Weekly") {
      var swp = Number(document.getElementById("i2_a5").value); // Get Semi-Weekly Pay ($)
      if (swp <= 0) {
        alert("Please enter valid Semi-Weekly Rate");
        return;
      }
      var i2_w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
    } else if (payFrequency === "Monthly") {
      var mp = Number(document.getElementById("i2_a6").value); // Get Monthly Pay ($)
      if (mp <= 0) {
        alert("Please enter valid Monthly Salary");
        return;
      }
      var i2_w2 = mp; // Monthly Pay Income
    } else if (payFrequency === "Annually") {
      var ap = Number(document.getElementById("i2_a7").value); // Get Annual Pay ($)
      if (ap <= 0) {
        alert("Please enter valid Annual Salary");
        return;
      }
      var i2_w2 = ap / 12;
    }
    var i2_vp1 = Number(document.getElementById("i2_a8a").value); // Get Variable Income 1
    var i2_vp2 = Number(document.getElementById("i2_a8b").value); // Get Variable Income 2
    var i2_vp = (i2_vp1 + i2_vp2) / 24; // Calculate Variable Pay
  } else {
    var i2_w2 = 0; // Not W2 Employee
    var i2_vp1 = Number(document.getElementById("i2_a9a").value); // Get Variable Income 1
    var i2_vp2 = Number(document.getElementById("i2_a9b").value); // Get Variable Income 2
    if (i2_vp1 <= 0 || i2_vp2 <= 0) {
      alert("Please enter required income for 2 years");
      return;
    }
    var i2_vp = (i2_vp1 + i2_vp2) / 24; // Get Variable Pay
  }
  var inc_2 = (i2_w2 + i2_vp); // Effective Income 1
  if (inc_2 > 0) {
    document.getElementById("I2").style.display = "block";
  } else {
    document.getElementById("I2").style.display = "none";
  }
  document.getElementById("inc_2").innerHTML = inc_2.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  document.getElementById("i2_w2").innerHTML = i2_w2.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  document.getElementById("i2_vp").innerHTML = i2_vp.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  total_income();
}
function i3_start() {
  document.getElementById("income1").style.display = "none";
  document.getElementById("income2").style.display = "none";
  document.getElementById("income3").style.display = "block";
}
function i3_clear() {
  document.getElementById("i3_a3a").value = ""; // Hourly Rate
  document.getElementById("i3_a3b").value = ""; // Hours Per Week
  document.getElementById("i3_a4").value = ""; // Weekly Pay
  document.getElementById("i3_a5").value = ""; // Semi-Weekly Pay
  document.getElementById("i3_a6").value = ""; // Monthly Pay
  document.getElementById("i3_a7").value = ""; // Annual Pay
  document.getElementById("i3_a8a").value = ""; // Bonuses & OT
  document.getElementById("i3_a8b").value = ""; // Bonuses & OT
  document.getElementById("i3_a9a").value = ""; // Bonuses & OT
  document.getElementById("i3_a9b").value = ""; // Bonuses & OT
  document.getElementById("i3_w2").innerHTML = "0.00";
  document.getElementById("i3_vp").innerHTML = "0.00";
  document.getElementById("inc_3").innerHTML = "0.00";
  document.getElementById("I3").style.display = "none";
}
function i3_a1() {
  var employmentType = document.getElementById("i3_a1").value; // Get Employment Type
  if (employmentType === "W2 Employee") {
    document.getElementById("i3_W2").style.display = "block"; // Show W2 Employment
    document.getElementById("i3_SE").style.display = "none"; // Hide Self-Employed
  } else {
    document.getElementById("i3_W2").style.display = "none"; // Hide W2 Employment
    document.getElementById("i3_SE").style.display = "block"; // Show Self-Employed
  }
}
function i3_a2() {
  var payFrequency = document.getElementById("i3_a2").value; // Get Pay Frequency
  if (payFrequency === "Hourly") {
    document.getElementById("i3_q3").style.display = "block"; // Show Q3 - Hourly Pay
    document.getElementById("i3_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i3_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i3_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i3_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Weekly") {
    document.getElementById("i3_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i3_q4").style.display = "block"; // Show Q4 - Weekly Pay
    document.getElementById("i3_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i3_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i3_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Semi-Weekly") {
    document.getElementById("i3_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i3_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i3_q5").style.display = "block"; // Show Q5 - Semi-Weekly Pay
    document.getElementById("i3_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i3_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Monthly") {
    document.getElementById("i3_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i3_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i3_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i3_q6").style.display = "block"; // Show Q6 - Monthly Pay
    document.getElementById("i3_q7").style.display = "none"; // Hide Q7 - Annual Pay
  }
  else if (payFrequency === "Annually") {
    document.getElementById("i3_q3").style.display = "none"; // Hide Q3 - Hourly Pay
    document.getElementById("i3_q4").style.display = "none"; // Hide Q4 - Weekly Pay
    document.getElementById("i3_q5").style.display = "none"; // Hide Q5 - Semi-Weekly Pay
    document.getElementById("i3_q6").style.display = "none"; // Hide Q6 - Monthly Pay
    document.getElementById("i3_q7").style.display = "block"; // Show Q7 - Annual Pay
  }
}
function i3() {
  var employmentType = document.getElementById("i3_a1").value; // Get Employment Type
  var payFrequency = document.getElementById("i3_a2").value; // Get Pay Frequency
  if (employmentType === "W2 Employee") {
    if (payFrequency === "Hourly") {
      var hr = Number(document.getElementById("i3_a3a").value); // Get Hour Pay ($)
      if (hr <= 0) {
        alert("Please enter valid Hourly Rate");
        return;
      }
      var hpw = Number(document.getElementById("i3_a3b").value); // Get Hours Per Week
      if (hpw <= 0 || hpw > 168) {
        alert("Please enter valid Hours Per Week");
        return;
      }
      var i3_w2 = ((hr * hpw) * 52) / 12; // Hourly Pay - Monthly Income
    } else if (payFrequency === "Weekly") {
      var wp = Number(document.getElementById("i3_a4").value); // Get Weekly Pay ($)
      if (wp <= 0) {
        alert("Please enter valid Weekly Rate");
        return;
      }
      var i3_w2 = (wp * 52) / 12; // Weekly Pay - Monthly Income
    } else if (payFrequency === "Semi-Weekly") {
      var swp = Number(document.getElementById("i3_a5").value); // Get Semi-Weekly Pay ($)
      if (swp <= 0) {
        alert("Please enter valid Semi-Weekly Rate");
        return;
      }
      var i3_w2 = (swp * 26) / 12; // Semi-Weekly Pay - Monthly Income
    } else if (payFrequency === "Monthly") {
      var mp = Number(document.getElementById("i3_a6").value); // Get Monthly Pay ($)
      if (mp <= 0) {
        alert("Please enter valid Monthly Salary");
        return;
      }
      var i3_w2 = mp; // Monthly Pay Income
    } else if (payFrequency === "Annually") {
      var ap = Number(document.getElementById("i3_a7").value); // Get Annual Pay ($)
      if (ap <= 0) {
        alert("Please enter valid Annual Salary");
        return;
      }
      var i3_w2 = ap / 12;
    }
    var i3_vp1 = Number(document.getElementById("i3_a8a").value); // Get Variable Income 1
    var i3_vp2 = Number(document.getElementById("i3_a8b").value); // Get Variable Income 2
    var i3_vp = (i3_vp1 + i3_vp2) / 24; // Calculate Variable Pay
  } else {
    var i3_w2 = 0; // Not W2 Employee
    var i3_vp1 = Number(document.getElementById("i3_a9a").value); // Get Variable Income 1
    var i3_vp2 = Number(document.getElementById("i3_a9b").value); // Get Variable Income 2
    if (i3_vp1 <= 0 || i3_vp2 <= 0) {
      alert("Please enter required income for 2 years");
      return;
    }
    var i3_vp = (i3_vp1 + i3_vp2) / 24; // Get Variable Pay
  }
  var inc_3 = (i3_w2 + i3_vp); // Effective Income 1
  if (inc_3 > 0) {
    document.getElementById("I3").style.display = "block";
  } else {
    document.getElementById("I3").style.display = "none";
  }
  document.getElementById("inc_3").innerHTML = inc_3.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  document.getElementById("i3_w2").innerHTML = i3_w2.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  document.getElementById("i3_vp").innerHTML = i3_vp.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  total_income();
}
