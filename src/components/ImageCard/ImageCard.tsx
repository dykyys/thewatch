import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { IImageCard } from './ImageCard.types';

export const ImageCard = ({
  url,
  title,
  alt,
  index,
  activeIndex,
  onClick,
}: IImageCard) => {
  return (
    <AspectRatio.Root
      className={
        'h-full border-4 rounded p-1 ' +
        (index === activeIndex ? 'border-yellow' : 'border-white')
      }
      key={url}
      ratio={1 / 1}
    >
      <img
        role="button"
        onClick={() => onClick(index)}
        className="h-full bg-gray-med object-cover"
        alt={alt ? `Photo of product ${alt}` : `Product photo titled ${title}`}
        src={url}
      />
    </AspectRatio.Root>
  );
};
