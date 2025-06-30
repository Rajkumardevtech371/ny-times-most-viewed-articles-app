import { useArticles } from "../../../hooks";
import { LoadingSpinner } from "../../ui/LoadingSpinner";
import { ArticleCard } from "../ArticleCard";
import { ErrorMessage } from "../ErrorMessage";
import PeriodSelector from "../PeriodSelector/PeriodSelector";

const Articles = () => {
  const { articles, loading, error, period, setPeriod, refetch } = useArticles();

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    refetch(newPeriod);
  };

  return (
    <>
       <PeriodSelector
          period={period}
          onPeriodChange={handlePeriodChange}
          disabled={loading}
        />

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorMessage message={error} onRetry={() => refetch(period)} />
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-center text-gray-700 py-12 font-serif">
          No articles found for this time period.
        </p>
      )}

      {!loading &&
        !error &&
        articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            testId={`article-card-${index}`}
          />
        ))}
    </>
  );
};

export default Articles;
