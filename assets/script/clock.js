function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateClock() {
    const clockElement = document.getElementById('clock');
    clockElement.textContent = getCurrentTime();
}

setInterval(updateClock, 1000);

updateClock();
