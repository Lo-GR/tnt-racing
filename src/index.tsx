import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import { FooterOne } from './Components/Footers/FooterOne';
import { HeaderOne } from './Components/Headers/HeaderOne';
import logo from './images/tntlogo.png';
import Home from './Pages/Home';
// import { headerRoutes } from './Helpers/config';
import { Error } from './Pages/Error';
import { useState } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleMobileNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderOne
        logo={logo}
      />
      <Outlet />
      <FooterOne />
      {/* <MobileNav open={open} handleOpen={handleMobileNav} /> */}
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
      // {
      //   path: '/boats',
      //   element: <Boats />,
      //   errorElement: <Error />,
      // },
      // {
      //   path: '/drivers',
      //   element: <Drivers />,
      //   errorElement: <Error />,
      // },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
