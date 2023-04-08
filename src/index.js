import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarDarkTop from './component/navbar/navbar';
import NewsList from './component/newslist/newslist';
import CustomizedAccordions from './component/newlistcard/newlistcard';
import  'bootstrap/dist/css/bootstrap.min.css' ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarDarkTop/>
    <NewsList/>
    <CustomizedAccordions/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
