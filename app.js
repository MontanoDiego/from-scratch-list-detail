/* Imports */

import { renderItem } from './render-utils.js';
import { getAllItems, getItem } from './fetch-utils.js';

/* Get DOM Elements */
const itemContainer = document.getElementById('item-list-container');


/* State */

// no state declarations

/* Events */
window.addEventListener('load', async () => {
    // get all items and assign to variable
    const items = await getAllItems();

    // for loop to render all items to page
    for (let item of items) {
        const itemEl = renderItem(item);
        itemContainer.append(itemEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
