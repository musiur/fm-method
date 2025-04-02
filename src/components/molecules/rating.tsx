import { Star } from "lucide-react";

export const StarRating = (rating: number) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          // Full star
          return <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />;
        } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
          // Partial star
          return (
            <div key={star} className="relative">
              <Star size={16} className="fill-gray-200 text-gray-200" />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${(rating % 1) * 100}%` }}
              >
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          // Empty star
          return <Star key={star} size={16} className="fill-gray-200 text-gray-200" />;
        }
      })}
      <span className="ml-1 text-sm">({rating})</span>
    </div>
  );
};
