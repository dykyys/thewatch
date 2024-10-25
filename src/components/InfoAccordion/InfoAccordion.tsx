import * as Accordion from '@radix-ui/react-accordion';
import { IInfoAccordion } from './InfoAccordion.types';
import { ReviewList } from '../ReviewList/ReviewList';
import { InfoAccordionItem } from '../InfoAccordionItem/InfoAccordionItem';
import { FeaturesList } from '../FeaturesList/FeaturesList';

export const InfoAccordion = ({ product }: IInfoAccordion) => {
  return (
    <Accordion.Root type="multiple">
      <InfoAccordionItem triger="Description">
        {<p className="indent-8">{product.description}</p>}
      </InfoAccordionItem>

      <InfoAccordionItem triger="Features">
        <FeaturesList features={product.features} />
      </InfoAccordionItem>

      <InfoAccordionItem triger="Reviews">
        <ReviewList reviews={product.reviews} />
      </InfoAccordionItem>
    </Accordion.Root>
  );
};
