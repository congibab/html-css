
function showClock1() {
    var now = new Date();
   document.getElementById("Time").innerHTML = now;
}
setInterval('showClock1()',1000);