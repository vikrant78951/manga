"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { Suspense } from "react";
import NewsSkeleton from "./news-skeleton";

interface CardSliderContainerProps {
  className?: string;
  children: React.ReactNode;
}

const CardSliderContainer: React.FC<CardSliderContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-6",
        className
      )}
    >
      <Suspense fallback={<NewsSkeleton />}>{children}</Suspense>
    </div>
  );
};

export default CardSliderContainer;
