import { useState } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { LeftIcon, RightIcon } from '../../images/icons';
import { Button } from '../Button/Button';
import { IImage } from './IImages.types';

export const Images = ({ images }: IImage) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const findNextIndex = () =>
    activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
  const findPrevIndex = () =>
    activeIndex - 1 < 0 ? images.length - 1 : activeIndex - 1;
  return (
    <div className="relative w-full">
      <AspectRatio.Root className="relative" key="active" ratio={1 / 1}>
        <Button
          onClick={() => setActiveIndex(findNextIndex())}
          position="right"
        >
          <RightIcon />
        </Button>
        <Button onClick={() => setActiveIndex(findPrevIndex())} position="left">
          <LeftIcon />
        </Button>

        <img
          className="h-full bg-gray-med object-cover"
          src={activeImage.url}
          alt={activeImage.alt || activeImage.title}
        />
      </AspectRatio.Root>
      <div className="my-[10px] mx-5 grid auto-rows-auto grid-cols-5 gap-0">
        {images.map(({ url, title, alt }, i) => (
          <AspectRatio.Root
            className={
              'h-full border-4 rounded p-1 ' +
              (i === activeIndex ? 'border-yellow' : 'border-white')
            }
            key={url}
            ratio={1 / 1}
          >
            <img
              role="button"
              onClick={() => setActiveIndex(i)}
              className="h-full bg-gray-med object-cover"
              alt={
                alt
                  ? `Photo of product ${alt}`
                  : `Product photo titled ${title}`
              }
              src={url}
            />
          </AspectRatio.Root>
        ))}
      </div>
    </div>
  );
};
