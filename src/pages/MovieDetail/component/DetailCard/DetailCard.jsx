import React from "react";
import { useParams } from "react-router";
import { useMovieDetailQuery } from "../../../../hooks/useMovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const DetailCard = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  console.log("detailpage", data);
  if (isLoading) {
    return <h1 className="message">Loading...</h1>;
  }

  if (isError) {
    return <h1 className="message">{error.message}</h1>;
  }

  return (
    <dl>
      <dt>
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.data.poster_path}`}
          alt={data.data.title}
        />
      </dt>
      <dd>
        <div className="genre">
          {data?.data.genres.map((genre, index) => (
            <span className="tag" key={index}>
              {genre.name}
            </span>
          ))}
        </div>
        <h3 className="title">{data.data.title} : Watch Now!</h3>
        <div className="overview">
          <p>{data.data.overview}</p>
        </div>
        <div className="info">
          <div className="release">
            <span className="tag">Release</span>
            {data.data.release_date}
          </div>
          <div className="run-time">
            <span className="tag">Run Time</span>
            {data.data.runtime}m
          </div>
          <div className="popular">
            <span className="tag">Popularity</span>
            {data.data.popularity}
          </div>
          <div className="budget">
            <span className="tag">Budget</span>
            {data.data.budget}
          </div>
        </div>
        <button>
          <i>
            <FontAwesomeIcon icon={faPlay} />
          </i>
          Trailer
        </button>
      </dd>
    </dl>
  );
};

export default DetailCard;
