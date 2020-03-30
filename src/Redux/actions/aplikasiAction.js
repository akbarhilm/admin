import {SAVE_APP} from '../actions/constants';


export const saveApp = (data) => dispatch =>{
    dispatch(saveCurrentApp(data))
       
}

export const saveCurrentApp = data =>{
    return{
        type:SAVE_APP,
        payload:data
    }
    }
