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
    document.getElementById('call').style.display = 'none';
}

function show_phone() {
    document.getElementById('call').style.display = 'block';
}