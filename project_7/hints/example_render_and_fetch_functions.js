let isLoading = false;

function render() {
    // TODO: This function will need some updating...
    let bookDiv = document.querySelector('#books_div');
    let pagesSpan = document.querySelector('#pages_span');
    pagesSpan.textContent = '0 / 1'; // TODO: Make pagination reflect the results
    if (isLoading) {
        bookDiv.innerHTML = '<div class="loader">Loading...</div>';
    } else {
        // TODO: Add sample book HTML to DOM for EACH book in the results.
        // HINT: innerHTML and/or createElement is useful here for DOM manipulation! 
    }
}


function doFetch() {
    const url = 'http://openlibrary.org/search.json?q=' + query + '&limit=10&offset=' + page;
    console.log('making query to ', url);

    // TODO: Will actually have to do a query

    // Change global variable and rerender:
    isLoading = true;
    render();
}

