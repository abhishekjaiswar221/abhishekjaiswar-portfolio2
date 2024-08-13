import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
// import { Badge } from "./ui/badge";

const projects = [
  {
    title: "The Shopping Booth",
    description:
      "The Shopping Booth is an API based ecommerce website which uses dummyjson’s fake API to display various products.Built using React Js, Javascript, Redux Tookit and ShadCN UI",
    image:
      "/photo-1527195694714-9b939fac3432?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyZWVuZXJ5fGVufDB8fDB8fHww",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221/the-shopping-booth",
    visibility: "public",
  },
  {
    title: "Taskify Cloud Todo",
    description:
      "Takify Cloud Todo is a task management web application.Built using React Js, Tailwind CSS, ShadCN UI, Node Js and Express Js.",
    image:
      "/photo-1504198266287-1659872e6590?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVuZXJ5fGVufDB8fDB8fHww",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
    visibility: "public",
  },
  {
    title: "The Annapurnas",
    description:
      "The Annapurnas is an application for ordering tiffin, with a three-day trial and monthly subscription option. It is built using HTML, CSS, Bootstrap 5, JQuery, Java, JSP, Servlet,JDBC, and MySQL .",
    image:
      "/photo-1504198266287-1659872e6590?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVuZXJ5fGVufDB8fDB8fHww",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
    visibility: "public",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4 md:pb-8 lg:pb-20">
      {projects.map((project, index) => (
        <Card key={index} className="w-full flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <div>
              {/* <Badge variant="secondary" className="w-fit capitalize mt-2">
                {project.visibility}
              </Badge> */}
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={project.image}
              alt="Project"
              width={128}
              height={128}
              className="rounded-lg w-full aspect-[3/2] object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
