import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import NotFoundPage from '../pages/not-found/NotFoundPage';

const BaseRoute = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />

      {/* Catch all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default BaseRoute;
