import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from './Error';
import App from './App';
import How from './How';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        <App />
      </React.StrictMode>
);