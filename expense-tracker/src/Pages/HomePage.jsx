import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Partciles from 'react-particles-js';
import homeParticlesOptions from '../Components/homeParticlesOptions';
import DayExpenseList from '../Components/DayExpenseList';
import DaySearchbar from '../Components/DaySearchbar';
const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        flexGrow:1,
        width: '100%',
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
        zIndex: 1,
        position: 'absolute'
    },

}));

const HomePage = (props) => {
    const classes = useStyles();
    const [criteria, setCriteria] = useState("Day");

    const changeCriteria = (newValue) => setCriteria(newValue);
    return (
        <div className={classes.root}>
            <Partciles
                className="particles"
                params={homeParticlesOptions}
            />
            <Grid container justify="center" >
            <Navbar changeCriteria={changeCriteria} criteria={criteria} />
                <Grid item xs={12}>
                   {criteria==="Day"?<DaySearchbar/>:"Month searchbar"}
                </Grid>
                <Grid item xs={12}>
                    {criteria==="Day"?<DayExpenseList/>:null}
                </Grid>
            </Grid>
        </div>);
}

export default HomePage;