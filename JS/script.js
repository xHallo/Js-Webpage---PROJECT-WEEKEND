const forgotpassword = document.querySelector(".forgotpass");
const signinform = document.querySelector(".signinform")
const registerform = document.querySelector(".regform")
const regbtn = document.querySelector(".regbtn");
const loginbtn = document.querySelector(".loginbtn");

const menubutton = document.querySelector(".menubutton");
function registerpage(){
 registerform.style.left = "50%"
 signinform.style.left = "-100%"
}
  
function signinpage(){
  signinform.style.left = "50%"
  registerform.style.left = "200%"
}
  

function login(){
  let inputuser = document.getElementById("inputuser").value;
  let inputpassword = document.getElementById("inputpass").value;
  if(inputuser==="Projectweekend" && inputpassword==="admin"){
    location.replace("homepage.html");
  }
  else{
    alert("TRY AGAIN");
  }
}
function backtosignin(){
  location.replace("index.html");
}


// quote of the day
const quoteText = document.querySelector(".quote")
quoteBtn = document.querySelector(".qotdbuttons button")
authorName = document.querySelector(".authorname")
speechBtn = document.querySelector(".speech")
copyBtn = document.querySelector(".copy")
synth = speechSynthesis;
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}
speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});





// open close sidenav menu

const sidenav = document.querySelector(".sidenav")
function opensidenav(){
  sidenav.classList.add("opensidenav")
}
function closesidenav(){
  sidenav.classList.remove("opensidenav")
}



const breakmenu = document.querySelector(".breakpopup")
function openbreak() {
  breakmenu.classList.add("openbreakpopup");
} 
function closebreak() {
  breakmenu.classList.remove("openbreakpopup")
}
function breakalarm(){
  clearInterval(breakalert);
  breakalert = setInterval(() => {alert("TAKE A BREAK. You need it")}, document.querySelector(".breakinterval").value);
}
let breakalert = ""
function breakcheckbox(){
  if(document.getElementById("breakswitch").checked){
    breakalert = setInterval(() => {alert("TAKE A BREAK. You need it")}, document.querySelector(".breakinterval").value);
  }
  else{
    clearInterval(breakalert);
  }
}
function breakalarm(){
if(document.getElementById("breakswitch").checked){
  clearInterval(breakalert);
  breakalert = setInterval(() => {alert("TAKE A BREAK. You need it")}, document.querySelector(".breakinterval").value);
}
}







// open close hydration menu
const hydrationmenu = document.querySelector(".hydrationpopup")
function openhydration() {
  hydrationmenu.classList.add("openhydrationpopup");
} 
function closehydration() {
  hydrationmenu.classList.remove("openhydrationpopup")
}
function hydratealarm(){
  clearInterval(hydratealert);
  hydratealert = setInterval(() => {alert("HYDRATE YOURSELF! DRINK UP")}, document.querySelector(".hydrationregime").value);
}
let hydratealert = ""
function hydrationcheckbox(){
  if(document.getElementById("hydrationswitch").checked){
    hydratealert = setInterval(() => {alert("HYDRATE YOURSELF! DRINK UP")}, document.querySelector(".hydrationregime").value);
  }
  else{
    clearInterval(hydratealert);
  }
}
function hydratealarm(){
if(document.getElementById("hydrationswitch").checked){
  clearInterval(hydratealert);
  hydratealert = setInterval(() => {alert("HYDRATE YOURSELF! DRINK UP")}, document.querySelector(".hydrationregime").value);
}
}


















