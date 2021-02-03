import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100vh",
        width: '100%',
        padding: 0,
        margin: 0,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    addBtn: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.dark,
        fontSize: "18px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        }
    }
}));
const convertToMonthString = (number) => {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return months[number]
}
const convertDateToDayString = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()},${days[date.getDay()]}`
}
const HomePage = (props) => {
    const classes = useStyles();
    const [criteria, setCriteria] = useState("Day");

    const changeCriteria = (newValue) => setCriteria(newValue);

    let date = new Date();
    let displayDate = '';
    let displayedTime = criteria === "Month" ?
        displayDate = convertToMonthString(date.getMonth()) :
        displayDate = convertDateToDayString(date)
    return (
        <Container maxWidth className={classes.root}>
            <Navbar changeCriteria={changeCriteria} criteria={criteria} />
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="h4">
                        {displayedTime}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button className={classes.addBtn} size="large" variant="outlined">Add new expense</Button>
                </Grid>

            </Grid>
        </Container>);
}

export default HomePage;