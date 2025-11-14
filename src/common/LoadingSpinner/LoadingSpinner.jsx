import React from "react";
import { ClipLoader } from "react-spinners";
import "./LoadingSpinner.style.css";

const LoadingSpinner = () => {
  console.log("LoadingSpinner 렌더링됨!");

  return (
    <div className="spinner-area">
      <ClipLoader
        size={150}
        color="var(--main)"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
