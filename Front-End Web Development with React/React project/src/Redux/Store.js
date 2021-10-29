import { createStore, combineReducers } from 'redux';
import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { Leaders } from './Leaders';

export const store = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}