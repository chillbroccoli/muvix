import { Home, Clapperboard, Tv, Heart, Search } from 'lucide-vue-next';

const nav = [
  {
    name: 'Home',
    icon: Home,
    href: '/',
  },
  {
    name: 'Movies',
    icon: Clapperboard,
    href: '/movies',
  },
  {
    name: 'TV Shows',
    icon: Tv,
    href: '/tv',
  },
  {
    name: 'Watchlist',
    icon: Heart,
    href: '/watchlist',
  },
  {
    name: 'Search',
    icon: Search,
    href: '/search',
  },
];

export default nav;
