import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="min-h-[calc(100vh-320px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
