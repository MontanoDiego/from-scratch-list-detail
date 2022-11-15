// all render utilities to be called on page load

export function renderItem(i) {
    const itemEl = document.createElement('a');
    itemEl.href = `./game/?id=${i.id}`;
    itemEl.classList.add('item-card');

    const nameEl = document.createElement('h3');
    nameEl.textContent = i.name;
    nameEl.classList.add('item-name');

    const imgEl = document.createElement('img');
    imgEl.src = i.img;

    itemEl.append(nameEl, imgEl);
    
    return itemEl;
}