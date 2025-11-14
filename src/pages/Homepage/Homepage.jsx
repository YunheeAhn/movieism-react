import React, { useEffect } from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";

import AOS from "aos";
import "aos/dist/aos.css";
import { responsive } from "../../constants/responsive";

// 1. 배너 생성 => popular 영화의 첫번째 아이템
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Banner />
      <section className="w1700">
        <UpcomingMovieSlide data-aos="fade-up" data-aos-delay="300" responsive={responsive} />
        <TopRatedMovieSlide data-aos="fade-up" data-aos-delay="600" responsive={responsive} />
        <PopularMovieSlide data-aos="fade-up" data-aos-delay="900" responsive={responsive} />
      </section>
    </div>
  );
};

export default Homepage;
