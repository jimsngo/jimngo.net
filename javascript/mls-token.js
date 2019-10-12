///////////////////////////////////////////////////////////////////////////////
// JQuery AJAX                                                                /
///////////////////////////////////////////////////////////////////////////////

var settings = {
    "async": true,
    // "crossDomain": true,
    "url": "https://op.api.crmls.org/identity/connect/token",
    "method": "POST",
    "headers": {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
        // "cache-control": "no-cache",
        // "Postman-Token": "6bb50e55-015b-487e-993d-91856c3f5388",
    },
    "data": {
        "client_id": "JIMNGO",
        "client_secret": "2@jCM@z2",
        "scope": "ODataApi",
        "grant_type": "client_credentials",
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

var token = {
    "access_token": "bf37999a9912165c91572b33e68c0cd5",
    "expires_in": 3600,
    "token_type": "Bearer"
};