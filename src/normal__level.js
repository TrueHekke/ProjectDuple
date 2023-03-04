function renderNormalLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main__normal');

    window.application.renderBlock('timer', main);
    window.application.renderBlock('resetNormBtn', main);
    window.application.renderBlock('normalArea', main);

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

function createResetNormalButton(container) {
    const resetNormBtn = document.createElement('button');
    resetNormBtn.textContent = 'Начать заново';
    resetNormBtn.classList.add('resetButton');
    resetNormBtn.onclick = function () {
        window.application.renderScreen('normal-level');
    };
    container.appendChild(resetNormBtn);
}

function createNormalArea(container) {
    const normArea = document.createElement('div');
    normArea.classList.add('normArea');
    const easyCards = shuffle(6);
    let element = '';
    let b = 1;
    easyCards.forEach((easyCard) => {
        element = document.createElement('img');
        element.src = easyCard.img;
        normArea.appendChild(element);
    });
    setTimeout(function () {
        normArea.innerHTML = '';
        while (b < 13) {
            back = document.createElement('img');
            back.src = window.application.cards.back.img;
            normArea.appendChild(back);
            b++;
        }
    }, 5000);
    container.appendChild(normArea);
}

window.application.blocks['timer'] = createTimer;
window.application.blocks['resetNormBtn'] = createResetNormalButton;
window.application.blocks['normalArea'] = createNormalArea;

window.application.screens['normal-level'] = renderNormalLevelSreen;
