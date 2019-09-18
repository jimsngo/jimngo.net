// Animated Collapsible - Flyers ---------------------------------------------/
var coll = document.getElementById("flyers").getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            this.nextElementSibling.style.maxHeight = null;
        } else {
            // Remove current active class
            for (var k = 0; k < coll.length; k++) {
                coll[k].classList.remove("active");
            };
            // Add active class to clicked element
            this.classList.toggle("active");            
            // Hide all elements with class content
            var contents = document.getElementById("flyers").getElementsByClassName("content");
            for (var j = 0; j < contents.length; j++) {
                contents[j].style.maxHeight = null;
            }
            // Display content for only active element
            var content = this.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}