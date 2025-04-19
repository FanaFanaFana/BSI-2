import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import CountryList from './components/CountryList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountryList />
  </React.StrictMode>
);