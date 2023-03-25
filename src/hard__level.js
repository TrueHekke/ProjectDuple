function renderHardLevelSreen() {
    const app = document.querySelector('.app');

    clear();

    const main = document.createElement('div');
    main.classList.add('main__hard');

    window.application.renderBlock('timer', main);
    window.application.renderBlock('resetHardBtn', main);
    window.application.renderBlock('hardArea', main);

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

function createResetHardButton(container) {
    const resetHardBtn = document.createElement('button');
    resetHardBtn.textContent = 'Начать заново';
    resetHardBtn.classList.add('resetButton');
    resetHardBtn.onclick = function () {
        window.application.renderScreen('hard-level');
    };
    container.appendChild(resetHardBtn);
}

function createHardArea(container) {
    const hardArea = document.createElement('div');
    hardArea.classList.add('hardArea');
    const easyCards = shuffle(9);
    let element = '';
    let b = 1;
    let back = '';
    let clickVal = 0;
    easyCards.forEach((easyCard) => {
        element = document.createElement('img');
        element.src = easyCard.img;
        hardArea.appendChild(element);
    });
    setTimeout(function () {
        hardArea.innerHTML = '';
        while (b < 19) {
            back = document.createElement('img');
            back.src = window.application.cards.back.img;
            back.id = `${b}`;
            hardArea.appendChild(back);
            b++;
            back.onclick = function () {
                switch (this.id) {
                    case '1':
                        const newBack1 = this;
                        newBack1.src = window.application.gameCards[0].img;
                        newBack1.id = window.application.gameCards[0].id;
                        hardArea.insertBefore(newBack1, this);
                        break;
                    case '2':
                        const newBack2 = this;
                        newBack2.src = window.application.gameCards[1].img;
                        newBack2.id = window.application.gameCards[1].id;
                        hardArea.insertBefore(newBack2, this);
                        break;
                    case '3':
                        const newBack3 = this;
                        newBack3.src = window.application.gameCards[2].img;
                        newBack3.id = window.application.gameCards[2].id;
                        hardArea.insertBefore(newBack3, this);
                        break;
                    case '4':
                        const newBack4 = this;
                        newBack4.src = window.application.gameCards[3].img;
                        newBack4.id = window.application.gameCards[3].id;
                        hardArea.insertBefore(newBack4, this);
                        break;
                    case '5':
                        const newBack5 = this;
                        newBack5.src = window.application.gameCards[4].img;
                        newBack5.id = window.application.gameCards[4].id;
                        hardArea.insertBefore(newBack5, this);
                        break;
                    case '6':
                        const newBack6 = this;
                        newBack6.src = window.application.gameCards[5].img;
                        newBack6.id = window.application.gameCards[5].id;
                        hardArea.insertBefore(newBack6, this);
                        break;
                    case '7':
                        const newBack7 = this;
                        newBack7.src = window.application.gameCards[6].img;
                        newBack7.id = window.application.gameCards[6].id;
                        hardArea.insertBefore(newBack7, this);
                        break;
                    case '8':
                        const newBack8 = this;
                        newBack8.src = window.application.gameCards[7].img;
                        newBack8.id = window.application.gameCards[7].id;
                        hardArea.insertBefore(newBack8, this);
                        break;
                    case '9':
                        const newBack9 = this;
                        newBack9.src = window.application.gameCards[8].img;
                        newBack9.id = window.application.gameCards[8].id;
                        hardArea.insertBefore(newBack9, this);
                        break;
                    case '10':
                        const newBack10 = this;
                        newBack10.src = window.application.gameCards[9].img;
                        newBack10.id = window.application.gameCards[9].id;
                        hardArea.insertBefore(newBack10, this);
                        break;
                    case '11':
                        const newBack11 = this;
                        newBack11.src = window.application.gameCards[10].img;
                        newBack11.id = window.application.gameCards[10].id;
                        hardArea.insertBefore(newBack11, this);
                        break;
                    case '12':
                        const newBack12 = this;
                        newBack12.src = window.application.gameCards[11].img;
                        newBack12.id = window.application.gameCards[11].id;
                        hardArea.insertBefore(newBack12, this);
                        break;
                    case '13':
                        const newBack13 = this;
                        newBack13.src = window.application.gameCards[12].img;
                        newBack13.id = window.application.gameCards[12].id;
                        hardArea.insertBefore(newBack13, this);
                        break;
                    case '14':
                        const newBack14 = this;
                        newBack14.src = window.application.gameCards[13].img;
                        newBack14.id = window.application.gameCards[13].id;
                        hardArea.insertBefore(newBack14, this);
                        break;
                    case '15':
                        const newBack15 = this;
                        newBack15.src = window.application.gameCards[14].img;
                        newBack15.id = window.application.gameCards[14].id;
                        hardArea.insertBefore(newBack15, this);
                        break;
                    case '16':
                        const newBack16 = this;
                        newBack16.src = window.application.gameCards[15].img;
                        newBack16.id = window.application.gameCards[15].id;
                        hardArea.insertBefore(newBack16, this);
                        break;
                    case '17':
                        const newBack17 = this;
                        newBack17.src = window.application.gameCards[16].img;
                        newBack17.id = window.application.gameCards[16].id;
                        hardArea.insertBefore(newBack17, this);
                        break;
                    case '18':
                        const newBack18 = this;
                        newBack18.src = window.application.gameCards[17].img;
                        newBack18.id = window.application.gameCards[17].id;
                        hardArea.insertBefore(newBack18, this);
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
    container.appendChild(hardArea);
}

window.application.blocks['timer'] = createTimer;
window.application.blocks['resetHardBtn'] = createResetHardButton;
window.application.blocks['hardArea'] = createHardArea;

window.application.screens['hard-level'] = renderHardLevelSreen;
