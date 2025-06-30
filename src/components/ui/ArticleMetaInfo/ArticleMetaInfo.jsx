import { User, Calendar } from "lucide-react";

const ArticleMetaInfo = ({ byline, date }) => (
  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mb-6 gap-2 sm:space-x-6 border-b border-gray-300 pb-4">
    {byline && (
      <div className="flex items-center">
        <User className="w-4 h-4 mr-2" />
        <span className="font-medium">{byline.replace("By ", "")}</span>
      </div>
    )}
    <div className="flex items-center">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{date}</span>
    </div>
  </div>
);

export default ArticleMetaInfo;
