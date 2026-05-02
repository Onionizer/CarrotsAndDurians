## Setting up global state variables

You might want to use a set of global state variables.
These let you use a single "render" function, just like
the pattern we've seen in previous labs. For example:

        let pageSize = 10;
        let query = 'the lord of the rings';
        let books = [];
        let page = 0;
        let totalPages = 0;



## Finishing the "doFetch" function


- Hint: Remember to set the global state variables with data received

- HINT: The generic code to do a "fetch" is below...

      fetch(url)
          .then(response => response.json())
          .then(data => {
              console.log('data', data);
              // set variables....
          });


- Hint: When sending the fetch, make sure to set to be loading and rerender

- Hint: After receiving the fetch, make sure to set to be NOT loading (false),
  and rerender








## Creating a "onSearch" function

You will need to attach the "search" button to a search
function, which updates data and tries to fetch and rerender.
For example, using the above "doFetch", we could do:

        function onSearch() {
            query = "Shakespeare";
            doFetch();
        }


- Hint: Remember to get value from search input







## Going through pagination

Consider 2 functions for this:

        function decrementPage() { ... }
        function incrementPage() { ...  }




## Constructing the URL

- Hint: API URLs are all in the GET params style, e.g. "&limit=10"

- Hint: Use plus (or backticks) to format the URL with variables, e.g "&limit=" + limit





## Sending search results

- Hint: When sending the fetch, make sure to set to be loading and rerender

- Hint: After receiving the fetch, make sure to set to be NOT loading (false),
  and rerender





## Rendering results snippet

- Hint: For render, think about how to create the HTML in the "example_book.html" snippet:

- Hint #2: Consider either backticks + innerHTML, or createElement!
