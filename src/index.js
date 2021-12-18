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
  <BrowserRouter>
    <div className="main-wrapper">
      <Nevbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/404" element={<Notfound />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);