import library from './help/library';
import { clear } from './help/clear__screen';
import styles from './style.module.css';

function renderLoseScreen() {
    const app = document.querySelector('.app');
    clear();
    const main = document.createElement('div');
    main.classList.add(styles.mainScreen);

    library.renderBlock('loseH1', main);
    library.renderBlock('loseContent', main);
    library.renderBlock('resetLoseButton', main);

    app.appendChild(main);
}

function createLoseH1(container) {
    const loseH1 = document.createElement('h1');
    loseH1.textContent = 'Вы проиграли!';
    loseH1.classList.add(styles.mainScreenH1);
    container.appendChild(loseH1);
}

function createLoseContent(container) {
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

function createLoseResetBtn(container) {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Играть снова';
    resetButton.classList.add(styles.mainScreenStartButton);
    resetButton.addEventListener('click', function () {
        library.renderScreen('lobby-screen');
    });
    container.appendChild(resetButton);
}
export function initLoseScreen() {
    library.blocks['loseH1'] = createLoseH1;
    library.blocks['loseContent'] = createLoseContent;
    library.blocks['resetLoseButton'] = createLoseResetBtn;

    library.screens['lose-screen'] = renderLoseScreen;
}
