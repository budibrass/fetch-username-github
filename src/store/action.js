import { 
    FETCH_REPOS,
    FETCH_USERS,
    SHOW_LOADING
} from './constants';
// import swal from 'sweetalert';
import api from '../api/api';

export const fetchUsers = (userName) => {
    return async (dispatch) => {
        try {
            if(userName) {
                const response = await api.get(`search/users?per_page=5&q=${userName}`)
                if(response) {
                    dispatch({ type: FETCH_USERS, payload: response.data })
                    dispatch(showLoading(false))
                }
            } else {
                const response = await api.get(`search/users?per_page=5&q=''`)
                if(response) {
                    dispatch({ type: FETCH_USERS, payload: response.data })
                    dispatch(showLoading(false))
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

export const showLoading = (status) => {
    return async (dispatch) => {
        try {
                dispatch({ type: SHOW_LOADING, payload: status })
        } catch (error) {
            console.log(error, `<<<<<<<<< error show loading`);
        }
    }
}
