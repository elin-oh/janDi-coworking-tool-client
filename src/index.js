import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from './serviceWorker';

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(),
));
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider >,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
