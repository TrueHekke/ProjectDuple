function renderLobbySreen(){
    const app = document.querySelector('.app');
    
    clear();

    const main = document.createElement('div');
    main.classList.add('main-sreen');

    window.application.renderBlock('lobbyH1', main);
    window.application.renderBlock('lobbyBtnMenu', main);
    window.application.renderBlock('startButton', main);

    app.appendChild(main);
}

function createLobbyH1(container){
    const lobbyH1 = document.createElement('h1');
    lobbyH1.textContent = 'Выбери сложность';
    lobbyH1.classList.add('main-sreen__h1');
    container.appendChild(lobbyH1);
}

function createLobbyBtnMenu(container){
    const lobbyBtnMenu = document.createElement('div');
    lobbyBtnMenu.classList.add('main-sreen__btnMenu');
    const easyButton = document.createElement('button');
    easyButton.textContent = '1';
    easyButton.classList.add('main-sreen__button');
    easyButton.addEventListener('click',function (){
        window.application.buttons.value = 'easy';
    });
    const normalButton = document.createElement('button');
    normalButton.textContent = '2';
    normalButton.classList.add('main-sreen__button');
    normalButton.addEventListener('click',function normalLevel(){
        window.application.buttons.value = 'normal';
    });
    const hardButton = document.createElement('button');
    hardButton.textContent = '3';
    hardButton.classList.add('main-sreen__button');
    hardButton.addEventListener('click',function hardLevel(){
        window.application.buttons.value = 'hard';
    });
    container.appendChild(lobbyBtnMenu);
    lobbyBtnMenu.appendChild(easyButton);
    lobbyBtnMenu.appendChild(normalButton);
    lobbyBtnMenu.appendChild(hardButton);
}

function createStartBtn(container){
    const startButton = document.createElement('button');
    startButton.textContent = 'Старт';
    startButton.classList.add('main-sreen__startBtn');
    startButton.addEventListener('click',function(){
        if(window.application.buttons.value === 'easy'){
            console.log('lets easy')
            //Здесь будет переход на лёгкий уровень сложности
        } else if(window.application.buttons.value === 'normal'){
            console.log('lets normal')
            //Здесь переход на средний
        }else if(window.application.buttons.value === 'hard'){
            console.log('lets hard')
            //А здесь на большой
        }
    })//Не стал добавлять очистку предыдущий значений, если несколько раз нажимать на кнопки, потому что в будущем вместо консоль лога будет переход на другую страницу
    container.appendChild(startButton);
}

window.application.blocks['lobbyH1'] = createLobbyH1;
window.application.blocks['lobbyBtnMenu'] = createLobbyBtnMenu;
window.application.blocks['startButton'] = createStartBtn;

window.application.screens['lobby-screen'] = renderLobbySreen;

