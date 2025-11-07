import React from "react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="wrap">
      <div className="header">
        <div className="logo">
          <img src="" alt="" />
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
          <input type="text" />
          <button>검색</button>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
