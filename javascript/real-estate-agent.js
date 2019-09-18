$("#card-1").click(function () {
    $("#real-estate-agent").slideDown("slow");
    $("#home-loan").hide();
    if (screen && screen.width < 768) {
        document.getElementById("cards").scrollIntoView();
    }
});
$("#card-2").click(function () {
    $("#real-estate-agent").hide();
    $("#home-loan").slideDown("slow");
    if (screen && screen.width < 768) {
        document.getElementById("cards").scrollIntoView();
    }
});
// Add active class to class name "card-title"
var cards = document.getElementById("cards").getElementsByClassName("card-title");
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("card-active");
        current[0].className = current[0].className.replace(" card-active", "");
        this.className += " card-active";
    });
};
// Animated Collapsible - Flyers ---------------------------------------------/
var flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
for (var i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("flyers").getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.maxHeight = null;
        };
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (var k = 0; k < flyers.length; k++) {
                flyers[k].classList.remove("active");
            };
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}