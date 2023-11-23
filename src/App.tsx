import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home, { loader as homeLoader } from './pages/Home/Home';
import Game, { loader as gameLoader } from './pages/Game/Game';
import ErrorPage from './pages/Error';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: homeLoader,
          element: <Home />,
        },
        {
          path: 'games/:slug',
          element: <Game />,
          loader: gameLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
