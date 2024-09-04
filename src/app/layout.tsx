import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import HeaderNavigation from "@/components/layout/headerNavigation";
import FooterNavigation from "@/components/layout/footerNavigation";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
export const runtime: "edge" = "edge";

export const metadata: Metadata = {
  title: "Abhishek Jaiswar - Web Developer",
  description: "Personal Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-full")}>
        <div className="flex h-full flex-col items-center">
          <NextTopLoader
            color="#242424"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #282f3c,0 0 5px #282f3c"
            zIndex={1600}
          />
          <HeaderNavigation />
          {children}
          <FooterNavigation />
        </div>
      </body>
    </html>
  );
}
