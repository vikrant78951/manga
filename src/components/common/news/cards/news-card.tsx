import React from "react";
import { cn } from "@/src/lib/utils";
import { NewsCardProps } from "@/src/lib/defination";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";

interface CardProps {
  className?: string;
  data: NewsCardProps;
}

const CardComponent: React.FC<CardProps> = ({ className, data }) => {
  return (
    <Card
      className={cn("p-0  border-0 bg-transparent cursor-pointer ", className)}
    >
      <CardContent className="p-0 flex gap-2 lg:gap-4">
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={100}
          height={100}
          className="w-36 h-36 object-cover group-hover:scale-125 transition-transform duration-500 rounded "
        />
        <CardContent className="p-0 flex-grow">
          <CardTitle className="text-foreground text-xl">
            #{data.id}&nbsp;{data.title}
          </CardTitle>
          <CardDescription className="text-foreground/70 text-sm ">
            {data.category}
          </CardDescription>
          <CardDescription className="text-foreground/80 text-md mt-2">
            {data.description}
          </CardDescription>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
