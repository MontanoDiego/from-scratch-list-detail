// import

import { getItem } from '../fetch-utils.js';
import { renderItemDetails } from '../render-utils.js';

// on load item details and render them

const nameSpan = document.getElementById('item-span');
const itemDetailContainer = document.getElementById('item-detail-container');

window.addEventListener('load', async () => {
    const param = new URLSearchParams(window.location.search);
    const id = param.get('id');

    const item = await getItem(id);

    // need finish render item details
    const itemDetailEl = renderItemDetails(item);
    itemDetailContainer.append(itemDetailEl);

});