import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import HtmlCard from './components/visualhtml/View.jsx';
import CssCard from './components/visualcss/View.jsx';
import JsCard from './components/visualjs/View.jsx';
import ReactCard from './components/visualreact/View.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/html',
        element: <HtmlCard />
      },
      {
        path: '/css',
        element: <CssCard />
      },
      {
        path: '/js',
        element: <JsCard />
      },
      {
        path: '/react',
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
