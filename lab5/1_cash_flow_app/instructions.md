LAB 5 - PROJECT 1
--------------------

Welcome to Project 1 - Cash Flow App! It's time to get practice launching
a complex React Project. The goal here is getting familiar with the various
continuous delivery and continuous integration tools that go into modern
JavaScript projects, permitting smooth merging and launching of large,
complex JavaScript projects.

The tools suggested here are simply a suggestion, but the steps are very
similar: Almost all modern frontend frameworks work with Node.js on
either terminal or StackBlitz (the two suggested routes below).

Remember: You only need to attempt 1 challenge from each project to turn
in the lab! (Although are welcome to attempt more!)



Challenge 1: Setting up a Dev Environment
---------------------------------------------------------

#### CHALLENGE 1: PART 1

##### Setting up a dev environment

**Option 1, easiest: Use an online IDE (such as StackBlitz)**

Sign up for a free account on a browser-based IDE and dev environment
such as StackBlitz: https://stackblitz.com

Then, create a "Node.js" blank project (or React JavaScript or really any
similar thing -- we will be replacing the content of it with our own files).
Finally, upload everything in this directory by dragging and dropping each
individual file and folder into the online editor window.

IMPORTANT: Make sure you upload src, public, package.json, etc
individually, so it overrides the blank starting files. Do not create
duplicates or duplicate directories, otherwise it won't work.

HINT: A video of this online IDE process is included.


**Option 2, advanced: Run locally in a Terminal**

Only pick this if you have a "Terminal" setup, and you are comfortable
using a terminal. Otherwise, this might be harder for you.

Do you already have Node.js and NPM installed and functioning for your
operating system? If not, one handy tool for installing Node is Volta:
https://volta.sh/

Once Node.js and NPM is installed, you should be able to run the
"challenge 2" commands.


#### CHALLENGE 1: PART 2

##### Developing your project

Once the files are ready and your dev environment is ready, you are
ready to launch the project!

Run the following commands. These either will be run in a Terminal in 
StackBlitz (or other IDE), or the local Terminal:


    npm install
    npm run start


Hint: Not sure where the "Terminal" is on StackBlitz? Look for
"~/projects/" with a ">" prompt below.


#### CHALLENGE 1: PART 3

##### Building the project

Finally, try running the command to create a stand-alone,
plain JS "exported" build of your project:

        npm run build

This is what you would want to "launch" to the world: Only
the built version!





Challenge 2: Code Comprehension
---------------------------------------------------------

Time to roll up your sleeves and try to comprehend the entire complex
React JavaScript project!

Use the following questions to guide you through understanding:

- Note how this is JSX JavaScript, and not "real" JavaScript. How come it still runs in the browser?

- What is the "src/components/" directory? What does each directory mean?

- What do the "imports" do? What is "victory-charts"?

- What is the "src/" directory? Why do you think it's split up like this?

- Can you understand the behavior of any of the components?

- How are "package.json", "npm install", and "import" connected?

- In the src/component/pages directory, examine the two "pages"
  components: `LandingPage` and `CashFlow`
  
  - What is the purpose of having "Page" components?
  
  - What is in these "Page" components?





Challenge 3: Making small changes
---------------------------------------------------------

For this challenge, make the following changes to see if you fully understand
the code base:

1. CSS: Change the background to a linear gradient.

2. State: Change the starting state (data) for new cash flows.
Adjust the "paycheck" to be 5000, but only once a month.


Hint: For 1) the linear gradient (linear-gradient(to right, #d6ae7b, #eacda3);) is
commented out near the correct location.

Hint: See the screenshot in the videos directory for how it looks in the end.





Challenge 4: Adding a new feature
---------------------------------------------------------

Behavior: Add a new "quick delete" button that goes near the "edit pencil". It's
behavior should be the same as the delete button on the edit pencil, but it should
be "easier to get to" with one click.

Hint: Copy and paste the "delete" button code from the edit pencil to accomplish this.

Hint: See the screenshot in the videos directory for how it looks in the end.


