$(function () {
    $(document).scroll(function () {
        var $nav = $("#navbar");
        var $intro = $("#hero");

        if ($intro.length === 0)
            $nav.toggleClass('scrolled', true);
        else
            $nav.toggleClass('scrolled', $(this).scrollTop() > $intro.height() - $nav.height());
    });
});

jQuery(document).ready(function ($) {
    var $nav = $("#navbar");
    var $intro = $("#hero");
    if ($intro.length === 0)
        $nav.toggleClass('scrolled', true);
    else
        $nav.toggleClass('scrolled', $(this).scrollTop() > $intro.height() - $nav.height());
});


// Czech texts of units
var timeWords = {
    days: ["den", "dny", "dnů"],
    hours: ["hodina", "hodiny", "hodin"],
    minutes: ["minuta", "minuty", "minut"]
};

var interval;

// Return czech text for unit
function formatTimeUnit(count, unit) {
    if (count == 1) {
        return timeWords[unit][0];
    }
    if (count < 5 && count > 0) {
        return timeWords[unit][1];
    }
    return timeWords[unit][2];
}

// Format time to czech text
function getRemainingTimeText(remainingTime) {

    var text = "";
    var firstNotNotNull = false;

    // Iterate over units and get remaining time text
    for (unit in remainingTime) {
        var n = remainingTime[unit];
        if (n > 0 || firstNotNotNull) {
            firstNotNotNull = true;
            text += n + " " + formatTimeUnit(n, unit) + " ";
        }
    }
    return text;
}

// Updates countdown container
var updateCountdownElement = function (countDownDate) {
    console.log("update")
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var remainingTime = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    }

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = getRemainingTimeText(remainingTime);

    // If the count down is finished and competition is in progress, write some text
    if (-14400000 < distance && distance < 0) {
        document.getElementById("countdown").innerHTML = "Soutěž právě probíhá!";
        document.getElementById("countdown-header").style.display = 'none';

        // If the competition is in progress, write some text
    } else if (distance < 0) {
        clearInterval(interval);
        // Hide elements
        document.getElementById("countdown-header").style.display = 'none';
        document.getElementById("countdown").style.display = 'none';

        // Show elements
        document.getElementById("finish").style.display = 'block';
        document.getElementById("finish-btn").style.display = 'inline-block';
    }
}

// Set the date we're counting down to
var countDownDate = new Date("Jul 18, 2020 16:00:00").getTime();

// Update the count down now
updateCountdownElement(countDownDate);

// Update the count down every 1 second
interval = setInterval(function () { updateCountdownElement(countDownDate); }, 5000);