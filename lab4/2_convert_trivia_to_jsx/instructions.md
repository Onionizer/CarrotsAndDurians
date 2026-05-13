# Project 2 - Game of Thrones Trivia Lab Project

For this lab project, you will be transforming a plain HTML page
and some onClick events into a React JSX powered app. This will
be useful practice for ANY framework that uses JSX, since these
"gotchas" will apply to any use of this particular syntax.

The plain HTML/CSS/JS page is in the "legacy/" directory. 
Go ahead and open it to see how it works.



Challenge #1: Transferring the HTML
----------------------

Examine "react_starting_file.html". Your first challenge is transferring the HTML 
from the "old" app into the "new" app. This can be done in a big copy & paste from
the HTML file in the "legacy/" directory.

HTML can generally be added as-is to JSX, with a few changes. Challenges #2-5 can be
completed in any order, and each fixes one "mistake" of converting to JSX.





Challenge #2: Self-closing tags
----------------------

While HTML will tolerate unclosed tags, such as

            <img src="i.png">
            <br>
            <hr>

The stricter version of HTML employed by JSX does not (XHTML). You must include
the "/>" for any self-closing tag (img, br, hr). The above would look like:

            <img src="i.png" />
            <br />
            <hr />

This one sometimes generates confusing error messages, so be careful!




Challenge #3: className
----------------------

The attribute `class` becomes `className`: The newer versions of React will
auto-correct this for you (previous ones would just fail), but it's still
considered incorrect and will cause warnings. Instead of doing:

           <div class="ExampleClass"></div>

You should do:

          <div className="ExampleClass"></div>




Challenge #4: Style attributes
----------------------


React makes it easier to embed style. Instead of:

          <div style="height: 30px; background-color: blue"></div>

You should do:

          <div style={{height: "30px", backgroundColor: "blue"}}></div>


Explanation: This is because the '={ ... }' syntax is not a real attribute, but instead
creating an "Object" to attach with JavaScript expression syntax.





Challenge #5: onClick handlers
----------------------

React lets you add onClick (and onMouseOver, onChange, etc) events with ease,
but you will need to use function syntax. So instead of:

          <div onClick="myFunction()"></div>

You should do:

          <div onClick={myFunction}></div>
Or:

          <div onClick={() => myFunction()}></div>


#### Ch#5 Hint 1:

Infinite loop warning! You should (probably*) NEVER do:

         <div onClick={myFunction()}></div>

That is, call the function with myFunction() INSIDE the onClick={ .. }.
This will run the function when the div is getting rendered, NOT on the
click event. This can even cause an infinite loop, or lock up the browser!

(*The time you might see this is if the function is in the unusual circumstance of
 returning a function that you DO intend to attach, e.g. something like
 "getClickEventHandler()", but not the event itself)





#### Ch#5 - Hint #2:

To attach click events to JSX, use a "() =>" syntax (arrow function syntax):

        <button onClick={() => { console.log('I got clicked!'); }} />

It's cleaner to put your events as functions. To do this, write something like:

        function App () {
            function gotClicked() {
                console.log('I got clicked!');
            }
            return (
                <button onClick={gotClicked} />
            );
        }


If your function requires arguments, then do the following:

        function App () {
            function gotClicked(letter, number) {
                console.log('got clicked with info:', letter, number);
            }
            return (
                <button onClick={() => gotClicked('a', 3)} />
            );
        }






#### Ch#5: Hint #3

        <button onClick="alert('Wrong')">1. Weirwood</button>

becomes

        <button onClick={() => alert('Wrong')}>1. Weirwood</button>


(Note the "=>" arrow function)
