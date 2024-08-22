import Image from "next/image";
import { TechIconType, IterableArray } from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechCard = ({ iterableArray, cardTitle }: IterableArray) => {
  return (
    <Card className="h-72 w-60">
      <CardHeader>
        <CardTitle className="text-center">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        {iterableArray.map(({ id, title, imgSrc, altText }: TechIconType) => {
          return (
            <div key={id} className="flex flex-col items-center gap-2">
              <Image src={imgSrc} alt={altText} width={33} height={33} />
              {/* <span className="text-xs">{title}</span> */}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TechCard;
