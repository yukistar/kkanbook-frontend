import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import MainPage from './pages/mainPage'
import EditPage from './pages/editPage'
import DetailPage from './pages/detailPage'
import Notfound from './pages/notfound'

import Nevbar from "./components/nevbar";
import Footer from "./components/footer";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <div className="main-wrapper">
      <Provider store = { store }>
        <Nevbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/404" element={<Notfound />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);