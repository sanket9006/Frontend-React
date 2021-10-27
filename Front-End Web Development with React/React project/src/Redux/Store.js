import { createStore } from 'redux';
import { Reducer, initialState } from './Reducer'


export const store = () => {
    const store = createStore(Reducer, initialState)
    return store;

}