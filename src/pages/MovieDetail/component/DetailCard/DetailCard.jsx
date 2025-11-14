import React, { useState } from "react";
import { useMovieDetailQuery } from "../../../../hooks/useMovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ModalYoutube from "../../../../common/ModalYoutube/ModalYoutube";
import noImage from "../../../../assets/noimage.png";
import LoadingSpinner from "../../../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../../../common/ErrorMessage";

const DetailCard = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

  const [openModal, setOpenModal] = useState(false);

  const movie = data?.data || {};

  const posterImage = movie.poster_path
    ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
    : noImage;

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <dl>
        <dt>
          <img src={posterImage} alt={data.data.title} />

          <button
            className="play-youtube"
            onClick={() => setOpenModal(true)}
            aria-label="Play Trailer"
          >
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
        </dt>
        <dd>
          <div className="genre">
            {data?.data.genres.map((genre, index) => (
              <span className="tag" key={index}>
                {genre.name}
              </span>
            ))}
          </div>
          <h3 className="title">{data.data.title}</h3>
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
              {data.data.budget
                ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                    data.data.budget
                  )
                : "N/A"}
            </div>
          </div>
        </dd>
      </dl>

      <ModalYoutube id={data.data.id} show={openModal} onHide={() => setOpenModal(false)} />
    </>
  );
};

export default DetailCard;
