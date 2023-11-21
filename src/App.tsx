import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
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
  ]);

  return <RouterProvider router={router} />;
}
