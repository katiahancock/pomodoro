let m = 0;
let s = 4;

// Makes clock show up visually - connects to CSS div
document.getElementById('clock').innerHTML =
    (m + ":" + s + s)


function startTimer() {

    let clock = document.getElementById('clock');
    s = processSecondCounter(s - 1);
    clock.innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000);
}

function processSecondCounter(sec) {
    stopClock();
    rolloverMinute();
    addZeroUnderTen(); 
    rollOverSeconds();
    console.log(m + 'minutes')
    console.log(s + 'seconds')
    // if (s == 0){
    //     console.log(m + 'minutes inside')
    //     console.log('we hit zero')
    //     // break;
    // }
    
    return sec;

    function stopClock() {
        if (m == 0 && s == 00) {
            sec = s - 0;
        }
    }

    function rollOverSeconds() {
        if (sec < 0 && m !== 0) {
            sec = "59";
        };
    }

    function rolloverMinute() {
        if (s == 00 && m !== 0) {
            m = m - 1;
        }
        
    }
    

    function addZeroUnderTen() {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec;
        };
    }

}





















// state === ready{
//     startbutton.disabled = false
//     pause.disabled = true
//     reset.disabled = true
// }