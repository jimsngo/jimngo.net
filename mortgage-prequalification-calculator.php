<!DOCTYPE html>
<html lang="en">

<head>
    <title>Mortgage PreQualification Calculator FHA VA Conventional</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords"
        content="mortgage calculator, mortgage pre-qualification, mortgage pre-approval, home loan calculator, debt to income ratio, down payment assistance, first time home buyer, home loan, FHA VA Conventional USDA Jumbo loans">
    <meta name="description"
        content="Calculate your monthly payment with tax and insurance. Prequalify yourself for a new home loan based on your income and debt.">
    <meta name="subject" content="Mortgage Calculator, Home Loan Prequalification">
    <meta name="language" content="English">
    <meta name="robots" content="index,follow">
    <meta name="author" content="Jim Ngo" />
    <meta name="copyright" content="Jim Ngo" />
    <meta property="og:url" content="https://www.jimngo.net/mortgage-prequalification-calculator" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Mortgage Calculator | Fixed Interest Amortization | Home Affordability" />
    <meta property="og:description"
        content="Calculate your monthly payment with tax and insurance. Prequalify yourself for a new home loan based on your income and debt." />
    <meta property="og:image" content="image/mortgage-calc (2).jpg" />
    <link rel="canonical" href="https://www.jimngo.net/mortgage-prequalification-calculator">
    <link rel="icon" href="image/favicon-16x16.png" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="style/style.min.css">
    <link rel="stylesheet" href="style/fontawesome-free-5.11.1-web/css/all.min.css">
</head>

