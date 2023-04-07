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
    let back = '';
    let clickVal = 0;
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
            back.id = `${b}`;
            easyArea.appendChild(back);
            b++;
            back.onclick = function () {
                switch (this.id) {
                    case '1':
                        const newBack1 = this;
                        newBack1.src = window.application.gameCards[0].img;
                        newBack1.id = window.application.gameCards[0].id;
                        easyArea.insertBefore(newBack1, this);
                        break;
                    case '2':
                        const newBack2 = this;
                        newBack2.src = window.application.gameCards[1].img;
                        newBack2.id = window.application.gameCards[1].id;
                        easyArea.insertBefore(newBack2, this);
                        break;
                    case '3':
                        const newBack3 = this;
                        newBack3.src = window.application.gameCards[2].img;
                        newBack3.id = window.application.gameCards[2].id;
                        easyArea.insertBefore(newBack3, this);
                        break;
                    case '4':
                        const newBack4 = this;
                        newBack4.src = window.application.gameCards[3].img;
                        newBack4.id = window.application.gameCards[3].id;
                        easyArea.insertBefore(newBack4, this);
                        break;
                    case '5':
                        const newBack5 = this;
                        newBack5.src = window.application.gameCards[4].img;
                        newBack5.id = window.application.gameCards[4].id;
                        easyArea.insertBefore(newBack5, this);
                        break;
                    case '6':
                        const newBack6 = this;
                        newBack6.src = window.application.gameCards[5].img;
                        newBack6.id = window.application.gameCards[5].id;
                        easyArea.insertBefore(newBack6, this);
                        break;
                }
                if (clickVal < 2) {
                    window.application.backs.push(this.id);
                    clickVal++;
                }
                if (clickVal === 2 && this.id === window.application.backs[0]) {
                    alert('Вы победили!');
                    clickVal = 0;
                    window.application.backs = [];
                }
                if (clickVal === 2 && this.id !== window.application.backs[0]) {
                    alert('Вы проиграли!');
                    window.application.backs = [];
                    clickVal = 0;
                }
            };
        }
    }, 5000);
    container.appendChild(easyArea);
}

window.application.blocks['timer'] = createTimer;
window.application.blocks['resetEasyBtn'] = createResetEasyButton;
window.application.blocks['easyArea'] = createEasyArea;

window.application.screens['easy-level'] = renderEasyLevelSreen;
