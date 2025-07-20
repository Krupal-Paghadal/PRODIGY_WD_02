let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = 0;

const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
let time = document.getElementById("time");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

function updateTime()
{
    let t = new Date();
    time.textContent = t.toLocaleTimeString();
}

updateTime();

setInterval(updateTime, 1000);

function startWatch()
{
    seconds++;

    if(seconds < 10) {
        s.innerHTML = `0${seconds}`;
    }
    else if(seconds > 59){
        minutes++;
        seconds = 0;
        s.innerHTML = "00";
    }
    else {
        s.innerHTML = seconds;
    }

    if(minutes < 10) {
        m.innerHTML = `0${minutes}`;
    }
    else if(minutes > 59){
        hours++;
        minutes = 0;
        m.innerHTML = minutes;
    }else
    {
        m.innerHTML = minutes;
    }

    if(hours < 10)
    {
        h.innerHTML = `0${hours}`;
    }
    else{
        h.innerHTML = hours;
    }
}

const startTimer = () => {
    clearInterval(interval);
    interval = setInterval(startWatch, 1000);
}

const stopTimer = () => {
    clearInterval(interval);
}

const resetTimer = () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    h.innerHTML = "00";
    m.innerHTML = "00";
    s.innerHTML = "00";
    ms.innerHTML = "00";
    clearInterval(interval);
}

start.addEventListener("click", startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click", resetTimer);