import React, { FC } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { socialIcons } from "@/data/data";

const FooterNavigation: FC = () => {
  return (
    // <footer
    //   className="px-4 md:container py-12 align-bottom mt-auto"
    //   id="footer"
    // >
    //   <ul className="flex flex-wrap gap-4 justify-center">
    //     <li>
    //       <Link
    //         href="https://www.instagram.com/abhishekjai_221"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Button variant="outline">
    //           <Instagram className="h-4 w-4 mr-2" />
    //           @abhishekjai_221
    //         </Button>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="https://github.com/abhishekjaiswar221"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Button variant="outline">
    //           <Github className="h-4 w-4 mr-2" />
    //           @abhishekjaiswar221
    //         </Button>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="https://www.linkedin.com/in/abhishekjai221/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Button variant="outline">
    //           <Linkedin className="h-4 w-4 mr-2" />
    //           @abhishekjai221
    //         </Button>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="mailto:abhishekjaiswar.work@gmail.com">
    //         <Button variant="outline">
    //           <Mail className="h-4 w-4 mr-2" />
    //           abhishekjaiswar.work@gmail.com
    //         </Button>
    //       </Link>
    //     </li>
    //   </ul>
    // </footer>
    <footer id="footer" className="bg-[#14131a] text-white w-full py-5 mt-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <p className="text-center">Stay Connected</p>
        </div>
        {/* <div className="flex flex-row items-center pt-5 md:pt-0 gap-5 justify-center md:justify-start">
          {socialIcons.map(({ id, href, imgSrc, altText }) => {
            return (
              <div key={id}>
                <Link
                  href={href || "/"}
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 shadow-md`}
                >
                  <Image
                    className="h-8 w-8"
                    src={`/socials/${imgSrc}`}
                    width={19}
                    height={19}
                    alt={altText}
                  />
                </Link>
              </div>
            );
          })}
        </div> */}
        <div className="flex flex-row items-center justify-center gap-5">
          <Link target="_blank" href={"http://github.com/abhishekjaiswar221"}>
            <Github />
          </Link>
          <Link target="_blank" href={"https://linkedin.com/in/abhishekjai221"}>
            <Linkedin />
          </Link>
          <Link target="_blank" href={"https://x.com/abhishekjai221"}>
            <Twitter />
          </Link>
        </div>
      </div>
      <div className="py-3 flex flex-col items-center justify-center md:flex-row md:gap-1">
        <p className="text-center">
          &copy; Copyright {Date().toString().slice(11, 15)} By | Abhishek D
          Jaiswar |
        </p>
        <p className="text-center">All Rights Reserved</p>
      </div>
      <div>
        <p className="text-center">Made With ❤️ By Abhishek Jaiswar</p>
      </div>
    </footer>
  );
};

export default FooterNavigation;
