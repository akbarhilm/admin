import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie'
import Main from './Pages/Main';
import Menu from './Pages/Menu';
import TambahPengguna from './Pages/pengguna/TambahPengunna'
import OtoApps from './Pages/pengguna/OtoApps'
import IndexPengguna from './Pages/pengguna/IndexPengguna';
import EditPengunna from './Pages/pengguna/EditPengunna';
import TambahAplikasi from './Pages/aplikasi/TambahAplikasi';
import IndexAplikasi from './Pages/aplikasi/IndexAplikasi';
import EditAplikasi from './Pages/aplikasi/EditAplikasi';
import DeleteAplikasi from './Pages/aplikasi/DeleteAplikasi';




class App extends Component {

  componentWillMount() {
    const cookies = new Cookies();
    const acctoken = cookies.get('acctoken');
    console.log(acctoken);
    axios.defaults.headers.common["Authorization"] = acctoken;
  }
  render() {
    const staterex = store.getState();


    const menu = staterex.auth.menu
    const cookies = new Cookies();
    const acctoken = cookies.get('acctoken');
    console.log(acctoken);
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route exact path="/" render={(props) => <Main />} />
            {/* {menu.map((me)=>(
      me.idInduk !== "-"?
      <Route exact path={me.link} component={me.link}/>
      :null

    )
    )} */}
            <Route exact path="/ListPengguna" component={IndexPengguna} />
            <Route exact path="/Edit/:id" component={EditPengunna} />
            <Route exact path="/Tambah" component={TambahPengguna} />
            <Route exact path="/otoapps" component={OtoApps} />
            <Route exact path="/Tambah_App" component={TambahAplikasi}/>
            <Route exact path="/List_App" component={IndexAplikasi} />
            <Route exact path="/EditApp/:id" component={EditAplikasi} />
            <Route exact path="/DeleteApp/:id" component={DeleteAplikasi} />
          </Router>
        </Provider>

      </div>
    )
    // }
  }
}

export default App;