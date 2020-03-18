import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Cookies from 'universal-cookie'
import jwt_decode from "jwt-decode";
const cookies = new Cookies();

const setAuthToken = acctoken => {
    if (acctoken) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = acctoken;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  


  const token = cookies.get('refresh');
// Function that will be called to refresh authorization
 const refreshAuthLogic = failedRequest => axios.get('http://10.10.40.127:8762/api/auth/refresh',{headers:{'Authorization':`${token}`}}).then(tokenRefreshResponse => {
  
  const {accessToken} = tokenRefreshResponse.data;
      
      const {authorization} = tokenRefreshResponse.headers;
const decodedauth = jwt_decode(authorization);
  const decodedacc = jwt_decode(accessToken);  
  const dateauth = new Date(0);
      dateauth.setUTCSeconds(decodedauth.exp);
      const dateacc = new Date(0);
      dateacc.setUTCSeconds(decodedacc.exp);
      cookies.remove('acctoken');
      cookies.set('acctoken',accessToken , {path: '/', expires: dateacc,domain:'.someappdomain.com'});
      setAuthToken(accessToken)
      cookies.remove('refresh');
      cookies.set('refresh',authorization , { path: '/',expires: dateauth,domain:'.someappdomain.com'});
    failedRequest.response.config.headers['Authorization'] =  tokenRefreshResponse.data.accessToken;
    return Promise.resolve();
});

// // Instantiate the interceptor (you can chain it as it returns the axios instance)
 createAuthRefreshInterceptor(axios, refreshAuthLogic);

  export default setAuthToken;