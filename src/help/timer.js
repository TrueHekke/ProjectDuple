function goTime(callback) {
    let sec = 0;
    let min = 0;
    let time = 0;
    const timer = setInterval(function () {
        const timerBasa = document.querySelector('.timerTime');
        timerBasa.innerHTML = `0${min}:0${sec}`;
        window.application.realTime = `0${min}:0${sec}`;
        sec++;
        time++;
        if (sec > 9) {
            timerBasa.innerHTML = `0${min}:${sec}`;
            window.application.timer = time;
            window.application.realTime = `0${min}:${sec}`;
        }
        if (sec > 60) {
            sec = 0;
            min = 1;
            timerBasa.innerHTML = `0${min}:0${sec}`;
            window.application.timer = time;
            window.application.realTime = `0${min}:0${sec}`;
        }
        if (time > 90) {
            clearInterval(timer);
            callback();
        }
    }, 1000);
    return () => {
        clearInterval(timer);
    };
}
