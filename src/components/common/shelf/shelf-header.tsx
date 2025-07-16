import React from "react";
import { cn } from "@/src/lib/utils";
interface CardHeaderProps {
  className?: string;
  text: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, text }) => {
  return (
    <div
      className={cn(
        "text-foreground sm:lg md:text-xl  lg:text-2xl font-bold ",
        className
      )}
    >
      {text}
    </div>
  );
};

export default CardHeader;
