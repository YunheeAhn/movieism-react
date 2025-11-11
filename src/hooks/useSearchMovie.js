import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = async ({ keyword, page }) => {
  if (!keyword) {
    const { data } = await api.get(`/movie/popular?page=${page}`);
    return data;
  }

  const { data } = await api.get(`/search/movie?query=${keyword}&page=${page}`);

  if (!data.results || data.results.length === 0) {
    const { data: popularData } = await api.get(`/movie/popular?page=${page}`);
    return {
      ...popularData,
      notice: "검색 결과가 없어 인기 영화를 대신 보여드립니다.",
    };
  }

  return data;
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page }],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    enabled: page !== undefined, // page 값이 없을 때 요청 방지
  });
};
