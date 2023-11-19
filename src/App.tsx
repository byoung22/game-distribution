import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './components/Home/Home';
import ErrorPage from './pages/Error';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'games/:slug', element: <Game /> },
      ],
    },
    {
      path: 'games/:game',
    },
  ]);

  return <RouterProvider router={router} />;
}
