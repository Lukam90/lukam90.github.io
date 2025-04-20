const audio = document.querySelector("#subliminal");

audio.addEventListener("playing", () => console.log("Audio played"));
audio.addEventListener("suspend", () => console.log("Audio suspended"));

console.log("Loop : ", audio.loop);
console.log("Autoplay : ", audio.autoplay);