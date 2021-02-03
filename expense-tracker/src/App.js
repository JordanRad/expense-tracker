import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { responsiveFontSizes } from '@material-ui/core/styles';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
let theme = createMuiTheme({

  palette: {
    primary: {
      main: '#7293a6',//"#7293a6",
      dark: "#232f34",
      light: "#D5e1e8",
    },
    secondary: {
      main: "#EBDE97",
      dark: "#a29138"
    },
  },
  typography: {
    "fontFamily": `"Segoe UI", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }

});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
