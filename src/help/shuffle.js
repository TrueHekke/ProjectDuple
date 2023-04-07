const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

const values = ['6', '7', '8', '9', '10', 'Queen', 'King', 'Jack', 'Ace'];

function shuffle(count) {
    const cards = [];
    while (cards.length < count) {
        const randomSuits = Math.floor(Math.random() * suits.length);
        const randomValues = Math.floor(Math.random() * values.length);
        const card =
            window.application.cards[suits[randomSuits]][values[randomValues]];
        if (!cards.includes(card)) {
            cards.push(card);
        }
    }
    window.application.gameCards = [...cards, ...cards];
    return window.application.gameCards.sort(() => Math.random() - 0.5);
}
