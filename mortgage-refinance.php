<!DOCTYPE html>
<html lang="en">

<head>
    <title>Mortgage Refinance Calculator | Jim Ngo - Ontario, CA</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords"
        content="streamline refinance, rate and term refinance, cash out refinance, HELOCs, debt consolidation">
    <meta name="description"
        content="Is it time to refinance? With my free refinance calculator, you can calculate your new monthly payment and estimate your monthly and lifetime savings.">
    <meta name="subject" content="Mortgage Refinance Calculator">
    <meta name="language" content="English">
    <meta name="robots" content="index,follow">
    <meta name="author" content="Jim Ngo" />
    <meta name="copyright" content="Jim Ngo" />
    <meta property="og:url" content="https://www.jimngo.net/mortgage-refinance" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Mortgage Refinance Calculator" />
    <meta property="og:description"
        content="Is it time to refinance? With my free refinance calculator, you can calculate your new monthly payment and estimate your monthly and lifetime savings." />
    <meta property="og:image" content="image/mortgage-calc (2).jpg" />
    <link rel="canonical" href="https://www.jimngo.net/mortgage-refinance">
    <link rel="icon" href="image/favicon-16x16.png" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="style/style.min.css">
    <link rel="stylesheet" href="style/home-search.min.css">
    <link rel="stylesheet" href="style/fontawesome-free-5.11.1-web/css/all.min.css">
</head>

