import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Header from './components/header/Header.jsx';
import HtmlCard from './components/visualhtml/Card.jsx';
import CssCard from './components/visualcss/Card.jsx';
import JsCard from './components/visualjs/Card.jsx';
import ReactCard from './components/visualreact/Card.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pages',
    element: <Header />,
    children: [
      {
        path: '/pages/html',
        element: <HtmlCard />
      },
      {
        path: 'css',
        element: <CssCard />
      },
      {
        path: 'js',
        element: <JsCard />
      },
      {
        path: 'react',
        element: <ReactCard />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
