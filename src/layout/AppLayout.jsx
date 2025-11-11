import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import logo from "../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const AppLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // keyword 입력해서 받아오기
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();

    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
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
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <div className="wrapper">
      <div className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="MOVIEISM" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        <div className={`nav-area ${menuOpen ? "open" : ""}`}>
          <ul className="menus">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
          </ul>

          <form className="search" onSubmit={searchByKeyword}>
            <input
              type="text"
              placeholder="Search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
      <section className="main">
        <Outlet />
      </section>
    </div>
  );
};

export default AppLayout;
