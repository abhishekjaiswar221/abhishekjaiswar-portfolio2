import Image from "next/image";
import { TechIconType, TechCardProps } from "@/data/dataTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FC } from "react";
import { Button } from "../ui/button";

const TechCard: FC<TechCardProps> = ({ iterableArray, cardTitle }) => {
  return (
    <Card className="h-fit w-full border-none shadow-none md:h-[358px] lg:h-[300px] xl:h-[242px]">
      <CardHeader className="p-4">
        <CardTitle className="text-center text-lg text-[#616161]">
          {cardTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 pt-2 lg:grid-cols-3 xl:grid-cols-4">
        {iterableArray.map(({ id, title, imgSrc, altText }: TechIconType) => {
          return (
            <div key={id} className="flex flex-col items-center gap-2">
              <Button
                variant={"outline"}
                className="flex h-10 w-28 items-center justify-center gap-2 bg-[#fafafa] shadow-none hover:bg-white hover:shadow-md"
              >
                <Image
                  src={`/techIcons/${imgSrc}`}
                  alt={altText}
                  width={22}
                  height={22}
                />
                <span className="text-xs font-semibold text-[#242424]">
                  {title}
                </span>
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TechCard;
