import './index.css';
import '@assets/fonts/notoserifkr/NotoSerifKR.css';
import '@assets/fonts/applesdgothicneo/AppleSDGothicNeo.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { RecoilRoot } from 'recoil';

import { RouterInfo } from './utils/router/RouterInfo';

const router = createBrowserRouter(RouterInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RecoilRoot>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // </RecoilRoot>
);
