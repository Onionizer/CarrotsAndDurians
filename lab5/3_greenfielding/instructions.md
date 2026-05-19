LAB 5 - PROJECT 3
--------------------

Welcome to Project 3 - Greenfielding!

This is the last Lab Project, and thus is an open ended one to get
you exploring more tools and tech to better equip you for whatever
new techniques may come out in the future.

To submit this activity, just zip up the new project you made
(challenge 1), and/or the new component you made (challenge 2).

The tools suggested here are simply a suggestion, but the steps are very
similar: Almost all modern frontend frameworks work with Node.js on
either terminal or StackBlitz (the two suggested routes below).


Remember: You only need to attempt 1 challenge from each project to turn
in the lab! (Although are welcome to attempt more!)





Challenge 1: Starting a new project
---------------------------------------------------------

#### CHALLENGE 1: PART 1

##### Planning

Choose one of the following frameworks:

- Next.js
- Nuxt
- Vue
- Angular
- Svelte

Hint: Feel free to choose at random, or do some light research




#### CHALLENGE 1: PART 2

##### Setting up a brand new dev environment

**Option 1, easiest: Use an online IDE (such as StackBlitz)**

Sign up for a free account on a browser-based IDE and dev environment
such as StackBlitz: https://stackblitz.com

Then, create a new project of one of the following frontend frameworks
by selecting it from the "new project" modal.

**Option 2, advanced: Run locally in a Terminal**

Only pick this if you have a "Terminal" setup, and you are comfortable
using a terminal, and NPM installed using something like Volta. You
can either try to guess the command, for example for Next:

    npx create-next-app

OR, look it up from the website. For example, for Next:

- https://www.npmjs.com/package/create-next-app
- https://nextjs.org/docs/app/getting-started/installation





#### CHALLENGE 1: PART 3

##### Developing your project

As before, run the following commands (unless the framework tells
you differently):


    npm install
    npm run start

Finally, try running the command to create a stand-alone,
plain JS "exported" build of your project:

        npm run build

This is what you would want to "launch" to the world: Only
the built version!



HINT: To submit this one from StackBlitz, just save the "Zip" file. 




Challenge 2: Adding a Counter Component
---------------------------------------------------------

The exact steps will dependent on what you chose in Challenge 1.

However, this is an open ended challenge to try making a "counter"
appear in the framework of your choice. 

For example, try making an element that starts like:

            (HELLO NEXTJS WORLD!! COUNT: 1)

Then, on clicking, it counts up to:

            (HELLO NEXTJS WORLD!! COUNT: 2)

Etc. This is a good beginner coding challenge you have practiced
now dozens of times in different ways with vanilla JavaScript...
but now you try it in a totally new framework or even language
(TypeScript, JSX, etc)! Go for it!
            
            
Hint 1: If you get stuck, just send what you have! It's the last lab
after all!

Hint 2: See screenshot of how to do it with NEXTJS. Notice "use client" and
the "let counter..." code for state.
