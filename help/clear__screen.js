function clear(){
    const app = document.querySelector('.app');
    app.textContent = '';
    window.application.timers.forEach(timer => {
        clearInterval(timer);
    });
    window.application.timers = [];
}