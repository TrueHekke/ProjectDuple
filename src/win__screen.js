import library from './help/library';
import { clear } from './help/clear__screen';
import styles from './style.module.css';

function renderWinScreen() {
    const app = document.querySelector('.app');
    clear();
    const main = document.createElement('div');
    main.classList.add(styles.mainScreen);

    library.renderBlock('winH1', main);
    library.renderBlock('winContent', main);
    library.renderBlock('resetButton', main);

    app.appendChild(main);
}

function createWinH1(container) {
    const winH1 = document.createElement('h1');
    winH1.textContent = 'Вы выиграли!';
    winH1.classList.add(styles.mainScreenH1);
    container.appendChild(winH1);
}

function createWinContent(container) {
    const contentMain = document.createElement('div');
    contentMain.classList.add(styles.timerMain);
    const textContent = document.createElement('p');
    textContent.textContent = 'Затраченное время:';
    textContent.classList.add(styles.timerContent);
    const timerTime = document.createElement('p');
    timerTime.textContent = `${library.realTime}`;
    timerTime.classList.add(styles.timerTimeFinal);
    contentMain.appendChild(textContent);
    contentMain.appendChild(timerTime);
    container.appendChild(contentMain);
}

function createResetBtn(container) {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Играть снова';
    resetButton.classList.add(styles.mainScreenStartButton);
    resetButton.addEventListener('click', function () {
        library.renderScreen('lobby-screen');
    });
    container.appendChild(resetButton);
}
export function initWinScreen() {
    library.blocks['winH1'] = createWinH1;
    library.blocks['winContent'] = createWinContent;
    library.blocks['resetButton'] = createResetBtn;
    library.screens['win-screen'] = renderWinScreen;
}
