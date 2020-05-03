REDUX NOTES
 - Redux helps you write applications that behave consistently, run different enviroments (client, server, and native) and is easy to test.
 - Centralize's applications state and logic enables capabilties lie undo/redo,state persistence, and more
 - Reduc works with any UI layer and has a large ecosystem of addons

 Getting started
 - Redux is a predicable state container for apps.

 Create a React Redux App
The recommended way to start new apps with React and Redux is by using the official Redux+JS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.

npx create-react-app my-app --template redux

The whole state of your app is stored in an object tree inside a signle store. 
- the only way to change the state tree is to emit an action, an object describing what happened.
- to specify how the actions transform the state tree you write pure reducers.

store - action - reducers

EXAMPLE PROJECT from Redux Docs: https://redux.js.org/introduction/getting-started

import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

- this is a reducer, a pure function with (state, action).
- it describes how an action transforms the state unto the next state
- the shaoe of the state is up to you: it can be primitive, an array, an object or even immutable data structure.
- you should not mutate the state ibject but return a new object if the state changes

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

//you can use subscribe() to udate the UI in response to state changes
//normall you'd use a view binding library rather than subsribe()
//However it can be also handy to persist the current state in the localStorage

store.subscribe(() => console.log(store.getState()));

//the only way to mutate the internatl state is to dispatch action.
//the actions can be serialized, logged or stored and later replayed.

store.dispatch({ type: 'INCREMENT });
//1 
store.dispatch({ type: 'INCREMENT' })
//2
store.dispatch({ type: 'DECREMENT'});
//1

- Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. 

- Then you write a special function called a reducer to decide how every action transforms the entire applications state.

- In a typical Redux app there is just a single store with a single root reducing function. 
- As your app grows you split the root reducer into smaller reducers independent operating n the different parts of the state tree. 

- This is exactly like there is just one root component in React app, but it this composed out of many small components.
