import { SAVE_USER } from './constants';

export const saveUser = (user) => dispatch => {
    dispatch(
        saveCurrentUser(user)
    )
}

export const saveCurrentUser = user =>{
    return{
        type:SAVE_USER,
        payload:user
    }
}