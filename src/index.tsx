import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import { FooterOne } from './Components/Footers/FooterOne';
import { HeaderOne } from './Components/Headers/HeaderOne';
import logo from './Images/TNTLogo.png';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = () => {
  return (
    <>
      <HeaderOne tntImage={logo} />
      <Outlet />
      <FooterOne />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        //errorElement: <ErrorPage />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
