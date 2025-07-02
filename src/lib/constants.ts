
import type {NavigationItem} from '@/src/lib/defination'


export const NAVIGATIONS: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
    description: "Overview, highlights, trending manga/anime",
  },
  {
    label: "Manga",
    path: "/manga",
    description: "List of manga by category, ranking, genre",
  },
  {
    label: "Anime",
    path: "/anime",
    description: "Same structure, but for anime",
  },
    {
    label: "Novel",
    path: "/novel",
    description: "Web Novel",
  },
  {
    label: "Search",
    path: "/search",
    description: "Search across manga/anime/news",
  },
  {
    label: "Watchlist",
    path: "/watchlist",
    description: "User-tracked manga/anime",
  },
  {
    label: "About",
    path: "/about",
    description: "Info about the site, credits, legal stance",
  },
];
