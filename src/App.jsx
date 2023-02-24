import React, { useState, useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { NavBar } from './NavBar.jsx';
import { Profile } from './pages/Profile';
import { Category } from './pages/Category';
import { ErrorPage } from './pages/ErrorPage';
import { AuthProvider } from './components/AuthContext';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Form from './pages/form/Form';
import { Authenticate } from './pages/Authenticate';
import { getUser, useAuthState } from './utils/firebase';

const App = () => {
  const [user] = useAuthState();
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    if (!user) {
      setProfile(undefined);
      return;
    }
    const { email } = user;
    getUser(email).then((users) => {
      console.log(users);
      setProfile(users.length === 0 ? null : users[0]);
    });
  }, [user]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: user === null ? <Navigate to="/signin" /> : <NavBar user={user} />,
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
          path: '/trainer',
          element: <Category />
        }
      ]
    },
    {
      path: '/signup',
      element: <Form />
    },
    {
      path: '/signin',
      element: <Authenticate />
    }
  ]);

  return (
    <AuthProvider value={{ user, profile }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
