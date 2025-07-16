import React from "react";
import { cn } from "@/src/lib/utils";
import { MangaCardProps } from "@/src/lib/defination";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";

interface CardProps {
  className?: string;
  data: MangaCardProps;
}

const CardComponent: React.FC<CardProps> = ({ className, data }) => {
  return (
    <Card
      className={cn(
        " p-0 relative rounded  overflow-hidden h-60 cursor-pointer group",
        className,
      )}
    >
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={200}
        height={300}
        className="w-full h-auto object-cover group-hover:scale-125 transition-transform duration-500 "
      />
      <div className="absolute inset-0 bg-black opacity-30  " />
      <CardContent className="p-0 absolute inset-0 flex w-full">
        <CardHeader className="flex flex-col self-end w-full p-4 pb-6">
          <CardTitle className="text-foreground text-xl">
            {" "}
            #{data.id}&nbsp;{data.title}
          </CardTitle>
          <CardTitle className="text-foreground/80 text-md ">
            {data.category}
          </CardTitle>
        </CardHeader>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
