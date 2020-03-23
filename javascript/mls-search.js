const connect = {
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
}
const select = 'PropertyType, PropertySubType, StandardStatus, ListingId, ListPrice, OriginalListPrice, PublicRemarks, DaysOnMarket, StreetNumberNumeric, StreetName, StreetSuffix, City, PostalCode, BedroomsTotal, BathroomsTotalInteger, LivingArea, Cooling, Heating, AssociationFee, YearBuilt, DaysOnMarket, MajorChangeType, PhotosCount';
const orderby = 'ListPrice';
const expand = 'Media($select=MediaURL)';

$.ajax(connect).done(function (response) {
    token = response.access_token;
    search();
})

function search() {
    getClientInputs()
    $.ajax({
        "url": `https://h.api.crmls.org/RESO/OData/Property?$filter=(StandardStatus eq 'A')and(PropertyType eq '${property_type}')and(PropertySubType eq '${property_sub_type}')and(City eq '${city}')and(BathroomsTotalInteger ge ${bath})and(BedroomsTotal ge ${bed})and(ListPrice ge ${min_price})and(ListPrice le ${max_price})&$select=${select}&$orderby=${orderby}&$expand=${expand}`,
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }
    }).done(function (response) {
        listings = response.value;
        updateCities();
        $('#searchCity').html(`${city} Real Estate & Homes For Sale`)
        $('#listingCount').html(`${listings.length} Listings`)
        $('#records').empty();
        $('#listing-indexed-pages').empty();
        renderSubListings();
    });
}

function renderSubListings() {
    subListings = [];
    var i = 0,
        j = 0,
        chunk = 12;
    for (i = 0; i < listings.length; i += chunk) {
        var myChunk = listings.slice(i, i + chunk);
        subListings.push(myChunk);
        var pageIndex = `<button onclick="displayIndexedListingPage(${j})">${j+1}</button>`
        $('#listing-indexed-pages').append(pageIndex);
        j++;
    };
    displayListings(0);
}

function displayListings(j) {
    $('#records').empty();
    var results = subListings[j]; // 12 listings per page
    for (var i = 0; i < results.length; i++) {
        listing = results[i];
        updateListings();
        ListingId = listing.ListingId;
        picturesForListing = listing.Media;
        firstPictureForListing = picturesForListing[0];
        var html = `
            <div class='col-4 col-s-6'>
                <div class='border'>
                    <img class="photo-card" src="${firstPictureForListing.MediaURL}" id="${ListingId}" onclick="singleListing('${ListingId}')">
                    <div class="inputTitleContainer">
                        <div class="inputTitle font-large">$${listing.ListPrice}</div>
                        <div class="inputValue">${listing.MajorChangeType}</div>
                    </div>
                    <div>&ensp;• Listing ID: ${listing.ListingId}</div>
                    <div>&ensp;• ${listing.BedroomsTotal} Beds • ${listing.BathroomsTotalInteger} Baths • ${listing.LivingArea} sqft</div>
                    <div>&ensp;${listing.StreetNumberNumeric} ${listing.StreetName} ${listing.StreetSuffix}, ${listing.City} CA ${listing.PostalCode}</div>
                </div>
            </div>
        `;
        $('#records').append(html);
    }
}

function displayIndexedListingPage(j) {
    displayListings(j);
    document.getElementById('searchCity').scrollIntoView();
}

function singleListing(listingId) {
    clearTimeout(myVar);
    console.log(listingId)
    $('#photo-slide').empty();
    $('#singleListing').empty();

    document.getElementById('listing-indexed-pages').scrollIntoView();
    var element = listings.find(element => element.ListingId === listingId);
    console.log(element)

    var picturesForListing = element.Media;
    console.log(picturesForListing)
    console.log('Number of Photos: ' + picturesForListing.length)
    for (var i = 0; i < picturesForListing.length; i++) {
        var img = `
        <div class='mySlides fade'>
            <img  src="${picturesForListing[i].MediaURL}" class='photo-big'>  
        </div>    
        `;
        $('#photo-slide').append(img);
    };

    var myVar = setTimeout(showSlides, 3000);

    // setTimeout(showSlides, 4000);

    slideIndex = 0;
    showSlides();
    var html = `
    <div>Listing ID: ${listingId}<br/>
    ${element.PublicRemarks}</div>
    `;
    $('#singleListing').append(html);
}

function showSlides() {
    var slides = document.getElementsByClassName('mySlides');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block';
    // setTimeout(showSlides, 4000);
}

function findListing(listingId) {
    var element = listings.find(element => element.ListingId === listingId);
    console.log(element)
}

function updateCities() {
    if (city === 'ONT') {
        city = 'Ontario CA';
    };
    if (city === 'CH') {
        city = 'Chino CA';
    };
    if (city === 'CHH') {
        city = 'Chino Hills CA';
    };
    if (city === 'EVAL') {
        city = 'Eastvale';
    };
    if (city === 'RSVD') {
        city = 'Riverside';
    };
}

function updateListings() {
    if (listing.StandardStatus === "A") {
        listing.StandardStatus = "Active";
    }
    if (listing.PropertyType === "Resi") {
        listing.PropertyType = "Residential";
    }
    if (listing.PropertySubType === "SFR") {
        listing.PropertySubType = "Single Family";
    }
    if (listing.PropertySubType === "TWNHS") {
        listing.PropertySubType = "Townhouse";
    }
    if (listing.PropertySubType === "CONDO") {
        listing.PropertySubType = "Condominium";
    }
    if (listing.City === 'ONT') {
        listing.City = 'Ontario';
    };
    if (listing.City === 'CH') {
        listing.City = 'Chino';
    };
    if (listing.City === 'CHH') {
        listing.City = 'Chino Hills';
    };
    if (listing.City === 'EVAL') {
        listing.City = 'Eastvale';
    };
    if (listing.City === 'RVSD') {
        listing.City = 'Riverside';
    };
    if (listing.MajorChangeType === 'PRICECHG') {
        listing.MajorChangeType = 'Price Change';
    };
    if (listing.MajorChangeType === 'NEWLIST') {
        listing.MajorChangeType = 'New Listing';
    };
    if (listing.MajorChangeType === 'BOM') {
        listing.MajorChangeType = 'Back On Market';
    };
}

function sort_by_key(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function getClientInputs() {
    getPropertyType();
    getPropertySubType();
    getCity();
    getMinPrice();
    getMaxPrice();
    getBed();
    getBath();
}

function getPropertyType() {
    property_type = document.getElementById("property_type").value;
}

function getPropertySubType() {
    property_sub_type = document.getElementById("property_sub_type").value;
}

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

const names = [{
        shortName: "ONT",
        longName: "Ontario"
    },
    {
        shortName: "CH",
        longName: "Chino"
    },
    {
        shortName: "CHH",
        longName: "Chino Hills"
    },
    {
        shortName: "COR",
        longName: "Corona"
    },
    {
        shortName: "RVSD",
        longName: "Riverside"
    },
    {
        shortName: "EVAL",
        longName: "Eastvale"
    },
    {
        shortName: "Resi",
        longName: "Residential"
    }
]

function getShortName(longName, inputArray) {
    var element = inputArray.find(element => element.longName === longName);
    console.log(element)
    var shortName = element.shortName;
    console.log(' Abbreviation is ' + shortName)
}

function getLongtName(shortName, inputArray) {
    var element = inputArray.find(element => element.shortName === shortName);
    console.log(element)
    var longName = element.longName;
    console.log(' Abbreviation is ' + longName)
}