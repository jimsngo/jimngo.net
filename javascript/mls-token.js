// JQuery AJAX

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://op.api.crmls.org/identity/connect/token",
    "method": "POST",
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "Postman-Token": "6bb50e55-015b-487e-993d-91856c3f5388",
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

// // XHR

// var data = "client_id=JIMNGO&client_secret=2%40jCM%40z2&scope=ODataApi&grant_type=client_credentials";

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("POST", "https://op.api.crmls.org/identity/connect/token");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.17.1");
// xhr.setRequestHeader("Accept", "*/*");
// xhr.setRequestHeader("Cache-Control", "no-cache");
// xhr.setRequestHeader("Postman-Token", "c59132c8-dabd-4e2b-81e3-b11e17fe8c89,0160be7b-5b6f-415c-a4cb-c84b315e810e");
// xhr.setRequestHeader("Host", "op.api.crmls.org");
// xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
// xhr.setRequestHeader("Content-Length", "88");
// xhr.setRequestHeader("Connection", "keep-alive");
// xhr.setRequestHeader("cache-control", "no-cache");

// xhr.send(data);