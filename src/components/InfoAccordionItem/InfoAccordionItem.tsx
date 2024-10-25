import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './styles.css';
import { IInfoAccordionItem } from './InfoAccordionItem.types';

export const InfoAccordionItem = ({ children, triger }: IInfoAccordionItem) => {
  return (
    <Accordion.Item className="AccordionItem" value={triger}>
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={'bg-lightSilver  p-4 flex  AccordionTrigger'}
        >
          {triger}
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className="AccordionContent p-4">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
};
