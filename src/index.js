import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/appRouter'

// Context
import { ContextProviderProduct } from './context/products/Context';
import { ContextProviderAuth } from './context/auth/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProviderAuth>
      <ContextProviderProduct>
        <RouterProvider router={router} />
      </ContextProviderProduct>
    </ContextProviderAuth>
  </React.StrictMode>
);
