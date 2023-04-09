const library = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        window.application.blocks[blockName](container);
    },
    timers: {},
    realTime: {},
    levels: [],
    gameCards: [],
    backs: [],
};
window.application = library;
