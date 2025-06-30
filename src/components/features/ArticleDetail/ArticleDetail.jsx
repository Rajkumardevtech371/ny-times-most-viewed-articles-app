import React from "react";
import { ExternalLink } from "lucide-react";
import { ArticleMetaInfo } from "../../ui/ArticleMetaInfo";
import { Button } from "../../ui/Button";

const ArticleDetail = ({ article, onClose }) => {
  if (!article) return null;

  const imageUrl = article.getImageUrl();

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 sm:p-4 z-50"
      onClick={onClose}
      data-testid="article-detail-modal"
    >
      <div
        className="bg-white w-full max-w-3xl sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-8">
          <div className="relative mb-6">
            <div className="mb-3">
              <span className="text-xs uppercase tracking-wider text-red-600 font-semibold">
                {article.getSectionDisplay()}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-black leading-tight">
              {article.title}
            </h1>

            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-500 hover:text-black text-3xl font-light leading-none"
              data-testid="close-modal-btn"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <ArticleMetaInfo
            byline={article.byline}
            date={article.getFormattedDate()}
          />

          {imageUrl && (
            <div className="mb-6">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-64 sm:h-96 object-cover rounded"
              />
            </div>
          )}

          <div className="prose max-w-none">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-serif mb-8">
              {article.abstract}
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <Button
              href={article.url}
              variant="primary"
              className="inline-flex items-center gap-2"
              data-testid="read-full-article-btn"
            >
              <ExternalLink className="w-4 h-4" />
              Read Full Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
