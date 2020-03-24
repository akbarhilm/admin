import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



const useStyles = theme => ({

    root: {
        marginLeft: 240,  display: 'flex', justifyContent: 'center',
        flexGrow:1
    },
    list:{
        backgroundColor: theme.palette.background.paper,
        flexGrow:1,
        margin:theme.spacing(4),
       // marginRight:theme.spacing(2),


    },
    buttonnext:{
        margin:theme.spacing(2)
    },
    paper:{
        flexGrow:1,
        extAlign: 'center',
    },
    header: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(5),
        textAlign: 'left'

    },
}
)


class OtoApps extends Component {



    render() {
        const { classes } = this.props
        return (
            <div>
                <Navbar />
                <div className={classes.root}>
                    <Paper className={classes.paper}>
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
                                                // onChange={handleToggle(value)}
                                                //checked={checked.indexOf(value) !== -1}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    </Grid>
                                );
                            })}
                        </List>
                        </Grid>
                        <Button className={classes.buttonnext} variant="contained" color="primary">
        <Link to="/otoapps" >Simpan</Link>
      </Button>
                        </Paper>
            </div>
                </div>
        )
    }
}

OtoApps.propTypes = {
                    classes: PropTypes.object.isRequired,
}



export default withStyles(useStyles)(OtoApps)