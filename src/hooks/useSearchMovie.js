// useSearchMovie.js
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword, page }) => {
  const response = keyword
    ? await api.get(`/search/movie?query=${keyword}&page=${page}`)
    : await api.get(`/movie/popular?page=${page}`);
  return response.data;
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page }],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    enabled: keyword !== undefined, // keyword가 존재할 때만 요청
  });
};
