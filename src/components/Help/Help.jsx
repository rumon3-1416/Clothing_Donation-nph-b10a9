import React, { useEffect } from 'react';

const Help = () => {
  useEffect(() => {
    document.title = 'How to Help | Clothing Donation';
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold">How to Help</h1>
    </div>
  );
};

export default Help;
