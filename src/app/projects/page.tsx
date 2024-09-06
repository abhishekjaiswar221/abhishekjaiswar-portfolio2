import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const Page: FC = () => {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-4 py-6">
      <div>
        <Button variant="ghost" className="mt-4" asChild>
          <Link href="/">
            <ChevronLeft size={18} strokeWidth={1.5} />
            <span>Go back</span>
          </Link>
        </Button>
        <h1 className="mt-4 scroll-m-20 text-4xl font-bold tracking-tight">
          More Projects
        </h1>
        {/* <p className="mt-2 text-lg text-muted-foreground">
          A brief overview of my career
        </p> */}
      </div>
      <div className="mt-8">
        <ul className="flex flex-col items-center gap-4">
          {[...Array(3)].map((_, index: number) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>shadcn/ui</CardTitle>
                <CardDescription>
                  Beautifully designed components that you can copy and paste
                  into your apps. Accessible. Customizable. Open Source.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                    TypeScript
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-3 w-3" />
                    20k
                  </div>
                  <div>Updated April 2023</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Page;
