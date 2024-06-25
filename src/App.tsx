// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
import Base from './pages/Base/Base';


const App: React.FC = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(
        (registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        },
        (error) => {
          console.log('ServiceWorker registration failed: ', error);
        }
      );
    });
  }
 
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Base />} />
      </Routes>
    </Router>
  );
};

export default App;