<body>
    <?php include('include/title.php'); ?>
    <main class="main">
        <div class="flex-center">
            <!-- About Me ---------------------------------------------------->
            <div class="col-3 col-s-4 light-gray radius-5">
                <?php include('include/about.php'); ?>
            </div>
            <!-- Page Description ---------------------------------------->
            <div class="col-9 col-s-8">
                <h1 style="color: dodgerblue">Mortgage Refinance</h1>
                <h3 style="color: dodgerblue">
                    • Is it Time to Refinance?<br />
                    • How Much Money Will You Save?
                </h3>
                <p>Refinancing makes the most sense if you fall into one of these categories:</p>
                <ul>
                    <li>You have an Adjustable Rate Mortgage (ARM)</li>
                    <li>You have an interest-only loan</li>
                    <li>Your mortgage has more than a 15-year term (such as 30 or 40 years)</li>
                    <li>You have a high interest rate loan</li>
                </ul>
            </div>
        </div>
        <div class="flex-center" id="dti_select">
            <!-- Rate and Term Refinance ------------------------->
            <div class="col-6 col-s-6">
                <div class="card-header">Rate and Term Refinance</div>
                <div class="card-body">
                    <p>Rate and Term simply describes the purpose of the refinance is to lower the
                        interest rate or change the length of the loan term. Rate and Term refinances do not
                        allow the borrower to take cash out.</p>
                    <p>Borrowers typically use this program when interest rates have fallen below the rate
                        on their current mortgage. The lower rate reduces the borrower’s monthly payment and
                        saves on interest over the life of the loan.</p>
                    <p>This type of refinance can also be used to change an adjustable rate mortgage to a
                        fixed rate, ensuring that monthly payments will not rise in the future.</p>
                </div>
            </div>
            <!-- Cash-out Refinance ------------------------------>
            <div class="col-6 col-s-6">
                <div class="card-header">Cash-out Refinance</div>
                <div class="card-body">
                    <p>Cash-out refinance is a mortgage where the borrower pulls out equity from the
                        property in the form of cash. With the same refinance, the borrower can lower the
                        rate or change the loan term length, if current interest rates allow. Typically,
                        cash-out refinances are viewed as higher risk, and have higher interest rates
                        associated with them.</p>
                    <p>For example, a borrower with a $300,000 loan wishes open a bigger loan of $350,000
                        because s/he needs some cash. Let’s suppose closing costs are $6,000 and the money
                        needed to pay off the existing loan is $300,000. The net cash the borrower receives
                        after the refinance is $44,000.</p>
                </div>
            </div>
        </div>
    </main>
    <div style="height: 8px;" id="calculator"></div>
    <!-- Refinance Calculator Widget ----------------------------------------->
    <section id="refi-calc">
        <!-- Banner ---------------------------------------------------------->
        <div class="banner dark-cerulean font-large" id="refi-ss">
            <h2 class="slide showing">Streamline Refinance</h2>
            <h2 class="slide">Lower rate</h2>
            <h2 class="slide">Lower term</h2>
            <h2 class="slide">ARM Conversion</h2>
            <h2 class="slide">HELOCs</h2>
            <h2 class="slide">Emergency Fund</h2>
        </div>
        <div class="main flex-center">
            <!-- Mortgage Refinance Calculator ------------------------------->
            <div class="col-6 col-s-6">
                <h3 class="card-header">Mortgage Refinance Calculator - FHA, VA, Conventional</h3>
                <!-- Slide 1 - Begin Calculator -->
                <div class="widget-slide medium" id="slide-1">
                    <div class="card-body">
                        <p class="uppercase">• Streamline Refinance</p>
                        <p>This is the most popular program for homeowners to lower their interest rate and monthly
                            payments. Both FHA and VA offer this program with no appraisal, no income documentation, and
                            underwriting is very limited. It’s a fast and cost-effective way to refinance.</p>
                        <p class="uppercase">• Term Refinance</p>
                        <p>Shortening the loan term may increase your monthly payments, but the loan would be paid
                            off earlier. For example, if you’ve been paying on your 30 year loan for 3 years,
                            you have 27 years left. By refinancing into a new 15 year loan, you shorten the time
                            you will be making monthly payments by 12 years. Keep in mind, this program typically will
                            require full documentation.</p>
                        <p class="uppercase">• Simple Refinance - Cash Out</p>
                        <p>Requirements vary, and the best candidates for this program typically have at least 10% - 20%
                            equity in their homes. Lenders will also look at borrower's debt and income to make sure
                            existing debt payments will not interfere with new monthly mortgage payments.</p>
                        <p class="uppercase">How Much Can You Save?</p>
                        <div class="flex-center"><button class="widget-submit-btn"
                                onclick="show_slide('current-loan')">Get Started</button></div>
                    </div>
                </div>
                <!-- Slide 2 - Current Loan -->
                <div class="widget-slide medium" id="current-loan">
                    <div class="card-body">
                        <p style="font-size: 125%;">Current Loan Information</p>
                        <!-- Loan Program -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Loan Program:</div>
                            <select class="inputValue" id="current-loan-program" onchange="get_current_loan_program()">
                                <option value="Conventional">Conventional</option>
                                <option value="FHA" selected>FHA</option>
                                <option value="VA">VA</option>
                            </select>
                        </div>
                        <!-- Current Loan Term -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Loan Term</div>
                            <select class="inputValue" id="current-loan-term" onchange="get_current_loan_term()">
                                <option value="15">15 Years</option>
                                <option value="30" selected>30 Years</option>
                            </select>
                        </div>
                        <!-- Current Loan Balance-->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Loan Balance</div>
                            <div class="inputValue">$<span id="Current-Loan-Balance"></span></div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="current-loan-balance" max="700000" min="0" step="10000"
                                type="range" value="300000" oninput="get_current_loan_balance()" />
                        </div>
                        <p></p>
                        <!-- Current Interest Rate -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Interest Rate</div>
                            <div class="inputValue"><span id="Current-Interest"></span> %</div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="current-interest" max="10" min="3" step="0.125" type="range"
                                value="5.000" oninput="get_current_interest()" />
                        </div>
                        <p></p>
                        <!-- Current Monthly Payment -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Monthly P&I</div>
                            <div class="inputValue">$<span id="Current-Payment"></span></div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="current-payment" max="5000" min="0" step="5" type="range"
                                value="0" oninput="get_current_payment()" />
                        </div>
                        <p class="pad">Principal & Interest payment only - Please do not include Property Tax and
                            Insurance Escrow payments.</p>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-1')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('new-loan')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- Slide 3 - New Loan -------------------------------------->
                <div class="widget-slide medium" id="new-loan">
                    <div class="card-body">
                        <p style="font-size: 125%;">New Loan Information</p>
                        <!-- Refinance Option -------------------------------->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Refinance Option:</div>
                            <select class="inputValue" id="refi-option" onchange="get_refi_option()">
                                <option id="streamline" value="Streamline Refinance">Streamline Refinance</option>
                                <option value="Term Refinance">Term Refinance</option>
                                <option value="Simple Refinance">Simple Refinance</option>
                            </select>
                        </div>
                        <!-- New Loan Amount --------------------------------->
                        <div id='new-loan-amount-select'>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">New Loan Amount</div>
                                <div class="inputValue">$<span id="New-Loan-Amount"></span></div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="new-loan-amount" max="700000" min="0" step="10000"
                                    type="range" value="300000" oninput="get_new_loan_amount()" />
                            </div>
                        </div>
                        <!-- New Loan Term ----------------------------------->
                        <div id='new-loan-term-select'>
                            <!-- New Loan Term -->
                            <div class="inputTitleContainer">
                                <div class="inputTitle">New Loan Term</div>
                                <select class="inputValue" id="new-loan-term" onchange="get_new_loan_term()">
                                    <option value="15">15 Years</option>
                                    <option value="30" selected>30 Years</option>
                                </select>
                            </div>
                        </div>
                        <p></p>
                        <!-- New Interest Rate ------------------------------->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Expected Interest Rate</div>
                            <div class="inputValue"><span id="New-Interest"></span> %</div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="new-interest" max="10" min="3" step="0.125" type="range"
                                value="5.000" oninput="get_new_interest()" />
                        </div>
                        <p></p>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('current-loan')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('closing-costs-slide')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- Slide 4 - Closing Costs -->
                <div class="widget-slide medium" id="closing-costs-slide">
                    <div class="card-body">
                        <!-- Closing Costs-->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Closing Costs: </div>
                            <div class="inputValue">$ <span id="Closing-Costs"></span></div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="closing-costs" max="3" min="2" step="0.1" type="range" value="2"
                                oninput="get_closing_costs()" />
                        </div>
                        <p class="pad">Enter the estimated closing costs associated with obtaining your new mortgage.
                            Closing costs include any fees paid to obtain a lower interest rate, origination fees or
                            other settlement costs, and it's typically between 2-3% of the loan amount.</p>
                        <p class="pad">Some lenders offer "no cost" refinances (actually, no out-of-pocket expenses to
                            the borrower) by charging a higher rate of interest on the new loan than if the borrower
                            financed or paid the closing costs in cash. From this premium, the lender pays any closing
                            costs that are incurred on the transaction. FHA does not allow lenders to include closing
                            costs in the new mortgage amount of a streamline refinance. Investment properties
                            (properties which the borrower does not occupy as his or her principal residence) may only
                            be refinanced without an appraisal.</p>
                        <p></p>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('new-loan')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('results')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- Slide 5 - Calculation Results -->
                <div class="widget-slide medium" id="results">
                    <!-- Current Loan -->
                    <div class="card-body">
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Current Loan Balance</div>
                            <div class="inputValue">$ <span id="Current-Loan-Balance-2"></span></div>
                        </div>
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Current Interest Rate</div>
                            <div class="inputValue"><span id="Current-Interest-2"></span>%</div>
                        </div>
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Current Monthly Payment</div>
                            <div class="inputValue">$ <span id="Current-Payment-2"></span></div>
                        </div>
                        <ul>
                            <li>Current Loan Term: <span id="Current-Loan-Term-2"></span></li>
                            <li>Years left to pay: <span id="years-to-pay"></span></li>
                            <li>Total payment left to pay: $<span id="total-payment-current-loan"></span></li>
                            <li>Total finance charge: $<span id="Current-Interest-Cost"></span></li>
                        </ul>
                    </div>
                    <p></p>
                    <!-- New Loan -->
                    <h3 class="card-header" id="refi-option-2"></h3>
                    <div class="card-body">
                        <div class="inputTitleContainer">
                            <div class="inputTitle">New Loan Amount</div>
                            <div class="inputValue">$<span id="New-Loan-Amount-2"></span></div>
                        </div>
                        <div class="inputTitleContainer" id="cash-out">
                            <div class="inputTitle">Cash @ Closing</div>
                            <div class="inputValue">$<span id="cash-at-closing"></span></div>
                        </div>
                        <div class="inputTitleContainer">
                            <div class="inputTitle">New Interest Rate</div>
                            <div class="inputValue"><span id="New-Interest-2"></span>%</div>
                        </div>
                        <div class="inputTitleContainer">
                            <div class="inputTitle">New Monthly Payment</div>
                            <div class="inputValue">$<span id="new-monthly-payment"></span></div>
                        </div>
                        <ul>
                            <li>New Loan Term: <span id="new-loan-term-2"></span></li>
                            <li>Closing Costs: $<span id="Closing-Costs-2"></span></li>
                            <li>Total payment expected: $<span id="total-payment-new-loan"></span></li>
                            <li>Total finance charge: $<span id="New-Interest-Cost"></span></li>
                        </ul>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('closing-costs-slide')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('current-loan')">Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
            <p></p>
            <!-- Loan Programs ----------------------------------------------->
            <div class="col-6 col-s-6">
                <!-- Conventional Refinance ---------------------------------->
                <div id="Conventional" class="tabcontent slow">
                    <h3 class="card-header">Conventional Refinance</h3>
                    <div class="card-body">
                        <p>Conventional Refinance requires full documentation. FHA and VA streamlines, on the other
                            hand, are much easier because they require less. But to use them, the homeowner has to fit
                            into quite narrow criteria. It's also important to know that a conventional refinance can do
                            things that streamline refinances can’t:</p>
                        <ul>
                            <li>Refinance an investment property or second home.</li>
                            <li>Refinance any existing loan type, like sub-prime or Alt-A loans.</li>
                            <li> Give the homeowner cash back.</li>

                        </ul>
                        <p>Generally to qualify for this type of conventional loan, the borrower must have at least
                            10-20% equity in the property, have good credit, and have enough income to qualify for the
                            new loan. Lenders will require a new appraisal, credit report, and proof of income.</p>
                    </div>
                </div>
                <!-- FHA Refinance ------------------------------------------->
                <div id="FHA" class="tabcontent slow">
                    <h3 class="card-header">FHA Refinance</h3>
                    <div class="card-body">
                        <p>FHA Streamline Refinance is available to homeowners who currently have an FHA loan. Like the
                            name implies, streamline refinances don’t require full documentation, like an updated
                            appraisal or income verification, making it fast and easy. Its primary goal is to lower your
                            interest rate and reduce your monthly payment.</p>
                        <ul>
                            <li>No appraisal required</li>
                            <li>No income documentation required</li>
                            <li>No asset documentation required - Unless funds are required to close</li>
                            <li>Mortgage must be current</li>
                            <li>No 30-day or greater mortgage late payments in the most recent 12-month period</li>
                            <li>Net Tangible Benefit - The refinance must improve the borrower’s financial position as
                                defined by the FHA. Generally, reducing the borrower’s “combined rate” by at least 0.5%.
                            </li>
                            <li>No Cash-Out.</li>
                            <li>No Reducing Term, such as from 30 yrs to 15 yrs.</li>
                        </ul>
                    </div>
                </div>
                <!-- VA Refinance -------------------------------------------->
                <div id="VA" class="tabcontent slow">
                    <h3 class="card-header">VA Refinance</h3>
                    <div class="card-body">
                        <p>A VA Streamline Refinance is also known as an Interest Rate Reduction Refinance Loan, or
                            IRRRL. It can only be made to refinance a property on which you have already used your
                            VA loan eligibility. It must be a VA to VA refinance, and it will reuse the entitlement you
                            originally used. It requires much less documentation than a standard refinance.</p>
                        <ul>
                            <li>No appraisal or credit underwriting package is required when applying for an IRRRL.</li>
                            <li>An IRRRL may be done with "no money out of pocket" by including all costs in the new
                                loan or by making the new loan at an interest rate high enough to enable the lender to
                                pay the costs.</li>
                            <li>When refinancing from an existing VA ARM loan to a fixed rate loan, the interest rate
                                may increase.</li>
                            <li>No lender is required to give you an IRRRL, however, any VA lender of your choosing may
                                process your application for an IRRRL.</li>
                            <li>Veterans are strongly urged to contact several lenders because terms may vary.</li>
                            <li>You may NOT receive any cash from the loan proceeds.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php include('include/disclaimer.php'); ?>
    <?php include('include/footer.php'); ?>
    <script src="javascript/refinance.min.js" async></script>
    <script src="javascript/business-hours.min.js" async></script>
</body>

</html>