import {SAVE_APP} from '../actions/constants';

 const initialState = {
   
    app: []
         
}


export default function(state = initialState,action){

    switch(action.type){
        case SAVE_APP:
            return{
                ...state,
                app:action.payload
            }
        default:
                return state
    }
}