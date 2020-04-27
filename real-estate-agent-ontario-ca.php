<!DOCTYPE html>
<html lang="en">

<head>
    <title>Real Estate Agent - Jim Ngo - Ontario, CA</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="real estate, home loan, life insurance">
    <meta name="description"
        content="Comprehensive buyer and seller real estate services including finding homes, listing homes, market analysis, property evaluation, home loan, and short sale.">
    <meta name="subject" content="Real Estate, Home Loan, Life Insurance">
    <meta name="language" content="English">
    <meta name="robots" content="index,follow">
    <meta name="author" content="Jim Ngo" />
    <meta name="copyright" content="Jim Ngo" />
    <meta property="og:url" content="https://www.jimngo.net/real-estate-agent" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Real Estate Agent - Jim Ngo - Ontario, CA" />
    <meta property="og:description"
        content="Comprehensive buyer and seller real estate services including finding homes, listing homes, market analysis, property evaluation, home loan, and short sale." />
    <meta property="og:image" content="image\new-home-2.jpg" />
    <link rel="canonical" href="https://www.jimngo.net/real-estate-agent-ontario-ca">
    <link rel="icon" href="image/favicon-16x16.png" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="style/style.min.css">
    <link rel="stylesheet" href="style/fontawesome-free-5.11.1-web/css/all.min.css">
    <link rel="stylesheet" href="style/home-search.min.css">
   
</head>

<body>
    <?php include('include/title.php'); ?>
    <!-- Page Description ---------------------------------------------------->
    <main>
        <div class="main flex-perfect-center">
            <!-- About Me ---------------------------------------------------->
            <div class="col-3 col-s-4 light-gray radius-5">
                <?php include('include/about.php'); ?>
            </div>
            <!-- Page Description -------------------------------------------->
            <div class="col-6 col-s-8" id="cards">
                <!-- Real Estate Agent -->
                <h1 style="color: dodgerblue" class="font-large">Real Estate Agent - Ontario, CA</h1>
                <p>Whether you are buying or selling a home, it can be quite an adventure especially in today’s
                    Real Estate market. There is so much information out there on the news and on the internet
                    about home sales, prices, and mortgage rates.</p>
                <p>Hiring an agent who has his or her finger on the pulse of the market will make your buying or
                    selling experience an educated one. You need someone who is going to tell you the truth, not
                    just what they think you want to hear.</p>
                <blockquote style="font-size: 120%; color: dodgerblue">“When getting help with money, whether
                    it’s insurance, real estate or investments, you should always look for someone with the
                    heart of a teacher, not the heart of a salesman.” - Dave Remsey</blockquote>
                <div class="flex-perfect-center ">
                    <div class="dark-cerulean radius-5 font-large eguide"
                        style="text-align: center; margin: 4px 16px; padding: 8px 16px;">
                        <a href="https://www.simplifyingthemarket.com/en/buyers/?a=523668-c071036209335fb56c5e4613743a6357"
                            target="_blank">Buyer's Guide</a></div>
                    <div class="dark-cerulean radius-5 font-large eguide"
                        style="text-align: center; margin: 4px 16px; padding: 8px 16px;">
                        <a href="https://www.simplifyingthemarket.com/en/sellers/?a=523668-c071036209335fb56c5e4613743a6357"
                            target="_blank">Seller's Guide</a></div>
                </div>
                <p>I serve the Inland Empire geographic areas. My services include standard sales, short sales,
                    and NEW homes. I am involved from the beginning to the end of every transaction. I take
                    pride in my customer service and in making sure each purchase or selling process will go as
                    smoothly as possible.</p>
            </div>
            <!-- Home Search Box -- Added 03/16/2020 ------------------------->
            <div class="col-3 col-s-6">
            <?php include('include/home-search-box.php'); ?>
            </div>
        </div>
    </main>
    <!-- MLS Home Search Results --------------------------------------------->
    <div class="banner dark-cerulean font-large" id="mls-home-search">
        <h2 class="slide showing" id="searchCity"></h2>
        <h2 class="slide">Homes For Sale</h2>
        <h2 class="slide" id="listingCount"></h2>
    </div>
    <!-- Search Results ------------------------------------------------------>
    <div class="main">
        <h3 id="searchCity" style="color: dodgerblue" class="font-large"></h3>
        <p id="listingCount"></p>
    </div>
    <div class="main flex-center" id='records'>
    </div>
    <!-- Single Listing Details ---------------------------------------------->
    <div class="main flex-center" id="listing-indexed-pages"></div>
    <!-- Listing Photos-->
    <div class="main flex-perfect-center">
        <div class="col-7 col-s-7" id='photo-slide' style=" max-width: 750px;"></div>
        <div class="col-5 col-s-5" id="remarks" style="padding: 8px;"></div>
    </div>
    <!-- Single Listing Details ---------------------------------------------->
    <div class="main flex-center">
        <div id="listingDetails-1" class="col-6 col-s-6"></div>
        <div id="listingDetails-2" class="col-6 col-s-6"></div>
    </div>
    <!-- End Home Search-->
    <div class="banner dark-cerulean font-large" id="service-ss">
        <h2 class="slide showing">Mortgage Pre-Approval</h2>
        <h2 class="slide">Down Payment Assistance</h2>
        <h2 class="slide">Mortgage Calculator</h2>
        <h2 class="slide">Home Valuation</h2>
        <h2 class="slide">Comparative Market Analysis</h2>
        <h2 class="slide">Reverse Mortgage</h2>
        <h2 class="slide">Mortgage Refinance</h2>
        <h2 class="slide">Short Sale Foreclosure</h2>
    </div>
    <?php include('include/new-home-search.php'); ?>
    <?php include('include/services.php'); ?>
    <?php include('include/flyers.php'); ?>
    <?php include('include/footer.php'); ?>
    <script src="javascript/real-estate-agent.min.js" async></script>
    <script src="javascript/mls-search.min.js" async></script>
</body>

</html>