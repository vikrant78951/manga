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


export type NewsCardProps = {
  id?: string | number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  dat?: string;
  link?: string;
};
