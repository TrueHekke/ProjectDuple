function renderLobbySreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main-sreen');

    window.application.renderBlock('lobbyH1', main);
    window.application.renderBlock('lobbyBtnMenu', main);
    window.application.renderBlock('startButton', main);

    app.appendChild(main);
}

function createLobbyH1(container) {
    const lobbyH1 = document.createElement('h1');
    lobbyH1.textContent = 'Выбери сложность';
    lobbyH1.classList.add('main-sreen__h1');
    container.appendChild(lobbyH1);
}

function createLobbyBtnMenu(container) {
    const lobbyBtnMenu = document.createElement('div');
    lobbyBtnMenu.classList.add('main-sreen__btnMenu');
    const easyButton = document.createElement('button');
    easyButton.textContent = '1';
    easyButton.classList.add('main-sreen__button');
    easyButton.addEventListener('click', function () {
        window.application.levels.value = 'easy';
    });
    const normalButton = document.createElement('button');
    normalButton.textContent = '2';
    normalButton.classList.add('main-sreen__button');
    normalButton.addEventListener('click', function normalLevel() {
        window.application.levels.value = 'normal';
    });
    const hardButton = document.createElement('button');
    hardButton.textContent = '3';
    hardButton.classList.add('main-sreen__button');
    hardButton.addEventListener('click', function hardLevel() {
        window.application.levels.value = 'hard';
    });
    container.appendChild(lobbyBtnMenu);
    lobbyBtnMenu.appendChild(easyButton);
    lobbyBtnMenu.appendChild(normalButton);
    lobbyBtnMenu.appendChild(hardButton);
}

function createStartBtn(container) {
    const startButton = document.createElement('button');
    startButton.textContent = 'Старт';
    startButton.classList.add('main-sreen__startBtn');
    startButton.addEventListener('click', function () {
        switch (window.application.levels.value) {
            case 'easy':
                window.application.renderScreen('easy-level');
                break;
            case 'normal':
                window.application.renderScreen('normal-level');
                break;
            case 'hard':
                window.application.renderScreen('hard-level');
                break;
        }
    });
    container.appendChild(startButton);
}

window.application.blocks['lobbyH1'] = createLobbyH1;
window.application.blocks['lobbyBtnMenu'] = createLobbyBtnMenu;
window.application.blocks['startButton'] = createStartBtn;

window.application.screens['lobby-screen'] = renderLobbySreen;
