import { 
    FETCH_REPOS,
    FETCH_USERS
} from './constants';
// import swal from 'sweetalert';
import api from '../api/api';

export const fetchUsers = (userName) => {
    return async (dispatch) => {
        try {
            if(userName) {
                const response = await api.get(`search/users?per_page=10&q=${userName}`)
                if(response) {
                    dispatch({ type: FETCH_USERS, payload: response.data })
                }
            } else {
                const response = await api.get(`search/users?per_page=5&q=''`)
                if(response) {
                    dispatch({ type: FETCH_USERS, payload: response.data })
                }
            }
        } catch (error) {
            console.log(error, `<<<<<<<<< error fetch user`);
        }
    }
}

export const fetchRepos = (owner) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`users/${owner}/repos`)
            if(response) {
                dispatch({ type: FETCH_REPOS, payload: response.data })
            }
        } catch (error) {
            console.log(error, `<<<<<<<<< error fetch repos`);
        }
    }
}
