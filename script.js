let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() *6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    //Digital Clock
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >=12 ? "PM" : "AM";

    //convert 24hr clock to 12hr clock
    if(h>12){
        h = h -12;
    }

    //add zero before single digit number 
    h = ( h < 10) ? "0" + h : h;
    m = ( m < 10) ? "0" + m : m;
    s = ( s < 10) ? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = am;

var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var today = new Date();
document.getElementById('date_value').innerHTML = (dayNames[today.getDay()] + " " +
today.getDate() + ' ' + monthNames[today.getMonth()] + ', ' +today.getFullYear());
});