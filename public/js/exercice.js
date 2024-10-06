const MAX_TIME = 300;
const NOTICE = " PAR LE NEZ (5 SECONDES)";

let counter = MAX_TIME;
let started = false;
let timer;

const elCounter = document.getElementById("counter");
const elStep = document.getElementById("step");
const btnPress = document.getElementById("press_btn");
const myAudio = document.querySelector("audio");

function myTimeout() {
    if (counter < 0) {
        counter = MAX_TIME;
        started = false;

        btnPress.innerText = "COMMENCER"
        elStep.innerText = "";

        clearInterval(timer);

        myAudio.pause();
    }

    if (counter % 5 == 0 && counter % 10 == 0)  elStep.innerText = "INSPIRER" + NOTICE;
    if (counter % 5 == 0 && counter % 10 != 0)  elStep.innerText = "EXPIRER" + NOTICE;

    elCounter.innerText = counter--;
}

function setCounter() {
    if (started) {
        clearInterval(timer);

        myAudio.pause();

        btnPress.innerText = "RELANCER";
    } else {
        timer = setInterval(myTimeout, 1000);

        myAudio.play();

        btnPress.innerText = "PAUSE";
    }

    started = ! started;
}