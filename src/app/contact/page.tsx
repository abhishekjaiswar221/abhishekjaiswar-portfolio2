import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page: FC = () => {
  return (
    <main className="px-4 flex flex-col py-6 max-w-3xl mx-auto">
      <div>
        <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <span>&larr; Go back</span>
          </Link>
        </Button>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mt-4">
          Reach out to me
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
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

        <p className="leading-7 mt-6">
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
