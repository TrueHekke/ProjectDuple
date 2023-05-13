/* eslint-disable prettier/prettier */
const createCard = function (id, realId) {
    const card = document.createElement('img');
    const findCard = library.gameCards.find(
        (gameCard) => gameCard.id === realId
    );
    card.src = findCard.img;
    card.id = id;
    return card;
};

module.exports = createCard;
