window.addEventListener('devicemotion', deviceMotionHandler, false);

function deviceMotionHandler(eventData) {
    
    var acc = eventData.acceleration
    var accg = eventData.accelerationIncludingGravity;
    var gy = Math.abs(accg.y - acc.y);
    var rgy = Math.floor(gy);

    if (rgy < 9) {
        alert("not straight");
    }

    document.getElementById('acc-readings').innerHTML = gy.toFixed(2);
}