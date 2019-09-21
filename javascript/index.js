$("#flip1").click(function () {
    $("#real_estate_agent").slideDown("slow");
    $("#home-loan").hide();
    $("#life-agent").hide();
    if (screen && screen.width < 768) {
        document.getElementById("cards").scrollIntoView();
    } else {
        window.scrollTo(0, 0);
    }
});
$("#flip2").click(function () {
    $("#real_estate_agent").hide();
    $("#home-loan").slideDown("slow");
    $("#life-agent").hide();
    if (screen && screen.width < 768) {
        document.getElementById("cards").scrollIntoView();
    } else {
        window.scrollTo(0, 0);
    }
});
$("#flip3").click(function () {
    $("#real_estate_agent").hide();
    $("#home-loan").hide();
    $("#life-agent").slideDown("slow");
    if (screen && screen.width < 768) {
        document.getElementById("cards").scrollIntoView();
    } else {
        window.scrollTo(0, 0);
    }
});
// Add active class to class name "card-title"
var btns = document.getElementById("cards").getElementsByClassName("card-title");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("card-active");
        current[0].className = current[0].className.replace(" card-active", "");
        this.className += " card-active";
    });
}
// Animated Collapsible - Flyers ---------------------------------------------/
var flyers = document.getElementById("flyers").getElementsByClassName("collapsible");
for (var i = 0; i < flyers.length; i++) {
    flyers[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("flyers").getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.maxHeight = null;
        }
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (var k = 0; k < flyers.length; k++) {
                flyers[k].classList.remove("active");
            }
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}