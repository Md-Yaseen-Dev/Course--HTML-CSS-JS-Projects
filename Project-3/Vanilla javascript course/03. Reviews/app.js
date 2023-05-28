const reviews = [
    {

        id: 1,
        name: "Shaik roshan Zameer",
        job: "DI Engineer",
        img: "./img/Roshan.jpg",
        text:
            "I am Roshan Zameer . I am DI Engineer in brillo working with USA clients to resolve all technical issues.",
    },
    {
        id: 2,
        name: "Shaik mohammad Aaqib",
        job: "Electrical Engineer",
        img: "./img/Aaqib.jpg",
        text:
            "I am shaik mohammad aaqib . I am Electrical Engineer working in a Govt of an Andhra pradesh",
    },
    {
        id: 3,
        name: "Shaik Mohammad Yaseen",
        job: "web developer",
        img: "./img/yaseen.jpg",
        text: " I am Yaseen welcome to my reviews. I'm a self taught Full stack Developer, javascript is my main tool.",
    },
    {
        id: 4,
        name: "Shaik Waheed Basha",
        job: "Technical Pharmarcist ",
        img: "./img/Waheed.jpg",
        text: "I am Shaik waheed Basha, I am Pharmacy technicians are medical professionals who work alongside pharmacists to help and support patients and make sure they get the best care.",
    },
    {
        id: 5,
        name: "Shaik Roshan Zameer",
        job: "Electrical Department",
        img: "./img/Roshan_Roy.jpg",
        text: "I am Shaik Roshan zameer, I am junior assistant engineer,responsibilities include completing all tasks assigned by the Senior Engineer, safely operating equipment, and working alongside other engineers in the planning, design, development, and evaluation stages of projects."
    },
{
        id: 6,
        name:"Shaik Mohammad Fazil",
        job:"Business Operation Manager",
        img:"./img/Fazil.jpg",
        text: "I am Shaik Mohammad Fazil, I am Business Operation manager, I lead responsible for managing all business operations and setting goals across the organization."
    }
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// we starting item

let currentItem = 0;

// load intial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})

// show person based on item

function showPerson() {
    let item = reviews[currentItem];
    img.src = item.img;
    // img.src = reviews[person].img // u can write this also
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
//show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
});

//show random person

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
    console.log(currentItem);
});