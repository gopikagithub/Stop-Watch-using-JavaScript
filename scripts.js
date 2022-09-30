const timeDisplay=document.querySelector(".timeDisplay");
const startButton =document.querySelector(".startButton");
const pauseButton =document.querySelector(".pauseButton");
const resetButton =document.querySelector(".resetButton");


let paused=true;
let intervalId;
let hrs=0;
let mins=0;
let secs=50;


startButton.addEventListener("click",()=>{
    if(paused){
        paused=false;
        intervalId=setInterval(updateTime,1000);
    }
});


pauseButton.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        clearInterval(intervalId);
    }
});


resetButton.addEventListener("click",()=>{
    
        paused=true;
        clearInterval(intervalId);
        hrs=0;
        mins=0;
        secs=0;
        timeDisplay.textContent=`00:00:00`;
})


const updateTime=()=>{
    secs++;

    if(secs>59){
        secs=0;
        mins++;
    }

    if(mins>59){
        mins=0;
        hrs++;
    }
    
    secs=pad(secs);
    mins=pad(mins);
    hrs=pad(hrs);
    
    timeDisplay.textContent=`${hrs}:${mins}:${secs}`;
}


const pad=(unit)=>{
    return (("0")+unit).length>2?unit:"0"+unit;
}

