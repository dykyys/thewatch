export interface IImageCard {
  url: string;
  title?: string;
  alt: string;
  index: number;
  activeIndex: number;
  onClick: (index: number) => void;
}
