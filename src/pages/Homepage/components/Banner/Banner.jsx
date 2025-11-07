import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError } = usePopularMoviesQuery();
  console.log(data);

  if (isLoading) {
    <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    <h1 className="message">error.message</h1>;
  }

  return (
    <div className="banner">
      <div
        className="banner-img"
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
            ")",
        }}
      ></div>
      <div className="banner-text">
        <h2>{data?.results[0].title}</h2>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
