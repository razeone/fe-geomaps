import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NewPlace from './pages/NewPlace';
import NewAddress from './pages/NewAddress';
import RecoverPassword from './pages/RecoverPassword';
import CountriesView from './pages/CountriesView';
import AddressesView from './pages/AddressesView';
import EditAddress from './pages/EditAddress';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/countries" element={<CountriesView />} />
        <Route path="/addresses" element={<AddressesView />} />
        <Route path="/edit-address/:addressId" element={<EditAddress />} />
        <Route path="search-place/:name" element={<SearchResults />} />
        <Route path="/new-place" element={<NewPlace />} />
        <Route path="/new-address" element={<NewAddress />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
