import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import HtmlCard from './components/visual/HtmlView.jsx';
import CssCard from './components/visual/CssView.jsx';
import JsCard from './components/visual/JsView.jsx';
import ReactCard from './components/visual/ReactView.jsx';

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
