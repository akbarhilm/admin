import React,{Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import {saveUser} from '../../Redux/actions/penggunaAction';
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
let tempa = [];
class TambahPengguna extends Component{
    constructor(props){
      super(props)
      this.state={
        
        Nama:"",
        Email:"",
        Password:"",
        Nip:"",
        Username:"",
        Otoapps:[]
       
      }
      this.handleChange = this.handleChange.bind(this)
      this.save = this.save.bind(this)
    }

    

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
      
      
    }
    save=()=>{
      tempa = []
      let tempstate=[]
      for(let i =1;i<=4;i++){
        if(document.getElementById("2"+i).checked == true){
          tempa.push({"id":document.getElementById("2"+i).value})
        }
      }
     // console.log(tempa)
      this.setState({otoapps:tempa},()=> (tempstate.push(this.state),this.props.saveUser(tempstate)))
      
     
    }

    render(){
        const { classes } = this.props
        return(
            <div >
                 <Navbar/>
                 <div className={classes.root}>
               <Paper className={classes.paperWrapper}>
               <div className={classes.gridContent}>
               <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.header}>Tambah Pengguna</Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="nama"
          label="Nama"
          onChange={this.handleChange}
        
          variant="outlined"
        /></FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="email"
          label="Email"
          type="email"
          onChange={this.handleChange}
          variant="outlined"
        /></FormControl>
        </Grid>
      
      
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="nip"
          label="NIP"
          onChange={this.handleChange}
         
          variant="outlined"
        /></FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="username"
          label="Username"
        
          onChange={this.handleChange}
          variant="outlined"
        /></FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="password"
          label="Password"
          type="password"
          onChange={this.handleChange}
          variant="outlined"
        /></FormControl>
        </Grid>
      
      
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="rePassword"
          label="Tulis Ulang Password"
         type="password"
        // onChange={this.handleChange}
          variant="outlined"
        /></FormControl>
        </Grid>
      
        </Grid>
        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.header}>Otoritas Aplikasi</Typography>
                        </Grid>
                        <List dense className={classes.list}>
                            {[0, 1, 2, 3].map(value => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                    <Grid item xs={12}>
                                    <ListItem key={value} button>

                                        <ListItemText id={labelId} primary={`Aplikasi ${value + 1}`} />
                                        <ListItemSecondaryAction>
                                            <Checkbox
                                                edge="end"
                                                onChange={this.handleToggle}
                                                id={`2${value+1}`}
                                                value = {`2${value+1}`}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    </Grid>
                                );
                            })}
                        </List>
                        </Grid>
        </div>
        <Button className={classes.buttonnext} variant="contained" color="primary" onClick={this.save}>
        Simpan
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
  { saveUser }), withStyles(useStyles))(TambahPengguna)