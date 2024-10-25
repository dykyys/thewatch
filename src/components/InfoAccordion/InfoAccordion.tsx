import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import { IInfoAccordion } from './InfoAccordion.types';
import { ReviewList } from '../ReviewList/ReviewList';

export const InfoAccordion = ({ product }: IInfoAccordion) => {
  return (
    <Accordion.Root type="multiple">
      <Accordion.Item className="AccordionItem" value="description">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger
            className={'bg-lightSilver  p-4 flex  AccordionTrigger'}
          >
            Description
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="AccordionContent p-4">
          <p className="indent-8">{product.description}</p>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="features">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger
            className={'bg-lightSilver  p-4 flex  AccordionTrigger'}
          >
            Features
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="AccordionContent p-4">
          <ul className="">
            {product.features.map((feature) => (
              <li className="list-disc" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="reviews">
        <Accordion.Header className="AccordionHeader">
          <Accordion.Trigger
            className={'bg-lightSilver  p-4 flex  AccordionTrigger'}
          >
            Reviews
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <ReviewList reviews={product.reviews} />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
