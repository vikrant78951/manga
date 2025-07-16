import Hero from "@/src/components/home/hero";
import Shelf from "@/src/components/common/shelf/shelf";
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
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
