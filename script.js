var msCount =0;
var timer;
var secCount =0;
var minCount =0;
var hourCount =0;



const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const reset = document.getElementById("resetBtn");

start.addEventListener('click', ()=>{
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
    timer = setInterval(()=>{
        msCount += 100;
        secCount += 100;
        minCount += 100;
        hourCount += 100;
        updateTime();
    },100)
})

function updateTime(){
    const sec = Math.floor(secCount/1000);
    const min = Math.floor(minCount/60000);
    const hour = Math.floor(hourCount/6000000);
    const ms = (msCount % 1000)/10;

        if(hour<10){
            document.getElementById("hour").innerText = "0"+hour;
        }
        else if(hour>=24){
            resethour(hour);
        }
        else{
    document.getElementById("hour").innerText = hour;
        }
    if(min<10){
        document.getElementById("minute").innerText = "0"+min;
    }
    else if(min>=60){
        resetMin(min);
    }
    else{
    document.getElementById("minute").innerText = min;
    }
    if(sec<10){
        document.getElementById("second").innerText="0"+sec;
    }
    else if(sec>=60){
        resetSec(sec);
    }
    else{
    document.getElementById("second").innerText = sec;
    }
    if(ms<10){
        document.getElementById("millisecond").innerText= "0" + ms;
    }
    else if(ms < 100){
        document.getElementById("millisecond").innerText = ms;
        }

}

stop.addEventListener('click',()=>{
    stop.disabled = true;
    start.disabled = false;
    reset.disabled = false;
    clearInterval(timer);
});
reset.addEventListener('click',()=>{
    start.disabled = false;
    stop.disabled = false;
    reset.disabled = true;
    timeReset();
});
    
function timeReset(){
    clearInterval(timer);
    msCount=0;
    secCount=0;
    updateTime();
 }


 function resetSec(sec){
    secCount=0;
    updateTime();
 }

 function resetMin(min){
    minCount=0;
    updateTime();
 }

 function resethour(hour){
    hourCount=0;
    updateTime();
 }




 // themes
 let theme1 = document.getElementById("themes1");
 let theme2 = document.getElementById("themes2");
 let theme3 = document.getElementById("themes3");
 let theme4 = document.getElementById("themes4");
 let theme5 = document.getElementById("themes5");
 let redo = document.querySelector("i");
let backgroung = document.getElementById("container");
 theme1.addEventListener('click', ()=>{
    let img1 = document.getElementById("theme1");
    backgroung.style.backgroundImage=`url(${img1.src})`;
 })
 theme2.addEventListener('click', ()=>{
    let img1 = document.getElementById("theme2");
    backgroung.style.backgroundImage=`url(${img1.src})`;
 })
 theme3.addEventListener('click', ()=>{
    let img1 = document.getElementById("theme3");
    
    backgroung.style.backgroundImage=`url(${img1.src})`;
 })
 theme4.addEventListener('click', ()=>{
    let img1 = document.getElementById("theme4");
    backgroung.style.backgroundImage=`url(${img1.src})`;
 })
 theme5.addEventListener('click', ()=>{
    let img1 = document.getElementById("theme5");
    backgroung.style.backgroundImage=`url(${img1.src})`;
 })
 redo.addEventListener('click', ()=>{
    backgroung.style.backgroundImage="none";
 })