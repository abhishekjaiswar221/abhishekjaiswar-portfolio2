import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import HeaderNavigation from "@/components/headerNavigation";
import FooterNavigation from "@/components/footerNavigation";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });
export const runtime = "edge";

export const metadata: Metadata = {
  title: "Abhishek Jaiswar Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "h-full")}>
        <div className="h-full flex flex-col items-center">
          <NextTopLoader
            color="#282f3c"
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
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
  );
}
