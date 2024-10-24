import { Stars } from '../Stars/Stars';
import { IRatingAverage } from './RatingAverage.types';

export const RatingAverage = ({ reviews }: IRatingAverage) => {
  if (!reviews.length)
    return <p className="italic whitespace-nowrap">No reviews yet</p>;
  const avgRating =
    reviews.map((r) => r.rating).reduce((a, b) => a + b) / reviews.length;
  return (
    <div className="flex items-center gap-3">
      <Stars rating={Math.round(avgRating)} />
      <p className="whitespace-nowrap">
        {avgRating.toFixed(2)} ({reviews.length})
      </p>
    </div>
  );
};
