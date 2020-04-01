import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Navbar from './Navbar'


const useStyles = theme => ({

    contentRoot:{
        //display:'flex',
        [theme.breakpoints.up('sm')]: {
        marginLeft:240
        }
    },
    content:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }

})


class Menu extends Component{
    constructor(props){
        super(props)
    }



    render(){
        const { classes } = this.props
        return(
           <div>
                <Navbar/>
                <div className={classes.contentRoot}>
                <div className={classes.content}>
                    Edit Menu
                    <form>
                        <label>Nama Menu :</label>
                        <input type='text'/><br/>
                        <label>Link :</label>
                        <input type='text'/><br/>
                        <label>Keterangan :</label>
                        <input type='text'/><br/>
                        <label>Otoritas Aplikasi :</label>
                        <input type='text'/><br/>
                        <label>Nama Menu :</label>
                        <input type='text'/><br/>
                        <label>Komponen :</label>
                        <input type='text'/><br/>
                    </form>
                </div>
                </div>
            </div>
        )
    }

}
Navbar.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(Menu);