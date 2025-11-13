import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Sort from "./component/Sort";
import "./Movies.style.css";

// 경로
// 1. nav bar에서 클릭해서 온 경우 -> popular 영화 보여주기
// 2. keyword를 입력해서 온 경우 -> keyword 와 관련된 영화를 보여줌

// 페이지네이션
// 페이지 스테이트
// 페이지네이션 클릭 할 때마다 페이지 바꿔주기
// 페이지 값이 바뀔 때 마다 useSearchMovie 에 페이지까지 넣어서 fetch
const Movies = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popularity.desc");
  const [genre, setGenre] = useState(null);
  const [displayData, setDisplayData] = useState([]);

  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  // 페이지네이션 클릭
  const handlePageClick = ({ selected }) => setPage(selected + 1);

  // 필터/정렬 적용
  useEffect(() => {
    if (!data?.results) return;

    let filtered = [...data.results];

    if (genre) {
      filtered = filtered.filter((movie) => movie.genre_ids.includes(genre.id));
    }

    if (sort === "popularity.desc") {
      filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (sort === "release_date.desc") {
      filtered.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }

    setDisplayData(filtered);
  }, [data, sort, genre]);

  // 키워드/장르 변경 시 페이지 초기화
  useEffect(() => setPage(1), [keyword, genre]);

  // API notice alert
  useEffect(() => {
    if (data?.notice) alert(data.notice);
  }, [data?.notice]);

  if (isLoading) return <h1 className="message">Loading...</h1>;
  if (isError) return <h1 className="message">{error.message}</h1>;

  return (
    <section className="movies w1700">
      <div className="sort-movie">
        <Sort sort={sort} setSort={setSort} genre={genre} setGenre={setGenre} />
      </div>

      <div className="view-movie">
        <div className="inner">
          {displayData?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} sort={sort} />
          ))}
        </div>

        <div className="page-nation">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={data?.total_pages}
            forcePage={page - 1}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </section>
  );
};

export default Movies;
