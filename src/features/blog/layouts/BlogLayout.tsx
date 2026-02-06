import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function BlogLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
