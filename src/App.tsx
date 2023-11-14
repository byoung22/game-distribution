import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'games/:game',
    },
  ]);

  return <RouterProvider router={router} />;
}
