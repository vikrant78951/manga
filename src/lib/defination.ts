export type NavigationItem = {
  label: string;
  path: string;
  description: string;
};

export type MangaCardProps = {
  id?: string | number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};
