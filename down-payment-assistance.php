<!DOCTYPE html>
<html lang="en">

<head>
    <title>Down Payment Assistance | First Time Home Buyer - Jim Ngo</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="down payment assistance, first time home buyers, mortgage pre-approval">
    <meta name="description"
        content="Are you a first-time home-buyer needing a little help with your down payment and/or closing costs? CalHFA has a program just for you, to meet those needs.">
    <meta name="subject" content="Real Estate, Home Loan, Down Payment Assistance">
    <meta name="language" content="English">
    <meta name="robots" content="index,follow">
    <meta name="author" content="Jim Ngo" />
    <meta name="copyright" content="© 2019 Jim Ngo, Realtor - Ontario CA" />
    <meta property="og:url" content="https://www.jimngo.net/down-payment-assistance" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Down Payment Assistance - First Time Home Buyer" />
    <meta property="og:description"
        content="Are you a first-time home-buyer needing a little help with your down payment and/or closing costs? CalHFA has a program just for you, to meet those needs." />
    <meta property="og:image" content="image/CalHFA.png" />
    <link rel="canonical" href="https://www.jimngo.net/down-payment-assistance">
    <link rel="icon" href="image/favicon-16x16.png" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="style/style.min.css">
    <link rel="stylesheet" href="style/fontawesome-free-5.11.1-web/css/all.min.css">
</head>

