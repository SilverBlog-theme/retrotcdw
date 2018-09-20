import '../scss/index.scss';

const element = document.getElementById('since-bar');
const textNodes = [
    document.createTextNode('本站已经安全运行 '),
    document.createTextNode(''),
    document.createTextNode(' 天 '),
    document.createTextNode(''),
    document.createTextNode(' 小时 '),
    document.createTextNode(''),
    document.createTextNode(' 分 '),
    document.createTextNode(''),
    document.createTextNode(' 秒。'),
];

for (let i = 0; i < textNodes.length; i += 1) {
    element.appendChild(textNodes[i]);
}

function showDateTime() {
    setTimeout(showDateTime, 1000);
    const birthday = new Date(new Date(document.getElementById('website-birth').value));
    const today = new Date();
    const time = (today.getTime() - birthday.getTime());
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysGross = time / msPerDay;
    const days = Math.floor(daysGross);
    const hoursGross = (days - daysGross) * -24;
    const hours = Math.floor(hoursGross);
    const minutesGross = (hours - hoursGross) * -60;
    const minutes = Math.floor((hours - hoursGross) * -60);
    const seconds = Math.floor((minutes - minutesGross) * -60);
    textNodes[1].textContent = days;
    textNodes[3].textContent = hours;
    textNodes[5].textContent = minutes;
    textNodes[7].textContent = seconds;
}
showDateTime();
