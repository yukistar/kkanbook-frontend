import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import MainPage from './pages/mainPage'
import EditPage from './pages/editPage'
import Notfound from './pages/notfound'
import DetailPage from './pages/detailPage'
import JoinPage from './pages/joinPage'
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
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route path="/404" component={Notfound} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/edit/:id" component={EditPage} />
          <Route path="/join/:id" component={JoinPage} />
          <Route path="/chat" component={ChatPage} />
        </Router>
        <Footer />
      </PersistGate>
    </Provider>
  </div>, 

  document.getElementById('root')
);