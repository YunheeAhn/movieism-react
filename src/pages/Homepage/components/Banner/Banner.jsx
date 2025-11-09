import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";

import Slider from "react-slick";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }

  const bannerImages = data.results.slice(0, 3).map((movie) => ({
    img: `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}`,
    title: movie.title,
    overview: movie.overview,
  }));

  const settings = {
    dots: false,
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="visual">
      {bannerImages.map((movie, index) => (
        <dl className="banner" key={index}>
          <dt className="banner-img">
            <img src={movie.img} alt={movie.title} />
          </dt>
          <dd className="banner-text">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </dd>
        </dl>
      ))}
    </Slider>
  );
};

export default Banner;
