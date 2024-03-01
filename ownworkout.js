let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let timer = null;
let musicbars = document.querySelector(".musicbars");
let musicbar = document.querySelectorAll(".musicbars .bar");
let workoutpause = document.querySelector(".workoutpause");
let workoutbegin = document.querySelector(".workoutbegin");
let workoutstartbutton = document.getElementById("startTimer");
let counter = document.getElementById("counter");
let workoutname = document.querySelector(".workoutname");
var count = 60;
let exercises = [
    {
      name: "Plank",
      image: "images",
      time: "60s"
    },
    {
        name: "Side Plank",
        image: "images",
        time: "60s"
    },
    {
        name: "Squats",
        image: "images",
        time: "60s"
    },
    {
        name: "Pushups",
        image: "images",
        time: "60s"
    },
    {
        name: "Jumping Jacks",
        image: "images",
        time: "60s"
    },
    {
        name: "Situps",
        image: "images",
        time: "60s"
    },
    {
        name: "Russian Twists",
        image: "images",
        time: "60s"
    },
    {
        name: "Bicycle Crunches",
        image: "images",
        time: "60s"
    },
    {
        name: "Leg Raises",
        image: "images",
        time: "60s"
    },
    {
        name: "Bicep Curl",
        image: "images",
        time: "60s"
    },
  ];
let unusedexercises = exercises;
console.log(timer)
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(timer!==null){
        clearInterval(timer);
    }
    else if(timer == null){
        randomexercise();
    };
    timer = setInterval(countdown, 1000);
    workoutpause.style.visibility = 'hidden';
    workoutname.style.visibility = "visible";
    workoutbegin.style.visibility = 'hidden';
    playworkoutmusic();
    workoutstartbutton.innerHTML = "Workout in progress..."
    workoutstartbutton.style.opacity = 0.8;
    musicbars.style.visibility = 'visible';
    baranimationbegin();
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(timer);
    workoutpause.style.visibility = 'visible';
    workoutname.style.visibility = "hidden";
    workoutbegin.style.visibility = 'hidden';
    pauseworkoutmusic();
    workoutstartbutton.innerHTML = "Resume Workout"
    workoutstartbutton.style.opacity = 0.9;
    musicbars.style.visibility = 'hidden';
    baranimationstop();
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    unusedexercises = exercises;
    clearInterval(timer);
    timer = null;
    count = 61;
    counter.innerHTML = "-"
    workoutpause.style.visibility = 'hidden';
    workoutname.style.visibility = "hidden";
    workoutbegin.style.visibility = 'visible';
    stopworkoutmusic();
    workoutstartbutton.innerHTML = "Begin Workout"
    workoutstartbutton.style.opacity = 1;
    musicbars.style.visibility = 'hidden';
    baranimationstop();
    
});
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

function countdown(){
    count--;
    counter.innerHTML = count + "s";
    if(count == 0) {
        if(unusedexercises.length !== 0){
        count = 60;
        synth = speechSynthesis;
        let randomno = Math.floor(Math.random() * unusedexercises.length);
        let selectedexercise = unusedexercises[randomno];
        unusedexercises.splice(randomno, 1);
        console.log(unusedexercises);
        let utterance = new SpeechSynthesisUtterance(`${selectedexercise.name} for ${selectedexercise.time}`);
        synth.speak(utterance);
        counter.innerHTML = selectedexercise.time;
        workoutname.innerHTML = selectedexercise.name;
        
        }
        else{
            clearInterval(timer)
            counter.innerHTML = "You're Done!"
            utterance = new SpeechSynthesisUtterance("You have completed your workout, Good Job");
            synth.speak(utterance);
        }
    };
}
    
  function randomexercise(){
    synth = speechSynthesis;
    counter.innerHTML = "60s";
    let randomno = Math.floor(Math.random() * unusedexercises.length);
    let selectedexercise = unusedexercises[randomno];
    unusedexercises.splice(randomno, 1);
    let utterance = new SpeechSynthesisUtterance(`${selectedexercise.name} for ${selectedexercise.time}`);
    synth.speak(utterance);
    
    workoutname.innerHTML = selectedexercise.name;
    workoutname.style.visibility = "visible";
    }
