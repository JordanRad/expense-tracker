import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "40px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    active:{
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
    }
}));

export default function Navbar(props) {
    const classes = useStyles();

    const name = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user").firstName) : "uu"
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                        Hello, {name}
                    </Typography>
                    <div style={{marginRight:"4%"}}>
                        List my expenses by: &nbsp;
                        <ButtonGroup disableElevation variant="contained" color="primary">
                            <Button 
                            className={props.criteria==="Month"?classes.active:null}
                            onClick={(e)=>props.changeCriteria("Month")}
                            >Month</Button>
                            <Button 
                            className={props.criteria==="Day"?classes.active:null}
                            onClick={(e)=>props.changeCriteria("Day")}
                            >Day</Button>
                        </ButtonGroup>
                    </div>
                    <Button variant="outlined">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}