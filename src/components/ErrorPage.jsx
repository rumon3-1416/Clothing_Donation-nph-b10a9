import React, { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'Error | 404';
  }, []);

  return (
    <div className="min-w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-red-500 text-2xl md:text-5xl font-bold text-center">
        404 Page not found
      </h2>
    </div>
  );
};

export default ErrorPage;
