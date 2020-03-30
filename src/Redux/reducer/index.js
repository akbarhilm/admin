import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import penggunaReducer from './penggunaReducer';
import aplikasiReducer from './aplikasiReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  pengguna:penggunaReducer,
  aplikasi:aplikasiReducer
});