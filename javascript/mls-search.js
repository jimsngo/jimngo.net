const connect = {
    "url": "https://soc.crmls.org/connect/token ",
    "method": "POST",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "client_id": "JIMNGO",
        "client_secret": "2@jCM@z2",
        "scope": "ODataApi",
        "grant_type": "client_credentials"
    },
    error: function (e) {
        console.log(e);
    }
}
const select = 'PropertyType,PropertySubType,StandardStatus,ListingId,ListPrice,OriginalListPrice,PublicRemarks,DaysOnMarket,StreetNumberNumeric,StreetName,StreetSuffix,City,PostalCode,BedroomsTotal,BathroomsTotalInteger,LivingArea,Cooling,Heating,AssociationFee,YearBuilt,DaysOnMarket,MajorChangeType,SpecialListingConditions,PhotosCount';
const orderby = 'ListPrice';
const expand = 'Media($select=MediaURL)';
var listings = [],
    listingPages = [],
    listing = [],
    photoURLs = [],
    slides = [],
    shortSales = [],
    slideShow, token, property_type, property_sub_type, city, bath, bed, min_price, max_price, listingID, slideIndex;

$.ajax(connect).done(function (response) {
    token = response.access_token;
    search();
})

function search() {
    getClientInputs();
    var searchQuery = {
        "url": `https://h.api.crmls.org/RESO/OData/Property?$filter=(StandardStatus eq 'A')and(PropertyType eq '${property_type}')and(PropertySubType eq '${property_sub_type}')and(City eq '${city}')and(BathroomsTotalInteger ge ${bath})and(BedroomsTotal ge ${bed})and(ListPrice ge ${min_price})and(ListPrice le ${max_price})&$select=${select}&$orderby=${orderby}&$expand=${expand}`,
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        },
        error: function (e) {
            console.log(e);
        }
    };
    $.ajax(searchQuery).done(function (response) {
        listings = response.value;
        updateCity();
        $('#searchCity').html(`${city} Real Estate`)
        $('#listingCount').html(`${listings.length} Listings`)
        renderlistingPages(listings, 12);
    });
}

function renderlistingPages(array, chunk) {
    listingPages = [];
    $('#listing-indexed-pages').empty();
    var i = 0,
        j = 0;
    for (i = 0; i < array.length; i += chunk) {
        var myChunk = array.slice(i, i + chunk);
        listingPages.push(myChunk);
        var pageIndex = `<button onclick="displayIndexedListingPage(${j})">${j+1}</button>`
        $('#listing-indexed-pages').append(pageIndex);
        j++;
    };
    displayListings(0);
}

