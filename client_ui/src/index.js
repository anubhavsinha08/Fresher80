import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    {/* <Route path='*' element={<NotFound/>}/> */}
  </Routes>
  <Footer/>
  </BrowserRouter>
);

