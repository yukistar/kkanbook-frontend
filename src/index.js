import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import MainPage from './pages/mainPage'
import EditPage from './pages/editPage'
import Notfound from './pages/notfound'
import DetailPage from './pages/detailPage'
import ChatPage from './pages/chatPage';
import LoginPage from './pages/loginPage';
import JoinPage from './pages/joinPage';

import Nevbar from "./components/nevbar";
import Footer from "./components/footer";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};
const enhancedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const store = createStore(enhancedReducer);
  const persistor = persistStore(store);
  //persistor.purge();
  return { store, persistor };
};

const { store, persistor } = configureStore();

ReactDOM.render(
  <div className="main-wrapper">
    <Provider store = { store }>
      <PersistGate loading={null} persistor={persistor}>
        <Nevbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/404" element={<Notfound />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/chat/:id" element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </PersistGate>
    </Provider>
  </div>, 

  document.getElementById('root')
);
