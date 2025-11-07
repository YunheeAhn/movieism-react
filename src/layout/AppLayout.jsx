import React from "react";
import { Outlet } from "react-router";
import logo from "../assets/logo.png";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="MOVIEISM" />
        </div>

        <ul className="menus">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
        </ul>

        <div className="search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
