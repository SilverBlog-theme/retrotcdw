import '../scss/index.scss';

// 本站已经安全运行多久了？
const cTN = (e = '') => document.createTextNode(e);

const element = document.getElementById('since-bar');
const textNodes = [
    cTN('本站已经安全运行 '),
    cTN(),
    cTN(' 天 '),
    cTN(),
    cTN(' 小时 '),
    cTN(),
    cTN(' 分 '),
    cTN(),
    cTN(' 秒。'),
];

for (let i = 0; i < textNodes.length; i += 1) {
    element.appendChild(textNodes[i]);
}

const showDateTime = () => {
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
};

showDateTime();

// 对于使用 100% 缩放的 Windows 环境
if (window.devicePixelRatio === 1 && navigator.platform.toLowerCase().indexOf('win') !== -1) {
    const elem = document.createElement('style');
    elem.textContent = 'body { font-family: SimSun }';
    document.head.appendChild(elem);
}

// 亿万 PV
document.getElementById('pv').textContent = Math.floor(Math.random() * 9000000000) + 100000000;
