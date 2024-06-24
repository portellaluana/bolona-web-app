// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
import Base from './pages/Base/Base';


const App: React.FC = () => {
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
