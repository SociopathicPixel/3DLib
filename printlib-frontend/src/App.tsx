import React, { useEffect } from 'react';
import './styles/theme.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  useEffect(() => {
    document.body.classList.remove('light-theme'); // default to dark
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
  };

  return (
    <Router>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRoutes />
    </Router>
  );
}


export default App;
