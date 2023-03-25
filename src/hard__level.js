function renderHardLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main__hard');

    window.application.renderBlock('timer', main);
    window.application.renderBlock('resetHardBtn', main);
    window.application.renderBlock('hardArea', main);

    app.appendChild(main);
}

function createTimer(container) {
    const timer = document.createElement('div');
    timer.classList.add('timer');
    const timerMin = document.createElement('p');
    timerMin.textContent = 'min';
    timerMin.classList.add('timerMin');
    const timerSec = document.createElement('p');
    timerSec.textContent = 'sec';
    timerSec.classList.add('timerSec');
    const timerTime = document.createElement('h1');
    timerTime.textContent = '00:00';
    timerTime.classList.add('timerTime');

    container.appendChild(timer);
    container.appendChild(timerMin);
    container.appendChild(timerSec);
    container.appendChild(timerTime);
}

function createResetHardButton(container) {
    const resetHardBtn = document.createElement('button');
    resetHardBtn.textContent = 'Начать заново';
    resetHardBtn.classList.add('resetButton');
    resetHardBtn.onclick = function () {
        window.application.renderScreen('hard-level');
    };
    container.appendChild(resetHardBtn);
}

function createHardArea(container) {
    const hardArea = document.createElement('div');
    hardArea.classList.add('hardArea');
    const easyCards = shuffle(9);
    let element = '';
    let b = 1;
    easyCards.forEach((easyCard) => {
        element = document.createElement('img');
        element.src = easyCard.img;
        hardArea.appendChild(element);
    });
    setTimeout(function () {
        hardArea.innerHTML = '';
        while (b < 19) {
            back = document.createElement('img');
            back.src = window.application.cards.back.img;
            hardArea.appendChild(back);
            b++;
        }
    }, 5000);
    container.appendChild(hardArea);
}

window.application.blocks['timer'] = createTimer;
window.application.blocks['resetHardBtn'] = createResetHardButton;
window.application.blocks['hardArea'] = createHardArea;

window.application.screens['hard-level'] = renderHardLevelSreen;
