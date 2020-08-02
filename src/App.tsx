import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{}}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
