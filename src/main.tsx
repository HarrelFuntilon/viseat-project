// LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './custom.css';
import Indexpage from './pages/home/Indexpage';
import AdminPageLogin from './pages/admin/AdminPageLogin';
import AdminPage from './pages/admin/AdminPage';
import Promote from './pages/home/Promote';
import Explore from './pages/home/Explore';
import About from './pages/home/About';
import Inquire from './pages/home/Inquire';
import CreateUserPage from './pages/admin/CreateUserPage';
import TemplateTable from './components/TemplateTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Indexpage />,
  },
  {
    path: '/pages/promote',
    element: <Promote />,
  },
  {
    path: '/pages/explore',
    element: <Explore />,
  },
  {
    path: '/pages/explore/inquire',
    element: <Inquire />,
  },
  {
    path: '/pages/about',
    element: <About />,
  },
  {
    path: '/admin',
    element: <AdminPageLogin />,
  },
  {
    path: '/admin/:adminpage',
    element: <AdminPage />,
  },
  {
    path: '/admin/templatetable',
    element: <TemplateTable />,
  },

  {
    path: '/admin/adminpage/createUserPage',
    element: <CreateUserPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
