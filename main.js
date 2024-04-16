const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const examName = document.getElementById('examName');

const examDates = {
    'IB Exams': 'April 24 2024 00:00:00',
    'Chemistry Paper 1': 'May 8 2024 13:30:00',
    'Chemistry Paper 2': 'May 8 2024 14:30:00',
    'Chemistry Paper 3': 'May 9 2024 09:30:00'
};

let newYearTime = new Date(examDates[localStorage.getItem('selectedExam') || 'IB Exams']);
examName.textContent = localStorage.getItem('selectedExamText') || 'IB Exams';

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

let timer = setInterval(() => updateCountDownTime(newYearTime));

const navbar = document.getElementById('navbar');
const navButton = document.getElementById('navButton');
const crossButton = document.getElementById('crossButton');

navButton.addEventListener('click', function() {
    navbar.classList.toggle('hidden');
});

crossButton.addEventListener('click', function() {
    navbar.classList.toggle('hidden');
});

const links = navbar.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        clearInterval(timer);
        newYearTime = new Date(examDates[this.textContent]);
        console.log('Link text content:', this.textContent);
        localStorage.setItem('selectedExam', this.textContent);
        localStorage.setItem('selectedExamText', this.textContent);
        examName.textContent = this.textContent;
        timer = setInterval(() => updateCountDownTime(newYearTime), 1000);
    });
}



