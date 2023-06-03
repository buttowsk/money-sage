import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/index.js';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes.js';

function App() {
  return (
    <ThemeProvider theme={ themes.colors }>
      <Routes>
        <Route path="/" element={ <Home/> }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
