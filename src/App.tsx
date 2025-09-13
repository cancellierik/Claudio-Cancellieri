import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Insurance from './views/Insurance';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/insurance" replace />} />
      <Route path="/insurance" element={<Insurance />} />
    </Routes>
  );
};

export default App;
