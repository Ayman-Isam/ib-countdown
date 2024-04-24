const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const examName = document.getElementById('examName');

const examDates = {
    'IB Exams': 'April 24 2024 00:00:00',
    'Physics HL Paper 1': 'April 25 2024 13:30:00',
    'Physics HL Paper 3': 'April 25 2024 14:45:00',
    'Physics HL Paper 2': 'April 26 2024 09:30:00',
    'Business HL Paper 1': 'April 26 2024 13:30:00',
    'Business HL Paper 3': 'April 26 2024 15:15:00',
    'Business HL Paper 2': 'May 1 2024 9:30:00',
    'Math AA HL Paper 1': 'May 1 2024 13:30:00',
    'Math AA HL Paper 2': 'May 2 2024 09:30:00',
    'Math AA HL Paper 3': 'May 6 2024 09:30:00',
    'Chemistry SL Paper 1': 'May 8 2024 13:30:00',
    'Chemistry SL Paper 3': 'May 8 2024 14:30:00',
    'Chemistry SL Paper 2': 'May 9 2024 09:30:00',
    'L & L SL Paper 1': 'May 9 2024 13:30:00',
    'L & L SL Paper 2': 'May 10 2024 09:30:00',
    'French Ab Paper 1': 'May 16 2024 13:30:00',
    'French Ab Listening': 'May 16 2024 14:45:00',
    'French Ab Reading': 'May 17 2024 9:30:00'
};

let newYearTime = new Date(examDates[localStorage.getItem('selectedExam') || 'IB Exams']);
examName.textContent = localStorage.getItem('selectedExamText') || 'IB Exams';

function updateCountDownTime() {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;

    if (difference < 0) {
        clearInterval(timer);

        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';

        return;
    }

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



