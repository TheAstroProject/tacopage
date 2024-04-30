import { content } from './index';

const renderMenu = () => {
    const itemList = [
        {name: 'Carne Asada Tacos', price: '$$$'},
        {name: 'Al Pastor Tacos', price: '$$$'},
        {name: 'Tacos de Lengua', price: '$$$'},
        {name: 'Pollo Asado Tacos', price: '$$$'},
        {name: 'Tacos Vampiros', price: '$$$'},
        {name: 'Birria Tacos', price: '$$$'},
        {name: 'Agua de Jamaica', price: '$$$'},
        {name: 'Strawberry Horchata', price: '$$$'}
    ];

    for (let i = 0; i < 8; i++) {
        const item = document.createElement('div');
        const photo = document.createElement('div');
        const info = document.createElement('div');
        const name = document.createElement('div');
        const price = document.createElement('div');
        const addBtn = document.createElement('button');

        item.setAttribute('class', 'item');
        photo.setAttribute('class', 'photo');
        info.setAttribute('class', 'info');
        name.setAttribute('class', 'name');
        price.setAttribute('class', 'price');
        addBtn.setAttribute('class', 'add');

        name.textContent = `${itemList[i].name}`;
        price.textContent = `${itemList[i].price}`;
        addBtn.textContent = 'Add to Order';

        content.appendChild(item);
        item.appendChild(photo);
        item.appendChild(info);
        info.appendChild(name);
        info.appendChild(price);
        item.appendChild(addBtn);
    }

    content.classList.add('content-menu');
};

export {
    renderMenu
};