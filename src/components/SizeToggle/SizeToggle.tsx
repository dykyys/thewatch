import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ISizeToggle } from './SizeToggle.types';
export const SizeToggle = ({ sizes, onChange }: ISizeToggle) => {
  return (
    <div className="flex flex-col items-start gap-1 w-40  font-medium">
      <label className="leading-tight">Size</label>
      <ToggleGroup.Root
        type="single"
        aria-label="Product size"
        onValueChange={onChange}
        className="w-full grid grid-flow-col bg-gray-light rounded"
      >
        {sizes.map((size) => (
          <ToggleGroup.Item
            className="bg-gray-light data-[state=on]:bg-yellow px-5 py-2 rounded cursor-pointer hover:bg-yellow focus:bg-yellow hover:text-softCoral focus:text-softCoral"
            key={size}
            value={size}
            title={`Size ${size}`}
            aria-label={`Size ${size}`}
          >
            {size}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>
    </div>
  );
};
