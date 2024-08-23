"use client";

import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FooterNavigation() {
  return (
    <footer
      className="px-4 md:container py-12 align-bottom mt-auto"
      id="footer"
    >
      <ul className="flex flex-wrap gap-4 justify-center">
        <li>
          <Link
            href="https://www.instagram.com/abhishekjai_221"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Instagram className="h-4 w-4 mr-2" />
              @abhishekjai_221
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/abhishekjaiswar221"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Github className="h-4 w-4 mr-2" />
              @abhishekjaiswar221
            </Button>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/abhishekjai221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Linkedin className="h-4 w-4 mr-2" />
              @abhishekjai221
            </Button>
          </Link>
        </li>
        <li>
          <Link href="mailto:abhishekjaiswar.work@gmail.com">
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              abhishekjaiswar.work@gmail.com
            </Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
