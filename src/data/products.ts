import { Product } from '@/context/CartContext';
import muse2Image from '@/assets/muse2.jpg';
import muse3Image from '@/assets/muse3.jpg';

export const products: Product[] = [
  {
    id: 'greater-lines',
    name: 'Greater Lines Concept',
    price: 300,
    image: muse3Image,
    category: 'Concepts',
    description: 'A design deeply rooted in authentic Ghanaian culture. The "Greater" represents Greater Accra where this journey began, while the "Lines" symbolize the intricate road networks connecting communities across the country.'
  },
  {
    id: 'number-plate',
    name: 'Number Plate Concept',
    price: 300,
    image: muse2Image,
    category: 'Concepts',
    description: 'A design rooted in Ghanaian identity and authenticity. Inspired by distinctive Ghanaian number plates, featuring "1957-06" as a tribute to Ghana\'s independence - the first African country in West Africa to be free from colonial rule.'
  }
];