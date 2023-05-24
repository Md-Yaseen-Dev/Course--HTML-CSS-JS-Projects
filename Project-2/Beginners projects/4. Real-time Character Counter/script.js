const textAreaE1 = document.getElementById('textarea');

const totalCounterE1 = document.getElementById("total-counter");

const remainingCounterE1 = document.getElementById("remaining-counter")


textAreaE1.addEventListener("keyup", ()=>{
   updateCounter()
});

function updateCounter(){
   totalCounterE1.innerText =  textAreaE1.value.length

  remainingCounterE1.innerText = textAreaE1.getAttribute("maxLength")- textAreaE1.value.length;
}