import library from './help/library';
import { goTime } from './help/timer';
import { shuffle } from './help/shuffle';
import { clear } from './help/clear__screen';
import { cards } from './help/cards';
import { initLoseScreen } from './lose__screen';
import { initWinScreen } from './win__screen';
import styles from './style.module.css';

function renderEasyLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add(styles.mainEasy);
    const forMain = document.createElement('div');
    forMain.classList.add(styles.mainEasyFilter);

    library.renderBlock('easyTimer', forMain);
    library.renderBlock('resetEasyBtn', forMain);
    main.appendChild(forMain);
    library.renderBlock('easyArea', main);
    app.appendChild(main);
}

function createEasyTimer(container) {
    const timer = document.createElement('div');
    timer.classList.add(styles.timer);
    const timerContext = document.createElement('div');
    timerContext.classList.add(styles.timerContext);
    const timerMin = document.createElement('p');
    timerMin.textContent = 'min';
    timerMin.classList.add(styles.timerMin);
    const timerSec = document.createElement('p');
    timerSec.textContent = 'sec';
    timerSec.classList.add(styles.timerSec);
    const timerTime = document.createElement('h1');
    timerTime.textContent = '00:00';
    timerTime.classList.add(styles.timerTime);
    timerTime.id = 'time';

    container.appendChild(timer);
    timerContext.appendChild(timerMin);
    timerContext.appendChild(timerSec);
    timer.appendChild(timerContext);
    timer.appendChild(timerTime);
}

function createResetEasyButton(container) {
    const resetEasyBtn = document.createElement('button');
    resetEasyBtn.textContent = 'Начать заново';
    resetEasyBtn.classList.add(styles.resetButton);
    resetEasyBtn.onclick = function () {
        library.renderScreen('easy-level');
        library.clearTimer?.();
    };
    container.appendChild(resetEasyBtn);
}
const goLose = function () {
    initLoseScreen();
    library.renderScreen('lose-screen');
};

const createBackCard = function (id) {
    const back = document.createElement('img');
    back.src = cards.back.img;
    back.id = `${id}`;
    back.addEventListener('click', function () {
        // eslint-disable-next-line no-use-before-define
        gameProcess(id, library.gameCards[id].id);
    });
    return back;
};

const createCard = function (id, realId) {
    const card = document.createElement('img');
    const findCard = library.gameCards.find(
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
    if (library.backs.length < 2) {
        library.backs.push({ id, realId });
    }
    if (library.backs.length === 2 && realId === library.backs[0].realId) {
        library.checkVictory++;
        library.backs = [];
        if (library.checkVictory === library.difficulty / 2) {
            initWinScreen();
            library.clearTimer();
            library.renderScreen('win-screen');
        }
        return;
    }
    if (library.backs.length === 2 && realId !== library.backs[0].realId) {
        library.backs.forEach((back) => {
            const backEl = document.getElementById(`${back.id}`);
            backEl.replaceWith(createBackCard(back.id));
        });
        library.backs = [];
        return;
    }
}

function createEasyArea(container) {
    const easyArea = document.createElement('div');
    easyArea.classList.add(styles.easyArea);
    const easyCards = shuffle(library.difficulty / 2);
    console.log(easyCards);
    library.checkVictory = 0;
    easyCards.forEach((easyCard) => {
        const element = document.createElement('img');
        element.src = easyCard.img;
        easyArea.appendChild(element);
        console.log(easyCards);
    });
    setTimeout(function () {
        easyArea.innerHTML = '';
        library.clearTimer = goTime(goLose);
        easyCards.forEach((easyCard, index) => {
            const backCard = createBackCard(index);
            easyArea.appendChild(backCard);
        });
    }, 5000);
    container.appendChild(easyArea);
}
export function init() {
    library.blocks['easyTimer'] = createEasyTimer;
    library.blocks['resetEasyBtn'] = createResetEasyButton;
    library.blocks['easyArea'] = createEasyArea;

    library.screens['easy-level'] = renderEasyLevelSreen;
}
