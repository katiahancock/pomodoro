let m = 25;
let s = 0;

document.getElementById('clock').innerHTML = (m + ":" + s)

function startTimer() {
   
   let clock = document.getElementById('clock');
   s = s - 1;
   rollOverSeconds()
   rollOverMinutes()
   clock.innerHTML = m + ":" + s;
   setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
   if (sec < 10 && sec >= 0) {
       sec = "0" + sec
   }; // add zero in front of numbers < 10
   if (sec < 0) {
       sec = "59"
   };
   return sec;
}



function rollOverMinutes(){
    if (s == 59) {
        m = m - 1
    }
}
function rollOverSeconds(){
    if(s = 0){
        s = 59
    }
}