import React from "react";
import { useRecommendMoviesQuery } from "../../../../hooks/useRecommendMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const Recommend = ({ id }) => {
  const { data, isLoading, isError, error } = useRecommendMoviesQuery(id);

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }

  return (
    <div className="recommend-wrap">
      {data.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Recommend;
