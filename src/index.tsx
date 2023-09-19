import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = () => {
  return (
    <>
      <Outlet />
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
