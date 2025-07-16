"use client";

import React, { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Swiper } from "swiper/react";
import { Navigation, Mousewheel, A11y } from "swiper/modules";
import ShelfSkeleton from "./shelf-skeleton";
import "swiper/css";
import "swiper/css/navigation";

interface CardSliderContainerProps {
  className?: string;
  children: React.ReactNode;
}

const CardSliderContainer: React.FC<CardSliderContainerProps> = ({
  className,
  children,
}) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div
      className={cn("transition-opacity duration-300", {
        "opacity-0": !isReady,
        "opacity-100": isReady,
      })}
    >
      {!isReady && <ShelfSkeleton />}

      <Swiper
        modules={[Navigation, A11y, Mousewheel]}
        spaceBetween={24}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        slidesOffsetAfter={30}
        className={cn(className, "px-4")}
        onInit={() => setIsReady(true)}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default CardSliderContainer;
