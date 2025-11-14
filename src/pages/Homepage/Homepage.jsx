import React, { Suspense, useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";

import AOS from "aos";
import "aos/dist/aos.css";
import { responsive } from "../../constants/responsive";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

// 1. 배너 생성 => popular 영화의 첫번째 아이템
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold as needed
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Banner />
        <section className={`w1700 ${isMobile ? "px-3" : "px-5"}`}>
          <UpcomingMovieSlide data-aos="fade-up" data-aos-delay="300" responsive={responsive} />
          <TopRatedMovieSlide data-aos="fade-up" data-aos-delay="600" responsive={responsive} />
          <PopularMovieSlide data-aos="fade-up" data-aos-delay="900" responsive={responsive} />
        </section>
      </Suspense>
    </div>
  );
};

export default Homepage;
