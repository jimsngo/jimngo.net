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
    show('text');
    hide('call');
    show('email');
}

function show_phone() {
    show('text');
    show('call');
    show('email');
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
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
// Fixed Header                                                               /
///////////////////////////////////////////////////////////////////////////////

window.onscroll = function () {
    myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

///////////////////////////////////////////////////////////////////////////////
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('hecm-ss');
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

collapsible('QA', 'collapsible', 'content');

////////////////////////////////////////////////////////////////////////////////
// PLF                                                                         /
////////////////////////////////////////////////////////////////////////////////

const plfs = [
    { age: 62, int: 3.0, factor: 0.524 },
    { age: 62, int: 3.125, factor: 0.524 },
    { age: 62, int: 3.25, factor: 0.522 },
    { age: 62, int: 3.375, factor: 0.513 },
    { age: 62, int: 3.5, factor: 0.504 },
    { age: 62, int: 3.625, factor: 0.496 },
    { age: 62, int: 3.75, factor: 0.487 },
    { age: 62, int: 3.875, factor: 0.479 },
    //
    { age: 63, int: 3.0, factor: 0.53 },
    { age: 63, int: 3.125, factor: 0.53 },
    { age: 63, int: 3.25, factor: 0.528 },
    { age: 63, int: 3.375, factor: 0.519 },
    { age: 63, int: 3.5, factor: 0.511 },
    { age: 63, int: 3.625, factor: 0.502 },
    { age: 63, int: 3.75, factor: 0.493 },
    { age: 63, int: 3.875, factor: 0.485 },
    //
    { age: 64, int: 3.0, factor: 0.536 },
    { age: 64, int: 3.125, factor: 0.536 },
    { age: 64, int: 3.25, factor: 0.534 },
    { age: 64, int: 3.375, factor: 0.526 },
    { age: 64, int: 3.5, factor: 0.517 },
    { age: 64, int: 3.625, factor: 0.508 },
    { age: 64, int: 3.75, factor: 0.5 },
    { age: 64, int: 3.875, factor: 0.492 },
    //
    { age: 65, int: 3.0, factor: 0.542 },
    { age: 65, int: 3.125, factor: 0.542 },
    { age: 65, int: 3.25, factor: 0.540 },
    { age: 65, int: 3.375, factor: 0.532 },
    { age: 65, int: 3.5, factor: 0.523 },
    { age: 65, int: 3.625, factor: 0.515 },
    { age: 65, int: 3.75, factor: 0.506 },
    { age: 65, int: 3.875, factor: 0.498 },
    //
    { age: 66, int: 3.0, factor: 0.549 },
    { age: 66, int: 3.125, factor: 0.549 },
    { age: 66, int: 3.25, factor: 0.547 },
    { age: 66, int: 3.375, factor: 0.538 },
    { age: 66, int: 3.5, factor: 0.529 },
    { age: 66, int: 3.625, factor: 0.521 },
    { age: 66, int: 3.75, factor: 0.513 },
    { age: 66, int: 3.875, factor: 0.505 },
    //
    { age: 67, int: 3.0, factor: 0.556 },
    { age: 67, int: 3.125, factor: 0.556 },
    { age: 67, int: 3.25, factor: 0.553 },
    { age: 67, int: 3.375, factor: 0.545 },
    { age: 67, int: 3.5, factor: 0.536 },
    { age: 67, int: 3.625, factor: 0.528 },
    { age: 67, int: 3.75, factor: 0.520 },
    { age: 67, int: 3.875, factor: 0.512 },
    //
    { age: 68, int: 3.0, factor: 0.562 },
    { age: 68, int: 3.125, factor: 0.562 },
    { age: 68, int: 3.25, factor: 0.560 },
    { age: 68, int: 3.375, factor: 0.551 },
    { age: 68, int: 3.5, factor: 0.543 },
    { age: 68, int: 3.625, factor: 0.535 },
    { age: 68, int: 3.75, factor: 0.527 },
    { age: 68, int: 3.875, factor: 0.519 },
    //
    { age: 69, int: 3.0, factor: 0.569 },
    { age: 69, int: 3.125, factor: 0.569 },
    { age: 69, int: 3.25, factor: 0.566 },
    { age: 69, int: 3.375, factor: 0.558 },
    { age: 69, int: 3.5, factor: 0.550 },
    { age: 69, int: 3.625, factor: 0.542 },
    { age: 69, int: 3.75, factor: 0.534 },
    { age: 69, int: 3.875, factor: 0.526 },
    //
    { age: 70, int: 3.0, factor: 0.576 },
    { age: 70, int: 3.125, factor: 0.576 },
    { age: 70, int: 3.25, factor: 0.570 },
    { age: 70, int: 3.375, factor: 0.562 },
    { age: 70, int: 3.5, factor: 0.554 },
    { age: 70, int: 3.625, factor: 0.546 },
    { age: 70, int: 3.75, factor: 0.538 },
    { age: 70, int: 3.875, factor: 0.530 },
    //
    { age: 71, int: 3.0, factor: 0.583 },
    { age: 71, int: 3.125, factor: 0.578 },
    { age: 71, int: 3.25, factor: 0.570 },
    { age: 71, int: 3.375, factor: 0.562 },
    { age: 71, int: 3.5, factor: 0.554 },
    { age: 71, int: 3.625, factor: 0.546 },
    { age: 71, int: 3.75, factor: 0.538 },
    { age: 71, int: 3.875, factor: 0.530 },
    //
    { age: 72, int: 3.0, factor: 0.588 },
    { age: 72, int: 3.125, factor: 0.580 },
    { age: 72, int: 3.25, factor: 0.572 },
    { age: 72, int: 3.375, factor: 0.563 },
    { age: 72, int: 3.5, factor: 0.555 },
    { age: 72, int: 3.625, factor: 0.547 },
    { age: 72, int: 3.75, factor: 0.539 },
    { age: 72, int: 3.875, factor: 0.531 },
    //
    { age: 73, int: 3.0, factor: 0.595 },
    { age: 73, int: 3.125, factor: 0.587 },
    { age: 73, int: 3.25, factor: 0.579 },
    { age: 73, int: 3.375, factor: 0.570 },
    { age: 73, int: 3.5, factor: 0.562 },
    { age: 73, int: 3.625, factor: 0.555 },
    { age: 73, int: 3.75, factor: 0.547 },
    { age: 73, int: 3.875, factor: 0.539 },
    //
    { age: 74, int: 3.0, factor: 0.602 },
    { age: 74, int: 3.125, factor: 0.593 },
    { age: 74, int: 3.25, factor: 0.585 },
    { age: 74, int: 3.375, factor: 0.577 },
    { age: 74, int: 3.5, factor: 0.569 },
    { age: 74, int: 3.625, factor: 0.561 },
    { age: 74, int: 3.75, factor: 0.554 },
    { age: 74, int: 3.875, factor: 0.546 },
    //
    { age: 75, int: 3.0, factor: 0.609 },
    { age: 75, int: 3.125, factor: 0.601 },
    { age: 75, int: 3.25, factor: 0.593 },
    { age: 75, int: 3.375, factor: 0.585 },
    { age: 75, int: 3.5, factor: 0.577 },
    { age: 75, int: 3.625, factor: 0.569 },
    { age: 75, int: 3.75, factor: 0.562 },
    { age: 75, int: 3.875, factor: 0.555 },
    //
    { age: 76, int: 3.0, factor: 0.614 },
    { age: 76, int: 3.125, factor: 0.606 },
    { age: 76, int: 3.25, factor: 0.598 },
    { age: 76, int: 3.375, factor: 0.590 },
    { age: 76, int: 3.5, factor: 0.582 },
    { age: 76, int: 3.625, factor: 0.575 },
    { age: 76, int: 3.75, factor: 0.567 },
    { age: 76, int: 3.875, factor: 0.560 },
    //
    { age: 77, int: 3.0, factor: 0.621 },
    { age: 77, int: 3.125, factor: 0.613 },
    { age: 77, int: 3.25, factor: 0.606 },
    { age: 77, int: 3.375, factor: 0.598 },
    { age: 77, int: 3.5, factor: 0.591 },
    { age: 77, int: 3.625, factor: 0.583 },
    { age: 77, int: 3.75, factor: 0.576 },
    { age: 77, int: 3.875, factor: 0.569 },
    //
    { age: 78, int: 3.0, factor: 0.629 },
    { age: 78, int: 3.125, factor: 0.621 },
    { age: 78, int: 3.25, factor: 0.614 },
    { age: 78, int: 3.375, factor: 0.606 },
    { age: 78, int: 3.5, factor: 0.599 },
    { age: 78, int: 3.625, factor: 0.592 },
    { age: 78, int: 3.75, factor: 0.585 },
    { age: 78, int: 3.875, factor: 0.578 },
    //
    { age: 79, int: 3.0, factor: 0.633 },
    { age: 79, int: 3.125, factor: 0.626 },
    { age: 79, int: 3.25, factor: 0.618 },
    { age: 79, int: 3.375, factor: 0.611 },
    { age: 79, int: 3.5, factor: 0.604 },
    { age: 79, int: 3.625, factor: 0.597 },
    { age: 79, int: 3.75, factor: 0.589 },
    { age: 79, int: 3.875, factor: 0.582 },
    //
    { age: 80, int: 3.0, factor: 0.642 },
    { age: 80, int: 3.125, factor: 0.634 },
    { age: 80, int: 3.25, factor: 0.627 },
    { age: 80, int: 3.375, factor: 0.620 },
    { age: 80, int: 3.5, factor: 0.613 },
    { age: 80, int: 3.625, factor: 0.606 },
    { age: 80, int: 3.75, factor: 0.599 },
    { age: 80, int: 3.875, factor: 0.592 },
    // 4% Interest
    { age: 62, int: 4.0, factor: 0.470 },
    { age: 62, int: 4.125, factor: 0.462 },
    { age: 62, int: 4.25, factor: 0.454 },
    { age: 62, int: 4.375, factor: 0.447 },
    { age: 62, int: 4.5, factor: 0.439 },
    { age: 62, int: 4.625, factor: 0.431 },
    { age: 62, int: 4.75, factor: 0.424 },
    { age: 62, int: 4.875, factor: 0.417 },
    //
    { age: 63, int: 4.0, factor: 0.477 },
    { age: 63, int: 4.125, factor: 0.469 },
    { age: 63, int: 4.25, factor: 0.461 },
    { age: 63, int: 4.375, factor: 0.453 },
    { age: 63, int: 4.5, factor: 0.446 },
    { age: 63, int: 4.625, factor: 0.438 },
    { age: 63, int: 4.75, factor: 0.431 },
    { age: 63, int: 4.875, factor: 0.423 },
    //
    { age: 64, int: 4.0, factor: 0.483 },
    { age: 64, int: 4.125, factor: 0.475 },
    { age: 64, int: 4.25, factor: 0.468 },
    { age: 64, int: 4.375, factor: 0.460 },
    { age: 64, int: 4.5, factor: 0.452 },
    { age: 64, int: 4.625, factor: 0.445 },
    { age: 64, int: 4.75, factor: 0.438 },
    { age: 64, int: 4.875, factor: 0.430 },
    //
    { age: 65, int: 4.0, factor: 0.490 },
    { age: 65, int: 4.125, factor: 0.482 },
    { age: 65, int: 4.25, factor: 0.474 },
    { age: 65, int: 4.375, factor: 0.467 },
    { age: 65, int: 4.5, factor: 0.459 },
    { age: 65, int: 4.625, factor: 0.452 },
    { age: 65, int: 4.75, factor: 0.444 },
    { age: 65, int: 4.875, factor: 0.437 },
    //
    { age: 66, int: 4.0, factor: 0.497 },
    { age: 66, int: 4.125, factor: 0.489 },
    { age: 66, int: 4.25, factor: 0.481 },
    { age: 66, int: 4.375, factor: 0.474 },
    { age: 66, int: 4.5, factor: 0.466 },
    { age: 66, int: 4.625, factor: 0.459 },
    { age: 66, int: 4.75, factor: 0.452 },
    { age: 66, int: 4.875, factor: 0.445 },
    //
    { age: 67, int: 4.0, factor: 0.504 },
    { age: 67, int: 4.125, factor: 0.496 },
    { age: 67, int: 4.25, factor: 0.488 },
    { age: 67, int: 4.375, factor: 0.481 },
    { age: 67, int: 4.5, factor: 0.473 },
    { age: 67, int: 4.625, factor: 0.466 },
    { age: 67, int: 4.75, factor: 0.459 },
    { age: 67, int: 4.875, factor: 0.452 },
    //
    { age: 68, int: 4.0, factor: 0.511 },
    { age: 68, int: 4.125, factor: 0.503 },
    { age: 68, int: 4.25, factor: 0.496 },
    { age: 68, int: 4.375, factor: 0.488 },
    { age: 68, int: 4.5, factor: 0.481 },
    { age: 68, int: 4.625, factor: 0.474 },
    { age: 68, int: 4.75, factor: 0.467 },
    { age: 68, int: 4.875, factor: 0.460 },
    //
    { age: 69, int: 4.0, factor: 0.518 },
    { age: 69, int: 4.125, factor: 0.510 },
    { age: 69, int: 4.25, factor: 0.503 },
    { age: 69, int: 4.375, factor: 0.496 },
    { age: 69, int: 4.5, factor: 0.488 },
    { age: 69, int: 4.625, factor: 0.481 },
    { age: 69, int: 4.75, factor: 0.474 },
    { age: 69, int: 4.875, factor: 0.467 },
    //
    { age: 70, int: 4.0, factor: 0.522 },
    { age: 70, int: 4.125, factor: 0.515 },
    { age: 70, int: 4.25, factor: 0.507 },
    { age: 70, int: 4.375, factor: 0.500 },
    { age: 70, int: 4.5, factor: 0.493 },
    { age: 70, int: 4.625, factor: 0.486 },
    { age: 70, int: 4.75, factor: 0.479 },
    { age: 70, int: 4.875, factor: 0.472 },
    //
    { age: 71, int: 4.0, factor: 0.522 },
    { age: 71, int: 4.125, factor: 0.515 },
    { age: 71, int: 4.25, factor: 0.507 },
    { age: 71, int: 4.375, factor: 0.500 },
    { age: 71, int: 4.5, factor: 0.493 },
    { age: 71, int: 4.625, factor: 0.486 },
    { age: 71, int: 4.75, factor: 0.479 },
    { age: 71, int: 4.875, factor: 0.472 },
    //
    { age: 72, int: 4.0, factor: 0.524 },
    { age: 72, int: 4.125, factor: 0.516 },
    { age: 72, int: 4.25, factor: 0.509 },
    { age: 72, int: 4.375, factor: 0.502 },
    { age: 72, int: 4.5, factor: 0.494 },
    { age: 72, int: 4.625, factor: 0.487 },
    { age: 72, int: 4.75, factor: 0.480 },
    { age: 72, int: 4.875, factor: 0.474 },
    //
    { age: 73, int: 4.0, factor: 0.532 },
    { age: 73, int: 4.125, factor: 0.524 },
    { age: 73, int: 4.25, factor: 0.517 },
    { age: 73, int: 4.375, factor: 0.510 },
    { age: 73, int: 4.5, factor: 0.503 },
    { age: 73, int: 4.625, factor: 0.496 },
    { age: 73, int: 4.75, factor: 0.489 },
    { age: 73, int: 4.875, factor: 0.482 },
    //
    { age: 74, int: 4.0, factor: 0.539 },
    { age: 74, int: 4.125, factor: 0.531 },
    { age: 74, int: 4.25, factor: 0.524 },
    { age: 74, int: 4.375, factor: 0.517 },
    { age: 74, int: 4.5, factor: 0.510 },
    { age: 74, int: 4.625, factor: 0.503 },
    { age: 74, int: 4.75, factor: 0.496 },
    { age: 74, int: 4.875, factor: 0.490 },
    //
    { age: 75, int: 4.0, factor: 0.547 },
    { age: 75, int: 4.125, factor: 0.540 },
    { age: 75, int: 4.25, factor: 0.533 },
    { age: 75, int: 4.375, factor: 0.526 },
    { age: 75, int: 4.5, factor: 0.519 },
    { age: 75, int: 4.625, factor: 0.512 },
    { age: 75, int: 4.75, factor: 0.505 },
    { age: 75, int: 4.875, factor: 0.499 },
    //
    { age: 76, int: 4.0, factor: 0.553 },
    { age: 76, int: 4.125, factor: 0.546 },
    { age: 76, int: 4.25, factor: 0.539 },
    { age: 76, int: 4.375, factor: 0.532 },
    { age: 76, int: 4.5, factor: 0.525 },
    { age: 76, int: 4.625, factor: 0.518 },
    { age: 76, int: 4.75, factor: 0.511 },
    { age: 76, int: 4.875, factor: 0.505 },
    //
    { age: 77, int: 4.0, factor: 0.562 },
    { age: 77, int: 4.125, factor: 0.555 },
    { age: 77, int: 4.25, factor: 0.548 },
    { age: 77, int: 4.375, factor: 0.541 },
    { age: 77, int: 4.5, factor: 0.534 },
    { age: 77, int: 4.625, factor: 0.527 },
    { age: 77, int: 4.75, factor: 0.521 },
    { age: 77, int: 4.875, factor: 0.514 },
    //
    { age: 78, int: 4.0, factor: 0.571 },
    { age: 78, int: 4.125, factor: 0.564 },
    { age: 78, int: 4.25, factor: 0.557 },
    { age: 78, int: 4.375, factor: 0.550 },
    { age: 78, int: 4.5, factor: 0.544 },
    { age: 78, int: 4.625, factor: 0.537 },
    { age: 78, int: 4.75, factor: 0.531 },
    { age: 78, int: 4.875, factor: 0.524 },
    //
    { age: 79, int: 4.0, factor: 0.576 },
    { age: 79, int: 4.125, factor: 0.569 },
    { age: 79, int: 4.25, factor: 0.562 },
    { age: 79, int: 4.375, factor: 0.555 },
    { age: 79, int: 4.5, factor: 0.549 },
    { age: 79, int: 4.625, factor: 0.542 },
    { age: 79, int: 4.75, factor: 0.536 },
    { age: 79, int: 4.875, factor: 0.530 },
    //
    { age: 80, int: 4.0, factor: 0.585 },
    { age: 80, int: 4.125, factor: 0.578 },
    { age: 80, int: 4.25, factor: 0.572 },
    { age: 80, int: 4.375, factor: 0.565 },
    { age: 80, int: 4.5, factor: 0.559 },
    { age: 80, int: 4.625, factor: 0.553 },
    { age: 80, int: 4.75, factor: 0.546 },
    { age: 80, int: 4.875, factor: 0.540 },
    // 5% Interest
    { age: 62, int: 5.0, factor: 0.410 },
    { age: 62, int: 5.125, factor: 0.403 },
    { age: 62, int: 5.25, factor: 0.396 },
    { age: 62, int: 5.375, factor: 0.389 },
    { age: 62, int: 5.5, factor: 0.382 },
    { age: 62, int: 5.625, factor: 0.376 },
    { age: 62, int: 5.75, factor: 0.370 },
    { age: 62, int: 5.875, factor: 0.363 },
    //
    { age: 63, int: 5.0, factor: 0.416 },
    { age: 63, int: 5.125, factor: 0.409 },
    { age: 63, int: 5.25, factor: 0.403 },
    { age: 63, int: 5.375, factor: 0.396 },
    { age: 63, int: 5.5, factor: 0.389 },
    { age: 63, int: 5.625, factor: 0.383 },
    { age: 63, int: 5.75, factor: 0.376 },
    { age: 63, int: 5.875, factor: 0.370 },
    //
    { age: 64, int: 5.0, factor: 0.423 },
    { age: 64, int: 5.125, factor: 0.416 },
    { age: 64, int: 5.25, factor: 0.410 },
    { age: 64, int: 5.375, factor: 0.403 },
    { age: 64, int: 5.5, factor: 0.396 },
    { age: 64, int: 5.625, factor: 0.390 },
    { age: 64, int: 5.75, factor: 0.384 },
    { age: 64, int: 5.875, factor: 0.377 },
    //
    { age: 65, int: 5.0, factor: 0.430 },
    { age: 65, int: 5.125, factor: 0.423 },
    { age: 65, int: 5.25, factor: 0.417 },
    { age: 65, int: 5.375, factor: 0.410 },
    { age: 65, int: 5.5, factor: 0.403 },
    { age: 65, int: 5.625, factor: 0.397 },
    { age: 65, int: 5.75, factor: 0.391 },
    { age: 65, int: 5.875, factor: 0.384 },
    //
    { age: 66, int: 5.0, factor: 0.438 },
    { age: 66, int: 5.125, factor: 0.431 },
    { age: 66, int: 5.25, factor: 0.424 },
    { age: 66, int: 5.375, factor: 0.417 },
    { age: 66, int: 5.5, factor: 0.411 },
    { age: 66, int: 5.625, factor: 0.405 },
    { age: 66, int: 5.75, factor: 0.398 },
    { age: 66, int: 5.875, factor: 0.392 },
    //
    { age: 67, int: 5.0, factor: 0.445 },
    { age: 67, int: 5.125, factor: 0.438 },
    { age: 67, int: 5.25, factor: 0.432 },
    { age: 67, int: 5.375, factor: 0.425 },
    { age: 67, int: 5.5, factor: 0.419 },
    { age: 67, int: 5.625, factor: 0.412 },
    { age: 67, int: 5.75, factor: 0.406 },
    { age: 67, int: 5.875, factor: 0.400 },
    //
    { age: 68, int: 5.0, factor: 0.453 },
    { age: 68, int: 5.125, factor: 0.446 },
    { age: 68, int: 5.25, factor: 0.439 },
    { age: 68, int: 5.375, factor: 0.433 },
    { age: 68, int: 5.5, factor: 0.426 },
    { age: 68, int: 5.625, factor: 0.420 },
    { age: 68, int: 5.75, factor: 0.414 },
    { age: 68, int: 5.875, factor: 0.408 },
    //
    { age: 69, int: 5.0, factor: 0.461 },
    { age: 69, int: 5.125, factor: 0.454 },
    { age: 69, int: 5.25, factor: 0.447 },
    { age: 69, int: 5.375, factor: 0.441 },
    { age: 69, int: 5.5, factor: 0.434 },
    { age: 69, int: 5.625, factor: 0.428 },
    { age: 69, int: 5.75, factor: 0.422 },
    { age: 69, int: 5.875, factor: 0.416 },
    //
    { age: 70, int: 5.0, factor: 0.465 },
    { age: 70, int: 5.125, factor: 0.458 },
    { age: 70, int: 5.25, factor: 0.452 },
    { age: 70, int: 5.375, factor: 0.445 },
    { age: 70, int: 5.5, factor: 0.439 },
    { age: 70, int: 5.625, factor: 0.433 },
    { age: 70, int: 5.75, factor: 0.427 },
    { age: 70, int: 5.875, factor: 0.420 },
    //
    { age: 71, int: 5.0, factor: 0.465 },
    { age: 71, int: 5.125, factor: 0.458 },
    { age: 71, int: 5.25, factor: 0.452 },
    { age: 71, int: 5.375, factor: 0.445 },
    { age: 71, int: 5.5, factor: 0.439 },
    { age: 71, int: 5.625, factor: 0.433 },
    { age: 71, int: 5.75, factor: 0.427 },
    { age: 71, int: 5.875, factor: 0.421 },
    //
    { age: 72, int: 5.0, factor: 0.467 },
    { age: 72, int: 5.125, factor: 0.460 },
    { age: 72, int: 5.25, factor: 0.454 },
    { age: 72, int: 5.375, factor: 0.447 },
    { age: 72, int: 5.5, factor: 0.441 },
    { age: 72, int: 5.625, factor: 0.435 },
    { age: 72, int: 5.75, factor: 0.428 },
    { age: 72, int: 5.875, factor: 0.422 },
    //
    { age: 73, int: 5.0, factor: 0.475 },
    { age: 73, int: 5.125, factor: 0.469 },
    { age: 73, int: 5.25, factor: 0.462 },
    { age: 73, int: 5.375, factor: 0.456 },
    { age: 73, int: 5.5, factor: 0.449 },
    { age: 73, int: 5.625, factor: 0.443 },
    { age: 73, int: 5.75, factor: 0.437 },
    { age: 73, int: 5.875, factor: 0.431 },
    //
    { age: 74, int: 5.0, factor: 0.483 },
    { age: 74, int: 5.125, factor: 0.477 },
    { age: 74, int: 5.25, factor: 0.470 },
    { age: 74, int: 5.375, factor: 0.464 },
    { age: 74, int: 5.5, factor: 0.458 },
    { age: 74, int: 5.625, factor: 0.451 },
    { age: 74, int: 5.75, factor: 0.445 },
    { age: 74, int: 5.875, factor: 0.439 },
    //
    { age: 75, int: 5.0, factor: 0.492 },
    { age: 75, int: 5.125, factor: 0.486 },
    { age: 75, int: 5.25, factor: 0.479 },
    { age: 75, int: 5.375, factor: 0.473 },
    { age: 75, int: 5.5, factor: 0.467 },
    { age: 75, int: 5.625, factor: 0.461 },
    { age: 75, int: 5.75, factor: 0.455 },
    { age: 75, int: 5.875, factor: 0.449 },
    //
    { age: 76, int: 5.0, factor: 0.498 },
    { age: 76, int: 5.125, factor: 0.492 },
    { age: 76, int: 5.25, factor: 0.486 },
    { age: 76, int: 5.375, factor: 0.479 },
    { age: 76, int: 5.5, factor: 0.473 },
    { age: 76, int: 5.625, factor: 0.467 },
    { age: 76, int: 5.75, factor: 0.461 },
    { age: 76, int: 5.875, factor: 0.455 },
    //
    { age: 77, int: 5.0, factor: 0.508 },
    { age: 77, int: 5.125, factor: 0.502 },
    { age: 77, int: 5.25, factor: 0.495 },
    { age: 77, int: 5.375, factor: 0.489 },
    { age: 77, int: 5.5, factor: 0.483 },
    { age: 77, int: 5.625, factor: 0.477 },
    { age: 77, int: 5.75, factor: 0.471 },
    { age: 77, int: 5.875, factor: 0.466 },
    //
    { age: 78, int: 5.0, factor: 0.518 },
    { age: 78, int: 5.125, factor: 0.512 },
    { age: 78, int: 5.25, factor: 0.506 },
    { age: 78, int: 5.375, factor: 0.500 },
    { age: 78, int: 5.5, factor: 0.494 },
    { age: 78, int: 5.625, factor: 0.488 },
    { age: 78, int: 5.75, factor: 0.482 },
    { age: 78, int: 5.875, factor: 0.476 },
    //
    { age: 79, int: 5.0, factor: 0.523 },
    { age: 79, int: 5.125, factor: 0.517 },
    { age: 79, int: 5.25, factor: 0.511 },
    { age: 79, int: 5.375, factor: 0.505 },
    { age: 79, int: 5.5, factor: 0.499 },
    { age: 79, int: 5.625, factor: 0.494 },
    { age: 79, int: 5.75, factor: 0.488 },
    { age: 79, int: 5.875, factor: 0.482 },
    //
    { age: 80, int: 5.0, factor: 0.534 },
    { age: 80, int: 5.125, factor: 0.528 },
    { age: 80, int: 5.25, factor: 0.522 },
    { age: 80, int: 5.375, factor: 0.516 },
    { age: 80, int: 5.5, factor: 0.510 },
    { age: 80, int: 5.625, factor: 0.505 },
    { age: 80, int: 5.75, factor: 0.499 },
    { age: 80, int: 5.875, factor: 0.493 },
    // 6% Interest
    { age: 62, int: 6.0, factor: 0.357 },
    { age: 62, int: 6.125, factor: 0.351 },
    { age: 62, int: 6.25, factor: 0.345 },
    { age: 62, int: 6.375, factor: 0.339 },
    { age: 62, int: 6.5, factor: 0.334 },
    { age: 62, int: 6.625, factor: 0.328 },
    { age: 62, int: 6.75, factor: 0.322 },
    { age: 62, int: 6.875, factor: 0.317 },
    //
    { age: 63, int: 6.0, factor: 0.364 },
    { age: 63, int: 6.125, factor: 0.358 },
    { age: 63, int: 6.25, factor: 0.352 },
    { age: 63, int: 6.375, factor: 0.346 },
    { age: 63, int: 6.5, factor: 0.341 },
    { age: 63, int: 6.625, factor: 0.335 },
    { age: 63, int: 6.75, factor: 0.329 },
    { age: 63, int: 6.875, factor: 0.324 },
    //
    { age: 64, int: 6.0, factor: 0.371 },
    { age: 64, int: 6.125, factor: 0.365 },
    { age: 64, int: 6.25, factor: 0.359 },
    { age: 64, int: 6.375, factor: 0.353 },
    { age: 64, int: 6.5, factor: 0.348 },
    { age: 64, int: 6.625, factor: 0.342 },
    { age: 64, int: 6.75, factor: 0.337 },
    { age: 64, int: 6.875, factor: 0.331 },
    //
    { age: 65, int: 6.0, factor: 0.378 },
    { age: 65, int: 6.125, factor: 0.372 },
    { age: 65, int: 6.25, factor: 0.366 },
    { age: 65, int: 6.375, factor: 0.361 },
    { age: 65, int: 6.5, factor: 0.355 },
    { age: 65, int: 6.625, factor: 0.349 },
    { age: 65, int: 6.75, factor: 0.344 },
    { age: 65, int: 6.875, factor: 0.338 },
    //
    { age: 66, int: 6.0, factor: 0.386 },
    { age: 66, int: 6.125, factor: 0.380 },
    { age: 66, int: 6.25, factor: 0.374 },
    { age: 66, int: 6.375, factor: 0.368 },
    { age: 66, int: 6.5, factor: 0.363 },
    { age: 66, int: 6.625, factor: 0.357 },
    { age: 66, int: 6.75, factor: 0.352 },
    { age: 66, int: 6.875, factor: 0.346 },
    //
    { age: 67, int: 6.0, factor: 0.394 },
    { age: 67, int: 6.125, factor: 0.388 },
    { age: 67, int: 6.25, factor: 0.382 },
    { age: 67, int: 6.375, factor: 0.376 },
    { age: 67, int: 6.5, factor: 0.370 },
    { age: 67, int: 6.625, factor: 0.365 },
    { age: 67, int: 6.75, factor: 0.359 },
    { age: 67, int: 6.875, factor: 0.354 },
    //
    { age: 68, int: 6.0, factor: 0.402 },
    { age: 68, int: 6.125, factor: 0.396 },
    { age: 68, int: 6.25, factor: 0.390 },
    { age: 68, int: 6.375, factor: 0.384 },
    { age: 68, int: 6.5, factor: 0.379 },
    { age: 68, int: 6.625, factor: 0.373 },
    { age: 68, int: 6.75, factor: 0.368 },
    { age: 68, int: 6.875, factor: 0.362 },
    //
    { age: 69, int: 6.0, factor: 0.410 },
    { age: 69, int: 6.125, factor: 0.404 },
    { age: 69, int: 6.25, factor: 0.398 },
    { age: 69, int: 6.375, factor: 0.392 },
    { age: 69, int: 6.5, factor: 0.387 },
    { age: 69, int: 6.625, factor: 0.381 },
    { age: 69, int: 6.75, factor: 0.376 },
    { age: 69, int: 6.875, factor: 0.370 },
    //
    { age: 70, int: 6.0, factor: 0.415 },
    { age: 70, int: 6.125, factor: 0.409 },
    { age: 70, int: 6.25, factor: 0.403 },
    { age: 70, int: 6.375, factor: 0.397 },
    { age: 70, int: 6.5, factor: 0.392 },
    { age: 70, int: 6.625, factor: 0.386 },
    { age: 70, int: 6.75, factor: 0.381 },
    { age: 70, int: 6.875, factor: 0.375 },
    //
    { age: 71, int: 6.0, factor: 0.415 },
    { age: 71, int: 6.125, factor: 0.409 },
    { age: 71, int: 6.25, factor: 0.403 },
    { age: 71, int: 6.375, factor: 0.397 },
    { age: 71, int: 6.5, factor: 0.392 },
    { age: 71, int: 6.625, factor: 0.386 },
    { age: 71, int: 6.75, factor: 0.381 },
    { age: 71, int: 6.875, factor: 0.375 },
    //
    { age: 72, int: 6.0, factor: 0.416 },
    { age: 72, int: 6.125, factor: 0.411 },
    { age: 72, int: 6.25, factor: 0.405 },
    { age: 72, int: 6.375, factor: 0.399 },
    { age: 72, int: 6.5, factor: 0.393 },
    { age: 72, int: 6.625, factor: 0.388 },
    { age: 72, int: 6.75, factor: 0.383 },
    { age: 72, int: 6.875, factor: 0.377 },
    //
    { age: 73, int: 6.0, factor: 0.425 },
    { age: 73, int: 6.125, factor: 0.419 },
    { age: 73, int: 6.25, factor: 0.414 },
    { age: 73, int: 6.375, factor: 0.408 },
    { age: 73, int: 6.5, factor: 0.402 },
    { age: 73, int: 6.625, factor: 0.397 },
    { age: 73, int: 6.75, factor: 0.392 },
    { age: 73, int: 6.875, factor: 0.386 },
    //
    { age: 74, int: 6.0, factor: 0.434 },
    { age: 74, int: 6.125, factor: 0.428 },
    { age: 74, int: 6.25, factor: 0.422 },
    { age: 74, int: 6.375, factor: 0.416 },
    { age: 74, int: 6.5, factor: 0.411 },
    { age: 74, int: 6.625, factor: 0.405 },
    { age: 74, int: 6.75, factor: 0.400 },
    { age: 74, int: 6.875, factor: 0.395 },
    //
    { age: 75, int: 6.0, factor: 0.443 },
    { age: 75, int: 6.125, factor: 0.438 },
    { age: 75, int: 6.25, factor: 0.432 },
    { age: 75, int: 6.375, factor: 0.426 },
    { age: 75, int: 6.5, factor: 0.421 },
    { age: 75, int: 6.625, factor: 0.415 },
    { age: 75, int: 6.75, factor: 0.410 },
    { age: 75, int: 6.875, factor: 0.405 },
    //
    { age: 76, int: 6.0, factor: 0.450 },
    { age: 76, int: 6.125, factor: 0.444 },
    { age: 76, int: 6.25, factor: 0.438 },
    { age: 76, int: 6.375, factor: 0.433 },
    { age: 76, int: 6.5, factor: 0.427 },
    { age: 76, int: 6.625, factor: 0.422 },
    { age: 76, int: 6.75, factor: 0.417 },
    { age: 76, int: 6.875, factor: 0.411 },
    //
    { age: 77, int: 6.0, factor: 0.460 },
    { age: 77, int: 6.125, factor: 0.454 },
    { age: 77, int: 6.25, factor: 0.449 },
    { age: 77, int: 6.375, factor: 0.443 },
    { age: 77, int: 6.5, factor: 0.438 },
    { age: 77, int: 6.625, factor: 0.433 },
    { age: 77, int: 6.75, factor: 0.427 },
    { age: 77, int: 6.875, factor: 0.422 },
    //
    { age: 78, int: 6.0, factor: 0.471 },
    { age: 78, int: 6.125, factor: 0.465 },
    { age: 78, int: 6.25, factor: 0.459 },
    { age: 78, int: 6.375, factor: 0.454 },
    { age: 78, int: 6.5, factor: 0.449 },
    { age: 78, int: 6.625, factor: 0.443 },
    { age: 78, int: 6.75, factor: 0.438 },
    { age: 78, int: 6.875, factor: 0.433 },
    //
    { age: 79, int: 6.0, factor: 0.477 },
    { age: 79, int: 6.125, factor: 0.471 },
    { age: 79, int: 6.25, factor: 0.466 },
    { age: 79, int: 6.375, factor: 0.460 },
    { age: 79, int: 6.5, factor: 0.455 },
    { age: 79, int: 6.625, factor: 0.450 },
    { age: 79, int: 6.75, factor: 0.444 },
    { age: 79, int: 6.875, factor: 0.439 },
    //
    { age: 80, int: 6.0, factor: 0.488 },
    { age: 80, int: 6.125, factor: 0.482 },
    { age: 80, int: 6.25, factor: 0.477 },
    { age: 80, int: 6.375, factor: 0.472 },
    { age: 80, int: 6.5, factor: 0.466 },
    { age: 80, int: 6.625, factor: 0.461 },
    { age: 80, int: 6.75, factor: 0.456 },
    { age: 80, int: 6.875, factor: 0.451 },
    // 7% Interest
    { age: 62, int: 7.0, factor: 0.312 },
    { age: 62, int: 7.125, factor: 0.307 },
    { age: 62, int: 7.25, factor: 0.301 },
    { age: 62, int: 7.375, factor: 0.296 },
    { age: 62, int: 7.5, factor: 0.291 },
    { age: 62, int: 7.625, factor: 0.287 },
    { age: 62, int: 7.75, factor: 0.282 },
    { age: 62, int: 7.875, factor: 0.277 },
    //
    { age: 63, int: 7.0, factor: 0.319 },
    { age: 63, int: 7.125, factor: 0.313 },
    { age: 63, int: 7.25, factor: 0.308 },
    { age: 63, int: 7.375, factor: 0.303 },
    { age: 63, int: 7.5, factor: 0.298 },
    { age: 63, int: 7.625, factor: 0.293 },
    { age: 63, int: 7.75, factor: 0.289 },
    { age: 63, int: 7.875, factor: 0.284 },
    //
    { age: 64, int: 7.0, factor: 0.326 },
    { age: 64, int: 7.125, factor: 0.321 },
    { age: 64, int: 7.25, factor: 0.316 },
    { age: 64, int: 7.375, factor: 0.310 },
    { age: 64, int: 7.5, factor: 0.305 },
    { age: 64, int: 7.625, factor: 0.301 },
    { age: 64, int: 7.75, factor: 0.296 },
    { age: 64, int: 7.875, factor: 0.291 },
    //
    { age: 65, int: 7.0, factor: 0.333 },
    { age: 65, int: 7.125, factor: 0.328 },
    { age: 65, int: 7.25, factor: 0.323 },
    { age: 65, int: 7.375, factor: 0.318 },
    { age: 65, int: 7.5, factor: 0.313 },
    { age: 65, int: 7.625, factor: 0.308 },
    { age: 65, int: 7.75, factor: 0.303 },
    { age: 65, int: 7.875, factor: 0.298 },
    //
    { age: 66, int: 7.0, factor: 0.341 },
    { age: 66, int: 7.125, factor: 0.336 },
    { age: 66, int: 7.25, factor: 0.330 },
    { age: 66, int: 7.375, factor: 0.325 },
    { age: 66, int: 7.5, factor: 0.320 },
    { age: 66, int: 7.625, factor: 0.316 },
    { age: 66, int: 7.75, factor: 0.311 },
    { age: 66, int: 7.875, factor: 0.306 },
    //
    { age: 67, int: 7.0, factor: 0.349 },
    { age: 67, int: 7.125, factor: 0.343 },
    { age: 67, int: 7.25, factor: 0.338 },
    { age: 67, int: 7.375, factor: 0.333 },
    { age: 67, int: 7.5, factor: 0.328 },
    { age: 67, int: 7.625, factor: 0.323 },
    { age: 67, int: 7.75, factor: 0.319 },
    { age: 67, int: 7.875, factor: 0.314 },
    //
    { age: 68, int: 7.0, factor: 0.357 },
    { age: 68, int: 7.125, factor: 0.352 },
    { age: 68, int: 7.25, factor: 0.346 },
    { age: 68, int: 7.375, factor: 0.341 },
    { age: 68, int: 7.5, factor: 0.336 },
    { age: 68, int: 7.625, factor: 0.332 },
    { age: 68, int: 7.75, factor: 0.327 },
    { age: 68, int: 7.875, factor: 0.322 },
    //
    { age: 69, int: 7.0, factor: 0.365 },
    { age: 69, int: 7.125, factor: 0.360 },
    { age: 69, int: 7.25, factor: 0.355 },
    { age: 69, int: 7.375, factor: 0.350 },
    { age: 69, int: 7.5, factor: 0.345 },
    { age: 69, int: 7.625, factor: 0.340 },
    { age: 69, int: 7.75, factor: 0.335 },
    { age: 69, int: 7.875, factor: 0.330 },
    //
    { age: 70, int: 7.0, factor: 0.370 },
    { age: 70, int: 7.125, factor: 0.365 },
    { age: 70, int: 7.25, factor: 0.360 },
    { age: 70, int: 7.375, factor: 0.355 },
    { age: 70, int: 7.5, factor: 0.350 },
    { age: 70, int: 7.625, factor: 0.345 },
    { age: 70, int: 7.75, factor: 0.340 },
    { age: 70, int: 7.875, factor: 0.335 },
    //
    { age: 71, int: 7.0, factor: 0.370 },
    { age: 71, int: 7.125, factor: 0.365 },
    { age: 71, int: 7.25, factor: 0.360 },
    { age: 71, int: 7.375, factor: 0.355 },
    { age: 71, int: 7.5, factor: 0.350 },
    { age: 71, int: 7.625, factor: 0.345 },
    { age: 71, int: 7.75, factor: 0.340 },
    { age: 71, int: 7.875, factor: 0.335 },
    //
    { age: 72, int: 7.0, factor: 0.372 },
    { age: 72, int: 7.125, factor: 0.367 },
    { age: 72, int: 7.25, factor: 0.362 },
    { age: 72, int: 7.375, factor: 0.357 },
    { age: 72, int: 7.5, factor: 0.352 },
    { age: 72, int: 7.625, factor: 0.347 },
    { age: 72, int: 7.75, factor: 0.342 },
    { age: 72, int: 7.875, factor: 0.337 },
    //
    { age: 73, int: 7.0, factor: 0.381 },
    { age: 73, int: 7.125, factor: 0.376 },
    { age: 73, int: 7.25, factor: 0.371 },
    { age: 73, int: 7.375, factor: 0.366 },
    { age: 73, int: 7.5, factor: 0.361 },
    { age: 73, int: 7.625, factor: 0.356 },
    { age: 73, int: 7.75, factor: 0.351 },
    { age: 73, int: 7.875, factor: 0.346 },
    //
    { age: 74, int: 7.0, factor: 0.390 },
    { age: 74, int: 7.125, factor: 0.384 },
    { age: 74, int: 7.25, factor: 0.379 },
    { age: 74, int: 7.375, factor: 0.374 },
    { age: 74, int: 7.5, factor: 0.369 },
    { age: 74, int: 7.625, factor: 0.364 },
    { age: 74, int: 7.75, factor: 0.360 },
    { age: 74, int: 7.875, factor: 0.355 },
    //
    { age: 75, int: 7.0, factor: 0.400 },
    { age: 75, int: 7.125, factor: 0.394 },
    { age: 75, int: 7.25, factor: 0.389 },
    { age: 75, int: 7.375, factor: 0.384 },
    { age: 75, int: 7.5, factor: 0.379 },
    { age: 75, int: 7.625, factor: 0.375 },
    { age: 75, int: 7.75, factor: 0.370 },
    { age: 75, int: 7.875, factor: 0.365 },
    //
    { age: 76, int: 7.0, factor: 0.406 },
    { age: 76, int: 7.125, factor: 0.401 },
    { age: 76, int: 7.25, factor: 0.396 },
    { age: 76, int: 7.375, factor: 0.391 },
    { age: 76, int: 7.5, factor: 0.386 },
    { age: 76, int: 7.625, factor: 0.381 },
    { age: 76, int: 7.75, factor: 0.377 },
    { age: 76, int: 7.875, factor: 0.372 },
    //
    { age: 77, int: 7.0, factor: 0.417 },
    { age: 77, int: 7.125, factor: 0.412 },
    { age: 77, int: 7.25, factor: 0.407 },
    { age: 77, int: 7.375, factor: 0.402 },
    { age: 77, int: 7.5, factor: 0.397 },
    { age: 77, int: 7.625, factor: 0.392 },
    { age: 77, int: 7.75, factor: 0.387 },
    { age: 77, int: 7.875, factor: 0.383 },
    //
    { age: 78, int: 7.0, factor: 0.428 },
    { age: 78, int: 7.125, factor: 0.423 },
    { age: 78, int: 7.25, factor: 0.418 },
    { age: 78, int: 7.375, factor: 0.413 },
    { age: 78, int: 7.5, factor: 0.408 },
    { age: 78, int: 7.625, factor: 0.403 },
    { age: 78, int: 7.75, factor: 0.399 },
    { age: 78, int: 7.875, factor: 0.394 },
    //
    { age: 79, int: 7.0, factor: 0.434 },
    { age: 79, int: 7.125, factor: 0.429 },
    { age: 79, int: 7.25, factor: 0.424 },
    { age: 79, int: 7.375, factor: 0.419 },
    { age: 79, int: 7.5, factor: 0.415 },
    { age: 79, int: 7.625, factor: 0.410 },
    { age: 79, int: 7.75, factor: 0.405 },
    { age: 79, int: 7.875, factor: 0.400 },
    //
    { age: 80, int: 7.0, factor: 0.446 },
    { age: 80, int: 7.125, factor: 0.441 },
    { age: 80, int: 7.25, factor: 0.436 },
    { age: 80, int: 7.375, factor: 0.431 },
    { age: 80, int: 7.5, factor: 0.427 },
    { age: 80, int: 7.625, factor: 0.422 },
    { age: 80, int: 7.75, factor: 0.417 },
    { age: 80, int: 7.875, factor: 0.413 },
    // 8% Interest
    { age: 62, int: 8.0, factor: 0.272 },
    { age: 62, int: 8.125, factor: 0.268 },
    { age: 62, int: 8.25, factor: 0.264 },
    { age: 62, int: 8.375, factor: 0.259 },
    { age: 62, int: 8.5, factor: 0.255 },
    { age: 62, int: 8.625, factor: 0.251 },
    { age: 62, int: 8.75, factor: 0.247 },
    { age: 62, int: 8.875, factor: 0.242 },
    //
    { age: 63, int: 8.0, factor: 0.279 },
    { age: 63, int: 8.125, factor: 0.275 },
    { age: 63, int: 8.25, factor: 0.270 },
    { age: 63, int: 8.375, factor: 0.266 },
    { age: 63, int: 8.5, factor: 0.262 },
    { age: 63, int: 8.625, factor: 0.257 },
    { age: 63, int: 8.75, factor: 0.253 },
    { age: 63, int: 8.875, factor: 0.249 },
    //
    { age: 64, int: 8.0, factor: 0.286 },
    { age: 64, int: 8.125, factor: 0.282 },
    { age: 64, int: 8.25, factor: 0.277 },
    { age: 64, int: 8.375, factor: 0.273 },
    { age: 64, int: 8.5, factor: 0.269 },
    { age: 64, int: 8.625, factor: 0.264 },
    { age: 64, int: 8.75, factor: 0.260 },
    { age: 64, int: 8.875, factor: 0.256 },
    //
    { age: 65, int: 8.0, factor: 0.294 },
    { age: 65, int: 8.125, factor: 0.289 },
    { age: 65, int: 8.25, factor: 0.285 },
    { age: 65, int: 8.375, factor: 0.280 },
    { age: 65, int: 8.5, factor: 0.276 },
    { age: 65, int: 8.625, factor: 0.272 },
    { age: 65, int: 8.75, factor: 0.267 },
    { age: 65, int: 8.875, factor: 0.263 },
    //
    { age: 66, int: 8.0, factor: 0.301 },
    { age: 66, int: 8.125, factor: 0.297 },
    { age: 66, int: 8.25, factor: 0.292 },
    { age: 66, int: 8.375, factor: 0.288 },
    { age: 66, int: 8.5, factor: 0.283 },
    { age: 66, int: 8.625, factor: 0.279 },
    { age: 66, int: 8.75, factor: 0.275 },
    { age: 66, int: 8.875, factor: 0.271 },
    //
    { age: 67, int: 8.0, factor: 0.309 },
    { age: 67, int: 8.125, factor: 0.305 },
    { age: 67, int: 8.25, factor: 0.300 },
    { age: 67, int: 8.375, factor: 0.296 },
    { age: 67, int: 8.5, factor: 0.291 },
    { age: 67, int: 8.625, factor: 0.287 },
    { age: 67, int: 8.75, factor: 0.283 },
    { age: 67, int: 8.875, factor: 0.279 },
    //
    { age: 68, int: 8.0, factor: 0.317 },
    { age: 68, int: 8.125, factor: 0.313 },
    { age: 68, int: 8.25, factor: 0.308 },
    { age: 68, int: 8.375, factor: 0.304 },
    { age: 68, int: 8.5, factor: 0.299 },
    { age: 68, int: 8.625, factor: 0.295 },
    { age: 68, int: 8.75, factor: 0.291 },
    { age: 68, int: 8.875, factor: 0.287 },
    //
    { age: 69, int: 8.0, factor: 0.326 },
    { age: 69, int: 8.125, factor: 0.321 },
    { age: 69, int: 8.25, factor: 0.317 },
    { age: 69, int: 8.375, factor: 0.312 },
    { age: 69, int: 8.5, factor: 0.308 },
    { age: 69, int: 8.625, factor: 0.303 },
    { age: 69, int: 8.75, factor: 0.299 },
    { age: 69, int: 8.875, factor: 0.295 },
    //
    { age: 70, int: 8.0, factor: 0.330 },
    { age: 70, int: 8.125, factor: 0.326 },
    { age: 70, int: 8.25, factor: 0.321 },
    { age: 70, int: 8.375, factor: 0.317 },
    { age: 70, int: 8.5, factor: 0.312 },
    { age: 70, int: 8.625, factor: 0.308 },
    { age: 70, int: 8.75, factor: 0.304 },
    { age: 70, int: 8.875, factor: 0.300 },
    //
    { age: 71, int: 8.0, factor: 0.331 },
    { age: 71, int: 8.125, factor: 0.326 },
    { age: 71, int: 8.25, factor: 0.321 },
    { age: 71, int: 8.375, factor: 0.317 },
    { age: 71, int: 8.5, factor: 0.313 },
    { age: 71, int: 8.625, factor: 0.308 },
    { age: 71, int: 8.75, factor: 0.304 },
    { age: 71, int: 8.875, factor: 0.300 },
    //
    { age: 72, int: 8.0, factor: 0.332 },
    { age: 72, int: 8.125, factor: 0.328 },
    { age: 72, int: 8.25, factor: 0.323 },
    { age: 72, int: 8.375, factor: 0.319 },
    { age: 72, int: 8.5, factor: 0.314 },
    { age: 72, int: 8.625, factor: 0.310 },
    { age: 72, int: 8.75, factor: 0.306 },
    { age: 72, int: 8.875, factor: 0.302 },
    //
    { age: 73, int: 8.0, factor: 0.342 },
    { age: 73, int: 8.125, factor: 0.337 },
    { age: 73, int: 8.25, factor: 0.332 },
    { age: 73, int: 8.375, factor: 0.328 },
    { age: 73, int: 8.5, factor: 0.324 },
    { age: 73, int: 8.625, factor: 0.319 },
    { age: 73, int: 8.75, factor: 0.315 },
    { age: 73, int: 8.875, factor: 0.311 },
    //
    { age: 74, int: 8.0, factor: 0.350 },
    { age: 74, int: 8.125, factor: 0.346 },
    { age: 74, int: 8.25, factor: 0.341 },
    { age: 74, int: 8.375, factor: 0.337 },
    { age: 74, int: 8.5, factor: 0.332 },
    { age: 74, int: 8.625, factor: 0.328 },
    { age: 74, int: 8.75, factor: 0.324 },
    { age: 74, int: 8.875, factor: 0.320 },
    //
    { age: 75, int: 8.0, factor: 0.360 },
    { age: 75, int: 8.125, factor: 0.356 },
    { age: 75, int: 8.25, factor: 0.351 },
    { age: 75, int: 8.375, factor: 0.347 },
    { age: 75, int: 8.5, factor: 0.343 },
    { age: 75, int: 8.625, factor: 0.338 },
    { age: 75, int: 8.75, factor: 0.334 },
    { age: 75, int: 8.875, factor: 0.330 },
    //
    { age: 76, int: 8.0, factor: 0.367 },
    { age: 76, int: 8.125, factor: 0.363 },
    { age: 76, int: 8.25, factor: 0.358 },
    { age: 76, int: 8.375, factor: 0.354 },
    { age: 76, int: 8.5, factor: 0.349 },
    { age: 76, int: 8.625, factor: 0.345 },
    { age: 76, int: 8.75, factor: 0.341 },
    { age: 76, int: 8.875, factor: 0.337 },
    //
    { age: 77, int: 8.0, factor: 0.378 },
    { age: 77, int: 8.125, factor: 0.374 },
    { age: 77, int: 8.25, factor: 0.369 },
    { age: 77, int: 8.375, factor: 0.365 },
    { age: 77, int: 8.5, factor: 0.360 },
    { age: 77, int: 8.625, factor: 0.356 },
    { age: 77, int: 8.75, factor: 0.352 },
    { age: 77, int: 8.875, factor: 0.348 },
    //
    { age: 78, int: 8.0, factor: 0.389 },
    { age: 78, int: 8.125, factor: 0.385 },
    { age: 78, int: 8.25, factor: 0.380 },
    { age: 78, int: 8.375, factor: 0.376 },
    { age: 78, int: 8.5, factor: 0.372 },
    { age: 78, int: 8.625, factor: 0.367 },
    { age: 78, int: 8.75, factor: 0.363 },
    { age: 78, int: 8.875, factor: 0.359 },
    //
    { age: 79, int: 8.0, factor: 0.396 },
    { age: 79, int: 8.125, factor: 0.391 },
    { age: 79, int: 8.25, factor: 0.387 },
    { age: 79, int: 8.375, factor: 0.383 },
    { age: 79, int: 8.5, factor: 0.378 },
    { age: 79, int: 8.625, factor: 0.374 },
    { age: 79, int: 8.75, factor: 0.370 },
    { age: 79, int: 8.875, factor: 0.365 },
    //
    { age: 80, int: 8.0, factor: 0.408 },
    { age: 80, int: 8.125, factor: 0.404 },
    { age: 80, int: 8.25, factor: 0.399 },
    { age: 80, int: 8.375, factor: 0.395 },
    { age: 80, int: 8.5, factor: 0.390 },
    { age: 80, int: 8.625, factor: 0.386 },
    { age: 80, int: 8.75, factor: 0.382 },
    { age: 80, int: 8.875, factor: 0.378 }
  ];

///////////////////////////////////////////////////////////////////////////////
// Sliding Container Up and Down ---------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

const calculator = 'reverse-calculator-widget';
const widget_slides = document.getElementById(calculator).getElementsByClassName("widget-slide");
const tabcontents = document.getElementById(calculator).getElementsByClassName("tabcontent");
const messages = document.getElementById('slide-2').getElementsByClassName("message");

function slide_up(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].style.display = 'none';
        array[i].style.height = '0px';
    }
}

