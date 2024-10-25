import { Stars } from '../Stars/Stars';
import { IReviewList } from './ReviewList.types';

export const ReviewList = ({ reviews }: IReviewList) => {
  return reviews.map(({ id, text, rating, date }) => (
    <ul
      className="w-full border-b-2 px-2 py-4 last-of-type:border-b-0"
      key={id}
    >
      <li className="flex justify-between">
        <Stars rating={rating} />
        <span className="text-sm text-gray-dark">
          {new Date(date).toDateString()}
        </span>
      </li>
      <div>{text ? <p className="pt-3">{text}</p> : null}</div>
    </ul>
  ));
};
