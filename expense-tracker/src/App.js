import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import './index.css';
import { responsiveFontSizes } from '@material-ui/core/styles';
import history from './services/history';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import PrivateRoute from './Components/PrivateRoute'
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CECECE',//"#7293a6",
      dark: "#A6A6A8",
      light: "#E8E9F3",
    },
    secondary: {
      main: "#B1E5F2",
      dark: "#272635"
    },
  },
  typography: {
    "fontFamily": `"Segoe UI", "Helvetica", "Arial", sans-serif`,
    "fontSize": 20,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }

});
theme = responsiveFontSizes(theme);

function App() {
 
  let user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <PrivateRoute path={'/home'} exact={true} component={HomePage} />
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
