import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { FC } from "react";
import { MainProjectsType } from "@/data/data";
import Image from "next/image";

const MainProjectCard: FC<MainProjectsType> = ({
  id,
  imgSrc,
  altText,
  title,
  techStacks,
}) => {
  return (
    <Card
      key={id}
      className="w-full mx-auto rounded-lg overflow-hidden shadow-none"
    >
      <div className="relative h-52">
        <Image
          src={imgSrc}
          alt={altText}
          width={400}
          height={300}
          priority={true}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="px-4 py-3">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <div className="flex h-full items-center justify-between w-full p-0">
          <CardDescription>{techStacks}</CardDescription>
          <div className="flex items-center justify-center gap-1">
            <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
              <Github size={18} strokeWidth={1.5} />
            </div>
            <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainProjectCard;
