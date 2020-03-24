import {SAVE_USER} from '../actions/constants';

 const initialState = {
   
    user: []
        
    ,
    
  
}

export default function(state = initialState,action){

    switch(action.type){
        case SAVE_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }

}