<body>
    <?php include('include/title.php'); ?>
    <!-- Page Description -->
    <section>
        <div class="main flex-center">
            <!-- About Me ---------------------------------------------------->
            <div class="col-3 col-s-4 light-gray radius-5">
                <?php include('include/about.php'); ?>
            </div>
            <!-- Page Summary ------------------------------------------------>
            <div class="col-9 col-s-8">
                <h1 style="font-size: 150%; color: dodgerblue">Down Payment Assistance - First Time Home Buyer</h1>
                <h2 style="font-size: 120%; color: dodgerblue">Are you a first-time home-buyer needing a little help
                    with your down payment and/or closing costs?</h2>
                <h3>California Housing Finance Agency has a program just for you, to meet those needs.</h3>
                <p>The MyHome Assistance Program (MyHome) is a deferred payment, simple interest rate subordinate loan
                    that may only be used with a CalHFA first mortgage. Your low to moderate income first-time homebuyer
                    can use this loan for down payment and/or closing cost assistance. The MyHome loan provides up to
                    3.50% of the sales price or appraised value of the property, whichever is less, and must be recorded
                    in second lien position.</p>
            </div>
        </div>
    </section>
    <div style="height: 8px;" id="calculator"></div>
    <!-- CalHFA Widget ------------------------------------------------------->
    <Section id="calHFA-Widget">
        <div class="banner dark-cerulean font-large" id="calHFA-ss">
            <h2 class="slide showing">Down Payment Assistance</h2>
            <h2 class="slide">First Time Homebuyer</h2>
            <h2 class="slide">CalHFA MyHome</h2>
            <h2 class="slide">ZIP</h2>
            <h2 class="slide">Closing Costs</h2>
            <h2 class="slide">Free Pre-Qualficiation</h2>
        </div>
        <div class="main flex-center">
            <!-- User's Inputs -->
            <div class="col-6 col-s-6">
                <!-- Slide 1 -->
                <div class="widget-slide slow" id="slide-1">
                    <div class="card-header">CalHFA Down Payment Assistance</div>
                    <div class="card-body">
                        <ul>
                            <li>MyHome Program - up to 3.5% of sales price for down payment assistance.</li>
                            <li>School Program - For teacher or staff member serving in California’s public schools - up
                                to 4.0%.</li>
                            <li>ZIP Loan - 2% or 3% of loan amount for closing costs assistance at zero interest.</li>
                            <li>Loan Limit varies by county. Please confirm <a
                                    href="https://entp.hud.gov/idapp/html/hicostlook.cfm" rel="nofollow"
                                    target="_blank">FHA Loan Limit</a> and <a
                                    href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx"
                                    rel="nofollow" target="_blank">Conventional Loan Limit</a> for your county</li>
                        </ul>
                        <p class="pad">There are other requirements as well, including income limit, sales price limit,
                            and maximum loan limit, which I'm not going to go into here. I'm going to show you how to
                            layer the 3 loans from CalHFA to purchase a house for very little or no money down.</p>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-2')">Get Started</button>
                        </div>
                    </div>
                </div>
                <!-- Slide 2 - County, Property Type, Purchase Price, Closing Costs -->
                <div class="widget-slide slow" id="slide-2" style="display: none">
                    <div class="card-header">CalHFA Down Payment Assistance</div>
                    <div class="card-body">
                        <!-- County -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">County</div>
                            <select class="inputValue" id="county" onchange="calc()">
                                <option value="San Bernardino" selected>San Bernardino</option>
                                <option value="San Bernardino">Riverside</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Los Angeles">Orange County</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <!-- Property Type -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Property Type</div>
                            <select class="inputValue" id="property-type" onchange="calc()">
                                <option value="Single-Family" selected>Single-Family</option>
                                <option value="Condominium">Condominium</option>
                            </select>
                        </div>
                        <!-- Purchase Price -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Purchase Price</div>
                            <div class="inputValue">$<span id="Purchase-Price"></span></div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="purchase-price" max="765000" min="0" step="1000" type="range"
                                value="300000" oninput="calc()" />
                        </div>
                        <!-- Closing Costs -->
                        <p class="pad">Closing Costs Estimate: $<span id="Closing-Costs"></span></p>
                        <p class="pad">Please enter the county where the property is located, the type of property, and
                            the sales price. For closing costs, I'm estimating at 2% of the sales price.</p>
                        <p class="pad">Loan Limit varies by county. Please confirm <a
                                href="https://entp.hud.gov/idapp/html/hicostlook.cfm" rel="nofollow" target="_blank">FHA
                                Loan Limit</a> and <a
                                href="https://www.fhfa.gov/DataTools/Downloads/Pages/Conforming-Loan-Limits.aspx"
                                rel="nofollow" target="_blank">Conventional Loan Limit</a> for your county</p>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-1')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('slide-3')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- First, Second, and Third Loans -->
                <div class="widget-slide slow" id="slide-3" style="display: none">
                    <div class="card-header">CalHFA Down Payment Assistance</div>
                    <div class="card-body">
                        <!-- Mortgage Information -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Loan Program</div>
                            <select class="inputValue" id="loan-program" onchange="calc()">
                                <option value="CalPLUS FHA with 2% ZIP" selected>CalPLUS FHA with 2% ZIP</option>
                                <option value="CalPLUS FHA with 3% ZIP">CalPLUS FHA with 3% ZIP</option>
                                <option value="CalPLUS Conventional with 2% ZIP">CalPLUS Conventional with 2% ZIP
                                </option>
                                <option value="CalPLUS Conventional with 3% ZIP">CalPLUS Conventional with 3% ZIP
                                </option>
                            </select>
                        </div>
                        <!-- CalHFA Subordinate Loan -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">CalHFA Subordinate Loan</div>
                            <select class="inputValue" id="subordinate-loan" onchange="calc()">
                                <option value="MyHome" selected>Myhome</option>
                                <option value="School Program">School Program</option>
                            </select>
                        </div>
                        <ul>
                            <li><a href="http://www.calhfa.ca.gov/homeownership/programs/myhome.pdf"
                                    target="_blank">MyHome</a> is a deferred 2nd, allowing up to 3.5% of purchase price.
                            </li>
                            <li><a href="https://www.calhfa.ca.gov/homeownership/programs/school.pdf"
                                    target="_blank">School Program</a>, for School teacher and employee, is also a
                                deferred 2nd, allowing up to 4.0% of the purchase price</li>
                            <li>ZIP is a zero interest in 3rd position. ZIP fund can only be used for closing costs, any
                                excess will be applied toward principal reduction</li>
                            <li>3% ZIP will have a higher rate than 2% ZIP.</li>
                        </ul>
                        <div class=" flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-2')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('slide-4')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- Interest Rate -->
                <div class="widget-slide slow" id="slide-4" style="display: none">
                    <div class="card-header">CalHFA Down Payment Assistance</div>
                    <div class="card-body">
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Interest Rate</div>
                            <div class="inputValue"><span id="Expected-Interest-Rate"></span>%</div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="expected-interest-rate" max="6.000" min="3.000" step="0.125"
                                type="range" value="3.625" oninput="calc()" />
                        </div>
                        <p class="pad">Please confirm <a href="https://www.calhfa.ca.gov/apps/rates/"
                                target="_blank">Current Interest Rate</a></p>
                        <!-- High Balance Fee Requirement -->
                        <div id="high-balance-loan" style="display: none">
                            <p class="pad">All loans with a loan amount exceeding $484,350 up to $726,525 will be
                                subject to a <a href="http://www.calhfa.ca.gov/apps/rates/" target="_blank">High Balance
                                    Fee</a></p>
                            <div class="inputTitleContainer">
                                <div class="inputTitle">High Balance Fee</div>
                                <div class="inputValue"><span id="High-Balance-Fee-Rate"></span>%</div>
                            </div>
                            <div class="sliderContainer">
                                <input class="slider" id="high-balance-fee-rate" max="1.0" min="0.0" step="0.001"
                                    type="range" value=".60" oninput="calc()" />
                            </div>
                        </div>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-3')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('slide-5')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- Mortgage Insurance -->
                <div class="widget-slide slow" id="slide-5" style="display: none">
                    <h3 class=" card-header">Mortgage Information</h3>
                    <div class="card-body">
                        <div class="inputTitleContainer">
                            <h3 class="inputTitle">Mortgage Insurance:</h3>
                            <div class="inputValue"><span id="MI%"></span>%</div>
                        </div>
                        <div class="sliderContainer">
                            <input class="slider" id="mi" max="1.0" min="0.5" step="0.05" type="range" value=".75"
                                oninput="calc()" />
                        </div>
                        <p>Mortgage Insurance is required for down payment less than 20% and it's typically between 0.5%
                            to 1.0% of the loan amount:</p>
                        <ul>
                            <li>FHA - Mortgage Insurance includes an Upfront Funding Fee of 1.75% of the loan
                                amount, typically financed into the loan, and an annual insurance premium of 0.85%,
                                which will be lumped into the monthly payment. For down payment of 5% or more, the
                                annual insurance premium will be 0.80%.</li>
                            <li>VA - No Mortgage Insurance</li>
                            <li>Conventional - Typically between 0.5% to 1.0% of the loan amount, mostly depending
                                on the loan-value-ratio, your credit score, and other loan details.</li>
                        </ul>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-4')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('results')">Next</button>
                        </div>
                    </div>
                </div>
                <!-- Results -->
                <div class="widget-slide slow" id="results" style="display: none">
                    <div class="card-header" id="Loan-Program">Results</div>
                    <div class="card-body">
                        <!-- Purchase Price & Closing Costs -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Total Cost</div>
                            <div class="inputValue">$<span id="total-cost"></span></div>
                        </div>
                        <ul>
                            <li>Purchase Price: $<span id="Purchase-Price-2"></span></li>
                            <li>Upfront MIP: $<span id="upfront"></span></li>
                            <li>Closing Costs Estimate: $<span id="Closing-Costs-2"></span></li>
                            <li id="high-balance-fee" style="display: none">High Balance Fee: $<span
                                    id="High-Balance-Fee"></span>
                            </li>
                        </ul>
                        <!-- Total Financing From CalHFA -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Total Financing From CalHFA</div>
                            <div class="inputValue">$<span id="total-loan"></span></div>
                        </div>
                        <ul>
                            <li>First Loan: $<span id="first-loan"></span></li>
                            <li><span id="Subordinate-Loan"></span>: $<span id="second-loan-amount"></span></li>
                            <li>ZIP Loan: $<span id="zip-loan"></span></li>
                            <li id="zip_credit" style="display: none">ZIP Loan credited toward principal reduction:
                                $<span id="ZIP_Credit"></span></li>
                        </ul>
                        <!-- Loan LTV -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Loan-to-Value Ratio</div>
                            <div class="inputValue"><span id="LTV"></span>%</div>
                        </div>
                        <!-- Loan CLTV -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Combined Loan-to-Value Ratio</div>
                            <div class="inputValue"><span id="CLTV"></span>%</div>
                        </div>
                        <!-- Borrower's Estimated Contribution -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Borrower's Estimated Contribution</div>
                            <div class="inputValue">$<span id="buyer-contribution"></span></div>
                        </div>
                        <!-- Mortgage Payment -->
                        <div class="inputTitleContainer">
                            <div class="inputTitle">Estimated Mortgage Payment</div>
                            <div class="inputValue">$<span id="Total-Housing-Expenses"></span></div>
                        </div>
                        <ul>
                            <li>Principal & Interest: $<span id="Principal-Interest"></span></li>
                            <li>Property Tax: $<span id="Property-Tax"></span></li>
                            <li>Mortgage Insurance: $<span id="Mortgage-Insurance"></span></li>
                            <li>Homeowner Insurance: $<span id="Homeowner-Insurance"></span></li>
                        </ul>
                        <div class="flex-center">
                            <button class="widget-submit-btn" onclick="show_slide('slide-5')">Back</button>
                            <button class="widget-submit-btn" onclick="show_slide('slide-1')">Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Program Summary -->
            <div class="col-6 col-s-6" id="subordinate-loans">
                <div class="tabcontent slow" id="MyHome">
                    <p class="card-header">MyHome</p>
                    <div class="card-body">
                        <ul>
                            <li>To qualify for the MyHome loan program, all borrowers, including co-borrowers must
                                reside in the home and meet the definition of a first-time homebuyer</li>
                            <li>Minimum Credit Score of 640 for automated underwriting or 660 for Manual underwriting
                            </li>
                            <li>The maximum total Debt-to-Income (DTI) ratio cannot exceed 45.00% for automated
                                underwriting or 43.00% for manual underwriting</li>
                            <li>Payments on MyHome are deferred for the life of the first loan.</li>
                            <li>Loan amount not to exceed 3.50% of the sales price or appraised value, whichever is
                                less.</li>
                            <li><strong>ZIP Loan:</strong> Any excess fund will be credit toward principal reduction. If
                                the total loan amount is more than what you need, you will need to select a lower ZIP
                                loan, or remove the ZIP loan completely. Remember, your rate will be lower without the
                                ZIP loan, and you must contribute into the contract.</li>
                            <li><a href="https://www.calhfa.ca.gov/homeownership/limits/index.htm#income"
                                    target="_blank">Income Limits Requirement</a></li>
                            <li><a href="https://www.calhfa.ca.gov/homeownership/limits/index.htm#sales"
                                    target="_blank">Sales Price Limits Requirement</a></li>
                            <li><a href="http://www.calhfa.ca.gov/apps/rates/" target="_blank">Current Interest
                                    Rates</a></li>
                        </ul>
                    </div>
                </div>
                <div class="tabcontent slow" id="School Program">
                    <p class="card-header">School Program</p>
                    <div class="card-body">
                        <p>Are you a teacher or staff member serving in one of California’s public schools? CalHFA would
                            like to say “thank you” with the School Teacher and Employee Assistance Program (School
                            Program).</p>
                        <p>The School Teacher and Employee Assistance Program (School Program) is a deferred payment,
                            simple interest rate subordinate loan that is combined with a CalHFA first mortgage. Your
                            low to moderate income first-time homebuyer can use this loan for downpayment and/or closing
                            cost assistance. The School Program loan provides up to 4.0% of the sales price or appraised
                            value of the property, whichever is less, and must be recorded in second lien position.</p>
                        <p><strong>ZIP Loan:</strong> Any excess fund will be credit toward principal reduction. If
                            the total loan amount is more than what you need, you will need to select a lower ZIP
                            loan, or remove the ZIP loan completely. Remember, your rate will be lower without the
                            ZIP loan, and you must contribute into the contract.</p>
                        <ul>
                            <li><a href="https://www.calhfa.ca.gov/homeownership/limits/index.htm#income"
                                    target="_blank">Income Limits Requirement</a></li>
                            <li><a href="https://www.calhfa.ca.gov/homeownership/limits/index.htm#sales"
                                    target="_blank">Sales Price Limits Requirement</a></li>
                            <li><a href="http://www.calhfa.ca.gov/apps/rates/" target="_blank">Current Interest
                                    Rates</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Section>
    <?php include('include/disclaimer.php'); ?>
    <?php include('include/footer.php'); ?>
    <script src="javascript/business-hours.min.js" async></script>
    <script src="javascript/calHFA.min.js" async></script>
</body>


</html>