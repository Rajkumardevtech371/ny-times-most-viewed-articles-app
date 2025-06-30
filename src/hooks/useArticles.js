import { useState, useEffect, useCallback } from "react";
import { NYTimesServices } from "../services";

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState(1);
  const fetchArticles = useCallback(
    async (selectedPeriod = period) => {
      setLoading(true);
      setError(null);
      try {
        const fetchedArticles =
          await NYTimesServices.fetchMostPopular(selectedPeriod);
        setArticles(fetchedArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [period],
  );

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return {
    articles,
    loading,
    error,
    period,
    setPeriod,
    refetch: fetchArticles,
  };
};

export default useArticles;
