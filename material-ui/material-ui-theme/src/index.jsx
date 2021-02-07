import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import lightBlue from "@material-ui/core/colors/lightBlue"

const theme = createMuiTheme({
  palette:{
    primary: purple,
    secondary: lightBlue
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
,
  document.getElementById('root')
);

