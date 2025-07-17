import Hero from "@/src/components/home/hero";
import Shelf from "@/src/components/common/shelf/shelf";
import News from "@/src/components/common/news/news";
import { TRENDING_MANGA } from "@/src/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <Shelf
        title="Trending Manga"
        items={TRENDING_MANGA}
        shelfType="manga"
        className="my-16"
      />
      <Shelf
        title="Trending Anime"
        items={TRENDING_MANGA}
        shelfType="manga"
        className="my-16"
      />
      <Shelf
        title="Trending Novels"
        items={TRENDING_MANGA}
        shelfType="manga"
        className="my-16"
      />
      <News items={TRENDING_MANGA} newsType="news" title="News & Events" />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
