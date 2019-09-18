<section id="top">
  <div class="main">
    <div class="flex-center">
      <!-- Column 1 -->
      <div class="col-4 col-s-6" id="users_inputs">
        <!-- Property Information -->
        <button class="selectable active" id="property_info_select">Property Information</button>
        <div id="property_info" style="display:block">
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Purchase Price: </h3>
              <div class="inputValue">$<span id="PP"></span></div>
            </div>
            <div class="sliderContainer">
              <input class="slider" id="pp" max="700000" min="100000" step="10000" type="range" value="300000"
                oninput="calc()" />
            </div>
          </div>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Down Payment:</h3>
              <div class="inputValue">$<span id="DP"></span> (<span id="DP%"></span>%)</div>
            </div>
            <div class="sliderContainer">
              <input class="slider" id="dp" max="50" min="0.0" step="0.5" type="range" value="3.5" oninput="calc()" />
            </div>
          </div>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Loan Amount:</h3>
              <div class="inputValue">$<span id="P"></span> (<span id="LTV"></span>%)</div>
            </div>
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Housing Expenses:</h3>
              <div class="inputValue">$<span id="MP"></span></div>
            </div>
            <ul>
              <li>Principal & Interest: $<span id="PI"></span></li>
              <li>Property Tax: $<span id="T"></span></li>
              <li>Mortgage Insurance: $<span id="I"></span></li>
              <li>Homeowner Insurance: $<span id="HOI"></span></li>
            </ul>
          </div>
          <p class="note" id="loanMaxNote" style="display: none; text-align: left; padding: 5px,5px,5px,5px;">Note:
            Every loan program has its loan limit which varies by county. Please visit <a
              href="https://entp.hud.gov/idapp/html/hicostlook.cfm" rel="nofollow" target="_blank">HUD</a> for
            limits on FHA loans, <a href="https://www.benefits.va.gov/HOMELOANS/purchaseco_loan_limits.asp"
              target="_blank">VA</a>
            for limits on VA loans, and <a
              href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx" rel="nofollow"
              target="_blank">FHFA</a> for limits on Conventional loans. Loans exceeding conforming
            loan limits are considered Jumbo Loans.</p>
          <p class="note" id="jumboLoan" style="display: none; text-align: left; padding: 5px,5px,5px,5px;">Jumbo
            loans has minimum loan amounts which must be higher than conforming loan limits, and varies by counties.
            Please visit <a href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx"
              rel="nofollow" target="_blank">FHFA</a> to check for conforming loan limit in your county.</p>
        </div>
        <!-- Mortage Information -->
        <button class="selectable" id="mortgage_info_select">Mortgage Information</button>
        <div id="mortgage_info" style="display:none">
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Loan Program:</h3>
              <select class="inputValue" id="mySelect" onchange="calc()">
                <option value="FHA" selected>FHA</option>
                <option value="VA">VA</option>
                <option value="Conventional">Conventional</option>
                <option value="USDA">USDA</option>
                <option value="Jumbo">Jumbo</option>
              </select>
            </div>
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Loan Term:</h3>
              <select class="inputValue" id="mySelect2" onchange="calc()">
                <option value="15">15 Years
                <option value="30" selected>30 Years
              </select>
            </div>
          </div>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Expected Interest Rate:</h3>
              <div class="inputValue"><span id="APR"></span>%</div>
            </div>
            <div class="sliderContainer">
              <input class="slider" id="apr" max="10" min="1" step="0.125" type="range" value="5" oninput="calc()" />
            </div>
          </div>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Property Tax:</h3>
              <div class="inputValue"><span id="PT%"></span>%</div>
            </div>
            <div class="sliderContainer">
              <input class="slider" id="pt" max="1.5" min="0.5" step="0.05" type="range" value="1.20"
                oninput="calc()" />
            </div>
          </div>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Mortgage Insurance:</h3>
              <div class="inputValue"><span id="MI%"></span>%</div>
            </div>
            <div class="sliderContainer">
              <input class="slider" id="mi" max="1.0" min="0.5" step="0.05" type="range" value=".75" oninput="calc()" />
            </div>
          </div>
        </div>
        <!-- Income -->
        <button class="selectable" id="income_info_select">Income Information</button>
        <div id="income_info" style="display:none">
          <div class="inputContainer">
            <div id="q1">
              Source:
              <select class="inputValue2" id="a1" onchange="a1()">
                <option value="Income 1" selected>Income 1</option>
                <option value="Income 2">Income 2</option>
                <option value="Income 3">Income 3</option>
                <option value="Income 4">Income 4</option>
                <option value="Income 5">Income 5</option>
              </select>
            </div>
            <div id="q2">
              Type of Employment:
              <select class="inputValue2" id="a2" onchange="a2()">
                <option value="Hourly" selected>Hourly</option>
                <option value="Weekly">Weekly</option>
                <option value="Semi-Weekly">Semi-Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Annually">Annually</option>
                <option value="1099 Employee">1099 Employee</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
            </div>
            <div id="q3" class="incomeField">
              Hourly Rate:
              <input type="number" class="inputValue3" id="a3a" min="0" max="100"><br />
              Hours Per Week:
              <input type="number" class="inputValue3" id="a3b" min="0" max="100"></div>
            <div id="q4" class="incomeField" style="display:none">
              Weekly rate:
              <input type="number" class="inputValue3" id="a4" min="0" max="10000"></div>
            <div id="q5" class="incomeField" style="display:none">
              Semi-Weekly rate:
              <input type="number" class="inputValue3" id="a5" min="0" max="20000"></div>
            <div id="q6" class="incomeField" style="display:none">
              Monthly Salary:
              <input type="number" class="inputValue3" id="a6" min="0" max="50000"></div>
            <div id="q7" class="incomeField" style="display:none">
              Annual Salary:
              <input type="number" class="inputValue3" id="a7" min="0" max="500000"></div>
            <div id="q8" class="incomeField">
              Overtime and Bonuses typically require a history of 2 years, likely to continue, and averaged
              over 24 months.<br />
              OT & Bonuses 2018:
              <input type="number" class="inputValue3" id="a8a" min="0" max="500000"><br />
              OT & Bonuses Income 2017:
              <input type="number" class="inputValue3" id="a8b" min="0" max="500000">
            </div>
            <div id="q9" class="incomeField" style="display:none">
              Variable incomes from Part Time, Independent Contractor, or Sole Proprietor
              typically require a history of 2 years, likely to continue, and averaged over 24 months.<br />
              Net Variable Income 2018:
              <input type="number" class="inputValue3" id="a9a" min="0" max="500000"><br />
              Net Variable Income 2017:
              <input type="number" class="inputValue3" id="a9b" min="0" max="500000">
            </div>
            <div class="linkmenu">
              <input class="btnSm" type="button" value="Remove Income" onclick="remove_income()" />
              <input class="btnSm" type="button" value="Update Income" onclick="add_income()" />
            </div>
          </div>
          <div id="income_summary" class="inputContainer" style="display:none">
            <div id="I1">Income 1: $<span id="inc_1">0</span>
              <ul>
                <li>Regular Pay: $<span id="i1_w2">0.00</span></li>
                <li>Variable Pay: $<span id="i1_vp">0.00</span></li>
              </ul>
            </div>
            <div id="I2" style="display:none">Income 2: $<span id="inc_2">0</span>
              <ul>
                <li>Regular Pay: $<span id="i2_w2">0.00</span></li>
                <li>Variable Pay: $<span id="i2_vp">0.00</span></li>
              </ul>
            </div>
            <div id="I3" style="display:none">Income 3: $<span id="inc_3">0</span>
              <ul>
                <li>Regular Pay: $<span id="i3_w2">0.00</span></li>
                <li>Variable Pay: $<span id="i3_vp">0.00</span></li>
              </ul>
            </div>
            <div id="I4" style="display:none">Income 4: $<span id="inc_4">0</span>
              <ul>
                <li>Regular Pay: $<span id="i4_w2">0.00</span></li>
                <li>Variable Pay: $<span id="i4_vp">0.00</span></li>
              </ul>
            </div>
            <div id="I5" style="display:none">Income 5: $<span id="inc_5">0</span>
              <ul>
                <li>Regular Pay: $<span id="i5_w2">0.00</span></li>
                <li>Variable Pay: $<span id="i5_vp">0.00</span></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Liabilities -->
        <button class="selectable" id="liability_info_select">Liability Information</button>
        <div id="liability_info" style="display:none">
          <div class="inputContainer">
            <p style="margin: 10px;">Please enter your monthly liability payments from auto loans, student loans,
              credit card payments, time-share payments, personal loan payments, child support payments, alimony
              payments, any co-signed loan monthly payments, and any other debt payment.</p>
            <div class="inputTitleContainer">
              <div class="inputTitle">Auto Loan:</div>
              <div class="inputValue">$<input type="number" class="no_border" id="auto_loan" min="0" max="10000">
              </div>
            </div>
            <div class="inputTitleContainer">
              <div class="inputTitle">Student Loan:</div>
              <div class="inputValue">$<input type="number" class="no_border" id="student_loan" min="0" max="10000">
              </div>
            </div>
            <div class="inputTitleContainer">
              <div class="inputTitle">Installment Loan:</div>
              <div class="inputValue">$<input type="number" class="no_border" id="installment_loan" min="0" max="10000">
              </div>
            </div>
            <div class="inputTitleContainer">
              <div class="inputTitle">Revolving Account:</div>
              <div class="inputValue">$<input type="number" class="no_border" id="revolving_account" min="0"
                  max="10000">
              </div>
            </div>
            <div class="inputTitleContainer">
              <div class="inputTitle">Other Debt:</div>
              <div class="inputValue">$<input type="number" class="no_border" id="other_debt" min="0" max="10000">
              </div>
            </div>
            <div class="linkmenu">
              <input class="btnSm" type="button" value="Update Liability" onclick="add_liability()" />
            </div>
          </div>
        </div>
      </div>
      <!-- column 2 -->
      <div class="col-4 col-s-6">
        <!-- Summary -->
        <div id="dti_summary">
          <button id="calc_results" class="heading" onclick="show_summary()">Debt to Income Ratios</button>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <div class="inputTitle">Your Monthly Income:</div>
              <div class="inputValue">$<span id="total_income"></span></div>
            </div>
            <div class="inputTitleContainer">
              <div class="inputTitle">Your Monthly Debt:</div>
              <div class="inputValue">$<span id="MTL"></span></div>
            </div>
          </div>
          <p id="no_income_warning">Please enter your Income and Debt information to calculate your DTI ratios.</p>
        </div>
        <!-- DTI Results -->
        <div id="dti_results" style="display:none;">
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Your Front DTI Ratio:</h3>
              <div class="inputValue"><span id="FR"></span>%</div>
            </div>
            <div class="sliderContainer">
              <input class="slider1" id="FR%" max="50" min="0" step="1" type="range" value="30" />
            </div>
          </div>
          <div class="inputContainer">
            <div class="inputTitleContainer">
              <h3 class="inputTitle">Your Back DTI Ratio:</h3>
              <div class="inputValue"><span id="BR"></span>%</div>
            </div>
            <div class="sliderContainer">
              <input class="slider1" id="BR%" max="50" min="0" step="1" type="range" value="30" />
            </div>
          </div>
        </div>
        <!-- DTI Messages-->
        <div id="dti_messages" style="display:none;">
          <div class="note" id="dti1" style="display:none; background-color: #238823; color: white">
            <h4>Looking Good - Relative to your income, your debt is at a manageable level.</h4>
            <p>You most likely have money left over for saving or spending after you’ve paid your bills. Lenders
              generally view a lower DTI as favorable.</p>
          </div>
          <div class="note" id="dti2" style="display:none; background-color:#FFBF00; color:black ">
            <h4>Opportunity to Improve.</h4>
            <p>You’re managing your debt adequately, but you may want to consider lowering your DTI. This could
              put you in a better position to handle unforeseen expenses. If you’re looking to borrow, keep in mind
              that lenders may ask for additional eligibility criteria.</p>
          </div>
          <div class="note" id="dti3" style="display:none; background-color: #D2222D; color: white">
            <h4>Take Action - You may have limited funds to save or spend.</h4>
            <p>With more than half your income going toward debt payments, you may not have much money left to
              save, spend, or handle unforeseen expenses. With this DTI ratio, lenders may limit your borrowing
              options.
            </p>
          </div>
        </div>
      </div>
      <!-- Column 3 -->
      <div class="col-4 col-s-12">
        <div id="FHA" class="tabcontent" style="display:block">
          <h2 class="heading">FHA Loan Advantages</h2>
          <div class="loanProgramNote">
            <ul>
              <li>The Federal Housing Administration (FHA) - which is part of HUD - insures the loan, so your lender
                can offer you a better deal.</li>
              <li><span style="background-color: #FFFF00">Down Payment as low as 3.5%</span>. <span
                  style="color: darkgreen">Gift</span> funds accepted, family members are welcome to help out with
                your down payment.</li>
              <li>Mortgage Insurance includes an <span style="background-color: #FFFF00">Upfront Funding Fee of
                  1.75%</span> of the loan amount, typically financed into the loan, and an <span
                  style="background-color: #FFFF00">annual insurance premium of 0.85%</span>, which will be lumped
                into the monthly payment. For down payment of 5% or more, the <span
                  style="background-color: #FFFF00">annual insurance premium will be 0.80%</span>.</li>
              <li>FHA has loan limit which varies by county. Please visit <a
                  href="https://entp.hud.gov/idapp/html/hicostlook.cfm" rel="nofollow" target="_blank"> HUD </a>to
                check the loan limit for your county. Below are loan limits for local counties in southern California:
              </li>
              <ul>
                <li>San Bernardino - $405,950</li>
                <li>Los Angeles - $679,650</li>
                <li>Orange - $679,650</li>
              </ul>
              <li><a href="https://www.jimngo.net/down-payment-assistance" target="_blank"><span
                    style="background-color: #FFFF00">CalHFA MyHome</span></a> - Down Payment Assistance - First Time
                Home Buyer</li>
              <li><a href="https://www.jimngo.net/reverse-mortgage-calculator.html" target="_blank"><span
                    style="background-color: #FFFF00">Reverse Mortgage</span></a> - Are you 62 or older? Do you live
                in your home? Do you own it outright or have a low loan balance? If you can answer "yes" to all of
                these
                questions, then the FHA Reverse Mortgage might be right for you. It lets you convert a portion of your
                equity into cash.</li>
            </ul>
          </div>
        </div>
        <div id="VA" class="tabcontent" style="display:none">
          <h2 class="heading">VA Loan Advantages</h2>
          <div class="loanProgramNote">
            <ul>
              <li><span style="background-color: #FFFF00">No down payment</span> as long as the sales price doesn't
                exceed the appraised value.</li>
              <li><span style="background-color: #FFFF00">No private mortgage insurance</span> premium requirement.
              </li>
              <li>Upfront Funding Fee typically at 2.15% and can be financed into the loan. The actual funding fee for
                VA loans varies based on several factors, such as nature of service, down payment and first-time use
              </li>
              <li>VA rules limit the amount you can be charged for closing costs.</li>
              <li>Closing costs may be paid by the seller.</li>
              <li>The lender can't charge you a penalty fee if you pay the loan off early.</li>
              <li>VA may be able to provide you some assistance if you run into difficulty making payments.</li>
            </ul>
            <p>You should also know that:</p>
            <ul>
              <li>You don't have to be a first-time homebuyer.</li>
              <li>You can reuse the benefit.</li>
              <li>VA-backed loans are assumable, as long as the person assuming the loan qualifies.</li>
            </ul>
            <p>Learn more about VA Home Loans:</p>
            <ul>
              <li><a href="https://www.benefits.va.gov/HOMELOANS/purchaseco_eligibility.asp" rel="nofollow"
                  target="_blank">Eligibility</a></li>
              <li><a href="https://www.benefits.va.gov/HOMELOANS/purchaseco_buy_process.asp" rel="nofollow"
                  target="_blank">Buying Process</a></li>
              <li><a href="https://www.benefits.va.gov/HOMELOANS/purchaseco_certificate.asp" rel="nofollow"
                  target="_blank">Getting a Certificate of Eligibility</a></li>
              <li><a href="https://www.benefits.va.gov/homeloans/purchaseco_loan_limits.asp" rel="nofollow"
                  target="_blank">Loan Limits</a></li>
              <li><a href="https://www.benefits.va.gov/HOMELOANS/documents/docs/guaranty_calculation_examples.pdf"
                  rel="nofollow" target="_blank">Guaranty Calculation Examples</a></li>
            </ul>
          </div>
        </div>
        <div id="Conventional" class="tabcontent" style="display:none">
          <h2 class="heading">Conventional Loan Advantages</h2>
          <div class="loanProgramNote">
            <div style="width:100%; text-align: center">
              <img src="image\HomeReady_Logo_Horizontal_rgb_200px.jpg" alt="HomeReady Mortgage">
            </div>
            <h3>Discover the affordability of homeownership with HomeReady mortgage.</h3>
            <ul>
              <li><span style="background-color: #FFFF00">Down payment as low as 3%</span> (even for first-time
                homebuyers). Get help from multiple sources like gifts and grants; no minimum personal funds required.
              </li>
              <li>First-time and repeat homebuyers eligible. Co-borrowers don’t have to live in the property</li>
              <li><a href="https://homeready-eligibility.fanniemae.com/homeready/" target="_blank">HomeReady Income
                  Eligibility Lookup Tool</a></li>
              <li><span style="background-color: #FFFF00">Cancellable Mortgage Insurance*</span> - Unlike
                government-insured loans, with HomeReady, borrowers may have the option to cancel their mortgage
                insurance once their home equity reaches 20%. This can result in
                lower monthly payments down the road. *Restrictions apply.</li>
              <li>Reduce or even eliminate monthly Mortgage Insurance.</li>
              <li>Conventional has loan limit which varies by county. Please visit <a
                  href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx" rel="nofollow"
                  target="_blank">FHFA</a> to check the loan limit for your county. Below are loan
                limits for local counties in southern California:</li>
              <ul>
                <li>San Bernardino - $484,350</li>
                <li>Los Angeles - $726,525</li>
                <li>Orange - $726,525</li>
              </ul>
            </ul>
          </div>
        </div>
        <div id="USDA" class="tabcontent" style="display:none">
          <h2 class="heading">USDA</h2>
          <div class="loanProgramNote">
            <p>Purchase a rural home with no money down.</p>
            <ul>
              <li>100% financing - No down payment.</li>
              <li>Seller credits may help pay for closing costs.</li>
              <li>1% Upfront Funding Fee, paid at closing and typically financed into the loan.</li>
              <li>Mortgage Insurance annual fee of 0.35% of the loan amount, lumped into the monthly payment and is
                paid for the life of the loan.</li>
            </ul>
            <p>Learn more about USDA Loan:</p>
            <ul>
              <li><a href="https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do" rel="nofollow"
                  target="_blank">Property Eligibility</a></li>
              <li><a href="https://eligibility.sc.egov.usda.gov/eligibility/incomeEligibilityAction.do?pageAction=state"
                  rel="nofollow" target="_blank">Income Eligibility</a></li>
              <li><a href="https://www.rd.usda.gov/files/RD-GRHLimitMap.pdf" rel="nofollow" target="_blank">Income
                  Limit</a></li>
            </ul>
          </div>
        </div>
        <div id="Jumbo" class="tabcontent" style="display:none">
          <h2 class="heading">Jumbo Loan</h2>
          <div class="loanProgramNote">
            <ul>
              <li>For loan amounts exceeding conforming loan limit</li>
              <li>20% down payment is typically required, however, there are programs that will require only 10% down.
              </li>
              <li>No mortgage insurance</li>
              <li>Great fixed-rate and ARM loans available</li>
              <li>Starting at 720 FICO.</li>
              <li>Please visit <a href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx"
                  target="_blank">FHFA</a> to check the conforming loan limit for your county. Below are minimum loan
                amounts for local counties in southern California:</li>
              <ul>
                <li>San Bernardino - $484,350</li>
                <li>Los Angeles - $726,525</li>
                <li>Orange - $726,525</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>