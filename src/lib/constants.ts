import type { NavigationItem, FooterLinks } from "@/src/lib/defination";

// enums
export const SITE_NAME = "MangaHub";
export const SITE_DESCRIPTION = `${SITE_NAME} is your go-to source for all things manga, anime, and
                web novels. Explore our vast collection, stay updated with the
                latest trends, and enjoy a seamless reading experience.`;

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

export const TERMS_AND_CONDITION: NavigationItem[] = [
  {
    label: "Privacy Policy",
    path: "/privacy",
    description: "Details on data collection, usage, and user rights",
  },
  {
    label: "Terms of Service",
    path: "/terms",
    description: "User agreements, responsibilities, and legal terms",
  },
  {
    label: "Cookies Policy",
    path: "/cookies",
    description: "Information on cookie usage, user consent, and management",
  },
];

export const FOOTER_LINKS: FooterLinks = {
  product: [
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
  ],
  company: [
    {
      label: "About",
      path: "/about",
      description: "Info about the site, credits, legal stance",
    },
    {
      label: "Contact",
      path: "/contact",
      description: "Get in touch with us",
    },
    {
      label: "Watchlist",
      path: "/watchlist",
      description: "User-tracked manga/anime",
    },
  ],
};

export const SOCIAL_LINKS: NavigationItem[] = [
  {
    label: "GitHub",
    path: "https://github.com/your-repo",
    description: "Contribute to the project on GitHub",
  },
  {
    label: "Twitter",
    path: "https://twitter.com/your-profile",
    description: "Follow us on Twitter for updates",
  },
  {
    label: "Discord",
    path: "https://discord.gg/your-invite",
    description: "Join our Discord community",
  },
];
