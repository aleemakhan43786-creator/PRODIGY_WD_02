const display = document.getElementById("display");
const lapList = document.getElementById("lapList");

let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time){

let milliseconds = time % 1000;

let seconds =
Math.floor((time / 1000) % 60);

let minutes =
Math.floor((time / (1000 * 60)) % 60);

let hours =
Math.floor((time / (1000 * 60 * 60)));

return (
String(hours).padStart(2,'0')
+" : "+
String(minutes).padStart(2,'0')
+" : "+
String(seconds).padStart(2,'0')
+" : "+
String(milliseconds).padStart(3,'0')
);
}

function updateDisplay(){

elapsedTime =
Date.now() - startTime;

display.textContent =
formatTime(elapsedTime);
}

document
.getElementById("startBtn")
.addEventListener("click",()=>{

if(timerInterval) return;

startTime =
Date.now() - elapsedTime;

timerInterval =
setInterval(updateDisplay,10);

});

document
.getElementById("pauseBtn")
.addEventListener("click",()=>{

clearInterval(timerInterval);

timerInterval = null;
});

document
.getElementById("resetBtn")
.addEventListener("click",()=>{

clearInterval(timerInterval);

timerInterval = null;

elapsedTime = 0;

display.textContent =
"00 : 00 : 00 : 000";

lapList.innerHTML = "";
});

document
.getElementById("lapBtn")
.addEventListener("click",()=>{

if(elapsedTime===0) return;

const li =
document.createElement("li");

li.innerHTML =
`
<span>Lap ${lapList.children.length+1}</span>
<span>${formatTime(elapsedTime)}</span>
`;

lapList.prepend(li);

});