import React,{Component, cloneElement} from 'react';
import MaterialTable from "material-table";
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {saveUser} from '../../Redux/actions/penggunaAction';
import store from '../../Redux/store';
import { compose } from 'recompose';




const useStyles = theme => ({
    root: {
      //flexGrow: 1,
      marginLeft:240,
    },
})

// const column = [
//     {title:"Nama",field:"Nama"},
//     {title:"Username",field:"Username"},
//     {title:"Email",field:"Email"},
//     {title:"Action",field:"Action"}
// ];
// const data=[
// {Nama:"User1",Username:"User1",Email:"Email@email.com",Action:<Link to='Tambah'>Edit</Link>},
//     {Nama:"User2",Username:"User2",Email:"Email@email.com",Action:"Edit - Delete"},
//     {Nama:"User3",Username:"User3",Email:"Email@email.com",Action:"Edit - Delete"},
//     {Nama:"User4",Username:"User4",Email:"Email@email.com",Action:"Edit - Delete"},
//     {Nama:"User5",Username:"User5",Email:"Email@email.com",Action:"Edit - Delete"},
//     {Nama:"User6",Username:"User6",Email:"Email@email.com",Action:<Link to='Tambah'>Edit</Link>},
// ]
const action = (
    <span>
<Link to='EditApp/1'>Edit</Link> 
- 
<Link to='DeleteApp/1'>Delete</Link>
</span>
);
class IndexAplikasi extends Component{
        constructor(props){
            super(props)
            this.state={
                table:{
                    column : [
                        {title:"Nama",field:"Nama"},
                        {title:"Username",field:"Username"},
                        {title:"NIP",field:"NIP"},
                        {title:"Email",field:"Email"},
                        {title:"Action",field:"Action"}
                    ],
                    data:[
                    {Nama:"User1",Username:"User1",NIP:"123123123",Email:"Email@email.com",Action:action},
                        //     {Nama:"User2",Username:"User2",NIP:"123123123",Email:"Email@email.com",Action:"Edit - Delete"},
                        //     {Nama:"User3",Username:"User3",NIP:"123123123",Email:"Email@email.com",Action:"Edit - Delete"},
                        //     {Nama:"User4",Username:"User4",NIP:"123123123",Email:"Email@email.com",Action:"Edit - Delete"},
                        //     {Nama:"User5",Username:"User5",NIP:"123123123",Email:"Email@email.com",Action:"Edit - Delete"},
                        //     {Nama:"User6",Username:"User6",NIP:"123123123",Email:"Email@email.com",Action:<Link to='Tambah'>Edit</Link>},
                    ] 
                 } ,
                 prevState:[]

            }
        }


    render(){
         const{classes} = this.props
        // const redstore = store.getState();
   
        // const user = redstore.pengguna.aplikasi
        // console.log(user.keys)
        
        // let columns = []
        // user.map((index,keys)=>(  columns.push({
        //         title:keys,
        //         field:keys
        // }
        // )
      
          
        // )
        

        // )
        // console.log(columns)
        return(
            <div>
                <Navbar/>
                <div className={classes.root}>
                    <MaterialTable
                    title="Test"
                    columns={this.state.table.column}
                    data={this.state.table.data}
                    // editable={{
                    //     onRowAdd: newData =>
                    //       new Promise(resolve => {
                    //         setTimeout(() => {
                    //           resolve();
                    //           this.setState(prevState => {
                    //             const data = [...prevState.data];
                    //             data.push(newData);
                    //             //this.props.saveUser(data);
                    //             return { ...prevState, data };
                    //           });
                    //         }, 600);
                    //       }),
                       
                        
                    //     onRowUpdate: (newData, oldData) =>
                    //       new Promise(resolve => {
                    //         setTimeout(() => {
                    //           resolve();
                    //           if (oldData) {
                    //             this.setState(prevState => {
                    //               const data = [...prevState.data];
                    //               data[data.indexOf(oldData)] = newData;
                    //               return { ...prevState, data };
                    //             });
                    //           }
                    //         }, 600);
                    //       }),
                    //     onRowDelete: oldData =>
                    //       new Promise(resolve => {
                    //         setTimeout(() => {
                    //           resolve();
                    //           this.setState(prevState => {
                    //             const data = [...prevState.data];
                    //             data.splice(data.indexOf(oldData), 1);
                    //             return { ...prevState, data };
                    //           });
                    //         }, 600);
                    //       }),
                    //   }}
                      />
                </div>

            </div>
        )
    }
}

IndexAplikasi.propTypes={
classes : PropTypes.object.isRequired,
aplikasi:PropTypes.object.isRequired,
}



const mapStateToProps = state => ({
  aplikasi: state.pengguna,
  
});

export default compose( connect(
  mapStateToProps,
  { saveUser }), withStyles(useStyles))(IndexAplikasi)