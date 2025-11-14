import React from "react";
import { useRecommendMoviesQuery } from "../../../../hooks/useRecommendMovies";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../../common/ErrorMessage";

const Recommend = ({ id }) => {
  const { data, isLoading, isError, error } = useRecommendMoviesQuery(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
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
