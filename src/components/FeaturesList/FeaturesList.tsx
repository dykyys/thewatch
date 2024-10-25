import { IFeaturesList } from './FeaturesList.types';

export const FeaturesList = ({ features }: IFeaturesList) => {
  return (
    <ul>
      {features.map((feature) => (
        <li className="list-disc" key={feature}>
          {feature}
        </li>
      ))}
    </ul>
  );
};
