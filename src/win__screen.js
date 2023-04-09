function renderWinScreen() {
    const app = document.querySelector('.app');
    clear();
    const main = document.createElement('div');
    main.classList.add('main-sreen');

    window.application.renderBlock('winH1', main);
    window.application.renderBlock('winContent', main);
    window.application.renderBlock('resetButton', main);

    app.appendChild(main);
}

function createWinH1(container) {
    const winH1 = document.createElement('h1');
    winH1.textContent = 'Вы выиграли!';
    winH1.classList.add('main-sreen__h1');
    container.appendChild(winH1);
}

function createWinContent(container) {
    const contentMain = document.createElement('div');
    contentMain.classList.add('timerMain');
    const textContent = document.createElement('p');
    textContent.textContent = 'Затраченное время:';
    textContent.classList.add('timerContent');
    const timerTime = document.createElement('p');
    timerTime.textContent = `${window.application.realTime}`;
    timerTime.classList.add('timerTime');
    contentMain.appendChild(textContent);
    contentMain.appendChild(timerTime);
    container.appendChild(contentMain);
}

function createResetBtn(container) {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Играть снова';
    resetButton.classList.add('main-sreen__startBtn');
    resetButton.addEventListener('click', function () {
        window.application.renderScreen('lobby-screen');
    });
    container.appendChild(resetButton);
}

window.application.blocks['winH1'] = createWinH1;
window.application.blocks['winContent'] = createWinContent;
window.application.blocks['resetButton'] = createResetBtn;

window.application.screens['win-screen'] = renderWinScreen;
