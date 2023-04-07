function renderNormalLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main__normal');

    window.application.renderBlock('timer', main);
    window.application.renderBlock('resetNormBtn', main);
    window.application.renderBlock('normalArea', main);

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

function createResetNormalButton(container) {
    const resetNormBtn = document.createElement('button');
    resetNormBtn.textContent = 'Начать заново';
    resetNormBtn.classList.add('resetButton');
    resetNormBtn.onclick = function () {
        window.application.renderScreen('normal-level');
    };
    container.appendChild(resetNormBtn);
}

function createNormalArea(container) {
    const normArea = document.createElement('div');
    normArea.classList.add('normArea');
    const easyCards = shuffle(6);
    let element = '';
    let b = 1;
    let back = '';
    let clickVal = 0;
    easyCards.forEach((easyCard) => {
        element = document.createElement('img');
        element.src = easyCard.img;
        normArea.appendChild(element);
    });
    setTimeout(function () {
        normArea.innerHTML = '';
        while (b < 13) {
            back = document.createElement('img');
            back.src = window.application.cards.back.img;
            back.id = `${b}`;
            normArea.appendChild(back);
            b++;
            back.onclick = function () {
                switch (this.id) {
                    case '1':
                        const newBack1 = this;
                        newBack1.src = window.application.gameCards[0].img;
                        newBack1.id = window.application.gameCards[0].id;
                        normArea.insertBefore(newBack1, this);
                        break;
                    case '2':
                        const newBack2 = this;
                        newBack2.src = window.application.gameCards[1].img;
                        newBack2.id = window.application.gameCards[1].id;
                        normArea.insertBefore(newBack2, this);
                        break;
                    case '3':
                        const newBack3 = this;
                        newBack3.src = window.application.gameCards[2].img;
                        newBack3.id = window.application.gameCards[2].id;
                        normArea.insertBefore(newBack3, this);
                        break;
                    case '4':
                        const newBack4 = this;
                        newBack4.src = window.application.gameCards[3].img;
                        newBack4.id = window.application.gameCards[3].id;
                        normArea.insertBefore(newBack4, this);
                        break;
                    case '5':
                        const newBack5 = this;
                        newBack5.src = window.application.gameCards[4].img;
                        newBack5.id = window.application.gameCards[4].id;
                        normArea.insertBefore(newBack5, this);
                        break;
                    case '6':
                        const newBack6 = this;
                        newBack6.src = window.application.gameCards[5].img;
                        newBack6.id = window.application.gameCards[5].id;
                        normArea.insertBefore(newBack6, this);
                        break;
                    case '7':
                        const newBack7 = this;
                        newBack7.src = window.application.gameCards[6].img;
                        newBack7.id = window.application.gameCards[6].id;
                        normArea.insertBefore(newBack7, this);
                        break;
                    case '8':
                        const newBack8 = this;
                        newBack8.src = window.application.gameCards[7].img;
                        newBack8.id = window.application.gameCards[7].id;
                        normArea.insertBefore(newBack8, this);
                        break;
                    case '9':
                        const newBack9 = this;
                        newBack9.src = window.application.gameCards[8].img;
                        newBack9.id = window.application.gameCards[8].id;
                        normArea.insertBefore(newBack9, this);
                        break;
                    case '10':
                        const newBack10 = this;
                        newBack10.src = window.application.gameCards[9].img;
                        newBack10.id = window.application.gameCards[9].id;
                        normArea.insertBefore(newBack10, this);
                        break;
                    case '11':
                        const newBack11 = this;
                        newBack11.src = window.application.gameCards[10].img;
                        newBack11.id = window.application.gameCards[10].id;
                        normArea.insertBefore(newBack11, this);
                        break;
                    case '12':
                        const newBack12 = this;
                        newBack12.src = window.application.gameCards[11].img;
                        newBack12.id = window.application.gameCards[11].id;
                        normArea.insertBefore(newBack12, this);
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
    container.appendChild(normArea);
}

window.application.blocks['timer'] = createTimer;
window.application.blocks['resetNormBtn'] = createResetNormalButton;
window.application.blocks['normalArea'] = createNormalArea;

window.application.screens['normal-level'] = renderNormalLevelSreen;
