function showClock1() {
    var now = new Date();
    var nowHour = now.getHours();
    var nowMin = now.getMinutes();
    var nowSec = now.getSeconds();
    var msg = nowHour + ":" + nowMin + ":" + nowSec; 

   document.getElementById("Time").innerHTML = msg;
}
setInterval('showClock1()', 1000);
