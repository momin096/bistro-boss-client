import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
<Toaster
  position="top-center"
  reverseOrder={false}
/>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-[1300px] mx-auto'>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
