import React from "react";
import { cn } from "@/src/lib/utils";
import { MangaCardProps } from "@/src/lib/defination";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={200}
          height={300}
          className="w-full h-auto"
        />
      </CardContent>
      <CardFooter>
        <CardAction>Action</CardAction>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
