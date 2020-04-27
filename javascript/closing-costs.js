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
        hide_phone();
    } else {
        // If Sunday
        if (day == 0) {
            hide_phone();
        } else {
            // Check if it's outside of business hours
            if (hour < 10) {
                hide_phone();
            } else {
                if (hour >= 18) {
                    hide_phone();
                } else {
                    show_phone();
                }
            }
        }
    }
}

function hide_phone() {
    show('text');
    hide('call');
    show('email');
}

function show_phone() {
    show('text');
    show('call');
    show('email');
}

///////////////////////////////////////////////////////////////////////////////
// Delay images                                                               /
///////////////////////////////////////////////////////////////////////////////

function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            var src = imgDefer[i].getAttribute('data-src');
        }
    }
}

init();

///////////////////////////////////////////////////////////////////////////////
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('cc-ss');
    }, 2000);
}

function nextSlide(id) {
    var elems = document.getElementById(id).getElementsByClassName('slide');
    elems.index = elems.index || 0;
    elems[elems.index].className = 'slide';
    elems.index = (elems.index + 1) % elems.length;
    elems[elems.index].className = 'slide showing';
}