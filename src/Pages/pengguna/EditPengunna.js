import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {saveUser} from '../../Redux/actions/penggunaAction';
import store from '../../Redux/store';
import { compose } from 'recompose';

const useStyles = theme => ({

        root: {
            flexGrow: 1,
            marginLeft:240,
            display:'flex',
            justifyContent:'center',
            //marginTop:theme.spacing(1)

          },
    
paperWrapper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    flexGrow:1
  },
  gridContent:{
      marginLeft:theme.spacing(5),
      marginRight:theme.spacing(5),
      marginBottom:theme.spacing(3),
     
      flexGrow:1
  },
  header:{
      marginTop:theme.spacing(5),
      marginLeft:theme.spacing(1),
      marginBottom:theme.spacing(5),
      textAlign:'left'

  },
  buttonnext:{
      marginBottom:theme.spacing(2)
  }
  
})

class TambahPengguna extends Component{

    render(){
        const { classes } = this.props
        const redstore = store.getState();
   
        const user = redstore.pengguna.user[0]
      console.log(user.Nama)
        return(
            <div >
                 <Navbar/>
                 <div className={classes.root}>
               <Paper className={classes.paperWrapper}>
               <div className={classes.gridContent}>
               <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.header}>Edit Pengguna</Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="nama"
          label="Nama"
        
          value={user.Nama}
          variant="outlined"
        /></FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="Email"
          label="Email"
          type="email"
          
          variant="outlined"
        /></FormControl>
        </Grid>
      
      
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="Nip"
          label="NIP"
         
         
          variant="outlined"
        /></FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="Username"
          label="Username"
        
          
          variant="outlined"
        /></FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="Password"
          label="Password"
          type="password"
          
          variant="outlined"
        /></FormControl>
        </Grid>
      
      
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="RePassword"
          label="Tulis Ulang Password"
         type="password"
         
          variant="outlined"
        /></FormControl>
        </Grid>
      
        </Grid>
        </div>
        <Button className={classes.buttonnext} variant="contained" color="primary">
        <Link to="/otoapps" >Next</Link>
      </Button>
        </Paper>
               </div>
            </div>
        )
    }

}

TambahPengguna.propTypes = {
    classes: PropTypes.object.isRequired,
    pengguna:PropTypes.object.isRequired,
  }
  
  
  
  const mapStateToProps = state => ({
    pengguna: state.pengguna,
    
  });
  
  export default compose( connect(
    mapStateToProps,
    { saveUser }),withStyles(useStyles))(TambahPengguna)