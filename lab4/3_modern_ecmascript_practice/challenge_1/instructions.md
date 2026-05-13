LAB 4 - PROJECT 3
--------------------

Welcome to Project 3 - ES6 Async Challenges! It's time to get practice with new types of syntax,
as well as tricky asynchronous code presented in an "isomorphic" context.

The first challenge show off "module" syntax as well as "async/await" syntax,
both gaining widespread support only circa ~2020-2023. The remaining challenges practice arrow
syntax (circa 2015-2020), as well as using functions as "first class citizens" and the underlying
behavior of promises (as well as async/await).

NOTE: You must run this activity using a web server! Otherwise, "module" syntax will not work.
Alternatively, if you are comfortable with the CLI, you can run Challenges 2+ with `node`.



Challenge #1 - Upgrading to 2020 JS
-------------------------------------------

Start by examining `my_main_module.js` and `my_other_module.js` -- they aren't working,
and it's our task now to fix them!

##### Part 1: Adding type="module"

Right now we aren't loading the script correctly! ES2020+ "Module" syntax is not enabled by default.
Let's start by adding a "type=module" to allow importing of a JS file that imports other JS files:

           <script type="module" src="my_main_module.js"></script>


#### Part 2: Adding async to functions

Right now, we aren't defining the function correctly! ES2020+ "async/await" syntax is not enabled by default.
Let's add a "async" keyword to the function to `my_main_module.js`, like:

          async function doFetch () { ....






Challenges #2-6 - `async_challenges.js`
-------------------------------------------

How to continue: Add `async_challenges.js` to the HTML page the same way `my_main_module.js`
was added. Then, follow the remaining challenges found in the comments of `async_challenges.js`

