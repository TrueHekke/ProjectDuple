import library from './library';
import { cards } from './cards';

const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

const values = ['6', '7', '8', '9', '10', 'Queen', 'King', 'Jack', 'Ace'];

export function shuffle(count) {
    const cardsForShuffle = [];
    console.log(count);
    while (cardsForShuffle.length < count) {
        const randomSuits = Math.floor(Math.random() * suits.length);
        const randomValues = Math.floor(Math.random() * values.length);
        const card = cards[suits[randomSuits]][values[randomValues]];
        if (!cardsForShuffle.includes(card)) {
            cardsForShuffle.push(card);
        }
    }
    library.gameCards = [...cardsForShuffle, ...cardsForShuffle];
    return library.gameCards.sort(() => Math.random() - 0.5);
}
