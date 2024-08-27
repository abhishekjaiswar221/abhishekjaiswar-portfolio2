import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { FC } from "react";
import { MainProjectsType } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const MainProjectCard: FC<MainProjectsType> = ({
  id,
  imgSrc,
  altText,
  title,
  techStacks,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="relative">
      <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis border">
        <Image
          src={`/projects/${imgSrc}`}
          alt={altText}
          width={700}
          height={700}
          className="aspect-video object-cover"
        />
        <div className="flex flex-col px-4 pb-3 h-15">
          <div className="flex font-bold">{title}</div>
          <div className="flex text-info text-xs">{techStacks}</div>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex items-center justify-center gap-1">
        <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
          <Link href={githubLink || "/"} target="_blank">
            <Github className="text-white" size={18} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="border flex items-center justify-center h-7 w-7 rounded-full border-gray-300">
          <Link href={liveLink || "/"} target="_blank">
            <ArrowUpRight className="text-white" size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainProjectCard;
