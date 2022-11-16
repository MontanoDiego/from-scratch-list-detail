// all render utilities to be called on page load

export function renderItem(i) {
    const itemEl = document.createElement('a');
    itemEl.href = `./details/?id=${i.id}`;
    itemEl.classList.add('item-card');

    const nameEl = document.createElement('h3');
    nameEl.textContent = i.name;
    nameEl.classList.add('item-name');

    const imgEl = document.createElement('img');
    imgEl.classList.add('home-img');
    imgEl.src = i.img;

    itemEl.append(nameEl, imgEl);
    
    return itemEl;
}

// render detail page elements

export function renderItemDetails(e) {
    const itemDetailEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const imgEl = document.createElement('img');
    const appearanceEl = document.createElement('h3');
    const descriptionEl = document.createElement('p');

    nameEl.textContent = e.name;
    imgEl.src = e.img;
    appearanceEl.textContent = e.firstAppearance;
    descriptionEl.textContent = e.description;



    imgEl.classList.add('detail-img');

    itemDetailEl.append(nameEl, imgEl, appearanceEl, descriptionEl);
    return itemDetailEl;
}