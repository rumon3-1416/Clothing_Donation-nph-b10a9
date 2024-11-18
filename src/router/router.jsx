import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home/Home';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
import PrivateNavigator from '../components/PrivateNavigator/PrivateNavigetor';
import ResetPassword from '../components/ResetPassword/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/updateprofile',
        element: (
          <PrivateNavigator>
            <UpdateProfile />
          </PrivateNavigator>
        ),
      },
      {
        path: 'resetpassword',
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
