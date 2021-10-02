setInterval(() => {
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if (hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

function updateCounter() {
    fetch('https://api.countapi.xyz/update/apongkhlakhloukkhmer/9da12d7d-8c27-432e-89cd-093064548e38/?amount=1')
        .then(res => res.json())
        .then(data => counterElement.innerHTML = data.value)
}
updateCounter()
counterElement = document.getElementsByClassName('count')[0];