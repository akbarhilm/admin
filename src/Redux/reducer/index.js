import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import penggunaReducer from './penggunaReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  pengguna:penggunaReducer
});