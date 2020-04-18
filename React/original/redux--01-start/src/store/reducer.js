
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'INCREMENT':
            const newState = Object.assign({}, state)
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.value
            } 
        case 'ADD_FIVE':
            return {
                ...state,
                counter: state.counter + action.value
            } 
        case 'SUB_FIVE':
            return {
                ...state,
                counter: state.counter - action.value
            } 
        case 'STORE_RESULT': 
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
    }
    return state;
}

//    if (action.type === 'INCREMENT') {
//        return {
//            counter: state.counter + action.value
//        } 
//    }
//    if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - action.value
//         }
//     }
//    if (action.type === 'ADD_FIVE') {
//         return {
//             counter: state.counter + action.value
//         }
//    }
//    if (action.type === 'SUB_FIVE') {
//     return {
//         counter: state.counter - action.value
//         }
//    }
//     return state;
// }

export default reducer;