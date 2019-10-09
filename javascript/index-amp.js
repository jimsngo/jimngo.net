///////////////////////////////////////////////////////////////////////////////
// Business Hours                                                             /
///////////////////////////////////////////////////////////////////////////////

setInterval(current_date_time, 1000);

function current_date_time() {
    var d = new Date();
    var day = d.getDay();
    var hour = d.getHours();
    // If Saturday after 4 pm
    if (day == 6 && hour >= 18) {
        open_monday();
    } else {
        // If Sunday
        if (day == 0) {
            open_tomorrow();
        } else {
            // Check if it's outside of business hours
            if (hour < 10) {
                open_soon();
            } else {
                if (hour >= 18) {
                    open_tomorrow();
                } else {
                    show_phone();
                }
            }
        }
    }
}

function open_monday() {
    show('opening_monday');
    hide('opening_tomorrow');
    hide('opening_soon');
    hide_phone();
}

function open_tomorrow() {
    hide('opening_monday');
    show('opening_tomorrow');
    hide('opening_soon');
    hide_phone();
}

function open_soon() {
    hide('opening_monday');
    hide('opening_tomorrow');
    show('opening_soon');
    hide_phone();
}

function open() {
    hide('opening_monday');
    hide('opening_tomorrow');
    hide('opening_soon');
    show_phone();
}

function hide_phone() {
    hide('phone');
    hide('mobile-phone');
    show('mobile-sms-email');
}

function show_phone() {
    show('phone');
    show('mobile-phone');
    hide('mobile-sms-email');
}

///////////////////////////////////////////////////////////////////////////////
const card_titles = document.getElementById("cards").getElementsByClassName("card-title");
const card_active = document.getElementById("cards").getElementsByClassName("card-active");
const card_contents = document.getElementById('cards').getElementsByClassName('card-content');

///////////////////////////////////////////////////////////////////////////////
// Event Listener - Header Section - Real Estate, Home Loans, and Life Agent  /
///////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < card_titles.length; i++) {
    card_titles[i].addEventListener("click", function () {
        card_active[0].className = card_active[0].className.replace(" card-active", "");
        this.className += " card-active";
        var idName = this.id;
        if (idName === 'btn1') {
            show_content('real-estate-agent');
        } else if (idName === 'btn2') {
            show_content('home-loan');
        } else {
            show_content('life-agent');
        }
    });
}

function show_content(id) {
    // Hide all elements with class name "card-content"
    var elements = document.getElementById("cards").getElementsByClassName("card-content");
    for (var j = 0; j < elements.length; j++) {
        elements[j].style.display = 'none';
        elements[j].style.height = '0px';
    }
    // Show content of clicked "card-content" element
    content = document.getElementById(id);
    content.style.display = 'block';
    content.style.height = content.scrollHeight + 'px';
    if (window.innerWidth < 451) {
        document.getElementById('cards').scrollIntoView();
    }
}

///////////////////////////////////////////////////////////////////////////////
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('real-estate-ss');
        nextSlide('home-loan-ss');
        nextSlide('life-agent-ss');
        nextSlide('service-ss');
        nextSlide('home-valuation-ss');
        nextSlide('dpa-ss');
        nextSlide('refinance-ss');
        nextSlide('sfr-ss');
        nextSlide('flyer-ss');
    }, 2000);
}

function nextSlide(id) {
    var elems = document.getElementById(id).getElementsByClassName('slide');
    elems.index = elems.index || 0;
    elems[elems.index].className = 'slide';
    elems.index = (elems.index + 1) % elems.length;
    elems[elems.index].className = 'slide showing';
}

////////////////////////////////////////////////////////////////////////////////
// Animated Collapsible - Event Listener --------------------------------------/
////////////////////////////////////////////////////////////////////////////////

function collapsible(idName, className, className2) {
    const array = document.getElementById(idName).getElementsByClassName(className);
    const contents = document.getElementById(idName).getElementsByClassName(className2);
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", function () {
            // Hide all elements with class content
            for (let j = 0; j < contents.length; j++) {
                contents[j].style.height = '0px';
            }
            if (this.classList.contains("active")) {
                this.classList.remove("active");
            } else {
                // Remove current active class
                for (let k = 0; k < array.length; k++) {
                    array[k].classList.remove("active");
                }
                // Add active class to clicked element
                this.classList.toggle("active");
                // Display content for only active element            
                var content = this.nextElementSibling;
                content.style.height = content.scrollHeight + "px";
            }
        });
    }

}

collapsible('flyers', 'collapsible', 'content');

///////////////////////////////////////////////////////////////////////////////
// Others --------------------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

// New Home Search
document.getElementById("HomeSearchBtnWidget").onclick = function (event) {
    var searchText = document.getElementById("SearchTextWidget").value;
    if (searchText === "" || typeof (searchText) == "undefined") {
        document.querySelector("#home-search-form #SearchValidationError").style.display = 'block';
        window.event.preventDefault();
    } else {
        document.querySelector("#home-search-form #SearchValidationError").style.display = 'none';
    }
};

function show(id) {
    document.getElementById(id).style.display = 'block';
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}