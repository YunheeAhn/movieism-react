import React from "react";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
import "./Sort.style.css";

const Sort = ({ sort, setSort, genre, setGenre }) => {
  const { data: genres } = useMovieGenreQuery();

  const sortOptions = [
    { label: "Popularity", value: "popularity.desc" },
    { label: "Latest", value: "release_date.desc" },
  ];

  return (
    <div className="sort-box">
      {/* 정렬 기준 */}
      <div className="selected-box dropdown">
        <label>정렬 기준</label>
        <select className="select-option" value={sort} onChange={(e) => setSort(e.target.value)}>
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* 장르 선택 */}
      <div className="selected-box dropdown">
        <select
          className="select-option"
          value={genre?.id || ""}
          onChange={(e) => {
            const selected = genres?.find((g) => String(g.id) === e.target.value);
            setGenre(selected || null);
          }}
        >
          <option value="">All</option>
          {genres?.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sort;
