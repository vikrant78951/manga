"use client";

import React from "react";
import SectionHeader from "./shelf-header";
import CardSlider from "./shelf-slider";
import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import { SwiperSlide } from "swiper/react";
import { MangaCardProps } from "@/src/lib/defination";

// cards
import MangaCard from "./cards/manga-card";
import AnimeCard from "./cards/anime-card";
import NewsCard from "./cards/news-card";

type ShelfType = "anime" | "manga" | "news" | "watchlist";

interface ContentShelfProps<T> {
  title: string;
  items: T[];
  shelfType: ShelfType;
  className?: string;
}

function renderCard<T>(item: T, index: number, shelfType: ShelfType) {
  switch (shelfType) {
    case "manga":
      return <MangaCard data={item as MangaCardProps} key={index} />;
    case "anime":
      return <AnimeCard data={item as MangaCardProps} key={index} />;
    case "news":
      return <NewsCard data={item as MangaCardProps} key={index} />;
  }
}

function ContentShelf<T>({
  title,
  items,
  className,
  shelfType,
}: ContentShelfProps<T>) {
  return (
    <section className={cn("", className)}>
      <Wrapper>
        <SectionHeader text={title} className="mb-4" />
        <CardSlider>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {renderCard(item, index, shelfType)}
            </SwiperSlide>
          ))}
        </CardSlider>
      </Wrapper>
    </section>
  );
}

export default ContentShelf;
