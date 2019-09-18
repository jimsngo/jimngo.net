<!DOCTYPE html>
<html lang="en">

<head>
    <title>Search Homes For Sale | Jim Ngo - Ontario, CA</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="homes for sale">
    <meta name="description"
        content="Comprehensive buyer and seller real estate services including finding homes, listing homes, market analysis, property evaluation, home loan, and short sale.">
    <meta name="subject" content="Real Estate, Home Loan">
    <meta name="language" content="English">
    <meta name="robots" content="index,follow">
    <meta name="author" content="Jim Ngo" />
    <meta name="copyright" content="Jim Ngo" />
    <meta property="og:url" content="https://www.jimngo.net/search_homes.html" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Real Estate | Home Loan | Jim Ngo - Ontario, CA" />
    <meta property="og:description"
        content="Comprehensive buyer and seller real estate services including finding homes, listing homes, market analysis, property evaluation, home loan, and short sale." />
    <meta property="og:image" content="image\new-home.jpg" />
    <link rel="icon" href="image/favicon-16x16.png" type="image/gif" sizes="16x16">
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
        integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="style\style.css">
    <link rel="canonical" href="https://www.jimngo.net/">
    <?php include('php\header_2.php') ?>
</head>

<body>
    <?php
    include('php\header.php');
    include('php\fb_share.php');
    require_once("vendor\autoload.php");
    require_once(dirname(__FILE__) . 'RESO\config.php');

    // Configuration
    // API authentication URL
    $api_auth_url = "https://op.api.crmls.org/identity/connect/authorize";
    // API token URL
    $api_token_url = "https://op.api.crmls.org/identity/connect/token";
    // API data request (web) URL
    $api_request_url = "https://h.api.crmls.org/RESO/OData/";
    // API user name
    $auth_username = "ivngojims";
    // API password
    $auth_password = "T8mPhuong3";
    // API client ID
    $client_id = "JIMNGO";
    // API secret key
    $client_secret = "2@jCM@z2";
    // Redirect URI
    $redirect_uri = "";
    // Scope
    $scope = "ODataApi";
    if(file_exists(dirname(__FILE__)."/_config.php")) {
        require_once(dirname(__FILE__)."/_config.php");
    }

    // This PHP script demonstrates RESO API login handling on client-side (callback)
    /*
    require_once("../../init.php");
    require_once("config.php");
    */
    
    // Set variables
    RESO\RESO::setClientId($client_id);
    RESO\RESO::setClientSecret($client_secret);
    RESO\RESO::setAPITokenUrl($api_token_url);
    RESO\RESO::setAPIRequestUrl($api_request_url);
    if($_GET['code']) {
        echo "Logged in to RESO API endpoint!";
        // Set access token
        RESO\RESO::setAccessToken($_GET['code']);
        // Do requests ...
    }

    // Authorize user
    $auth_code = RESO\OpenIDConnect::authorize('ivngojims', 'T8mPhuong3', 'https://openid.reso.org/', 'ODataApi');
    // Get access token
    RESO\RESO::setAccessToken(RESO\OpenIDConnect::requestAccessToken($auth_code, 'https://openid.reso.org/', 'ODataApi'));
    // Set the Accept header (if needed)
    RESO\Request::setAcceptType("json");
    // Retrieve top 10 properties from the RESO API endpoint
    $data = RESO\Request::request('Property?\$top=10', 'json', true);

    // Display records
    print_r($data);

    // Save output to file
    RESO\Request::requestToFile("test.json", "Property?\$top=10", "json", true);
    ?>

</body>
<?php include('php\footer.php'); ?>