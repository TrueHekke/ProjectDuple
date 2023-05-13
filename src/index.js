import library from './help/library';
import styles from './style.module.css';
import { clear } from './help/clear__screen';
import { init } from './easy__level';
import { cards } from './help/cards';

export function renderLobbySreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add(styles.mainScreen);

    library.renderBlock('lobbyH1', main);
    library.renderBlock('lobbyBtnMenu', main);
    library.renderBlock('startButton', main);

    app.appendChild(main);
}

export function createLobbyH1(container) {
    const lobbyH1 = document.createElement('h1');
    lobbyH1.textContent = 'Выбери сложность';
    lobbyH1.classList.add(styles.mainScreenH1);
    container.appendChild(lobbyH1);
}

export function createLobbyBtnMenu(container) {
    const lobbyBtnMenu = document.createElement('div');
    lobbyBtnMenu.classList.add(styles.mainScreenButtonMenu);
    const easyButton = document.createElement('button');
    easyButton.textContent = '1';
    easyButton.classList.add(styles.mainScreenButton);
    easyButton.addEventListener('click', function () {
        library.levels.value = 'easy';
    });
    const normalButton = document.createElement('button');
    normalButton.textContent = '2';
    normalButton.classList.add(styles.mainScreenButton);
    normalButton.addEventListener('click', function normalLevel() {
        library.levels.value = 'normal';
    });
    const hardButton = document.createElement('button');
    hardButton.textContent = '3';
    hardButton.classList.add(styles.mainScreenButton);
    hardButton.addEventListener('click', function hardLevel() {
        library.levels.value = 'hard';
    });
    container.appendChild(lobbyBtnMenu);
    lobbyBtnMenu.appendChild(easyButton);
    lobbyBtnMenu.appendChild(normalButton);
    lobbyBtnMenu.appendChild(hardButton);
}

export function createStartBtn(container) {
    const startButton = document.createElement('button');
    startButton.textContent = 'Старт';
    startButton.classList.add(styles.mainScreenStartButton);
    startButton.addEventListener('click', function () {
        switch (library.levels.value) {
            case 'easy':
                library.difficulty = 6;
                library.renderScreen('easy-level');
                console.log(cards);
                break;
            case 'normal':
                library.difficulty = 12;
                library.renderScreen('easy-level');
                console.log(cards);
                break;
            case 'hard':
                library.difficulty = 18;
                library.renderScreen('easy-level');
                console.log(cards);
                break;
        }
    });
    container.appendChild(startButton);
}

library.blocks['lobbyH1'] = createLobbyH1;
library.blocks['lobbyBtnMenu'] = createLobbyBtnMenu;
library.blocks['startButton'] = createStartBtn;

library.screens['lobby-screen'] = renderLobbySreen;

init();

library.renderScreen('lobby-screen');
