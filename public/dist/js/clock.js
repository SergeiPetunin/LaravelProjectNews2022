let hr = document.querySelector('#hr')
let mn = document.querySelector('#mn')
let sc = document.querySelector('#sc')
//slide clock
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle(1000);
    });
  });

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
  
    //digital clock
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let am = h >= 12 ? "PM" : "AM"

    //digital date
    let days = document.getElementById('days')
    let months = document.getElementById('months')
    let years = document.getElementById('years')
    let daynumber = document.getElementById('daynumber')

    let d = new Date().getDate()
    let mo = new Date().getMonth()+1
    let y = new Date().getFullYear()
    var dayss = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    let dn = new Date().getDay()
    let dayNow = dayss[dn]

    // convert 24hr clock to 12hr clock
    if (h > 12) {
        h = h - 12
    }

    //add zero before single digit number
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    d = (d < 10) ? "0" + d : d
    mo = (mo < 10) ? "0" + mo : mo

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    ampm.innerHTML = am

    days.innerHTML = d
    months.innerHTML = mo
    years.innerHTML = y
    daynumber.innerHTML = dayNow
})