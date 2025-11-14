import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import { useModalYoutubeQuery } from "../../hooks/useModalYoutube";
import "./ModalYoutube.style.css";
import ErrorMessage from "../ErrorMessage";

const ModalYoutube = ({ id, show, onHide }) => {
  const { data, isError, error } = useModalYoutubeQuery(id);

  if (!show) return null;

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const results = data?.data?.results || [];

  return (
    <div className="modal">
      <div className="inner">
        <button className="close" onClick={onHide}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        {results.length ? (
          <YouTube videoId={results[0].key} className="youtube-frame" />
        ) : (
          <p className="message">No trailer available for this movie.</p>
        )}
      </div>
    </div>
  );
};

export default ModalYoutube;
