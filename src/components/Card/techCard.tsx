import Image from "next/image";
import { TechIconType } from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";

interface TechCardProps {
  iterableArray: Array<TechIconType>;
  cardTitle: string;
}

const TechCard: FC<TechCardProps> = ({ iterableArray, cardTitle }) => {
  return (
    <Card className="h-fit md:h-[270px] w-5/6 md:w-full shadow-none">
      <CardHeader>
        <CardTitle className="text-center">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        {iterableArray.map(({ id, title, imgSrc, altText }: TechIconType) => {
          return (
            <div key={id} className="flex flex-col items-center gap-2">
              <Image
                src={`/techIcons/${imgSrc}`}
                alt={altText}
                width={33}
                height={33}
              />
              {/* <span className="text-xs">{title}</span> */}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TechCard;
