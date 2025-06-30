import { ChevronRight, Calendar, User } from "lucide-react";
import SectionLabel from "../SectionLabel/SectionLabel";
import { IconText } from "../IconText";

const ArticleCardContent = ({ article }) => {
  const imageUrl = article.getImageUrl();

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <div className="flex-1">
        <div className="mb-2">
          <SectionLabel text={article.getSectionDisplay()} />
        </div>

        <h2 className="text-lg sm:text-xl font-serif font-bold text-black mb-3 leading-tight hover:underline">
          {article.title}
        </h2>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 font-serif">
          {article.abstract}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 gap-2 sm:space-x-4">
          {article.byline && (
            <IconText icon={User}>{article.byline.replace("By ", "")}</IconText>
          )}
          <IconText icon={Calendar}>{article.getFormattedDate()}</IconText>
        </div>
      </div>

      {imageUrl && (
        <div className="w-full sm:w-32 h-48 sm:h-24 mt-4 sm:mt-0">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-full object-cover rounded"
            loading="lazy"
          />
        </div>
      )}

      <div className="hidden sm:block">
        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-2" />
      </div>
    </div>
  );
};

export default ArticleCardContent;