function displayListings(j) {
    $('#records').empty();
    listingPage = listingPages[j]; // Results of 12 listings(on selected page)
    for (var i = 0; i < listingPage.length; i++) {
        listing = listingPage[i];
        updateListing();
        listingID = listing.ListingId;
        var firstPictureForListingURL = listing.Media[0].MediaURL; // URL for first picture of the listing
        var firstPictureForListingURL = firstPictureForListingURL.slice(0, 4) + "s" + firstPictureForListingURL.slice(4);
        var html = `
            <div class='col-4 col-s-6'>
                <div class='border'>
                    <img class="photo-card" src="${firstPictureForListingURL}" id="${listingID}" onclick="singleListing('${listingID}')">
                    <div class="inputTitleContainer">
                        <div class="inputTitle font-large">$${listing.ListPrice}</div>
                        <div class="inputValue">${listing.MajorChangeType}</div>
                    </div>
                    <div>&ensp;• Listing ID: ${listingID}</div>
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

function singleListing(listingID) {
    clearTimeout(slideShow);
    $('#photo-slide').empty();
    $('#remarks').empty();
    photoURLs = [];
    document.getElementById('listing-indexed-pages').scrollIntoView();
    listing = listings.find(listing => listing.ListingId === listingID);
    var listingMedia = listing.Media;
    for (var i = 0; i < listingMedia.length; i++) {
        var photoURL = listingMedia[i].MediaURL;
        var photoURL = photoURL.slice(0, 4) + "s" + photoURL.slice(4);
        photoURLs.push(photoURL);
        var img = `
        <div class='mySlides fade'>
            <img  src="${photoURLs[i]}" class='photo-big'>  
        </div>    
        `;
        $('#photo-slide').append(img);
    };
    slides = document.getElementsByClassName('mySlides');
    slideIndex = 0;
    displayPhoto();
    var html = `
    <div class="inputTitleContainer">
        <div class="inputTitle font-large">$${listing.ListPrice}</div>
        <div class="inputValue">${listing.MajorChangeType}</div>
    </div>
    
    <p>
        <div>&ensp;• Listing ID: ${listing.ListingId}</div>
        <div>&ensp;• ${listing.SpecialListingConditions}</div>
        <div>&ensp;• ${listing.DaysOnMarket} Days On Market</div>
        <div>&ensp;• ${listing.BedroomsTotal} Beds • ${listing.BathroomsTotalInteger} Baths • ${listing.LivingArea} sqft</div>
        <div>&ensp;${listing.StreetNumberNumeric} ${listing.StreetName} ${listing.StreetSuffix}, ${listing.City} CA ${listing.PostalCode}</div>
    </p>
    <p>${listing.PublicRemarks}</p>
    `;
    $('#remarks').append(html);
}

function displayPhoto() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = 'block';
    slideShow = setTimeout(displayPhoto, 3000);
}

function updateCity() {
    if (city === 'ALTL') {
        city = 'Alta Loma';
    };
    if (city === 'CH') {
        city = 'Chino';
    };
    if (city === 'CHH') {
        city = 'Chino Hills';
    };
    if (city === 'CLAR') {
        city = 'Claremont';
    };
    if (city === 'COR') {
        city = 'Corona';
    };
    if (city === 'EVAL') {
        city = 'Eastvale';
    };
    if (city === 'FONT') {
        city = 'Fontana';
    };
    if (city === 'HLND') {
        city = 'Highland';
    };
    if (city === 'MCLR') {
        city = 'Montclair';
    };
    if (city === 'ONT') {
        city = 'Ontario';
    };
    if (city === 'POM') {
        city = 'Pomona';
    };
    if (city === 'RCUC') {
        city = 'Rancho Cucamonga';
    };
    if (city === 'RLT') {
        city = 'Rialto';
    };
    if (city === 'RVSD') {
        city = 'Riverside';
    };
    if (city === 'SB') {
        city = 'San Bernadino';
    }
    if (city === 'UPL') {
        city = 'Upland';
    };
}

function updateListing() {
    if (listing.City === 'ALTL') {
        listing.City = 'Alta Loma';
    };
    if (listing.City === 'CH') {
        listing.City = 'Chino';
    };
    if (listing.City === 'CHH') {
        listing.City = 'Chino Hills';
    };
    if (listing.City === 'CLAR') {
        listing.City = 'Claremont';
    };
    if (listing.City === 'COR') {
        listing.City = 'Corona';
    };
    if (listing.City === 'EVAL') {
        listing.City = 'Eastvale';
    };
    if (listing.City === 'FONT') {
        listing.City = 'Fontana';
    };
    if (listing.City === 'HLND') {
        listing.City = 'Highland';
    };
    if (listing.City === 'MCLR') {
        listing.City = 'Montclair';
    };
    if (listing.City === 'ONT') {
        listing.City = 'Ontario';
    };
    if (listing.City === 'POM') {
        listing.City = 'Pomona';
    };
    if (listing.City === 'RCUC') {
        listing.City = 'Rancho Cucamonga';
    };
    if (listing.City === 'RLT') {
        listing.City = 'Rialto';
    };
    if (listing.City === 'RVSD') {
        listing.City = 'Riverside';
    };
    if (listing.City === 'SB') {
        listing.City = 'San Bernardino';
    };
    if (listing.City === 'UPL') {
        listing.City = 'Upland';
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
    if (listing.StandardStatus === "A") {
        listing.StandardStatus = "Active";
    }
    if (listing.SpecialListingConditions === 'SPAY') {
        listing.SpecialListingConditions = 'Short Sale';
    }
    if (listing.SpecialListingConditions === 'STD') {
        listing.SpecialListingConditions = 'Standard';
    }
    if (listing.SpecialListingConditions === 'NOD') {
        listing.SpecialListingConditions = 'Notice of Default';
    }
}

function shortSale() {
    shortSales = listings.filter(listing => listing.SpecialListingConditions === "Short Sale");
    listingPages = [];
    renderlistingPages(shortSales, 12);
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

// function advanceFilter() {
//     var more = document.getElementById("more").value;
//     if (more === 'SS') {
//         shortSale();
//     }
// }

// const names = [{
//         shortName: "ONT",
//         longName: "Ontario"
//     },
//     {
//         shortName: "CH",
//         longName: "Chino"
//     },
//     {
//         shortName: "CHH",
//         longName: "Chino Hills"
//     },
//     {
//         shortName: "COR",
//         longName: "Corona"
//     },
//     {
//         shortName: "RVSD",
//         longName: "Riverside"
//     },
//     {
//         shortName: "EVAL",
//         longName: "Eastvale"
//     },
//     {
//         shortName: "Resi",
//         longName: "Residential"
//     }
// ]

// function getShortName(longName, inputArray) {
//     var element = inputArray.find(element => element.longName === longName);
//     console.log(element)
//     var shortName = element.shortName;
//     console.log(' Abbreviation is ' + shortName)
// }

// function getLongtName(shortName, inputArray) {
//     var element = inputArray.find(element => element.shortName === shortName);
//     console.log(element)
//     var longName = element.longName;
//     console.log(' Abbreviation is ' + longName)
// }