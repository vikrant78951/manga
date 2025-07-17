"use client";

import React from "react";
import SectionHeader from "./events-header";
import CardSlider from "./events-slider";
import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import { SwiperSlide } from "swiper/react";
import { MangaCardProps } from "@/src/lib/defination";

// cards
import MangaCard from "./cards/manga-card";
import AnimeCard from "./cards/anime-card";
import NovelCard from "./cards/novel-card";
import EventCard from "./cards/event-card";

type EventTypes = "anime" | "manga" | "novel" | "event" | "watchlist";

interface EventsProps<T> {
  title?: string;
  items: T[];
  eventType: EventTypes;
  className?: string;
}

function renderCard<T>(item: T, index: number, eventType: EventTypes) {
  switch (eventType) {
    case "manga":
      return <MangaCard data={item as MangaCardProps} key={index} />;
    case "anime":
      return <AnimeCard data={item as MangaCardProps} key={index} />;
    case "novel":
      return <NovelCard data={item as MangaCardProps} key={index} />;
    case "event":
      return <EventCard data={item as MangaCardProps} key={index} />;
  }
}

function Events<T>({ title, items, className, eventType }: EventsProps<T>) {
  return (
    <section className={cn("", className)}>
      <Wrapper>
        {title && <SectionHeader text={title} className="mb-4" />}
        <CardSlider>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {renderCard(item, index, eventType)}
            </SwiperSlide>
          ))}
        </CardSlider>
      </Wrapper>
    </section>
  );
}

export default Events;
