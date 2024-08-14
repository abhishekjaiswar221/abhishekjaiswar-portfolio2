import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import HeaderNavigation from "@/components/headerNavigation";
import FooterNavigation from "@/components/footerNavigation";
import { cn } from "@/lib/utils";

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
