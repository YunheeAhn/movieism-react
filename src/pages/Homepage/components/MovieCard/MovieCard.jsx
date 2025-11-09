import React from "react";

const MovieCard = ({ movie }) => {
  const posterImage = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;
  return (
    <dl>
      <dt>
        <img src={posterImage} alt={movie.title} />
      </dt>
      <dd>
        <h3>{movie.title}</h3>
        <div className="genre">
          {movie.genre_ids.map((id) => (
            <span key={id}>{id}</span>
          ))}
        </div>

        <p className="average">{movie.vote_average}</p>
        <p className="popularity">{movie.popularity}</p>
        <p className="adult">{movie.adult ? "over18" : "under18"}</p>
      </dd>
    </dl>
  );
};

export default MovieCard;
