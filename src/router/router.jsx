import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import PrivateNavigator from '../components/PrivateNavigator/PrivateNavigetor';

import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home/Home';
import SignIn from '../components/Authentication/SignIn';
import SignUp from '../components/Authentication/SignUp';
import UpdateProfile from '../components/Authentication/UpdateProfile';
import ResetPassword from '../components/Authentication/ResetPassword';
import Campaigns from '../components/Campaigns/Campaigns';

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
        path: '/campaigns',
        element: <Campaigns />,
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
