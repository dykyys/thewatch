import { useState } from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { LeftIcon, RightIcon } from '../../images/icons';
import { Button } from '../Button/Button';
import { IImagesList } from './ImagesList.types';
import { ImageCard } from '../ImageCard/ImageCard';

export const Images = ({ images }: IImagesList) => {
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
        {images.map((image, i) => (
          <ImageCard
            {...image}
            index={i}
            activeIndex={activeIndex}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};
