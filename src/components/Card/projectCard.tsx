import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { ProjectType } from "@/data/data";

const ProjectCard: React.FC<ProjectType> = ({
  id,
  title,
  description,
  imageSrc,
}) => {
  return (
    <Card key={id} className="w-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div>
          {/* <Badge variant="secondary" className="w-fit capitalize mt-2">
            {visibility}
          </Badge> */}
        </div>
      </CardHeader>
      <CardContent>
        <Image
          src={imageSrc}
          alt="Project"
          width={128}
          height={128}
          className="rounded-lg w-full aspect-[3/2] object-cover"
        />
      </CardContent>
      {/* Make an element to take to the github page and the hosted site */}
    </Card>
  );
};

export default ProjectCard;
