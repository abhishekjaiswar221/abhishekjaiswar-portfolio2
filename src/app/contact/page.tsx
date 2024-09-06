import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page: FC = () => {
  return (
    <main className="mx-auto flex max-w-3xl flex-col px-4 py-6">
      <div>
        <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button>
        <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
          Reach out to me
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          I&apos;m always open to new opportunities
        </p>
      </div>
      <div className="mt-8">
        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          odit voluptates ullam impedit dignissimos maiores? Aliquid quas
          accusantium corrupti provident blanditiis illo nesciunt nisi nostrum
          ab quis laborum nihil molestias error necessitatibus magnam, suscipit
          veritatis eveniet dolorem esse fugiat praesentium in. Quos, alias
          tenetur necessitatibus vero quidem quae deleniti voluptatibus!
        </p>

        <p className="mt-6 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          odit voluptates ullam impedit dignissimos maiores? Aliquid quas
          accusantium corrupti provident blanditiis illo nesciunt nisi nostrum
          ab quis laborum nihil molestias error necessitatibus magnam, suscipit
          veritatis eveniet dolorem esse fugiat praesentium in. Quos, alias
          tenetur necessitatibus vero quidem quae deleniti voluptatibus!
        </p>
      </div>
    </main>
  );
};

export default Page;
