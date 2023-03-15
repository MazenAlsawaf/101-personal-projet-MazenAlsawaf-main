/*création de la fonction enableDateTimeRefresh() qui rafraichit l'heure*/ 
function enableDateTimeRefresh() {
    let t = 1000;
    setInterval(displayDateTime, t);
}

/*création de la fonction displayDateTime() qui affiche l'heure*/ 
function displayDateTime() {
    let date = new Date()

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    let time = `Le temps actuel est ${h}:${m}:${s}`
    document.getElementById("date").innerHTML = time;
    setTimeout(displayDateTime, 500);
}

/*création de la fonction checkTime() which checks the time 
and writes it with a 0 in front if there is only one digit*/ 
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

