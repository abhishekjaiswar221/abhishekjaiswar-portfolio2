import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { FC } from "react";
import { MainProjectsType } from "@/data/data";

const mainProjectCard: FC<MainProjectsType> = ({
  id,
  title,
  description,
  tech1,
  tech2,
}) => {
  return (
    <Card
      key={id}
      className="shadow-none h-56 w-full md:w-56 lg:h-60 lg:w-96 relative"
    >
      <CardHeader className="flex flex-row items-center justify-start gap-2 space-y-0 p-4">
        <div>
          <Button
            className="rounded-full w-fit shadow-none border-gray-300"
            variant={"outline"}
          >
            {tech1}
          </Button>
        </div>
        <div>
          <Button
            className="rounded-full w-fit shadow-none border-gray-300"
            variant={"outline"}
          >
            {tech2}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-end gap-1 absolute bottom-0 w-full p-4">
        <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
          <Github size={18} strokeWidth={1.5} />
        </div>
        <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default mainProjectCard;
