connect = {
    "url": "https://op.api.crmls.org/identity/connect/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "client_id": "JIMNGO",
        "client_secret": "2@jCM@z2",
        "scope": "ODataApi",
        "grant_type": "client_credentials"
    }
};

// Default settings
var select = 'PropertyType, PropertySubType, StandardStatus, ListingId, ListPrice, OriginalListPrice, PublicRemarks, DaysOnMarket, StreetNumberNumeric, StreetName, StreetSuffix, City, PostalCode, BedroomsTotal, BathroomsTotalInteger, LivingArea, Cooling, Heating, AssociationFee, YearBuilt, DaysOnMarket, MajorChangeType, PhotosCount';
var orderby = 'ListPrice';
var record = 12;
var expand = 'Media($select=MediaURL)';

// Get Token & and display default search results
$.ajax(connect).done(function (response) {
    token = response.access_token;
    search(
        property_type = "'Resi'",
        city = "'ONT'",
        bed = 3,
        bath = 2,
        min_price = 300000,
        max_price = 500000
    );
});

function search() {
    var search = {
        "url": `https://h.api.crmls.org/RESO/OData/Property?$filter=(StandardStatus eq 'A')and(PropertyType eq ${property_type})and(City eq ${city})and(BathroomsTotalInteger ge ${bath})and(BedroomsTotal ge ${bed})and(ListPrice ge ${min_price})and(ListPrice le ${max_price})&$select=${select}&$orderby=${orderby}&$top=${record}&$expand=${expand}`,
        "method": "GET",
        // "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        },
        success: function (response) {
            listings = response.value;
            updateListing();

            for (var i = 0; i < listings.length; i++) {
                var listing = listings[i];
                var picturesForListing = listing.Media;
                var firstPictureForListing = picturesForListing[0];
                var html = `
                    <div class='col-4 col-s-6'>
                        <div class='border'>
                            <img class="listing-photo" src="${firstPictureForListing.MediaURL}">
                            <div class="inputTitleContainer">
                                <div class="inputTitle font-large">$${listing.ListPrice}</div>
                                <div class="inputValue">${listing.MajorChangeType}</div>
                            </div>
                            <div>&ensp;• ${listing.BedroomsTotal} Beds • ${listing.BathroomsTotalInteger} Baths • ${listing.LivingArea} sqft</div>
                            <div>&ensp;${listing.StreetNumberNumeric} ${listing.StreetName} ${listing.StreetSuffix}, ${listing.City}, CA ${listing.PostalCode}</div>
                        </div>
                    </div>
                `;
                $('#records').append(html);
            }
        }
    };

    $.ajax(search);
};

function updateListing() {
    for (var i in listings) {
        if (listings[i].City === 'ONT') {
            listings[i].City = 'Ontario';
        };
        if (listings[i].City === 'CH') {
            listings[i].City = 'Chino';
        };
        if (listings[i].City === 'CHH') {
            listings[i].City = 'Chino Hills';
        };
        if (listings[i].MajorChangeType === 'PRICECHG') {
            listings[i].MajorChangeType = 'Price Change';
        };
        if (listings[i].MajorChangeType === 'NEWLIST') {
            listings[i].MajorChangeType = 'New Listing';
        };
        if (listings[i].MajorChangeType === 'BOM') {
            listings[i].MajorChangeType = 'Back On Market';
        };
    }
}



// function sort_by_key(array, key) {
//     return array.sort(function (a, b) {
//         var x = a[key];
//         var y = b[key];
//         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//     });
// };