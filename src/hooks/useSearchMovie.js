// useSearchMovie.js
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword }) => {
  const response = keyword
    ? await api.get(`/search/movie?query=${keyword}`)
    : await api.get("/movie/popular");
  return response.data;
};

export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    enabled: keyword !== undefined, // keyword가 존재할 때만 요청
  });
};
