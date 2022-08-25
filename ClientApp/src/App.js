import React, { Component } from 'react';
import { Route } from 'react-router';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import {Layout} from './components/Layout';
import Login from './pages/Login';
import theme from "./themes/mui-theme";
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Route exact path='/' component={Login} />
        </Layout>
      </ThemeProvider>
    );
  }
}
