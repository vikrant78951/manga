import React from "react";
import { cn } from "@/src/lib/utils";
import Wrapper from "@/src/components/ui/wrapper";
import { Skeleton } from "@/src/components/ui/skeleton";

interface ShelfSkeletonProps {
  className?: string;
}

const ShelfSkeleton: React.FC<ShelfSkeletonProps> = ({ className }) => {
  const items = Array.from([1, 2, 3]);
  return (
    <section className={cn("", className)}>
      <Wrapper>
        <Skeleton className="h-xl w-2xl  mb-4" />
        <div className="flex gap-6">
          {items.map((item) => (
            <Skeleton className=" h-60 w-1/3  mb-4" key={item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ShelfSkeleton;
