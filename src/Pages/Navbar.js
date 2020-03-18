import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import LinkHref from '@material-ui/core/Link';
import { theme } from '../Assets/ThemeProvider';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import { logoutUser,
   userApp,
    userMenuApp 
  } from "../Redux/actions/authAction";
import { connect } from 'react-redux';
import { compose } from 'recompose'
import store from '../Redux/store'
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const drawerWidth = 240;
const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  
  navbarMenu: {
    marginLeft: theme.spacing(2),
    color: '#000000'

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,


  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:63,
    [theme.breakpoints.down('sm')]: {
    marginTop:0,
    }
  },
  toolbar:{
    marginTop:10
  }

});

let subdomain = window.location.hostname;
let partdomain = subdomain.split(".");
if (partdomain[0] === "wwww" || partdomain[0] === "WWWW") {
  subdomain = partdomain[1] + "." + partdomain[2];
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AnchorEl: null,
      MobileOpen: false,
     
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.logOut = this.logOut.bind(this);
    this.gotoLink = this.gotoLink.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    const staterex = store.getState();
    const userId = staterex.auth.user.sub;
    this.props.userApp(userId);
    this.props.userMenuApp(userId)
    
  }

  handleMenu = event => {
    console.log(event.currentTarget)
    this.setState({ AnchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ AnchorEl: null });
  };

  logOut = () => {
    this.props.logoutUser();
  }



  componentWillMount() {
     }

  gotoLink = event => {
    console.log(event.currentTarget)
    //window.location.replace(sub+"."+subdomain)
  }


  handleDrawerToggle = () => {
    this.setState({ MobileOpen: !this.state.MobileOpen });
  }

  

  render() {
    const { container } = this.props;
    const { classes } = this.props
    const anchorEl = this.state.AnchorEl
    const open = Boolean(anchorEl);
    const staterex = store.getState();
   
    const app = staterex.auth.app
    const menu = staterex.auth.menu
    console.log(menu)

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List  className={classes.navbarMenu}>
          {menu.map((me) => (
                me.idInduk !== "-"?
              <ListItem button key={me.id} component={Link} to={me.link}>
                 {/* <ListItemIcon><MailIcon /></ListItemIcon>  */}
                 <ListItemText primary={me.nama}/>
               </ListItem>
               :null
            
              
          )
          )}
        </List>
         {/* {menu.map((me) => {
            return (
              <Typography variant="body1" className={classes.navbarMenu}>
                <Link to="/menu" >{me.nama}</Link>
              </Typography>
            )
          })} */}
        <Divider />
        
      </div>
    );

          const expansion = (
          <div>
            {menu.map((me) => (
              me.idInduk === "-"?
            <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{me.nama}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <List  className={classes.navbarMenu}>
          {console.log(menu.link)}
          {menu.map((me2) => (
          
                me2.idInduk !== "-" && me2.idInduk === me.id?
                
              <ListItem button key={me2.id} component={Link} to={`${me2.link}`}>
                 {/* <ListItemIcon><MailIcon /></ListItemIcon>  */}
                 <ListItemText primary={me2.nama}/>
               </ListItem>
           
               :null
            
              
          )
          
          ) }
        </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        : null
            )
            )}
      </div>
          )


    return (
      <div className={classes.root}>
        <CssBaseline />
        <ThemeProvider theme={theme}>

          <AppBar position="sticky" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>

              {

                app.map((me) => {
                  return (
                    <Typography variant="body1" className={classes.navbarMenu}>
                      <LinkHref href={`http://${me.link}.${subdomain}:3000`} target="_blank" rel="noopener" >{me.nama}</LinkHref>
                    </Typography>
                  )
                }
                )
              }

              <Typography variant="body1" className={classes.title}>
                Some stuff here
          </Typography>
              {true && (
                <div>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.handleMenu}>
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Menu 1</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu 2</MenuItem>
                    <MenuItem onClick={this.handleClose}>Combo 1</MenuItem>
                    <MenuItem onClick={this.handleClose}>Combo 2</MenuItem>
                    <MenuItem onClick={this.handleClose}>PaHe 1</MenuItem>
                    <MenuItem onClick={this.handleClose}>PaHe 2</MenuItem>
                    <MenuItem onClick={this.handleClose}>Panas 1</MenuItem>
                    <MenuItem onClick={this.logOut}>LogOut</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
          {/* <nav className={classes.drawer} aria-label="mailbox folders"> */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.MobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
               
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
              className={classes.drawer}
                classes={{
                  paper: classes.drawerPaper,
                }}
                //style={{marginTop:200}}
                variant="permanent"
                open
               // 
              >
                {expansion}
              </Drawer>
            </Hidden>
          {/* </nav> */}
        </ThemeProvider>
      </div>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  userApp: PropTypes.func.isRequired,
  userMenuApp: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(connect(
  mapStateToProps,
  { logoutUser,
     userApp, 
     userMenuApp 
    }), withStyles(useStyles))(Navbar);