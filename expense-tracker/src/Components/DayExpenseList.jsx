import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SettingsIcon from '@material-ui/icons/Settings';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "30%",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
        [theme.breakpoints.only('sm')]: {
            width: "50%",
        },
        [theme.breakpoints.only('md')]: {
            width: "40%",
        },
    },
    list: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.light,
        marginTop: "20px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "40px",
        },
        height:"550px",
        overflow:'auto'
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    settingsIcon:{
        color: theme.palette.primary.main
    },
    deleteIcon:{
        color:"red"
    },
    item:{
        marginBottom:"30px",
    }
}));

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const DayExpenseList = (props) => {
    const classes = useStyles();
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid container justify="center" >
                <Grid item xs={12} >
                    <div className={classes.list}>
                        <List >
                            {generate(<>

                                <ListItem className={classes.item}>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction> 
                                        <IconButton className={classes.settingsIcon} edge="end" aria-label="delete">
                                            <SettingsIcon fontSize="large" />
                                        </IconButton>
                                        <IconButton className={classes.deleteIcon} edge="end" aria-label="delete">
                                            <DeleteForeverIcon fontSize="large" />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </>,
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default DayExpenseList;