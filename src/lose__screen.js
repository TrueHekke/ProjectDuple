function renderLoseScreen() {
    const app = document.querySelector('.app');
    clear();
    const main = document.createElement('div');
    main.classList.add('main-sreen');

    window.application.renderBlock('loseH1', main);
    window.application.renderBlock('loseContent', main);
    window.application.renderBlock('resetLoseButton', main);

    app.appendChild(main);
}

function createLoseH1(container) {
    const loseH1 = document.createElement('h1');
    loseH1.textContent = 'Вы проиграли!';
    loseH1.classList.add('main-sreen__h1');
    container.appendChild(loseH1);
}

function createLoseContent(container) {
    const contentMain = document.createElement('div');
    contentMain.classList.add('timerMain');
    const textContent = document.createElement('p');
    textContent.textContent = 'Затраченное время:';
    textContent.classList.add('timerContent');
    const timerTime = document.createElement('p');
    timerTime.textContent = `${window.application.realTime}`;
    timerTime.classList.add('timerTimeFinal');
    contentMain.appendChild(textContent);
    contentMain.appendChild(timerTime);
    container.appendChild(contentMain);
}

function createLoseResetBtn(container) {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Играть снова';
    resetButton.classList.add('main-sreen__startBtn');
    resetButton.addEventListener('click', function () {
        window.application.renderScreen('lobby-screen');
    });
    container.appendChild(resetButton);
}

window.application.blocks['loseH1'] = createLoseH1;
window.application.blocks['loseContent'] = createLoseContent;
window.application.blocks['resetLoseButton'] = createLoseResetBtn;

window.application.screens['lose-screen'] = renderLoseScreen;
