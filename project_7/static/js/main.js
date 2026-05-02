// BEHAVIOR
// The application must utilize the Open Library API 
// The application must perform text searching and paginating through books provided by the API
// The application must show book cover, title, author, language, and year information, as shown in the video and provided in the skeleton
// The application must allow forward and backward pages navigation that makes additional appropriate queries to the API
// The application must show a "loading" spinner when data is in-transit
// CSS and HTML skeleton is already provided

// New search goes to page 1.


console.log("Loaded main.js . . .");

let pageSize = 10;
let query = 'the lord of the rings';
let books = [];
let page = 0;
let totalPages = 0;


function onSearch() {
    // get id="search_input"
    page = 0;   // reset to 0
    let searchInput = document.querySelector("#search_input");    
    query = searchInput.value;
    console.log(`query: ${query}`)


    // fetch the results, which also renders.
    doFetch();
}


let isLoading = false;

function render() {
    let booksDiv = document.querySelector('#books_div'); // <div class="Books" id="books_div">
    let pagesSpan = document.querySelector('#pages_span');    
    pagesSpan.textContent = `${page + 1} / ${totalPages}`; 
    
    if (isLoading) {
        console.log("render(): Loading . . .");
        booksDiv.innerHTML = '<div class="loader">Loading...</div>';
    } else {
        console.log("render(): Not loading - let's go!");
    
        // HINT: innerHTML and/or createElement is useful here for DOM manipulation! 
        booksDiv.innerHTML = '';

        for (let book of books) {
            console.log(book);
            let singleBookDiv = createBookDiv(book)
            booksDiv.appendChild(singleBookDiv);
        }
    }
}

function createBookDiv(book) {
    let singleBookDiv  = document.createElement('div');
    singleBookDiv.classList.add("Books-book");
    singleBookDiv.innerHTML = 
        `   <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="cover">
            <div class="Books-book-details">
                <div class="Books-book-title">${book.title}</div>
                <strong>Author:</strong> ${book.author_name[0]}<br>
                <strong>Language:</strong> ${book.language}<br>
                <strong>Year Published:</strong> ${book.first_publish_year}<br>
            </div>
            `
    ;
    return singleBookDiv;
}


function doFetch() {
    const url = 'https://openlibrary.org/search.json?q=' + query + '&limit=10&offset=' + page;
    console.log('making query to ', url);

    // TODO: Will actually have to do a query
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data', data);
            // set variables....

            books = data.docs;
            totalPages = Math.ceil(data.numFound / pageSize);

            isLoading = false;
            render();
        });

    // Change global variable and rerender:
    isLoading = true;
    render();
}


function decrementPage() {
    //  check if at limit
    if (page === 0) {
        console.log("decrementPage() - page is at 0, so no op");
        return;
    } else {
        page -= 1;
        doFetch();
    }
}

function incrementPage() {
    if (page === totalPages - 1) {
        console.log(`incrementPage() - page: ${page}, totalPages: ${totalPages}, so no op`);
        return;
    } else {
        page += 1;
        doFetch();
    }
}