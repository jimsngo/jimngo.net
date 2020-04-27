<!DOCTYPE html>
<html lang="en">

<head>
	<title>Mortgage Calculator With Extra Payment</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="keywords" content="Mortgage Calculator">
	<meta name="description"
		content="Use my free calculator to see how even small extra payments will save you years of payments and thousands of dollars of additional interest cost.">
	<meta name="subject" content="Mortgage Calculator, Making Extra Payment">
	<meta name="language" content="English">
	<meta name="robots" content="index,follow">
	<meta name="author" content="Jim Ngo" />
	<meta name="copyright" content="Jim Ngo" />
	<meta property="og:url" content="https://www.jimngo.net/extra-payment-calculator" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="FHA Mortgage Calculator | How Much Can I Afford?" />
	<meta property="og:description"
		content="Use my free calculator to see how even small extra payments will save you years of payments and thousands of dollars of additional interest cost.n" />
	<meta property="og:image" content="image\mortgage-calc (2).jpg" />
	<link rel="canonical" href="https://www.jimngo.net/extra-payment-calculator">
	<link rel="icon" href="image/favicon-16x16.png" type="image/gif" sizes="16x16">
	<link rel="stylesheet" href="style/style.min.css">
	<link rel="stylesheet" href="style/fontawesome-free-5.11.1-web/css/all.min.css">
</head>

<body>
	<?php include('include/title.php'); ?>
	<!-- Page Description -->
	<main>
		<div class="main">
			<div class="flex-center">
				<!-- About Me ---------------------------------------------------->
				<div class="col-3 col-s-4 light-gray radius-5">
					<?php include('include/about.php'); ?>
				</div>
				<!-- Page Description ---------------------------------------->
				<div class="col-5 col-s-8">
					<h1 style="font-size: 150%; color: dodgerblue">Extra Payment Calculator</h1>
					<h2 style="font-size: 120%; color: dodgerblue"><em>Want to build your home equity quicker?</em></h2>
					<h3>START PAYING MORE AND SAVE BIG!</h3>
					<p>Use my free calculator to see how even small extra payments will save you years of payments and
						thousands of dollars of additional interest cost. Making extra payments early in the loan saves
						you much more money over the life of the loan as the extinguished principal is no longer
						accruing interest for the remainder of the loan. The earlier you begin paying extra the more
						money you'll save.</p>
				</div>
				<div style="height: 8px;" id="calculator"></div>
				<div class="col-4 col-s-12" id="extra-payment-calc">
					<div class="widget-header font-150 uppercase">Extra Payment Calculator</div>
					<!-- Slide 1 - Current Mortgage Information -->
					<div class="widget-slide slow" id="slide-1">
						<div class="widget-body">
							<p>Simply enter the following information from your current mortgage statement. For the
								monthly P&I, Enter only your principal and interest amount, do not include payments for
								mortgage insurance or your impount account.</p>
							<!-- Current Loan Balance -->
							<div class="inputTitleContainer">
								<div class="inputTitle">Current Loan Balance</div>
								<div class="inputValue">$<input type="number" class="no_border"
										id="current-loan-balance" min="0" max="1000000" style="width: 80px;">
								</div>
							</div>
							<!-- Current Monthly Payment -->
							<div class="inputTitleContainer">
								<div class="inputTitle">Monthly P&I</div>
								<div class="inputValue">$<input type="number" class="no_border" id="current-payment"
										min="0" max="10000" style="width:60px;">
								</div>
							</div>
							<!-- Interest Rate -->
							<div class="inputTitleContainer">
								<div class="inputTitle">Interest Rate</div>
								<div class="inputValue"><input type="number" class="no_border" id="apr" min="0" max="10"
										style="width:60px;"> %</div>
							</div>
							<!-- Additional Payment Considered -->
							<div class="inputTitleContainer">
								<div class="inputTitle">Monthly Additional Payment</div>
								<div class="inputValue">$<input type="number" class="no_border" id="additional-payment"
										min="0" max="1000" style="width: 60px;"></div>
							</div>
							<div class="flex-center">
								<button class="widget-submit-btn" onclick="show_results()">Calculate</button>
							</div>
						</div>
					</div>
					<!-- Slide 2 - Calculation Results -->
					<div class="widget-slide slow" id="results" style="display:none">
						<div class="widget-body">
							<!-- Current Payment -->
							<div class="inputTitleContainer">
								<div class="inputTitle">Current Monthly Payment</div>
								<div class="inputValue">$ <span id="Current-Payment"></span></div>
							</div>
							<ul>
								<li>Years left to pay: <span id="years-to-pay-current-payment"></span></li>
								<li>Total Payment: $ <span id="total-cost-current-payment"></span></li>
							</ul>
							<!-- With New Monthly Payment -->
							<div class="inputTitleContainer">
								<div class="inputTitle">New Monthly Payment</div>
								<div class="inputValue">$ <span id="New-Payment"></span></div>
							</div>
							<ul>
								<li>Years left to pay: <span id="years-to-pay-new-payment"></span></li>
								<li>Total Payment: $ <span id="total-cost-new-payment"></span></li>
							</ul>
							<div class="inputTitleContainer">
								<div class="inputTitle" style="font-size: 125%;">Amount Money Saved</div>
								<div class="inputValue">$ <span id="amount-saved"></span></div>
							</div>
							<div class="flex-center">
								<button class="widget-submit-btn" onclick="show_slide('slide-1')">Start Over</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
	<?php include('include/disclaimer.php'); ?>
    <?php include('include/footer.php'); ?>
	<script src="javascript/extra-payment-calc.min.js" async></script>
	<script src="javascript/business-hours.min.js" async></script>
</body>

</html>