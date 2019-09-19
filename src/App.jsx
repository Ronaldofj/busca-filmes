import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { tema } from './styles/base';
import GlobalStyle from './styles/GlobalStyle';

// Pages
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={tema}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route component={Home} path="/" exact />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
