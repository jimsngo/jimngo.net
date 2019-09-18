<?php

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
    require_once(dirname(__FILE__) . "/_config.php");
}
?>