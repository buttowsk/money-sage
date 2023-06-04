import { Routes, Route } from 'react-router-dom';
import { Home, Authentication } from '../pages';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/themes.js';

function App() {
  return (
    <ThemeProvider theme={ themes.colors }>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/authentication" element={ <Authentication/> }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
