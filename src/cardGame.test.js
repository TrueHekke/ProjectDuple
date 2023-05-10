/* eslint-disable prettier/prettier */
const { it, expect } = require('@jest/globals');
const createCard = require('./cardGame');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

it('createCard should create an img element with correct id and src', () => {
    const mockGameCards = [
        { id: 1, img: 'image1.png' },
        { id: 2, img: 'image2.png' },
        { id: 3, img: 'image3.png' },
    ];

    const dom = new JSDOM(`<!DOCTYPE html><body></body></html>`, {
        url: 'http://localhost',
    });
    global.window = dom.window;
    global.document = dom.window.document;
    global.navigator = dom.window.navigator;

    global.library = {
        gameCards: mockGameCards,
    };

    const card = createCard(1, 2);
    expect(card.src).toBe('http://localhost/image2.png');
    expect(card.id).toBe('1');

    delete global.window;
    delete global.document;
    delete global.navigator;
});
