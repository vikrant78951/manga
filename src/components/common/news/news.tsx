"use client";

import React from "react";
import SectionHeader from "./news-header";
import CardSlider from "./news-container";
import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import { MangaCardProps } from "@/src/lib/defination";
import Events from "@/src/components/common/events/events";

// cards
import MangaCard from "./cards/manga-card";
import AnimeCard from "./cards/anime-card";
import NewsCard from "./cards/news-card";
import NovelCard from "./cards/novel-card";

type NewsType = "anime" | "manga" | "news" | "novel" | "watchlist";

interface NewsProps<T> {
  title: string;
  items: T[];
  events: T[];
  newsType: NewsType;
  className?: string;
}

function renderCard<T>(item: T, index: number, newsType: NewsType) {
  switch (newsType) {
    case "manga":
      return <MangaCard data={item as MangaCardProps} key={index} />;
    case "anime":
      return <AnimeCard data={item as MangaCardProps} key={index} />;
    case "novel":
      return <NovelCard data={item as MangaCardProps} key={index} />;
    case "news":
      return <NewsCard data={item as MangaCardProps} key={index} />;
  }
}

function News<T>({ title, items, events, className, newsType }: NewsProps<T>) {
  return (
    <section className={cn("", className)}>
      <Wrapper className="grid grid-cols-1 lg:grid-cols-3  gap-4 lg:gap-6">
        <div className="col-span-1 lg:col-span-2">
          <SectionHeader text={title} className="mb-4" />
          <CardSlider className="col-span-2 ">
            {items.map((item, index) => (
              <div key={index}>{renderCard(item, index, newsType)}</div>
            ))}
          </CardSlider>
        </div>
        <Events
          title="Latest Events"
          items={events}
          eventType="event"
          className="h-full"
        />
      </Wrapper>
    </section>
  );
}

export default News;
