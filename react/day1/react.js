/*
••••• Unidirectional --> parent -->child •••••
••• 1. Satte : originating in component.
••• 2. props : data originating somewhere else & is passed to component.
••• one src of thruth is where data is the locating, should be in one place.
••• parent re reder, child also re render.
*/

/*
Application state:

The state of your application is anything that could change over time. 
In an app for an online store, state might include whether the user is logged in, 
what items are in the cart, or whether the user has any gift cards to use. 
This information is important to keep track of - many of your components might 
need to know it. We talked about state in React and unidirectional data flow - we keep 
data flow moving in one direction, because we only want state to be managed in one place. 
This will keep our state consistent and accessible across the entire app. 
*/

/*
Props: 

Think of passing data in your app only on a need-to-know basis. 
Components should only have to worry about the data that they really need to know in order 
to do their job. Props are the best way to pass state data down to children components. 
Props look like attributes in JSX and like properties in our Javascript. 
They are defined in the parent, and can be accessed in the child. We can pass data or 
even functions that change state down the chain to the components that need it. 
*/

/*
Lifecycle:

React provides us with what are called “lifecycle hooks." These hooks are really methods 
that run at specific times during a component's lifecycle. 
The methods have descriptive names like componentWillMount, componentDidUpdate 
and componentWillUnmount. Using these methods, we can run our Javascript at just the right 
time to prevent components from rerendering if their props didn't change, 
to remove event listeners when the component leaves the page, or any number of other 
performance-increasing and useful functions. 
*/