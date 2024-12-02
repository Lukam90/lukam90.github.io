const elCounter = document.getElementById("counter"); 

let counter = 0;
let max = 33;
let step = 3;

function increment() {
    counter += step;

    if (counter > max)   counter = 0;

    update();
}

function decrement() {
    counter -= step;
    
    if (counter < 0)   counter = max;

    update();
}

function update() {
    elCounter.innerText = counter;
}

document.addEventListener("keydown", e => {
    if (e.key == "ArrowRight")   increment();
    if (e.key == "ArrowLeft")   decrement();
});