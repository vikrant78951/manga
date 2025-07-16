"use client";

import React, { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Swiper } from "swiper/react";
import { Navigation, Mousewheel, A11y } from "swiper/modules";
import ShelfSkeleton from "./events-skeleton";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

interface CardSliderContainerProps {
  className?: string;
  children: React.ReactNode;
}

const CardSliderContainer: React.FC<CardSliderContainerProps> = ({
  className,
  children,
}) => {
  const [isReady, setIsReady] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
        slidesPerView={1}
        loop={true}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
        className={cn(className, "px-4")}
        onInit={() => setIsReady(true)}
      >
        {/* Custom buttons */}
        <button
          ref={nextRef}
          className="absolute z-10 bottom-6 right-6 h-10 w-10 bg-foreground/50 hover:bg-foreground rounded-full cursor-pointer flex justify-center items-center group "
        >
          <ChevronRight
            className="text-foreground group-hover:text-primary transition-background duration-200 "
            size={24}
          />
        </button>
        <button
          ref={prevRef}
          className="absolute z-10 bottom-6 right-22 h-10 w-10 bg-foreground/50 hover:bg-foreground rounded-full cursor-pointer flex justify-center items-center group"
        >
          <ChevronLeft
            className="text-foreground group-hover:text-primary transition-background duration-200 "
            size={24}
          />
        </button>

        {children}
      </Swiper>
    </div>
  );
};

export default CardSliderContainer;
