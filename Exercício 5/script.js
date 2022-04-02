setInterval(showTime, 1000);

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    
    let currentTime = hour + ":" + min

    document.getElementById("clock").innerHTML = currentTime;
}

showTime();