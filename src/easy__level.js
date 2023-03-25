function renderEasyLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main__easy');

    window.application.renderBlock('timer', main);
    window.application.renderBlock('resetEasyBtn', main);
    window.application.renderBlock('easyArea', main);

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

function createResetEasyButton(container) {
    const resetEasyBtn = document.createElement('button');
    resetEasyBtn.textContent = 'Начать заново';
    resetEasyBtn.classList.add('resetButton');
    resetEasyBtn.onclick = function () {
        window.application.renderScreen('easy-level');
    };
    container.appendChild(resetEasyBtn);
}

function createEasyArea(container) {
    const easyArea = document.createElement('div');
    easyArea.classList.add('easyArea');
    const easyCards = shuffle(3);
    let element = '';
    let b = 1;
    easyCards.forEach((easyCard) => {
        element = document.createElement('img');
        element.src = easyCard.img;
        element.classList.add('cardInGame');
        easyArea.appendChild(element);
    });
    setTimeout(function () {
        easyArea.innerHTML = '';
        while (b < 7) {
            back = document.createElement('img');
            back.src = window.application.cards.back.img;
            easyArea.appendChild(back);
            b++;
        }
    }, 5000);
    container.appendChild(easyArea);
}

window.application.blocks['timer'] = createTimer;
window.application.blocks['resetEasyBtn'] = createResetEasyButton;
window.application.blocks['easyArea'] = createEasyArea;

window.application.screens['easy-level'] = renderEasyLevelSreen;
