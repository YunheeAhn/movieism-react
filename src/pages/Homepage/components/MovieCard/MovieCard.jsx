import React from "react";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const posterImage = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`;

  const { data: genreData } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if (!genreData) {
      return [];
    }

    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <dl className="card" onClick={() => navigate(`/movies/${movie.id}`)}>
      <dt>
        <img src={posterImage} alt={movie.title} />
      </dt>
      <dd>
        <h3>{movie.title}</h3>
        <div className="genre">
          {showGenre(movie.genre_ids).map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>

        <p className="average">{movie.vote_average}</p>
        <p className="popularity">{movie.popularity}</p>
        <p className="adult">{movie.adult ? "18+" : "18-"}</p>
      </dd>
    </dl>
  );
};

export default MovieCard;
