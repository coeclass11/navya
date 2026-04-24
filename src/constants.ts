/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'c1',
    name: 'Classic Espresso',
    description: 'Rich, bold, and intense double shot of our specialty arabica blend.',
    price: '$3.50',
    category: 'coffee'
  },
  {
    id: 'c2',
    name: 'Silky Cappuccino',
    description: 'Espresso topped with a thick layer of velvety steamed milk foam.',
    price: '$4.50',
    category: 'coffee'
  },
  {
    id: 'c3',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel drizzle.',
    price: '$5.25',
    category: 'coffee'
  },
  {
    id: 'c4',
    name: 'Vanilla Latte',
    description: 'Smooth espresso balanced with steamed milk and a hint of vanilla.',
    price: '$4.95',
    category: 'coffee'
  },
  {
    id: 't1',
    name: 'Matcha Green Tea Latte',
    description: 'Pure ceremonial grade matcha whisked with creamy steamed milk.',
    price: '$5.50',
    category: 'tea'
  },
  {
    id: 't2',
    name: 'Earl Grey Reserve',
    description: 'A fragrant blend of black tea with a touch of bergamot and lavender.',
    price: '$4.00',
    category: 'tea'
  },
  {
    id: 's1',
    name: 'Artisanal Avocado Toast',
    description: 'Sourdough bread topped with smashed avocado, chili flakes, and a poached egg.',
    price: '$12.50',
    category: 'snacks'
  },
  {
    id: 's2',
    name: 'Truffle Mushroom Panini',
    description: 'Grilled sourdough with sautéed mushrooms, truffle oil, and melted provolone.',
    price: '$11.00',
    category: 'snacks'
  },
  {
    id: 'd1',
    name: 'Decadent Chocolate Fudge Cake',
    description: 'Rich dark chocolate cake layered with silky smooth chocolate ganache.',
    price: '$7.50',
    category: 'desserts'
  },
  {
    id: 'd2',
    name: 'Classic Cheesecake',
    description: 'New York style creamy cheesecake with a buttery graham cracker crust.',
    price: '$6.50',
    category: 'desserts'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Sarah Jenkins',
    rating: 5,
    comment: 'The atmosphere is so cozy and the coffee is exceptional. My absolute favorite spot in town!',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    name: 'Michael Chen',
    rating: 4,
    comment: 'Great place for a quick bite. The avocado toast was fresh and delicious. Staff is very friendly.',
    date: '1 week ago'
  },
  {
    id: 'r3',
    name: 'Emma Thompson',
    rating: 5,
    comment: 'I love working from here. The Wi-Fi is reliable and the matcha latte is the best I\'ve had.',
    date: '3 days ago'
  }
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1501339817302-cd4468881444?auto=format&fit=crop&q=80&w=1920&h=1080',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=600',
  dessert: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800&h=600',
  about: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800&h=1000',
  interior: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800&h=600'
};
