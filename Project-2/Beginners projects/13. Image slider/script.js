const nextE1 = document.querySelector(".next");

const imgsE1 = document.querySelectorAll("img");

const imageContainerE1 = document.querySelector(".image-container");

const prevE1 = document.querySelector(".prev");

let currentImg = 1;

let timeOut;

nextE1.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
})
prevE1.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut);

    updateImg();

})
function updateImg() {

    if (currentImg > imgsE1.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgsE1.length;
    }
    imageContainerE1.style.transform = `translateX(-${(currentImg-1) * 500}px)`
    timeOut = setTimeout(() => {
        currentImg++
        updateImg()
    }, 3000)
}