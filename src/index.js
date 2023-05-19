import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogLayout from './components/auth';

import './index.css'
import ResultsScreen from './screens/ResultsScreen';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LogLayout />
  },
  {
    path: "/results/:title",
    element: <ResultsScreen />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
