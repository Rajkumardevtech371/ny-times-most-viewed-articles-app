import React from "react";
import { ArticleCardContent } from "../../ui/ArticleCardContent";
import Card from "../../ui/Card/Card";

const ArticleCard = ({ article, onClick, testId }) => {
  return (
    <Card
      className="cursor-pointer hover:bg-gray-50 transition-colors -mx-4 mb-6"
      data-testid={testId}
      onClick={() => onClick(article)}
    >
      <ArticleCardContent article={article} />
    </Card>
  );
};

export default ArticleCard;