<body>
    <?php include('include/title.php'); ?>
    <!-- Page Description ---------------------------------------------------->
    <main class="main">
        <div class="flex-perfect-center">
            <!-- About Me ---------------------------------------------------->
            <div class="col-3 col-s-4 light-gray radius-5">
                <?php include('include/about.php'); ?>
            </div>
            <!-- Page Summary ------------------------------------------------>
            <div class="col-9 col-s-8 page-description">
                <h1 style="color: dodgerblue">Mortgage Prequalification Calculator</h1>
                <h2 style="color: dodgerblue">FHA, VA, Conventional, USDA, and JUMBO Loans</h2>
                <h3 style="color: dodgerblue">
                    • Calculate Your Monthly Payment with Mortgage Insurance and Tax.<br />
                    • Know Your Debt to Income Ratio.</h3>
                <p>In addition to your credit score and your loan-to-value (LTV) ratio, your <a
                        href="https://www.jimngo.net/debt-to-income-ratio" target="_blank"><i>Debt To Income (DTI)
                            Ratio</i></a> is an important part of your
                    overall financial health. Calculating your DTI may help you determine how comfortable you are
                    with your current debt, and also decide whether applying for credit is the right choice for you.
                </p>
                <p>When you apply for credit, lenders evaluate your DTI to help determine whether you can afford to
                    take on another payment. Your DTI compares how much you owe each month to how much you earn.
                    Specifically, it’s the percentage of your gross monthly income (before taxes) that goes towards
                    payments for rent, mortgage, credit cards, or other debt.</p>
            </div>
        </div>
        <!-- Page Details ---------------------------------------------------->
        <div class="flex-center">
            <div class="col-4 col-s-6">
                <div class="card-header">Housing Ratio (Front)</div>
                <div class="card-body">
                    <p>This ratio compares your <i>Housing Expenses</i> to your <i>Monthly Income</i>. Your
                        housing expenses include:</p>
                    <ul>
                        <li>Principal and Interest.</li>
                        <li>Property Tax.</li>
                        <li><a href="https://www.jimngo.net/mortgage-insurance" target="_blank"><i>Mortgage
                                    Insurance Premium</i></a>.</li>
                        <li>Hazard Insurance.</li>
                        <li>HOA Fees.</li>
                        <li>Special Assessments and Payments for any acceptable secondary financing.</li>
                    </ul>
                </div>
            </div>
            <div class="col-4 col-s-6">
                <div class="card-header">Debt To Income Ratio (Back)</div>
                <div class="card-body">
                    <p>This ratio compares your <i>Monthly Debts</i> plus your <i>Housing Expenses</i> to
                        your <i>Monthly Income</i>. Your monthly debts include:</p>
                    <ul>
                        <li>Auto Loan</li>
                        <li>Student Loan</li>
                        <li>Installment Loan</li>
                        <li>Revolving Account</li>
                        <li>Other Debt</li>
                    </ul>
                </div>
            </div>
            <div class="col-4 col-s-12">
                <div class="card-header">Pre-qualification Made Easy</div>
                <div class="card-body">
                    <ul>
                        <li>Simply enter the housing and property information including sales price, down payment, and
                            expected interest rate to calculate your monthly payment.</li>
                        <li>Enter your Income and Liability information to calculate your front and back debt ratios.
                        </li>
                        <li>Lower ratios are more favorable.</li>
                        <li><span style="color: lightgreen">Conservative ratios are 31(front) and 43(back).</span>
                        </li>
                        <li><span style="color:lightgreen">Aggressive ratios are 37(front) and 47(back).</span></li>
                        <li>Some loan program will allow DTI ratio to go up to 50% with automated underwriting, but
                            anything above that will likely be denied.</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    <!-- Mortgage Pre-Qualification Calculator ------------------------------->
    <section class='calculator' id="calculator">       
        <div id="mortgage-prequalification-widget">
            <div class="banner dark-cerulean font-large" id='calc-ss'>
                <h2 class="slide showing">Mortgage Calculator</h2>
                <h2 class="slide">Mortgage Pre Approval</h2>
                <h2 class="slide">Mortgage Pre Qualification</h2>
                <h2 class="slide">FHA Mortgage Calculator</h2>
                <h2 class="slide">VA Mortgage Calculator</h2>
                <h2 class="slide">Conventional Loan</h2>
                <h2 class="slide">Jumbo Loan</h2>
                <h2 class="slide">Down Payment Assistance</h2>
                <h2 class="slide">First Time Homebuyer</h2>
                <h2 class="slide">Home Loan Calculator</h2>
                <h2 class="slide">Mortgage Lending Calculator</h2>
                <h2 class="slide">Mortgage Amortization</h2>
                <h2 class="slide">Calculate Mortgage Payment</h2>
                <h2 class="slide">15 Year Mortgage</h2>
                <h2 class="slide">30 Year Mortgage</h2>
                <h2 class="slide">Payment With PMI</h2>
            </div>
            <div class="main flex-center">
                <!-- Column 1 -->
                <div class="col-6 col-s-6" id="users-inputs">
                    <h3 class="card-header">Mortgage Calculator</h3>
                    <!-- Slide 1 - Begin Calculator -->
                    <div class="widget-slide medium" id="slide-1">
                        <div class="card-body">
                            <p style="font-size: 125%;">Getting Pre-Approved Should Always Be Your First Step!</p>
                            <p>Many potential home buyers overestimate the down payment and credit scores needed to
                                qualify for a mortgage today. If you are ready and willing to buy, you may be pleasantly
                                surprised at your ability to do so.</p>
                            <ul>
                                <li>Calculate your monthly payment.</li>
                                <li>Compare loan options.</li>
                                <li>Calculate your Housing & Debt to Income ratios.</li>
                                <li>Understand what debt to ratio means to lenders.</li>
                                <li>Show seller you can move faster and with confidence in competitive markets</li>
                            </ul>
                            <div class="flex-center"><button class="widget-submit-btn"
                                    onclick="show_slide('mortgage-info')">Get Started</button></div>
                        </div>
                    </div>
                    <!-- Slide 2 - Loan Program & Term  -->
                    <div class="widget-slide medium" id="mortgage-info">
                        <div class="card-body">
                            <!-- Loan Program -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Loan Program:</div>
                                <select class="inputValue" id="mySelect" onchange="calc()">
                                    <option value="FHA" selected>FHA</option>
                                    <option value="VA">VA</option>
                                    <option value="Conventional">Conventional</option>
                                    <option value="USDA">USDA</option>
                                    <option value="Jumbo">Jumbo</option>
                                </select>
                            </div>
                            <!-- Loan Term -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Loan Term:</div>
                                <select class="inputValue" id="mySelect2" onchange="calc()">
                                    <option value="15">15 Years</option>
                                    <option value="30" selected>30 Years</option>
                                </select>
                            </div>
                            <!-- Back Next Buttons -->
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('slide-1')">Back</button>
                                <button class="widget-submit-btn" onclick="show_slide('purchase-price')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 3 - Purchase Price -->
                    <div class="widget-slide medium" id="purchase-price">
                        <div class="card-body">
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Purchase Price: </div>
                                <div class="inputValue">$<span id="PP"></span></div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="pp" max="1000000" min="100000" step="10000" type="range"
                                    value="300000" oninput="calc()" />
                            </div>
                            <p>Please enter the sales price.</p>
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('mortgage-info')">Back</button>
                                <button class="widget-submit-btn" onclick="show_slide('down-payment')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 4 - Down Payment & Loan Amount -->
                    <div class="widget-slide medium" id="down-payment">
                        <div class="card-body">
                            <!-- Down Payment -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Down Payment:</div>
                                <div class="inputValue">$<span id="DP"></span> (<span id="DP%"></span>%)</div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="dp" max="50" min="0.0" step="0.5" type="range" value="3.5"
                                    oninput="calc()" />
                            </div>
                            <ul>
                                <li>FHA - 3.5% Down Payment minimum</li>
                                <li>Conventional - 3.0% Down Payment minimum</li>
                                <li>VA - No Down Payment required</li>
                                <li>USDA - No Down Payment required</li>
                                <li>Jumbo - Typically 10% down or more</li>
                            </ul>
                            <!-- Loan Amount -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Loan Amount:</div>
                                <div class="inputValue">$<span id="P"></span></div>
                            </div>
                            <!-- LTV -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Loan-to-value ratio (LTV):</div>
                                <div class="inputValue"><span id="LTV"></span>%</div>
                            </div>
                            <p>Your loan-to-value ratio is the most limiting factor on the price of a home you can
                                purchase. Increasing your down payment will allow you to increase the price of the home
                                you can afford.</p>
                            <div id="loanMaxNote">Warning: Loan amount may exceed conforming loan
                                limit, which varies by county. Please check with your county to confirm the loan limits.
                                Loans exceeding these limits are considered Jumbo Loans:
                                <ul>
                                    <li><a href="https://entp.hud.gov/idapp/html/hicostlook.cfm" rel="nofollow"
                                            target="_blank">FHA Loan Limit</a>.</li>
                                    <li><a href="https://www.benefits.va.gov/HOMELOANS/purchaseco_loan_limits.asp"
                                            target="_blank">VA Loan Limit</a>.</li>
                                    <li><a href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx"
                                            rel="nofollow" target="_blank">Convention Loan Limit</a>.</li>
                                </ul>
                            </div>
                            <div id="jumboLoan">Warning: Jumbo loans are for loans with amount
                                higher than conforming limit, which varies by counties. Please visit <a
                                    href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx"
                                    rel="nofollow" target="_blank">FHFA</a> to check for the loan limit in your county.
                            </div>
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('purchase-price')">Back</button>
                                <button class="widget-submit-btn"
                                    onclick="show_slide('mortgage-insurance')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 5 - Mortgage Insurance -->
                    <div class="widget-slide medium" id="mortgage-insurance">
                        <div class="card-body">
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Mortgage Insurance:</div>
                                <div class="inputValue"><span id="MI%"></span>%</div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="mi" max="1.0" min="0.5" step="0.05" type="range" value=".75"
                                    oninput="calc()" />
                            </div>
                            <p>Mortgage Insurance is required for down payment less than 20% and it's typically between
                                0.5% to 1.0% of the loan amount:</p>
                            <ul>
                                <li>FHA - Mortgage Insurance includes an Upfront Funding Fee of 1.75% of the loan
                                    amount, typically financed into the loan, and an annual insurance premium of 0.85%,
                                    which will be lumped into the monthly payment. For down payment of 5% or more, the
                                    annual insurance premium will be 0.80%.</li>
                                <li>VA - No Mortgage Insurance</li>
                                <li>Conventional - Typically between 0.5% to 1.0% of the loan amount.</li>
                                <li>USDA - 1% Upfront Funding Fee, paid at closing and typically financed into the loan.
                                    Mortgage Insurance annual fee of 0.35% of the loan amount, lumped into the monthly
                                    payment and is paid for the life of the loan.</li>
                            </ul>
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('down-payment')">Back</button>
                                <button class="widget-submit-btn"
                                    onclick="show_slide('expected-interest-rate')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 6 - Expected Interest Rate -->
                    <div class="widget-slide medium" id="expected-interest-rate">
                        <div class="card-body">
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Expected Interest Rate:</div>
                                <div class="inputValue"><span id="APR"></span>%</div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="apr" max="10" min="1" step="0.125" type="range" value="5"
                                    oninput="calc()" />
                            </div>
                            <ul>
                                <li>Interest Rates will vary with borrower's credit history, loan to value, loan
                                    program, type of property, etc...</li>
                                <li>You won't know your actual interest rate until the lender has review, underwrite,
                                    and approve your loan.</li>
                                <li>To get an idea of how much home you can afford at this time, please enter an
                                    expected interest rate.</li>
                            </ul>
                            <div class="flex-center">
                                <button class="widget-submit-btn"
                                    onclick="show_slide('mortgage-insurance')">Back</button>
                                <button class="widget-submit-btn" onclick="show_slide('property-tax')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 7 - Property Tax -->
                    <div class="widget-slide medium" id="property-tax">
                        <div class="card-body">
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Property Tax:</div>
                                <div class="inputValue"><span id="PT%"></span>%</div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="pt" max="1.5" min="0.5" step="0.05" type="range" value="1.20"
                                    oninput="calc()" />
                            </div>
                            <p>Property Tax is typically 1.20% of the purchased price annually. Please confirm rate with
                                your county.
                            </p>
                            <div class="flex-center">
                                <button class="widget-submit-btn"
                                    onclick="show_slide('expected-interest-rate')">Back</button>
                                <button class="widget-submit-btn" onclick="show_slide('monthly-payment')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 8 - Monthly Payment -->
                    <div class="widget-slide medium" id="monthly-payment">
                        <div class="card-body">
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Housing Expenses:</div>
                                <div class="inputValue">$<span id="MP"></span></div>
                            </div>
                            <ul>
                                <li>Principal & Interest: $<span id="PI"></span></li>
                                <li>Property Tax: $<span id="T"></span></li>
                                <li>Mortgage Insurance: $<span id="I"></span></li>
                                <li>Homeowner Insurance: $<span id="HOI"></span></li>
                            </ul>
                            <p>Do you want to calculate your debt to income ratio?</p>
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('slide-1')">No</button>
                                <button class="widget-submit-btn" onclick="show_income_source()">Yes</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 9 - Income -->
                    <div class="widget-slide slow" id="income-info">
                        <div class="card-body">
                            <div id="income-source"></div>
                            <!-- Employment Type -->
                            <div class="inputTitleContainer" id="q2">
                                <div class="inputTitle">Type of Employment:</div>
                                <select class="inputValue" id="a2" onchange="get_employment_type()">
                                    <option value="Hourly" selected>Hourly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Semi-Weekly">Semi-Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Annually">Annually</option>
                                    <option value="1099 Employee">1099 Employee</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                </select>
                            </div>
                            <!-- Hourly Pay -->
                            <div class="incomeField" id="q3">
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">Hourly Rate</div>
                                    <input type="number" class="inputValue" id="a3a" min="0" max="100">
                                </div>
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">Hours Per Week</div>
                                    <input type="number" class="inputValue" id="a3b" min="0" max="100">
                                </div>
                            </div>
                            <!-- Weekly Pay -->
                            <div class="incomeField inputTitleContainer" id="q4">
                                <div class="inputTitle">Weekly Rate</div>
                                <input type="number" class="inputValue" id="a4" min="0" max="10000">
                            </div>
                            <!-- Semi-Weekly Pay -->
                            <div class="incomeField inputTitleContainer" id="q5">
                                <div class="inputTitle">Semi-Weekly Rate</div>
                                <input type="number" class="inputValue" id="a5" min="0" max="20000">
                            </div>
                            <!-- Monthly Pay -->
                            <div class="incomeField inputTitleContainer" id="q6">
                                <div class="inputTitle">Monthly Salary</div>
                                <input type="number" class="inputValue" id="a6" min="0" max="50000">
                            </div>
                            <!-- Annual Pay-->
                            <div class="incomeField inputTitleContainer" id="q7">
                                <div class="inputTitle">Annual Salary</div>
                                <input type="number" class="inputValue" id="a7" min="0" max="500000">
                            </div>
                            <!-- OT & Bonuses -->
                            <div class="incomeField" id="q8">
                                Overtime and Bonuses typically require a history of 2 years, likely to continue, and
                                averaged over 24 months.
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">OT & Bonuses 2018</div>
                                    <input type="number" class="inputValue" id="a8a" min="0" max="500000">
                                </div>
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">OT & Bonuses Income 2017</div>
                                    <input type="number" class="inputValue" id="a8b" min="0" max="500000">
                                </div>
                            </div>
                            <!-- 1099 & Schedule C -->
                            <div class="incomeField" id="q9">
                                Variable incomes from Part Time, Independent Contractor, or Sole Proprietor
                                typically require a history of 2 years, likely to continue, and averaged over 24
                                months.
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">Net Variable Income 2018</div>
                                    <input type="number" class="inputValue" id="a9a" min="0" max="500000">
                                </div>
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">Net Variable Income 2017</div>
                                    <input type="number" class="inputValue" id="a9b" min="0" max="500000">
                                </div>
                            </div>
                            <div>Regular income is verified by paycheck stubs and W2 forms. Income must be documented to
                                have at least a two year history. This timeline is valid for all sources of income. If
                                someone has only worked for one and a half-years, that individual will have to wait
                                until the two year period has passed. Documentation of the two year period means
                                providing the last two years of W2 forms. The income reported on the forms must somewhat
                                match up with the amounts reported on the paycheck stubs. The paycheck stubs will have
                                both regular pay listed for that pay period as well as a year-to-date amount.</div>
                            <!-- Add Income -->
                            <div class="flex-center">
                                <button class="widget-submit-btn" id="remove" onclick="clear_inc_source()"
                                    style="display: none">Remove Income</button>
                                <button class="widget-submit-btn" onclick="calc_inc_source()">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 10 - Income Summary -->
                    <div class="widget-slide medium" id="income-summary">
                        <div class="card-body" id="income_summary">
                            <div id="I1">
                                <p><a onclick="show_income(1)"><span style="font-size: 125%; cursor: pointer">Income 1:
                                        </span></a>
                                    $<span id="inc_1">0</span></p>
                                <ul>
                                    <li>Regular Pay: $<span id="i1_w2">0.00</span></li>
                                    <li>Variable Pay: $<span id="i1_vp">0.00</span></li>
                                </ul>
                            </div>
                            <p>Please click on the following links if you would like to add more income</p>
                            <div id="I2">
                                <p><a onclick="show_income(2)" style="font-size: 125%; cursor: pointer">Income 2: </a>
                                    $<span id="inc_2">0</span></p>
                                <div id="income-2-details">
                                    <ul>
                                        <li>Regular Pay: $<span id="i2_w2">0.00</span></li>
                                        <li>Variable Pay: $<span id="i2_vp">0.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="I3">
                                <p><a onclick="show_income(3)" style="font-size: 125%; cursor: pointer">Income 3: </a>
                                    $<span id="inc_3">0</span></p>
                                <div id="income-3-details">
                                    <ul>
                                        <li>Regular Pay: $<span id="i3_w2">0.00</span></li>
                                        <li>Variable Pay: $<span id="i3_vp">0.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="I4">
                                <p><a onclick="show_income(4)" style="font-size: 125%; cursor: pointer">Income 4: </a>
                                    $<span id="inc_4">0</span></p>
                                <div id="income-4-details">
                                    <ul>
                                        <li>Regular Pay: $<span id="i4_w2">0.00</span></li>
                                        <li>Variable Pay: $<span id="i4_vp">0.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="I5">
                                <p><a onclick="show_income(5)" style="font-size: 125%; cursor: pointer">Income 5: </a>
                                    $<span id="inc_5">0</span></p>
                                <div id="income-5-details">
                                    <ul>
                                        <li>Regular Pay: $<span id="i5_w2">0.00</span></li>
                                        <li>Variable Pay: $<span id="i5_vp">0.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('liability-info')">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 11 - Liabilities -->
                    <div class="widget-slide medium" id="liability-info">
                        <div class="card-body">
                            <p style="margin: 10px;">Please enter your monthly liability payments from auto loans,
                                student loans, credit card payments, time-share payments, personal loan payments, child
                                support payments, alimony payments, any co-signed loan monthly payments, and any other
                                debt payment.</p>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Auto Loan:</div>
                                <div class="inputValue">$<input type="number" id="auto_loan" min="0" max="10000"></div>
                            </div>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Student Loan:</div>
                                <div class="inputValue">$<input type="number" class="no_border" id="student_loan"
                                        min="0" max="10000">
                                </div>
                            </div>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Installment Loan:</div>
                                <div class="inputValue">$<input type="number" class="no_border" id="installment_loan"
                                        min="0" max="10000">
                                </div>
                            </div>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Revolving Account:</div>
                                <div class="inputValue">$<input type="number" class="no_border" id="revolving_account"
                                        min="0" max="10000">
                                </div>
                            </div>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">Other Debt:</div>
                                <div class="inputValue">$<input type="number" class="no_border" id="other_debt" min="0"
                                        max="10000">
                                </div>
                            </div>
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_income_summary()">Back</button>
                                <button class="widget-submit-btn" onclick="show_calc_results()">Next</button>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 12 - DTI Calculation Summary -->
                    <div class="widget-slide medium" id="calc_results">
                        <div class="card-body">
                            <!-- Income and Liability Summary -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle"><a onclick="show_income_summary()"><span
                                            style="font-size: 125%;">Monthly Income:</span></a></div>
                                <div class="inputValue">$<span id="total_income"></span></div>
                            </div>
                            <div class="inputTitleContainer">
                                <div class="inputTitle"><a onclick="show_liability_info()"><span
                                            style="font-size: 125%;">Your
                                            Monthly Debt:</span></a></div>
                                <div class="inputValue">$<span id="MTL"></span></div>
                            </div>
                            <p id="no_income_warning">Please enter your Income and Debt information to calculate your
                                DTI ratios.</p>
                            <!-- DTI Results -->
                            <div id="dti_results" style="display:none;">
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">Your Housing Ratio:</div>
                                    <div class="inputValue"><span id="FR"></span> %</div>
                                </div>
                                <div class="inputTitleContainer">
                                    <div class="inputTitle">Your DTI Ratio:</div>
                                    <div class="inputValue"><span id="BR"></span> %</div>
                                </div>
                            </div>
                            <!-- DTI Messages-->
                            <div id="dti_messages" style="display:none;">
                                <div class="note" id="dti1"
                                    style="display:none; background-color: #238823; color: white">
                                    <h4>Looking Good - Relative to your income, your debt is at a manageable level.</h4>
                                    <p>You most likely have money left over for saving or spending after you’ve paid
                                        your
                                        bills. Lenders generally view a lower DTI as favorable.</p>
                                </div>
                                <div class="note" id="dti2"
                                    style="display:none; background-color:#FFBF00; color:black ">
                                    <h4>Opportunity to Improve.</h4>
                                    <p>You’re managing your debt adequately, but you may want to consider lowering your
                                        DTI.
                                        This could put you in a better position to handle unforeseen expenses. If you’re
                                        looking to borrow, keep in mind that lenders may ask for additional eligibility
                                        criteria.</p>
                                </div>
                                <div class="note" id="dti3"
                                    style="display:none; background-color: #D2222D; color: white">
                                    <h4>Take Action - You may have limited funds to save or spend.</h4>
                                    <p>With more than half your income going toward debt payments, you may not have much
                                        money left to save, spend, or handle unforeseen expenses. With this DTI ratio,
                                        lenders may limit your borrowing options.</p>
                                </div>
                            </div>
                            <!-- Back Start Over -->
                            <div class="flex-center">
                                <button class="widget-submit-btn" onclick="show_slide('liability-info')">Back</button>
                                <button class="widget-submit-btn" onclick="start_over()">Start Over</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Loan Programs -->
                <div class="col-6 col-s-6">
                <?php include('include/loan-programs.php'); ?>
                </div>
            </div>
        </div>
    </section>
    <?php include('include/disclaimer.php'); ?>
    <?php include('include/footer.php'); ?>
    <script src="javascript/calc-Ob.js" async></script>
</body>

</html>