function slide_down(id) {
    var content = document.getElementById(id);
    content.style.display = 'block';
    content.style.height = content.scrollHeight + 'px';
}

function set_scrollHeight(id) {
    var content = document.getElementById(id);
    content.style.height = content.scrollHeight + 'px';
}

function show_tab_content(id) {
    slide_up(tabcontents);
    slide_down(id);
}

function show_slide(id) {
    calc();
    slide_up(widget_slides);
    slide_down(id);
    document.getElementById('calculator').scrollIntoView();
}

///////////////////////////////////////////////////////////////////////////////
// Misc ----------------------------------------------------------------------/
///////////////////////////////////////////////////////////////////////////////

function toString(id, value, digit) {
    document.getElementById(id).innerHTML = value.toLocaleString(undefined, {
        minimumFractionDigits: digit,
        maximumFractionDigits: digit
    });
}

function get_value(id) {
    return document.getElementById(id).value;
}

var max;
var ufmip;
var costs;

calc();
slide_up(widget_slides);
slide_down('slide-1');

function get_inputs() {
    get_age();
    get_loan_purpose();
    get_interest_rate_option();
    get_interest_rate();
    get_principal_limit_factor();
    get_loan_origination_fee();
    get_other_closing_costs();
    get_cash_available();
    get_home_appraised_value();
    get_current_mortgage_balance();
}

