import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SendProposal from './pages/SendProposal';

const Home = lazy(() => import('./pages/Homepage'));
const SignInSignUp = lazy(() => import('./pages/SignInSignUp'));
const DashboardRoutes = lazy(() => import('./dashboard/Dashboard'));
const CategoryFilterResults = lazy(() => import('./pages/CategoryFilterResults'));
const Navbar = lazy(() => import('./pages/Navbar'));
const Footer = lazy(() => import('./pages/Footer'));
const LeftSidebar = lazy(() => import('./pages/LeftSidebar'));
const RightSidebar = lazy(() => import('./pages/RightSidebar'));
// const PageNotFound = lazy(() => import('./dashboard/PageNotFound'));

// Main layout with sidebars and footer
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="homepage-container flex justify-between">
      <LeftSidebar />
      <div className="main-content">{children}</div>
      <RightSidebar />
    </div>
    <Footer />
  </>
);

const App = () => {
  return (
    <Suspense fallback={<div className="loader-div"><span className="loader"></span></div>}>
      <Router>
        <Routes>
          {/* Routes with MainLayout */}
          <Route
            path="/"
            element={<MainLayout><Home /></MainLayout>}
          />
          <Route
            path="/sign-in"
            element={<MainLayout><SignInSignUp /></MainLayout>}
          />
          <Route
            path="/category-result/:slug"
            element={<MainLayout><CategoryFilterResults /></MainLayout>}
          />
            <Route
            path="/send-proposal"
            element={<MainLayout><SendProposal /></MainLayout>}
          />

          {/* Dashboard Routes - Separate Layout without Navbar, Sidebar, and Footer */}
          <Route
            path="/dashboard/*"
            element={<DashboardRoutes />}
          />
          {/* <Route path="/*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
