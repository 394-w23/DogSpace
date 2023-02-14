import './App.css';
import { Home } from './pages/Home';
import { NavBar } from './NavBar.jsx';
import { Profile } from './pages/Profile';
import { Category } from './pages/Category';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {
          path: '/',
          element: <Home />
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
    }
  ]);

  return (
    <RouterProvider router={router} />
    /* //   <div style={{ width: 700, height: 200 }} className="video-responsive">
    //     <iframe
    //       width="853"
    //       height="480"
    //       src={`https://www.youtube.com/embed/OFZ003dY8cU`}
    //       frameBorder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowFullScreen
    //       title="Embedded youtube"
    //     />
    //   </div>
    //   <div style={{ width: 700, height: 200 }} className="video-responsive">
    //     <iframe
    //       width="853"
    //       height="480"
    //       src={`https://www.youtube.com/embed/OFZ003dY8cU`}
    //       frameBorder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowFullScreen
    //       title="Embedded youtube"
    //     />
    //   </div> */
  );
};

export default App;
