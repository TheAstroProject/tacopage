import { content } from './index';

const renderHome = () => {
    const greeting = document.createElement('h3');
    const hero = document.createElement('div');
    const orderBtn = document.createElement('button');

    greeting.setAttribute('class', 'greeting');
    hero.setAttribute('class', 'hero');
    orderBtn.setAttribute('class', 'order');

    greeting.textContent = 'We Cater Special Event, Birthday Parties, and Business Events!';
    orderBtn.textContent = 'Schedule A Consultation';

    content.appendChild(greeting);
    content.appendChild(hero);
    content.appendChild(orderBtn);

    content.classList.remove('content-menu');
}

export {
    renderHome
};