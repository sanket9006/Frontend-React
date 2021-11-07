import { createStore } from "redux";

const initialState = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
}

const store = createStore(reducer, 1);

store.subscriber(() => {
    console.log(store.getState())
})

store.dispatch({ type: 'ADD', payload: 1 })