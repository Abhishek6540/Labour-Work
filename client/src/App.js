import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./pages/Homepage'));
const SignInSignUp = lazy(() => import('./pages/SignInSignUp'));
const DashboardRoutes = lazy(() => import('./dashboard/Dashboard'));

const App = () => {
  return (
    <Suspense fallback={<div className="loader-div">
      <span class="loader"></span>
    </div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInSignUp />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />

        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
