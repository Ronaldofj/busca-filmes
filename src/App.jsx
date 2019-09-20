import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { tema } from './styles/base';
import GlobalStyle from './styles/GlobalStyle';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';


function App() {
  return (
    <ThemeProvider theme={tema}>
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Favoritos} path="/favoritos" />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
