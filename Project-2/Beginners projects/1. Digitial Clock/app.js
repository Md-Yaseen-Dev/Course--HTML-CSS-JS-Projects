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
        document.body.style.background = `url("https://images.unsplash.com/photo-1596501047855-55aa4c266e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60")`;
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