function calc() {
    get_inputs();
    if (loan_purpose === "Purchase") {
        show('max-hecm-warning');
        hide('no-equity-warning');
        max = (cash_available - loan_origination_fee - other_closing_costs) / (1.02 - plf); // Max Claim Amount($)
        if (max >= 726525) {
            max = 726525;
            document.getElementById('max-hecm-warning').innerHTML = "You've reached HECM Maximum Principal Limit";
        } else {
            document.getElementById('max-hecm-warning').innerHTML = '';
        }
        toString('maxClaim', max, 0);
        var pl$Purchase = max * plf; // Principal Limit $
        toString('pl$Purchase', pl$Purchase, 0);
        ufmip = max * 0.02; // UFMIP for purchase
        costs = loan_origination_fee + other_closing_costs + ufmip; // Sum of Loan Origination Fee + Closing Costs + UFMIP
        var erPurchase = cash_available - costs; // Equity Contribution $
        toString('erPurchase', erPurchase, 0);
        var purchasePrice = pl$Purchase + erPurchase;
        toString('purchasePrice', purchasePrice, 0);
    } else {
        hide('max-hecm-warning');
        show('no-equity-warning');
        get_home_appraised_value();
        document.getElementById("cmb").max = hav; // Set Max Current Mortgage Balance Value
        get_current_mortgage_balance();
        if (hav > 726525) {
            max = 726525;
        } else {
            max = hav;
        } // Set max claim amount
        toString('MAX', max, 0);
        ufmip = max * 0.02; // UFMIP for Refi
        costs = loan_origination_fee + other_closing_costs + ufmip; // Sum of Loan Origination Fee + Closing Costs + UFMIP
        var pl$ = max * plf; // Principal Limit $ for refi box
        toString('PL$', pl$, 0);
        var inilimit$ = pl$ * 0.6; // Initial Disbursement Limit $ @ Closing
        toString('IniLimit$', inilimit$, 0);
        var hecm = (pl$ - (costs + cmb)); // For Refi
        toString('HECM', hecm, 0);
        if (hecm <= 0) {
            document.getElementById('no-equity-warning').innerHTML = "You Don't Have Enough Equity";
        } else {
            document.getElementById('no-equity-warning').innerHTML = "";
        }
        var er = max * (1 - plf); // Equity Reserve
        toString('ER', er, 0);
    }
    set_scrollHeight('slide-2');
    set_scrollHeight('slide-3');
    toString('UFMIP', ufmip, 0);
    toString('COST$', costs, 0);
}

