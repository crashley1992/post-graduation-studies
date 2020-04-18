
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'INCREMENT':
            return {
                counter: state.counter + action.value
            } 
        case 'DECREMENT':
            return {
                counter: state.counter - action.value
            } 
        case 'ADD_FIVE':
            return {
                counter: state.counter + action.value
            } 
        case 'SUB_FIVE':
            return {
                counter: state.counter - action.value
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