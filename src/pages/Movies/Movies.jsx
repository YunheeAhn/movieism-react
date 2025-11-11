import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router";
import MovieCard from "../Homepage/components/MovieCard/MovieCard";

// 경로
// 1. nav bar에서 클릭해서 온 경우 -> popular 영화 보여주기
// 2. keyword를 입력해서 온 경우 -> keyword 와 관련된 영화를 보여줌

// 페이지네이션
// 페이지 스테이트
// 페이지네이션 클릭 할 때마다 페이지 바꿔주기
// 페이지 값이 바뀔 때 마다 useSearchMovie 에 페이지까지 넣어서 fetch
const Movies = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });

  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }
  return (
    <section className="movies w1700">
      <div className="sort-movie">필터</div>
      <div className="view-movie">
        <div className="inner">
          {data?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div className="page-nation"></div>
      </div>
    </section>
  );
};

export default Movies;
