import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Shop from './Shop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<App/>} />
      <Route path='shop' element={<Shop/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

