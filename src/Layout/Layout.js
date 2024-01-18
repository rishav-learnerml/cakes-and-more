import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
