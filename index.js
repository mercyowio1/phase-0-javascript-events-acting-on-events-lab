// Your code here
const dodger = document.getElementById("dodger");


function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) {  // Prevents moving out of bounds
        dodger.style.left = `${left - 10}px`
    }
}


function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left < 360) {  
        dodger.style.left = `${left + 10}px`;
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});