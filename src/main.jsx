import './index.css';
import '@assets/fonts/applesdgothicneo/AppleSDGothicNeo.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RouterConfig } from '@utils/router/RouterConfig';

const router = createBrowserRouter(RouterConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
