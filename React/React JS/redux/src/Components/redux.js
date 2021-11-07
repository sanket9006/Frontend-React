import { createStore } from 'redux'

const initialState = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        case 'BANKRUPT':
            return state = action.payload
        default:
            return state
    }
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({ type: "DEPOSIT", payload: 1 })
store.dispatch({ type: "DEPOSIT", payload: 10 })
store.dispatch({ type: "DEPOSIT", payload: 2 })
store.dispatch({ type: "DEPOSIT", payload: 55 })
store.dispatch({ type: "WITHDRAW", payload: 55 })
store.dispatch({ type: "WITHDRAW", payload: 550 })
store.dispatch({ type: "BANKRUPT", payload: 0 })


const redux = () => {
    return
}

export default redux