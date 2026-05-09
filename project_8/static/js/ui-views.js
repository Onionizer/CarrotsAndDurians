// Add your code to this file to solve this assignment!

function renderNavbar() {
    // DONE: "renderNavbar" is mostly complete, however only 1 button has a tab order
    let nav = document.querySelector('#navbar');
    let btn;
    
    // Hint: To create a "Hamburger Menu" icon, create a btn like below, then
    // create a toggleHamburger function, and then use the following code:
    btn = document.createElement('div');
    btn.innerHTML = 'MENU <span role="img" aria-label="Menu icon">&equiv;</span>';
    // btn.addEventListener('click', toggleHamburger);
    btn.setAttribute('role', 'button');
    // btn.setAttribute('class', 'Navbar-button');
    btn.classList.add('Navbar-button');
    btn.classList.add('hamburgerButton');
    btn.setAttribute('tabindex', '0'); // Should this have tab index? 
    nav.append(btn);
    // Do I need to hide this initially?

    // refactored so hamburger toggle can use this?
    createNavButtons();
}


function createNavButtons() {
    let nav = document.querySelector('#navbar');
    let btn;

    btn = document.createElement('div');
    btn.setAttribute('role', 'button');
    btn.setAttribute('class', 'Navbar-button');
    btn.setAttribute('tabindex', '0'); // set all to "0" will follow order on page
    btn.innerHTML = 'OUTLET MALL SHOPPING';
    btn.addEventListener('click', showWelcome);
    nav.append(btn);
    
    // Make sure all the navbar buttons have "role" 'button' and "tabindex" "0"
    btn = document.createElement('div');
    btn.setAttribute('class', 'Navbar-button');
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0'); 
    btn.innerHTML = 'View Return Policy';
    btn.addEventListener('click', showReturnInfo);
    nav.append(btn);

    btn = document.createElement('div');
    btn.setAttribute('class', 'Navbar-button');
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0'); 
    btn.innerHTML = 'View Shopping Cart';
    btn.addEventListener('click', showCart);
    nav.append(btn);
}


/* Hint: Create a toggleHamburger function to show or hide the menu. There are two valid approaches to solve this:
 * 1. Using more JavaScript: Adding and removing DOM content when toggled
 * 2. Using more CSS: Only using JS to toggle CSS classes, then doing the showing / hiding / adjusting entirely in CSS 
 */
function toggleHamburger() { 
    console.log("Toggling hamburger. . .");
    // guess I need to check if I'm turning it on or off
}


function renderProduct(product) {
    // console.log("Rendering product images:" + product.images);

    let div = document.createElement('div');
    div.setAttribute('class', 'Item'); // Ensure gets 'Item' class
    
    // TODO: #1 - Accessibility
    // 1a) DONE: Ensure the button below exists in tab (use "tabindex")
    // 1b) DONE: Make sure the two emoji characters below (look for &#....; syntax) are accessible
    // (see "span" around icon in menu button above as example). 
    // btn.innerHTML = 'MENU <span role="img" aria-label="Menu icon">&equiv;</span>';
    // So have the text be in div, and have span be the image? Or just wrap the emoji with span?

    // Fill in "aria-label" with an accessible description of the emoji.

    // DONE: #2 - Performance: Switch to use a smaller product image the img tag below (hint: look at API data for another URL)
    div.innerHTML = `
        <div class="Item-rating">
            <span role="img" aria-label="Product Rating">&#11088;</span>
            ${ product.rating }
        </div>
        <div class="Item-imageWrapper">
          <img src="${ product.thumbnail }" />  
        </div>
        <div class="Item-details">
          <div class="Item-button" tabIndex="0" onclick="addToCart(${ product.price })">
            <span role="img" aria-label="Product Price">&#128722;</span>
            \$${ product.price }
          </div>
          <div class="Item-title">${ product.title }</div>
          <p class="Item-description">${ product.description }</p>
        </div>
    `;
    return div;
}


// The following 4 functions are completed for you, and don't require any changes:
function showWelcome() {
    showShopModal('<h1>Welcome to OUTLET MALL! We hope you shop here forever!</h1>');
}

function showReturnInfo() {
    showShopModal('<h1>Return Policy</h1><p>Remember: Do not return products, it is against policy!</p>');
}

function showCart() {
    showShopModal('<h1>Shopping Cart</h1><p><strong>TOTAL:</strong> ' + Math.round(cartPrice * 100) / 100 + '</p>');
}

function renderProducts(products) {
    document.querySelector('#products_div').append(...products.map(renderProduct));
}
