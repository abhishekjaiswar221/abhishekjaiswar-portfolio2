import Image from "next/image";
import { TechIconType } from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";
import { Button } from "../ui/button";

interface TechCardProps {
  iterableArray: Array<TechIconType>;
  cardTitle: string;
}

const TechCard: FC<TechCardProps> = ({ iterableArray, cardTitle }) => {
  return (
    <Card className="h-fit md:h-[358px] w-full shadow-none">
      <CardHeader className="p-4">
        <CardTitle className="text-center text-lg">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 pt-2">
        {iterableArray.map(({ id, title, imgSrc, altText }: TechIconType) => {
          return (
            <div key={id} className="flex flex-col items-center gap-2">
              <Button
                variant={"outline"}
                className="flex w-28 h-10 items-center justify-center gap-2 shadow-md"
              >
                <Image
                  src={`/techIcons/${imgSrc}`}
                  alt={altText}
                  width={30}
                  height={30}
                />
                <span className="text-xs">{title}</span>
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TechCard;
