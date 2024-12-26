// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Services />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;