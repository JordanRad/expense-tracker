import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PieChartIcon from '@material-ui/icons/PieChart';
import { Link } from 'react-router-dom';
import Partciles from 'react-particles-js';
import particlesOptions from '../Components/particlesOptions';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        margin: 0,
        padding: "10px 60px",
        height: '100vh',
        width: '100%',
        color: theme.palette.primary.light,
        justifyContent: 'center',
        textAlign: 'center',
        paddingBottom: "56px",
        [theme.breakpoints.down('md')]: {
            overflowY: 'scroll',
        },
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1

    },
    animation: {
        height: '30%',
        zIndex: 100,
        margin: 'auto'
    },
    item: {
        marginTop: "30px",
        paddingLeft: "5%",
        paddingRight: "5%",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "20%",
            paddingRight: "20%",
        },
        [theme.breakpoints.up('md')]: {
            borderTop: `1px solid ${theme.palette.primary.dark}`,
            borderBottom: `1px solid ${theme.palette.primary.dark}`,
        },
    },
    heading: {
        marginBottom: "2%",
        paddingLeft: "14%",
        paddingRight: "14%"
    },
    btn: {
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.secondary.dark,
        border: `1px solid ${theme.palette.primary.light}`,
        fontSize: '20px',
        [theme.breakpoints.down('md')]: {
            marginTop: "40px",
            width: "300px",
            height: "60px"
        },
        [theme.breakpoints.up('md')]: {
            width: "400px",
            height: "80px"
        },
        marginBottom: "1px",
        marginTop: "26px"
    },
    icon: {
        fontSize: '80px',
        [theme.breakpoints.up('md')]: {
            fontSize: '115px'
        },
    },
    loginLink: {
        '&:hover': {
            color: theme.palette.primary.dark
        },
        fontSize: '20px',
        color: theme.palette.primary.light,
        marginTop: "1px",
        marginBottom: "100px"
    }
}));

const LandingPage = (props) => {
    const classes = useStyles();
    const GridItems = [<Grid item className={classes.item} xs={12} md={4}>
        <ListIcon className={classes.icon} />
        <div style={{ fontSize: "23px", letterSpacing: "1px" }}>
            Keep track of every expense that you make by entering it to your personal account.
        </div>

    </Grid>,
    <Grid className={classes.item} item xs={12} md={4}>
        <AttachMoneyIcon className={classes.icon} />
        <div style={{ fontSize: "23px", letterSpacing: "1px" }}>
            List every expense and sort it by month for better understanding on how you spend your money.
          </div>
    </Grid>,
    <Grid className={classes.item} item xs={12} md={4}>
        <PieChartIcon className={classes.icon} />
        <div style={{ fontSize: "23px", letterSpacing: "1px" }}>
            View graphical representations of your expenses.
        </div>
    </Grid>]
    return (
        <>
            <Grid container className={classes.root} >
                <Partciles
                    className="particles"
                    params={particlesOptions}
                />
                <Grid item className={classes.heading} xs={12}>
                    <Typography variant="h2">My Expense</Typography>
                    <br />
                    <Typography variant="body2">Lorem ipsum dolor sit amet,Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                </Grid>
                {GridItems.map(i => i)}
                <Grid item xs={12}>
                    <Button href={"./register"} className={classes.btn} size="large" variant="outlined">Sign Up Now</Button>
                </Grid>
                <Grid item xs={12}>
                    <Link className={classes.loginLink} to={'./login'}>I have an account already</Link>
                </Grid>
            </Grid>
        </>
    );
}
export default LandingPage;