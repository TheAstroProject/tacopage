import { content } from './index';

const renderContact = () => {
    const card = document.createElement('div');
    const number = document.createElement('div');
    const address = document.createElement('div');
    const map = document.createElement('div');

    card.setAttribute('class', 'card');
    number.setAttribute('class', 'number');
    address.setAttribute('class', 'address');
    map.setAttribute('class', 'map');

    number.textContent = '☎️ +1 ###-###-####';
    address.textContent = '🏠 Random Street Address';

    content.appendChild(card);
    card.appendChild(number);
    card.appendChild(address);
    card.appendChild(map);

    content.classList.remove('content-menu');
};

export {
    renderContact
};