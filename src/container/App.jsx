import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/LandingPage';
import Products from '../pages/Products';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
