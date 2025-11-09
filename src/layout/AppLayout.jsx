import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import logo from "../assets/logo.png";

const AppLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className={`header ${isScrolled ? "scrolled" : ""}`}>
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
      <section className="main">
        <Outlet />
      </section>
    </div>
  );
};

export default AppLayout;
