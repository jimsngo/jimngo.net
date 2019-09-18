// Animated Collapsible - id="collapsible" ---------------------------------/
var collapsible_2 = document.getElementById("collapsible").getElementsByClassName("collapsible");
for (var i = 0; i < collapsible_2.length; i++) {
    collapsible_2[i].addEventListener("click", function () {
        // Hide all elements with class content
        var contents = document.getElementById("collapsible").getElementsByClassName("content");
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.maxHeight = null;
        };
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove current active class
            for (var k = 0; k < collapsible_2.length; k++) {
                collapsible_2[k].classList.remove("active");
            };
            // Add active class to clicked element
            this.classList.toggle("active");
            // Display content for only active element            
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}