const btn = document.querySelector("#box");
const mode = document.querySelector("#dark");
const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".minute");
const secHand = document.querySelector(".seconds");
let timeid;

function updateTime() {
    let newDate = new Date;
    timeid = setTimeout(updateTime, 1000);
    const hr = newDate.getHours();
    const min = newDate.getMinutes();
    const secs = newDate.getSeconds();

    //maths
    const hourToDeg = (360 / 12) * hr;
    const minuteToDeg = (360 / 60) * min;
    const secondsToDeg = (360 / 60) * secs;

    //transform
    hourHand.style.transform = `rotate(${hourToDeg}Deg)`;
    minHand.style.transform = `rotate(${minuteToDeg}Deg)`;
    secHand.style.transform = `rotate(${secondsToDeg}Deg)`;

    // console.log(`hour: ${hr} :: minute: ${min} :: seconds: ${secs}`)

    btn.style.background = `rgb(185, 0, 0)`;
    btn.style.color = `#ffffff`;
}


function startStop () {
    let text = btn.innerHTML;
    
    if (text === `Stop Time`) {
        
        console.log(true);
        clearTimeout(timeid);
        btn.innerHTML = `Show Time`;
        btn.style.background = `#ffff00`;
        btn.style.color = 'rgb(185, 0, 0)'
    }
    else {
        updateTime();
        btn.innerHTML = `Stop Time`;
    }
}

//dark mode

function darkMode() {

    let text = mode.innerHTML;

    if (text === "Dark") {

        document.querySelector(".clock").style.background = `#00000094`;
        document.querySelector(".seconds").style.background = `#ffffff`;
        document.querySelector("body").style.background = `#000000e8`;
        document.querySelector(".clock").style.boxShadow = "1px 2px 44px 5px rgb(0 0 0)";
        document.querySelector(".clock").style.borderColor = "black";
        mode.innerHTML = "Light";
    }

    else {

        document.querySelector("body").style.background = `#f5f5dc`;
        document.querySelector(".clock").style.background = `#a6ffa9`;
        document.querySelector(".seconds").style.background = `#000000`;

        document.querySelector(".clock").style.boxShadow = "1px 2px 12px 4px rgb(208 162 168)";
        document.querySelector(".clock").style.borderColor = "white";
        mode.innerHTML = "Dark"
    }
}






