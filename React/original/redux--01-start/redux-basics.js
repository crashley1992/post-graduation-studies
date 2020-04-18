const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//reducer
//takes initalState whenever state is undefined
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    } 
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());


//subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

//dispatching acton 
//when declaring type you want to all caps
store.dispatch({type: 'INC_COUNTER'});
//will increase the counter by 10
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
