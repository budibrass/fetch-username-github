import { 
    FETCH_USERS,
    FETCH_REPOS
 } from './constants';

const initState = {
    users: [],
    repos: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case FETCH_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state;
    }
}

export default reducer;