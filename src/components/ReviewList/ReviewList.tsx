import { Review } from '../../types';
import { Stars } from '../Stars/Stars';

export const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return reviews.map((r, i) => (
    <div
      className="w-full border-b-2 px-2 py-4 last-of-type:border-b-0"
      key={i}
    >
      <div className="flex justify-between">
        <Stars rating={r.rating} />
        <span className="text-sm text-gray-dark">
          {new Date(r.date).toDateString()}
        </span>
      </div>
      <div>{r.text ? <p className="pt-3">{r.text}</p> : null}</div>
    </div>
  ));
};
