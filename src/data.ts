import imgUrl1 from './assets/watch-1.webp';
import imgUrl2 from './assets/watch-2.webp';
import imgUrl3 from './assets/watch-3.webp';
import imgUrl4 from './assets/watch-4.webp';
import imgUrl5 from './assets/watch-5.webp';
import imgUrl6 from './assets/watch-6.webp';

export const TISSOT_SEASSTAR = {
  id: '1234',
  name: 'Tissot Seastar 2000 Professional Powermatic 80',
  description: 'T120.607.37.041.00',
  features: [
    'Diameter: 46 mm',
    'Quick-release strap',
    'Power reserve up to 80 hours',
    'Transparent case back',
    'Screw-down crown and case back',
    'Ceramic bezel ring',
    'Swiss automatic movement',
    'Domed scratch-resistant sapphire crystal',
    'Anti-reflective coating on the glass.',
  ],
  images: [
    {
      url: imgUrl1,
      title: 'Tissot Seastar 2000 Professional Powermatic 80',
      alt: 'Front view of the Tissot Seastar 2000 Professional Powermatic 80',
    },
    {
      url: imgUrl2,
      title: 'Tissot Seastar with ceramic bezel',
      alt: 'Side view highlighting ceramic bezel',
    },
    {
      url: imgUrl3,
      title: 'Transparent case back',
      alt: 'View of the transparent case back showcasing the mechanism',
    },
    {
      url: imgUrl4,
      alt: 'Full view of the Tissot Seastar wristwatch in profile',
    },
    {
      url: imgUrl5,
      alt: 'Tissot Seastar 2000 displayed on a stand',
    },
    {
      url: imgUrl6,
      alt: 'Strap Tissot Seastar',
    },
  ],
  reviews: [
    {
      rating: 5,
      text: 'Outstanding timepiece! The ceramic bezel is a standout.',
      date: new Date(2023, 6, 13).valueOf(),
    },
    { rating: 4, date: new Date(2023, 4, 10).valueOf() },
    {
      rating: 4,
      text: 'Great watch, but the bracelet is a bit too heavy for my liking.',
      date: new Date(2023, 2, 21).valueOf(),
    },
    {
      rating: 5,
      text: 'Perfect for deep sea diving, the best diver watch I’ve owned.',
      date: new Date(2022, 12, 15).valueOf(),
    },
    { rating: 3, date: new Date(2022, 11, 11).valueOf() },
    {
      rating: 4,
      text: 'Elegant design and excellent performance in water.',
      date: new Date(2022, 10, 30).valueOf(),
    },
  ],
  price: 1195.0,
  sizes: ['S', 'M', 'L', 'XL'],
};

export const SCROOGE = {
  name: 'Scrooge McDuck',
};
