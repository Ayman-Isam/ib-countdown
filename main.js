const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const newYearTime = new Date('April 24 2024 00:00:00');

function updateCountDownTime() {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference / 1000 / 60 / 60) % 24;
    const m = Math.floor(difference / 1000 / 60) % 60;
    const s = Math.floor(difference / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountDownTime, 1000);


