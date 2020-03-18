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
                    menu
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