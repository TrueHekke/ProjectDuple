import library from './library';

export function clear() {
    const app = document.querySelector('.app');
    app.textContent = '';
    library.timers = [];
}
