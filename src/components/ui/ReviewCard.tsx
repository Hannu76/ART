import React from "react";
import { VerifiedReview } from "@/types";
import { Star, CheckCircle } from "lucide-react";

interface ReviewCardProps {
  review: VerifiedReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-[#E3E9EB] p-6 hover:shadow-sm transition-shadow">
      {/* Rating stars & verified tag */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1 text-[#D89B3D]">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D89B3D]" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] text-[#287A58] font-medium bg-[#EAF4F0] px-2 py-0.5 rounded-full">
          <CheckCircle className="w-3 h-3" />
          {review.verifiedPlatform}
        </span>
      </div>

      <blockquote className="text-sm text-[#0B1720] leading-relaxed italic grow">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <div className="mt-5 pt-4 border-t border-[#F0F4F5] flex flex-col">
        <span className="font-bold text-sm text-[#0B1720]">{review.author}</span>
        <span className="text-xs text-[#52616B]">{review.role}</span>
        <span className="text-xs text-[#788994] mt-0.5">{review.practiceOrTrust}</span>
        <div className="mt-2 text-[11px] text-[#087F8C] font-medium">
          Course: {review.courseTaken} &bull; {review.date}
        </div>
      </div>
    </div>
  );
};
