
/*••••• React •••••*/

/*
• React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language.

• After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

• This means that you can use JSX inside of if statements and for loops, assign it to variables, 
accept it as arguments, and return it from functions:
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


• You may use quotes to specify string literals as attributes:
const element = <div tabIndex="0"></div>;


• You may also use curly braces to embed a JavaScript expression in an attribute:
const element = <img src={user.avatarUrl}></img>;


• Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. 
You should either use quotes (for string values) or curly braces (for expressions), 
but not both in the same attribute.


• Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming 
convention instead of HTML attribute names.
For example: class becomes className in JSX, and tabindex becomes tabIndex.


• JSX tags may contain children:
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

*/


/* What is React?

"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
- React Docs 

React is a Javascript library, not a framework. What does this mean? A library provides methods 
and classes that will help you with your application design and control flow. 
A framework provides an application design and a control flow which will take your code and call it for you. 
React is a library, so it gives you the control and provides classes and methods that will help you. 

What does React do?

React's primary purpose is to help you render to the DOM. React makes it easy to put elements on the DOM, 
respond to user interaction, and change elements on the DOM only when they need to change. 

How does React do that?

React has a tool called JSX - using JSX, you will write elements directly in your Javascript similar to how you write HTML. 
Using JSX, we could write something like: var div = <div></div>, something we never could have done in plain Javascript. 
With JSX, we can code the elements and the rules about how and when to render them, before they ever enter the DOM.

Component-based development

React excels at creating small components, or pieces, that fit together to make something bigger. 
Building with components makes it easier to test and find problems, easier to work with a group on the same project, 
and easier to make changes later. 

"Your components tell React what you want to render – then React will efficiently update and 
render just the right components when your data changes." 1 In React, a page could be a component built of many smaller components 
which each handle different tasks. This way, anytime we need to change anything, 
we know exactly where to make the change, and the change will happen everywhere we use that component. 

The virtual DOM

The DOM, or Document Object Model, is the structure of objects created by HTML. 
React stands between you and the DOM to make rendering simpler and to make performance better. 
React does this by working with a virtual DOM. 

"Think of the virtual DOM as React's local and simplified copy of the HTML DOM. 
It allows React to do its computations within this abstract world and skip the 'real' DOM operations, 
often slow and browser-specific.

"There's no big difference between the 'regular' DOM and the virtual DOM. 
This is why the JSX parts of the React code can look almost like pure HTML." 2
*/