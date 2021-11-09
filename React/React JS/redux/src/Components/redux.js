import { createStore } from 'redux'

const reducer = (state, action) => {
    switch (action.type) {
        case "withdraw":
            return state - action.payload;
        case "deposit":
            return state + action.payload;
        case "closeaccount":
            return state = 0
        default:
            return state
    }
}

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: "deposit",
    payload: 10
})

store.dispatch({
    type: "deposit",
    payload: 100
})

store.dispatch({
    type: "withdraw",
    payload: 100
})

export default reducer;