import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenreResponse {
  count: number;
  results: [];
}

interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [errors, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(true);
      });
    return () => controller.abort();
  }, []);

  return { genres, errors, isloading };
};

export default useGenre;
