const library = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        library.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        library.blocks[blockName](container);
    },
    timers: {},
    realTime: {},
    levels: {},
    gameCards: [],
    backs: [],
};

export default library;
