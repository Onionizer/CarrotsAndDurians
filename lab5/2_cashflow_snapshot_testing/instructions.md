LAB 5 - PROJECT 2
--------------------

Welcome to Project 2 - Snapshot Testing! The goal here is comprehension:
Can you understand the steps required and purpose of testing for a
complex app? What about "snapshot" testing in particular? In general,
testing is an integral part of ensuring quality while delivering
continuously at scale. Snapshot testing is one type to detect accidental
changes.

Remember: You only need to attempt 1 challenge from each project to turn in
the lab! (Although are welcome to attempt more!)




Challenge 1: Starting up and creating a test
---------------------------------------------------------

#### PART 1:  Running tests

You'll need to do an `npm install`:

        npm install
        npm run test


#### PART 2:  Creating a new snapshot test


- Locate and examine the "snapshot files" for the Calc and CalcList components.
- Snapshotting is the act of "saving to compare against later".
- We want to recreate these for NavBar.

For Part 2, copy & paste the previous code and create a new snapshot test for "NavBar"
by using previous code as reference.


Hints:

- The first time you run a snapshot test, it creates the `__snapshots__`. Every
  subsequent time, it checks against it. If you change the test itself, it
  re-creates it.
- The snapshot tests make no explicit reference to the `__snapshots__`
  directory, it's automatic.
- To "test" tests, its always important to be able to intentionally break the
  test. Can you edit a component to cause the test to fail? Do you understand the
  failure message that is displayed?







Challenge 2: Adding snapshot tests for CashChart
---------------------------------------------------------

Presently, the CashChart component has no snapshot tests. Add two:

1. Test with no props, just like for the NavBar
2. Test with a calcList prop, using a default array like in CashList.test.js

Hint: The props that CashList take are identical to the props that CashChart
takes. So with a little modification, you can copy all the tests from the
CashList component to create snapshots for the CashChart component, just
changing the name of the component.





Bonus Comprehension Questions
---------------------------------------------------------

Snapshot tests are a little controversial in terms of best practices.

- What are the pros and cons of snapshot testing, vs more customized or careful
  unit tests?
- Is it possible to do Test First Development with snapshot testing?
- How are snapshot tests more brittle?


Relevant blog posts:

- <https://tsh.io/blog/pros-and-cons-of-jest-snapshot-tests/>
- <https://medium.com/javascript-in-plain-english/should-i-be-writing-snapshot-tests-47da13a62085>
- <https://medium.com/@ntgard/jest-snapshot-testing-the-bad-parts-c93aca187ba5>
- <https://peterhrynkow.com/testing/2019/01/07/the-perils-of-snapshot-testing.html>
- <https://engineering.ezcater.com/the-case-against-react-snapshot-testing>
