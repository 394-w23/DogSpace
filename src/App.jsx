import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { NavBar } from './NavBar.jsx';
import { Profile } from './pages/Profile';
import { Category } from './pages/Category';
import { ErrorPage } from './pages/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Form from './pages/form/Form';

// will need to add logic to only show form when it hasn't been filled out, in the home page
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      // element: <Form />,
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <div>no page yet</div>
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/category/:categoryId',
          element: <Category />
        }
      ]
    },
    {
      path: '/signup',
      element: <Form />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
