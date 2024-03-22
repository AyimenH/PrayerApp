// App.js
import React from 'react';
import {ThemeProvider} from './navigation/ThemeContext';
import MainContainer from './navigation/MainContainer';

function App() {
  return (
    <ThemeProvider>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
