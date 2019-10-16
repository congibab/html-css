
function showClock1() {
    var now = new Date();
   document.getElementById("Time").innerHTML = now;
}
setInterval('showClock1()', 1000);

function display(){
    var x = document.getElementById("myDIV");
    if (x.style.display == "none") {
        x.style.display = "block";
    }

    else {
        x.style.display = "none";
    }
}

function Menu(x) {
    x.classList.toggle("change");
    display();
}