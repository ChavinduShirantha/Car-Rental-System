function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = "AM";
    if (hours > 12) {
        hours -= 12;
        meridiem = "PM";
    }
    if (hours === 0) {
        hours = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("digitalClock").innerHTML = time;
    document.getElementById('date').innerHTML = date.toDateString();
}
setInterval(updateClock, 1000);

