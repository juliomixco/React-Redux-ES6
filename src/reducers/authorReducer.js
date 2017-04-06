import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function authorReucer(state = initialState.authors, action) {
    switch (action.type) {

        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;

            break;
        default:
            break;
    }
    return state;

}