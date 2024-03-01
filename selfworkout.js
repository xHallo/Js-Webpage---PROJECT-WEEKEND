let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let musicbars = document.querySelector(".musicbars");
let musicbar = document.querySelectorAll(".musicbars .bar");
let workoutpause = document.querySelector(".workoutpause");
let workoutbegin = document.querySelector(".workoutbegin");
let workoutstartbutton = document.getElementById("startTimer");

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    musicbars.style.visibility = 'visible';
    baranimationbegin();
    workoutpause.style.visibility = 'hidden';
    workoutbegin.style.visibility = 'hidden';
    playworkoutmusic();
    workoutstartbutton.innerHTML = "Workout in progress..."
    workoutstartbutton.style.opacity = 0.8;
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
    workoutpause.style.visibility = 'visible';
    musicbars.style.visibility = 'hidden';
    baranimationstop();
    workoutbegin.style.visibility = 'hidden';
    pauseworkoutmusic();
    workoutstartbutton.innerHTML = "Resume Workout"
    workoutstartbutton.style.opacity = 0.9;

});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 ';
    musicbars.style.visibility = 'hidden';
    baranimationstop();
    workoutpause.style.visibility = 'hidden';
    workoutbegin.style.visibility = 'visible';
    stopworkoutmusic();
    workoutstartbutton.innerHTML = "Begin Workout"
    workoutstartbutton.style.opacity = 1;
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} `;
  }

function baranimationbegin() {
    musicbar.forEach((bar) =>{
        bar.classList.add("baranimation");
    });
}
function baranimationstop() {
    musicbar.forEach((bar) =>{
        bar.classList.remove("baranimation");
    });
}
let audio = new Audio("music.mp3");
function playworkoutmusic(){

    audio.play();
    audio.volume = 0.1;
    audio.loop = true;
}
function pauseworkoutmusic(){
    audio.pause();
}
function stopworkoutmusic(){
    audio.pause();
    audio.currentTime = 0;
}
