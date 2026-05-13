import { getURL } from './my_other_module.js';

async function doFetch() {
    const url = getURL('test');
    document.querySelector('#api_url').textContent = url;
    
    // Note how we can do "await" below: The fetch's "then" is written as "await"
    // instead, for simpler syntax and fewer "nested callbacks" or confusing logic:
    const response = await fetch(url);
    const data = await response.json();
    /*
    // Old way, for comparison:
    fetch(url)
        .then(response => response.json())
        .then(data => { ...
    */

    // Now, add to page:
    const output = document.querySelector('#output');
    for (const item of data) {
        output.innerHTML += `
            <h1>${item.name}</h1>
            <p><strong>Language:</strong> ${item.language}</p>
            <p><strong>Size:</strong> ${item.size}</p>
            <p><strong>Avatar:</strong> <img src="${item.owner.avatar_url}" style="height: 50px" /></p>
        `;
    }
}

setTimeout(doFetch, 1000); // run after 1 second
