///////////////////////////////////////////////////////////////////////////////
// Slide Show                                                                 /
///////////////////////////////////////////////////////////////////////////////

onload = slideshow;

function slideshow() {
    setInterval(function () {
        nextSlide('mi-ss');
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
// Flyers Section - Animated Collapsible - Event Listener ---------------------/
////////////////////////////////////////////////////////////////////////////////

const flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
const contents = document.getElementById("flyers").getElementsByClassName("content");
for (let i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        for (let j = 0; j < contents.length; j++) {
            contents[j].style.height = '0px';
        }
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (let k = 0; k < flyers.length; k++) {
                flyers[k].classList.remove("active");
            }
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.height = content.scrollHeight + "px";
        }
    });
}