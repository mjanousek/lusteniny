$(document).ready(function () {
    // Updates countdown container
    var updateCountdownElement = function (countDownDate) {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var remainingTime = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / (1000)),
        }

        var daysTextElement = document.getElementById("days-text")
        var hoursTextElement = document.getElementById("hours-text")
        var minutesTextElement = document.getElementById("minutes-text")
        var secondsTextElement = document.getElementById("seconds-text")

        document.getElementById("days").innerHTML = remainingTime.days;
        if (remainingTime.days > 3)
            daysTextElement.innerHTML = "Dnů";
        else if (remainingTime.days > 1)
            daysTextElement.innerHTML = "Dny";
        else
            daysTextElement.innerHTML = "Den";

        document.getElementById("hours").innerHTML = remainingTime.hours;
        if (remainingTime.hours > 3 || remainingTime.hours == 0)
            hoursTextElement.innerHTML = "Hodin";
        else if (remainingTime.hours > 1)
            hoursTextElement.innerHTML = "Hodiny";
        else
            hoursTextElement.innerHTML = "Hodina";

        document.getElementById("minutes").innerHTML = remainingTime.minutes;
        if (remainingTime.minutes > 3 || remainingTime.minutes == 0)
            minutesTextElement.innerHTML = "Minut";
        else if (remainingTime.minutes > 1)
            minutesTextElement.innerHTML = "Minuty";
        else
            minutesTextElement.innerHTML = "Minuta";

        document.getElementById("seconds").innerHTML = remainingTime.seconds;
        if (remainingTime.seconds > 3)
            secondsTextElement.innerHTML = "Sekund";
        else if (remainingTime.seconds > 1)
            secondsTextElement.innerHTML = "Sekundy";
        else
            secondsTextElement.innerHTML = "Sekunda";


        var getTextRepresentationOfDateTime = function (dateTime) {
            var text = "P";
            if (dateTime.days > 0)
                text += dateTime.days + "D";
            if (dateTime.hours > 0)
                text += dateTime.hours + "H";
            if (dateTime.minutes > 0)
                text += dateTime.minutes + "M";
            if (dateTime.seconds > 0)
                text += dateTime.seconds + "S";
            return text;
        }

        document.getElementById("countdown-timer").setAttribute("datetime", getTextRepresentationOfDateTime(remainingTime));

        if (-14400000 < distance && distance < 0) {
        } else if (distance < 0) {
        }
    }

    // Set the date we're counting down to
    var countDownDate = new Date("Jun 20, 2020 13:00:00").getTime();

    // Update the count down now
    updateCountdownElement(countDownDate);

    // Update the count down every 1 second
    interval = setInterval(function () { updateCountdownElement(countDownDate); }, 1000);
});

