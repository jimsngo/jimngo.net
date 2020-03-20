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
select = 'PropertyType, PropertySubType, StandardStatus, ListingId, ListPrice, OriginalListPrice, PublicRemarks, DaysOnMarket, StreetNumberNumeric, StreetName, StreetSuffix, City, PostalCode, BedroomsTotal, BathroomsTotalInteger, LivingArea, Cooling, Heating, AssociationFee, YearBuilt, DaysOnMarket, MajorChangeType, PhotosCount';
orderby = 'ListPrice';
record = 12;
expand = 'Media($select=MediaURL)';

// Get Search Filter
getPropertyType();
getPropertySubType();
getCity();
getMinPrice();
getMaxPrice();
getBed();
getBath();

function getPropertyType() {
    property_type = document.getElementById("property_type").value;
};

function getPropertySubType() {
    property_sub_type = document.getElementById("property_sub_type").value;
};

function getCity() {
    city = document.getElementById("city").value;
}

function getMinPrice() {
    min_price = document.getElementById("min_price").value;
}

function getMaxPrice() {
    max_price = document.getElementById("max_price").value;
}

function getBed() {
    bed = document.getElementById("bed").value;
}

function getBath() {
    bath = document.getElementById("bath").value;
}

// Get Token & and display default search results
$.ajax(connect).done(function (response) {
    token = response.access_token;
    search();
});

function search() {
    var search = {
        "url": `https://h.api.crmls.org/RESO/OData/Property?$filter=(StandardStatus eq 'A')and(PropertyType eq '${property_type}')and(City eq '${city}')and(BathroomsTotalInteger ge ${bath})and(BedroomsTotal ge ${bed})and(ListPrice ge ${min_price})and(ListPrice le ${max_price})&$select=${select}&$orderby=${orderby}&$top=${record}&$expand=${expand}`,
        "method": "GET",
        // "timeout": 0,
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        },
        success: function (response) {
            listings = response.value;
            updateListing();
            console.log(listings);

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
        if (listings[i].StandardStatus === "A") {
            listings[i].StandardStatus = "Active";
        }
        if (listings[i].PropertyType === "Resi") {
            listings[i].PropertyType = "Residential";
        }
        if (listings[i].PropertySubType === "SFR") {
            listings[i].PropertySubType = "Single Family";
        }
        if (listings[i].PropertySubType === "TWNHS") {
            listings[i].PropertySubType = "Townhouse";
        }
        if (listings[i].PropertySubType === "CONDO") {
            listings[i].PropertySubType = "Condominium";
        }
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