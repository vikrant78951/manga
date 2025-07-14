"use client";

import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import { Navigation, Mousewheel, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft, PlaySquare } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "../ui/button";

interface HeroProps {
  className?: string;
}

const dummy = [
  "https://media.kitsu.app/anime/cover_images/6448/original.jpg",
  "https://media.kitsu.app/anime/cover_images/3936/original.jpg",
  "https://media.kitsu.app/anime/cover_images/8699/original.jpg",
];

const Hero: React.FC<HeroProps> = ({ className }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={cn(className)}>
      <Wrapper className="relative">
        {/* Custom buttons */}
        <button
          ref={nextRef}
          className="absolute z-10 bottom-6 right-10 h-10 w-10 bg-foreground/50 hover:bg-foreground rounded-full cursor-pointer flex justify-center items-center group "
        >
          <ChevronRight
            className="text-foreground group-hover:text-primary transition-background duration-200 "
            size={24}
          />
        </button>
        <button
          ref={prevRef}
          className="absolute z-10 bottom-6 right-28 h-10 w-10 bg-foreground/50 hover:bg-foreground rounded-full cursor-pointer flex justify-center items-center group"
        >
          <ChevronLeft
            className="text-foreground group-hover:text-primary transition-background duration-200 "
            size={24}
          />
        </button>

        <Swiper
          modules={[Navigation, Mousewheel, Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
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
          className="relative "
        >
          {dummy.map((image, index) => (
            <SwiperSlide key={`image-${index}`} className=" ">
              <Image
                src={image}
                alt={`anime-${index}`}
                width={300}
                height={300}
                className="absolute z-0 w-full object-cover  "
              />
              <div className="absolute w-full  bg-background/50  min-h-[600]  " />
              <div className="relative bg-gradient-to-r from-background  via-transparent to-background flex  p-6 md:p-8 lg:p-10  min-h-[600]  ">
                <div className="flex self-end flex-col gap-4 items-start ">
                  <h1 className="text-primary ">#6 Spotlight</h1>
                  <div className="text-3xl font-bold ">Clevatess</div>
                  <div className="text-md max-w-10/12 ">
                    Alicia, who had dreamed of becoming a hero since childhood,
                    is chosen by the king as one of the thirteen heroes. Armed
                    with a legendary sword, the heroes set out to defeat the
                    Demon King Clevatess. However, their recklessness triggers a
                    terrible crisis that could wipe out all of humanity on the
                    continent of Edsea. Now, the world&apos;s only hope lies
                    with a baby entrusted to the Demon King.
                  </div>
                  <Button>
                    <span>
                      <PlaySquare />
                    </span>
                    Watch Now
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Hero;
