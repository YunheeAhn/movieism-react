import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendMovies = (queryData) => {
  const id = queryData.queryKey[1];
  return api.get(`/movie/${id}/recommendations?language=en-US`);
};

export const useRecommendMoviesQuery = (id) => {
  return useQuery({
    queryKey: ["movie-recommend", id],
    queryFn: fetchRecommendMovies,
    select: (data) => {
      return data.data;
    },
  });
};
