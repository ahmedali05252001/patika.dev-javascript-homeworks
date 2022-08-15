let domname = document.getElementById("myName");
let name = prompt("Enter your Name: ","name").toLowerCase();
domname.innerHTML = name[0].toUpperCase() + name.slice(1);


function showTime(){
    let domtime = document.getElementById("myClock");


    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let d = days[date.getDay()-1];

    let time = `${h}:${m}:${s} ${d}`

    domtime.innerHTML = time;
    
}
setTimeout(showTime, 1000);

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

showTime();