function renderEasyLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main__easy');
    const forMain = document.createElement('div');
    forMain.classList.add('main__easy-filter');

    window.application.renderBlock('easyTimer', forMain);
    window.application.renderBlock('resetEasyBtn', forMain);
    main.appendChild(forMain);
    window.application.renderBlock('easyArea', main);
    app.appendChild(main);
}

function createEasyTimer(container) {
    const timer = document.createElement('div');
    timer.classList.add('timer');
    const timerContext = document.createElement('div');
    timerContext.classList.add('timerContext');
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
    timerContext.appendChild(timerMin);
    timerContext.appendChild(timerSec);
    timer.appendChild(timerContext);
    timer.appendChild(timerTime);
}

function createResetEasyButton(container) {
    const resetEasyBtn = document.createElement('button');
    resetEasyBtn.textContent = 'Начать заново';
    resetEasyBtn.classList.add('resetButton');
    resetEasyBtn.onclick = function () {
        window.application.renderScreen('easy-level');
        window.application.clearTimer();
    };
    container.appendChild(resetEasyBtn);
}
const goLose = function () {
    window.application.renderScreen('lose-screen');
};

const createBackCard = function (id) {
    const back = document.createElement('img');
    back.src = window.application.cards.back.img;
    back.id = `${id}`;
    back.addEventListener('click', function () {
        gameProcess(id, window.application.gameCards[id].id);
    });
    return back;
};

const createCard = function (id, realId) {
    const card = document.createElement('img');
    const findCard = window.application.gameCards.find(
        (gameCard) => gameCard.id === realId
    );
    card.src = findCard.img;
    card.id = id;
    return card;
};

function gameProcess(id, realId) {
    const newCard = createCard(id, realId);
    const oldCard = document.getElementById(id);
    oldCard.replaceWith(newCard);
    if (window.application.backs.length < 2) {
        window.application.backs.push({ id, realId });
    }
    if (
        window.application.backs.length === 2 &&
        realId === window.application.backs[0].realId
    ) {
        window.application.checkVictory++;
        window.application.backs = [];
        if (
            window.application.checkVictory ===
            window.application.difficulty / 2
        ) {
            window.application.clearTimer();
            window.application.renderScreen('win-screen');
        }
        return;
    }
    if (
        window.application.backs.length === 2 &&
        realId !== window.application.backs[0].realId
    ) {
        window.application.backs.forEach((back) => {
            const backEl = document.getElementById(`${back.id}`);
            backEl.replaceWith(createBackCard(back.id));
        });
        window.application.backs = [];
        return;
    }
}

function createEasyArea(container) {
    const easyArea = document.createElement('div');
    easyArea.classList.add('easyArea');
    const easyCards = shuffle(window.application.difficulty / 2);
    window.application.checkVictory = 0;
    easyCards.forEach((easyCard) => {
        const element = document.createElement('img');
        element.src = easyCard.img;
        easyArea.appendChild(element);
    });
    setTimeout(function () {
        easyArea.innerHTML = '';
        window.application.clearTimer = goTime(goLose);
        easyCards.forEach((easyCard, index) => {
            const backCard = createBackCard(index);
            easyArea.appendChild(backCard);
        });
    }, 5000);
    container.appendChild(easyArea);
}

window.application.blocks['easyTimer'] = createEasyTimer;
window.application.blocks['resetEasyBtn'] = createResetEasyButton;
window.application.blocks['easyArea'] = createEasyArea;

window.application.screens['easy-level'] = renderEasyLevelSreen;
