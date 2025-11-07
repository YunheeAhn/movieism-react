import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError } = usePopularMoviesQuery();
  console.log(data);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (isError) {
    <h1>error.message</h1>;
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[0].poster_path}` +
          ")",
      }}
    >
      <div>Banner</div>
    </div>
  );
};

export default Banner;
