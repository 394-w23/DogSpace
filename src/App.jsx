import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { NavBar } from './NavBar.jsx';
import { Profile } from './pages/Profile';
import { Category } from './pages/Category';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Form from './pages/form/Form';

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <NavBar />,
//       children: [
//         {
//           path: '/',
//           element: <Home />
//         },
//         {
//           path: '/profile',
//           element: <Profile />
//         },
//         {
//           path: '/category/:categoryId',
//           element: <Category />
//         }
//       ]
//     }
//   ]);

//   return (
//     <RouterProvider router={router} />
//   );
// };

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;