import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* footer */}
    </div>

  );
};

export default App;