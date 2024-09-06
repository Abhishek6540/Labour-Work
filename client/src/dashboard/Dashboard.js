import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Sidebar = lazy(() => import('./Sidebar'));
const Navbar = lazy(() => import('./Navbar'));
const Footer = lazy(() => import('./Footer'));
const Analysis = lazy(() => import('./Analysis'));
const Customers = lazy(() => import('./Customers'));
const Boards = lazy(() => import('./Boards'));

const DashboardRoutes = () => {
  return (
    <>
      <div className="flex h-screen">
        <Suspense fallback={<div className="loader-div">
          <span class="loader"></span>
        </div>}>
          <Sidebar />
          <div className="flex-1 bg-blue-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Analysis />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/boards" element={<Boards />} />
              <Route path="*" element={<p>Page not found</p>} />

            </Routes>
            <Footer />
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default DashboardRoutes;

