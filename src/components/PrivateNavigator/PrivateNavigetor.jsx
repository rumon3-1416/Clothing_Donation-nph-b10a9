import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateNavigator = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="w-full min-h-[80vh] flex justify-center items-center">
        <h2 className="text-4xl font-semibold">Loading...</h2>
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to="/signin" replace={true} />;
  }
};

export default PrivateNavigator;
