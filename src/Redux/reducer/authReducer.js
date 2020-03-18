import { SET_CURRENT_USER,USER_LOADING, SET_USER_APP,SET_USER_MENU_APP} from "../actions/constants";
import Cookies from 'universal-cookie'
import jwt_decode from "jwt-decode";

const cookies = new Cookies();
  const isEmpty = require("is-empty");
  
let decodedauth = {}

  if(!isEmpty(cookies.get("refresh"))){
     decodedauth = jwt_decode(cookies.get("refresh"));
  }

  const initialState = {
    isAuthenticated: !isEmpty(decodedauth),
    user: decodedauth,
    menu:[],
    app:[],
    loading: false
  
}
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
        case SET_USER_APP:
        return {
          ...state,
          app: action.payload
        };
        case SET_USER_MENU_APP:
          return {
            ...state,
            menu: action.payload
          };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }