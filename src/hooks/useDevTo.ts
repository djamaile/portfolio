import { useEffect, useState, useCallback } from "react";
import * as api from "../api/api";
import { Article } from "../types/blog";

interface useDevToConfig {
  error: boolean;
  articles: Array<Article>;
  loading: boolean;
}

const useDevTo = (username: string): useDevToConfig => {
  const [articles, setArticles] = useState<Array<Article> | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const getArticles = useCallback(() => {
    api
      .getArticles({ username })
      .then((res) => {
        setArticles(res.data);
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  useEffect(() => {
    getArticles();

    return (): void => {
      setArticles(null);
    };
  }, [getArticles]);

  return { error, articles, loading };
};

export { useDevTo };
