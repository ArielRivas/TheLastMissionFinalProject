import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./ReduxLogin/ReduxLogin";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css"></link>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
     <App /></Provider></Router>       
  </React.StrictMode>
);
