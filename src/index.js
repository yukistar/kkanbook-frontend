import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import MainPage from './pages/mainPage'
import EditPage from './pages/editPage'
import Notfound from './pages/notfound'
import DetailPage from './pages/detailPage'

import Nevbar from "./components/nevbar";
import Footer from "./components/footer";

ReactDOM.render(
  <div className="main-wrapper">
    <Nevbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById('root')
);