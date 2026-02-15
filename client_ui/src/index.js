import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './components/register/SignIn';
import LogIn from './components/login/login';
import NotFound from './NotFound';
import AboutPage from './components/about/AboutPage';
import Explore from './components/explore/Explore';
import ScrollToTop from './components/ScrollToTop';
// import explore from './components/explore/Explore'
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/register' element={<SignIn />} />
      {/* <Route path='/explore' element={<Explore />} /> */}
       <Route
            path="/explore"
            element={
              <ProtectedRoute allowedRoles={["freelancer"]}>
                <Explore/>
              </ProtectedRoute>
            }
          />
      {/* <Route path='/category' element={<Category/>}/> */}
      <Route path='/login' element={<LogIn />} />
      <Route path='/*' element={<NotFound />} />
      {/* <Route path='*' element={<NotFound/>}/> */}
    </Routes>
    <Footer />
  </BrowserRouter>
  </AuthProvider>
);

