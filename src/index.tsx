import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import { FooterOne } from './Components/Footers/FooterOne';
import { HeaderOne } from './Components/Headers/HeaderOne';
import logo from './images/TNTLogo.png';
import Home from './Pages/Home';
import { headerRoutes } from './Helpers/config';
import { Error } from './Pages/Error';
import { Boats } from './Pages/Boats';
import { Drivers } from './Pages/Drivers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = () => {
  return (
    <>
      <HeaderOne logo={logo} headerRoutes={headerRoutes} />
      <Outlet />
      <FooterOne />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/boats',
        element: <Boats />,
        errorElement: <Error />
      },
      {
        path: '/drivers',
        element: <Drivers />,
        errorElement: <Error />
      }
    ],
  },
]);

root.render(<RouterProvider router={router} />);
