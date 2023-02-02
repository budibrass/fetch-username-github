import { 
    FETCH_USERS,
    FETCH_REPOS,
    SHOW_LOADING
 } from './constants';

const initState = {
    users: [],
    repos: [],
    loading: false
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
        case SHOW_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default reducer;