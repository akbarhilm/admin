import React,{Component} from 'react'
import Navbar from '../Navbar'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import {withStyles } from '@material-ui/core/styles';
import {saveApp} from '../../Redux/actions/aplikasiAction';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({

        root: {
            flexGrow: 1,
            marginLeft:240,
            display:'flex',
            justifyContent:'center',
            //marginTop:theme.spacing(1)

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
        paperWrapper: {
            // padding: theme.spacing(2),
            textAlign: 'center',
            // color: theme.palette.text.secondary,
            flexGrow:1
          },
    })


class TambahAplikasi extends Component{
    constructor(props){
        super(props)
        this.state={
          
          Nama:"",
          Keterangan:"",
          Link:"",
          Kode:"",
         
         
        }
        this.save = this.save.bind(this)
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        
        
      }

      save=()=>{
          //const {Nama,Keterangan,Link,Kode} = 
          //const data = {Nama,Keterangan,Link,Kode}
        this.props.saveApp(this.state)
      }

    render(){
        const {classes} = this.props
        return(
            <div>
                <Navbar/>
                <div className={classes.root}>
               <Paper className={classes.paperWrapper}>
               <div className={classes.gridContent}>
               <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.header}>Tambah Aplikasi</Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="keterangan"
          label="Keterangan"
          onChange={this.handleChange}
        
          variant="outlined"
        /></FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="kode"
          label="Kode"
         
          onChange={this.handleChange}
          variant="outlined"
        /></FormControl>
        </Grid>
      
      
        <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
        <TextField
          id="link"
          label="Link"
          onChange={this.handleChange}
         
          variant="outlined"
        /></FormControl>
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

TambahAplikasi.propTypes = {
    classes: PropTypes.object.isRequired,
    aplikasi:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    aplikasi: state.aplikasi,
  
});

export default compose( connect(
  mapStateToProps,
  { saveApp }), withStyles(useStyles))(TambahAplikasi)