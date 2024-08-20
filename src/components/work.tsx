"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
// import { Badge } from "./ui/badge";

interface Projects {
  id: number;
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  visibility: string;
}

const projects: Array<Projects> = [
  {
    id: 1,
    title: "The Shopping Booth",
    description:
      "The Shopping Booth is an API based ecommerce website which uses dummyjson’s fake API to display various products.Built using React Js, Javascript, Redux Tookit and ShadCN UI",
    image: "/images/jetbrains.jpg",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221/the-shopping-booth",
    visibility: "public",
  },
  {
    id: 2,
    title: "Taskify Cloud Todo",
    description:
      "Takify Cloud Todo is a task management web application.Built using React Js, Tailwind CSS, ShadCN UI, Node Js and Express Js.",
    image: "/images/preview.png",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
    visibility: "public",
  },
  {
    id: 3,
    title: "The Annapurnas",
    description:
      "The Annapurnas is an application for ordering tiffin, with a three-day trial and monthly subscription option. It is built using HTML, CSS, Bootstrap 5, JQuery, Java, JSP, Servlet,JDBC, and MySQL .",
    image: "/images/webstorm.png",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
    visibility: "public",
  },
];

export default function Work() {
  return (
    <>
      {projects.map(({ id, title, description, image }) => (
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
              src={image}
              alt="Project"
              width={128}
              height={128}
              className="rounded-lg w-full aspect-[3/2] object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
