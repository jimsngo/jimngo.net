<div class="card-header"><i class="fas fa-home"></i> Search MLS Homes</div>
<div class="home-search medium">
    <div class="card-body">
        <div class="inputTitleContainer" style="display: none;">
            <div class="inputTitle"></div>
            <select class="inputValue" id="property_type">
                <option value="Resi" selected>Residential</option>
                <option value="CONDO">Residential Income</option>
                <option value="TWNHS">Residential Leased</option>
            </select>
        </div>
        <div class="inputTitleContainer" style="display: none;">
            <div class="inputTitle"></div>
            <select class="inputValue" id="property_sub_type">
                <option value="SFR" selected>Single Family</option>
                <option value="CONDO">Condo</option>
                <option value="TWNHS">Town Home</option>
            </select>
        </div>
        <!-- Select City ------------------------------------->
        <div class="inputTitleContainer">
            <div class="inputTitle">City</div>
            <select class="inputValue" id="city" onchange="search()">
                <option value="ALTL">Alta Loma</option>
                <option value="CH">Chino</option>
                <option value="CHH">Chino Hills</option>
                <option value="CLAR">Claremont</option>
                <option value="COR">Corona</option>
                <option value="EVAL">Eastvale</option>
                <option value="FONT">Fontana</option>
                <option value="HLND">Highland</option>
                <option value="MCLR">Montclair</option>
                <option value="ONT" selected>Ontario</option>
                <option value="POM">Pomona</option>
                <option value="UPL">Upland</option>
                <option value="RCUC">Rancho Cucamonga</option>
                <option value="RLT">Rialto</option>
                <option value="RVSD">Riverside</option>
                <option value="SB">San Bernardino</option>
            </select>
        </div>
        <!-- Select Price Min -------------------------------->
        <div class="inputTitleContainer">
            <div class="inputTitle">Price Min</div>
            <select class="inputValue" id="min_price" onchange="search()">
                <option value="200000">$200K</option>
                <option value="300000">$300K</option>
                <option value="350000">$350K</option>
                <option value="400000">$400K</option>
                <option value="450000">$450K</option>
                <option value="500000" selected>$500K</option>
                <option value="550000">$550K</option>
                <option value="600000">$600K</option>
                <option value="650000">$650K</option>
                <option value="700000">$700K</option>
            </select>
        </div>
        <!-- Select Price Max -------------------------------->
        <div class="inputTitleContainer">
            <div class="inputTitle">Price Max</div>
            <select class="inputValue" id="max_price" onchange="search()">
                <option value="300000">$300K</option>
                <option value="350000">$350K</option>
                <option value="400000">$400K</option>
                <option value="450000">$450K</option>
                <option value="500000">$500K</option>
                <option value="550000">$550K</option>
                <option value="600000" selected>$600K</option>
                <option value="650000">$650K</option>
                <option value="700000">$700K</option>
                <option value="800000">$800K</option>
                <option value="1000000">$1M</option>
            </select>
        </div>
        <!-- Select Bedrooms Min ----------------------------->
        <div class="inputTitleContainer">
            <div class="inputTitle">Bedrooms Min</div>
            <select class="inputValue" id="bed" onchange="search()">
                <option value=1>1</option>
                <option value=2>2</option>
                <option value=3 selected>3</option>
                <option value=4>4</option>
                <option value=5>5</option>
            </select>
        </div>
        <!-- Select Bathrooms Min ---------------------------->
        <div class="inputTitleContainer">
            <div class="inputTitle">Bathrooms Min</div>
            <select class="inputValue" id="bath" onchange="search()">
                <option value=1>1</option>
                <option value=2 selected>2</option>
                <option value=3>3</option>
                <option value=4>4</option>
                <option value=5>5</option>
            </select>
        </div>
        <!-- Select Advance Filter --------------------------->
        <div class="inputTitleContainer" style="display: none;">
            <div class="inputTitle">More</div>
            <select class="inputValue" id="more" onchange="advanceFilter()">
                <option value="ONT" selected>Just Listed</option>
                <option value="CH">Price Change</option>
                <option value="CHH">Back On Market</option>
                <option value="COR">Foreclosure</option>
                <option value="SS">Short Sale</option>
            </select>
        </div>
        <!-- <div class="flex-center">
            <button class="widget-submit-btn" onclick="search()">Search</button>
        </div> -->
    </div>
</div>