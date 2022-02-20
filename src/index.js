import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StyledEngineProvider} from "@mui/styled-engine-sc";

ReactDOM.render(
        <StyledEngineProvider injectFirst>
      <BrowserRouter>
    <App />
      </BrowserRouter>
        </StyledEngineProvider>,
  document.getElementById('root')
);

