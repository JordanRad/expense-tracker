import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Typography from '@material-ui/core/Typography';
import CommunicationService from '../services/CommunicationService';
import history from '../services/history';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.dark,
        display: 'flex',
        flex: 1,
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100%',

    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1611433675953-53eaeb60907d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)',
        // https://images.unsplash.com/photo-1611433675953-53eaeb60907d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max
        //   https://images.unsplash.com/photo-1610363000393-26db007b0793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: theme.palette.primary.main
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            color: "yellow"
        },
        borderRadius: "5px"
    },
    input: {
        color: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: "5px"
    },
    label: {
        color: theme.palette.primary.light,
        opacity: 0.9
    },
    background: {
        backgroundColor: theme.palette.secondary.dark,
    }
}));
const login = (email, password) => {
    return CommunicationService.login(email, password)
}
const LoginPage = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [validationMessage, setValidationMessage] = useState("")
    const onSubmitClick = (e) => {
        e.preventDefault();
        console.log({ email: email, password: password })
        login(email, password).then(r => {
            if (r === "Wrong Credentials" || r === "") {
                setValidationMessage("Wrong Credentials")
            } else {

                let user = JSON.stringify(r)
                sessionStorage.setItem("user", user)
                window.location.href = './home'
            }
        })
            .catch(err => {
                console.log(err)
                setValidationMessage("Wrong credentials")
            })
    }
    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={false} sm={4} md={8} className={classes.image} />
            <Grid className={classes.background} item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <MonetizationOnIcon style={{ color: "#272635" }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome to MyExpense
                    </Typography>
                    <form className={classes.form} noValidate>
                        <p style={{ color: 'red', textAlign: 'center' }}>{validationMessage}</p>
                        <TextField
                            inputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            inputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            className={classes.submit}
                            onClick={onSubmitClick}
                        >
                            Login
            </Button>
                        <Grid container justify={"center"}>
                            <Grid item>
                                <Link href="./register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default LoginPage;