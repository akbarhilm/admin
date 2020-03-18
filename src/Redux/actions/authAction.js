import axios from "axios";
import setAuthToken from "../../utlis/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  SET_USER_APP,
  SET_USER_MENU_APP
} from "./constants";
import { mapProps } from "recompose";
import Cookies from 'universal-cookie'



const cookies = new Cookies();
// Register User

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = (username,password) => dispatch => {
  //console.log(username,password)
  axios
    .post("http://10.10.40.127:8762/api/auth",{
        
      "usernameAtauEmail":username,"password":password
      }) 
    .then(res => {
      // Save to localStorage// Set token to localStorage
      const {accessToken} = res.data;
      
      const {authorization} = res.headers;
     
      // Set token to Auth header
      setAuthToken(accessToken);
      // Decode token to get user data
      const decodedauth = jwt_decode(authorization);
      const decodedacc = jwt_decode(accessToken);
      // Set current user
      const dateauth = new Date(0);
      dateauth.setUTCSeconds(decodedauth.exp);
      const dateacc = new Date(0);
      dateacc.setUTCSeconds(decodedacc.exp);
      cookies.set('acctoken',accessToken , {path: '/', expires: dateacc,domain:'.someappdomain.com'});
      cookies.set('refresh',authorization , { path: '/',expires: dateauth,domain:'.someappdomain.com'});
      
      dispatch(setCurrentUser(decodedauth));
      //console.log(res);
        })
        // .catch(err =>
        //   dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data
        //   })
        // );
};

//Get user App
export const userApp = (userId) => dispatch =>{
  axios.get(`http://10.10.40.127:8762/api/profil/pengguna/${userId}/aplikasi`)
  .then(parseJson=>parseJson.data.map(data=>(
    {
      link:data.link,
      nama:data.nama
    }
  )
  ))
  .then(parsedlistapp=>{
    const listApp = parsedlistapp;
    dispatch(setUserApp(listApp));
   
  })
  
  
}

//Get user menu App

export const userMenuApp = (userId) => dispatch =>{
  axios.get(`http://10.10.40.127:8762/api/profil/pengguna/${userId}/menu`)
  .then(res=>res.data.map(data=>({

    id:data.id,
    idInduk:data.idInduk,
    link:data.link,
    nama:data.nama
  })))
  .then(mapData=>
    dispatch(setUserMenuApp(mapData))
  )
  
  
}
  
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//set user App
export const setUserApp = listApp =>{
  return{
    type: SET_USER_APP,
    payload: listApp
  };
}

//set user menu app

export const setUserMenuApp = mappedMenu=>{
  return{
    type: SET_USER_MENU_APP,
    payload:mappedMenu

  };
}


// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  cookies.remove('refresh');
  
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};