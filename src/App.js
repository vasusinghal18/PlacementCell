import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanySelector from './components/CompanySelector';
import CompanyPage from './components/CompanyPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanySelector />} />
        <Route path="/company/:id" element={<CompanyPage />} />
      </Routes>
    </Router>
  );
}

export default App;