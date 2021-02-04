import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import CommunicationService from '../services/CommunicationService';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "40px",
    },
    title: {
        flexGrow: 1,
    },
    active:{
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
    }
}));

const logout = ()=> CommunicationService.logout();
export default function Navbar(props) {
    const classes = useStyles();

    const firstName = JSON.parse(sessionStorage.getItem("user")).firstName
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                        Hi, {firstName}
                    </Typography>
                    <div style={{marginRight:"30px"}}>
                        {/* by:&nbsp;&nbsp; */}
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