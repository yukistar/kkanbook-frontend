import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import IntroPage from './pages/introPage'
import MainPage from './pages/mainPage'
import EditPage from './pages/editPage'
import Notfound from './pages/notfound'
import PostPage from './pages/postPage'
import DetailPage from './pages/detailPage'
import ChatPage from './pages/chatPage';
import SigninPage from './pages/signinPage';
import SignupPage from './pages/signupPage';
import MyclubPage from './pages/myclubPage'
import MypagePage from './pages/mypagePage'

import ScrollToTop from "./hooks/useScrollToTop";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { CookiesProvider } from 'react-cookie';

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
    <CookiesProvider>
    <Provider store = { store }>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <ScrollToTop />
        <Navbar />
          <Route exact path="/" component={IntroPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/404" component={Notfound} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/post" component={PostPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/edit/:id" component={EditPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/myclub" component={MyclubPage} />
          <Route path="/mypage" component={MypagePage} />
        </Router>
        <Footer />
      </PersistGate>
    </Provider>
    </CookiesProvider>
  </div>, 

  document.getElementById('root')
);