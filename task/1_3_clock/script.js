const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const totalSecond = seconds + milliseconds / 1000;

    const secondDeg = totalSecond * 6;
    const minuteDeg = minutes * 6 + totalSecond * 0.1;

    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
}

setInterval(updateClock, 1);