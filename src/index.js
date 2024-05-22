import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
// import store from './Stores/Store';
import store from './Stores/UserStore'
import { BrowserRouter } from "react-router-dom";
// import store from '../Stores/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
          <BrowserRouter>

          <App />
            </BrowserRouter>
     </Provider>


);


