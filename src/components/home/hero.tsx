"use client";

import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import { Navigation, Mousewheel, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

interface HeroProps {
  className?: string;
}

const dummy = [
  "https://media.kitsu.app/anime/cover_images/6448/original.jpg",
  "https://media.kitsu.app/anime/cover_images/3936/original.jpg",
  "https://media.kitsu.app/anime/cover_images/7442/original.png",
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
          className="w-full h-full max-h-150 border rounded-2xl overflow-hidden"
        >
          {dummy.map((image, index) => (
            <SwiperSlide key={`image-${index}`}>
              <Image
                src={image}
                alt={`anime-${index}`}
                width={300}
                height={300}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Hero;
