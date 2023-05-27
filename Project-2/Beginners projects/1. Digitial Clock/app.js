const hourE1 = document.getElementById("hour");

const minuteE1 = document.getElementById("Minutes");

const secondsE1 = document.getElementById("Seconds");

const ampmE1 = document.getElementById("ampm");

const a = document.querySelector("h2");

function UpdateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";



    if (h > 12) {
        h = h - 12;
        ampm = "PM"
        a.style.color = "pink";

    }

    h = h < 10 ? "0" + h : h;

    m = m < 10 ? "0" + m : m;

    s = s < 10 ? "0" + s : s;
    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondsE1.innerText = s;
    ampmE1.innerText = ampm;
    setTimeout(() => { UpdateClock() }, 1000);

}
UpdateClock();