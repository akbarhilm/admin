import React,{Component} from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie'
import Main from './Pages/Main';
import Menu from './Pages/Menu';






class App extends Component{

componentWillMount(){
  const cookies = new Cookies();
  const acctoken = cookies.get('acctoken');
  console.log(acctoken);
  axios.defaults.headers.common["Authorization"] = acctoken;
}
  render(){
    const staterex = store.getState();
   
    
    const menu = staterex.auth.menu
      const cookies = new Cookies();
      const acctoken = cookies.get('acctoken');
      console.log(acctoken);
      return(
        <div>
          <Provider store={store}>
    <Router>
    <Route exact path="/" render={(props) => <Main/>}/>  
    {menu.map((me)=>(
      me.idInduk !== "-"?
      <Route exact path={me.link} component={me.link}/>
      :null

    )
    )}
    </Router>
      </Provider>

        </div>
      )
    // }
  }
}

export default App;