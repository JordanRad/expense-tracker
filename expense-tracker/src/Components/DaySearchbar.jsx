import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        width: "94%",
        margin: "auto",
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "left"
    },
    addBtn: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.dark,
        fontSize: "30px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main}`
        },
        borderRadius: "100%",
        width: "70px",
        height: "70px",
        marginLeft: "20px"
    },
    input: {
        verticalAlign: 'middle',
        color: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: "14px",
    },
    label: {
        color: theme.palette.primary.light,
        opacity: 0.9,
        shrink:true
    },
    datePicker:{
        verticalAlign: 'middle',
        color: theme.palette.primary.light
        
    }
}));
const convertToMonthString = (number) => {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return months[number]
}
const DaySearchbar = (props) => {
    const classes = useStyles();

    const [input, setInput] = useState("");

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setSelectedDate(selectedDate);
    };
    return (

        <Grid container justify='center' className={classes.root}>
            
            <Grid item xs={12} sm={12} md={4} >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    inputProps={{ className: classes.datePicker }}
                    InputLabelProps={{ className: classes.label }}
                />

            </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={9} sm={9} md={6}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Search by name and category" variant="outlined"
                    onChange={(e) => setInput(e.target.value)}
                    inputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.label }} />
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
                <Button className={classes.addBtn} variant="outlined">
                    <AddIcon />
                </Button>

            </Grid>

        </Grid >

    );
}

export default DaySearchbar; 