function get_age() {
    age = Number(get_value("age")); // Borrower's age
    toString('AGE', age, 0);
}

function get_loan_purpose() {
    loan_purpose = get_value("loan-purpose");
    if (loan_purpose === "Purchase") {
        show_tab_content('purchase');
        show('h4p-video');
        hide('hecm-video');
        show('purchaseResults');
        hide('refiResults');
        document.getElementById("rate-option").value = "Fixed";
        show('fixed-rate');
        hide("variable-rate");
        show("cash-available");
        hide("variable-option");
        hide("home-appraised-value");

    } else {
        show_tab_content('hecm');
        hide('h4p-video');
        show('hecm-video');
        hide("purchaseResults");
        show("refiResults");
        hide("cash-available");
        show("variable-option");
        show("home-appraised-value");
    }
}

function get_cash_available() {
    cash_available = Number(get_value("ca")); // Cash available ca
    toString('CA', cash_available, 0);
}

function get_interest_rate_option() {
    interest_rate_option = get_value("rate-option");
    if (interest_rate_option === "Fixed") {
        show("fixed-rate");
        hide("variable-rate");
    } else {
        hide("fixed-rate");
        show("variable-rate");
    }
}

function get_interest_rate() {
    int = Number(get_value("int")); // Interest Rate
    toString('INT', int, 3);
}

function get_principal_limit_factor() {
    result = plfs.find(plf => plf.age === age && plf.int === int); // Look up Principal Limit Factor
    plf = result.factor;
    toString('PLF1', plf, 3);
    toString('PLF2', plf, 3);
}

function get_loan_origination_fee() {
    loan_origination_fee = Number(get_value("lof"));
    toString('LOF', loan_origination_fee, 0);
    toString('LOF_2', loan_origination_fee, 0);
}

function get_other_closing_costs() {
    other_closing_costs = Number(get_value("cc"));
    toString('CC', other_closing_costs, 0);
    toString('CC_2', other_closing_costs, 0);
}

function get_home_appraised_value() {
    hav = Number(get_value("hav"));
    toString('HAV', hav, 0);
}

function get_current_mortgage_balance() {
    cmb = Number(get_value("cmb"));
    toString('CMB', cmb, 0);
}