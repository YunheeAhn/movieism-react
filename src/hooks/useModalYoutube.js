import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchModalYoutube = (id) => {
  return api.get(`/movie/${id}/videos?language=en-US`);
};

export const useModalYoutubeQuery = (id) => {
  return useQuery({
    queryKey: ["modalYoutube", id],
    queryFn: () => fetchModalYoutube(id),
    enabled: !!id, // id가 있을 때만 실행
  });
};
