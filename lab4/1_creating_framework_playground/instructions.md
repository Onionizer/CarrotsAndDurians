LAB 4 - PROJECT 1
--------------------

Welcome to Project 1 - Creating a Playground! It's time to build up a "playground"
to practice React code in from scratch. Note that similar steps can be followed for other
frameworks, except the URLs in Challenge #1 will need changing, as well
as the example syntax in both Challenge #1 and Challenge #2.

For Vue-specific instructions, see "Vue Bonus" below.

Remember: You only need to attempt 1 challenge from each project to turn in the
lab! (Although are welcome to attempt more!)


The end result of this Lab will look like this:


            Hello React World!

            Use of components:
            10 + 20 = 30
            3 + 100 = 103
            10 - 20 = -10
            10 + 20 + 30 + 40 + 50 = 150
            10 * 20 * 30 * 40 * 50 = 12000000




Challenge #1 - Adding React
-------------------------------------------

This first challenge is long, but mostly just "copy and paste" -- follow it for a "React Playground"!

Part 1:
Let's start by creating a playground with embedding browser-based dev copy of React. Add the 
following to HEAD to add in a development version of React, using the unpkg CDN:

        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

Part 2:
To write normal React code, we will need JSX syntax, a non-standard extension to JavaScript that
embeds HTML syntax in JS tags and script files. Same as before, but add in the following script
tag to head to allow for the "babel" language transpiler to be activated:
        
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

Part 3:
To add code in React (that is, the special JSX syntax), we need to use type="text/babel":

        <script type="text/babel">
        </script>

Part 4: 
Now, we can write code in JSX. Paste in the following "Hello world"  example:

        function App() {
            return (
                <div className="App">
                    <h1>Hello React World!</h1>
                </div>
            );
        }

Part 5:
Finally, we want to render it on the page. The supplied HTML has a id="root", so we can do:

        const rootElement = document.getElementById('root');
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
        









Challenge #2 - Using components
-------------------------------------------

Part 1:
Add a "SumExample" component. This uses destructuring syntax to add in "props"
or parameters to our components:

        function SumExample({ a, b }) {
            let results = a + b;
            return (
                <p className="SumExample">{ a } + {  b } = { results }</p>
            )
        }


Part 2:
Can you update the App component to use SumExample to show the following:
10 + 20 = 30
3 + 100 = 103

Hint: To use props in React, use something like:
        <SumExample a={100} />










Challenge #3 - More Complex Data components
-------------------------------------------

Now that you've practiced Sums, implement more components to do the following:

        <SubtractExample a={10} b={20} />

        <SumAll arr={[ 10, 20, 30, 40, 50 ]} />

        <MultAll arr={[ 10, 20, 30, 40, 50 ]} />



Hint:
Arrays are no different than numbers when it comes to props. Consider code like:

        let sum = 0;
        for (const num of arr) {
            sum += num;
        }




Challenge #4 - Click Event
-------------------------------------------

https://react.dev/

Finally, see if you can research via online resources (such as the great, rewritten
several years ago "React.Dev") how to attach a click event in React. For now, just
get a "console.log" (or even an "alert") to work.


Hint:
There are a few ways to do it in React. Pick which ever looks most similar
to the syntax you are using now!











Bonus Challenge (Only attempt if you have time!)
------------------------
Can you do the same thing for Vue.js 3?

Hint: Try this out, using module syntax, which we'll cover later:


        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        </script>

        <div id="root">{{ message }}</div>

        <script type="module">
          import { createApp } from 'vue'

          createApp({
            data() {
              return {
                message: 'Hello Vue!'
              }
            }
          }).mount('#root')
        </script>
