import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* header */}
      <Outlet></Outlet>
      {/* footer */}
    </div>

  );
};

export default App;