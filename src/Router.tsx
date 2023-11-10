import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
}
