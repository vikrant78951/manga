import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  SITE_NAME,
  FOOTER_LINKS,
  TERMS_AND_CONDITION,
} from "@/src/lib/constants";
import type { NavigationItem } from "@/src/lib/defination";
import Logo from "./logo";
import Wrapper from "../ui/wrapper";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn(" py-6 lg:py-12", className)}>
      <Wrapper>
        <Card className="p-6 lg:p-12 bg-transparent shadow-lg">
          <CardContent className="grid grid-cols-3 gap-6  ">
            <div className="text-left flex flex-col gap-4 col-span-2">
              <Logo className="mr-auto" />
              <p className="text-foreground/70 max-w-3xl">
                {SITE_NAME} is your go-to source for all things manga, anime,
                and web novels. Explore our vast collection, stay updated with
                the latest trends, and enjoy a seamless reading experience.
              </p>
            </div>
            <div className=" grid grid-cols-2 gap-4  ">
              {Object.keys(FOOTER_LINKS).map((key: string) => (
                <div key={key} className="mb-2">
                  <h3 className="text-lg font-semibold mb-3 capitalize">
                    {key}
                  </h3>
                  <ul className="list-none p-0 m-0">
                    {FOOTER_LINKS[key].map((item: NavigationItem) => (
                      <li key={item.path} className="mb-2">
                        <a
                          href={item.path}
                          className="text-foreground/70 hover:underline"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t  grid grid-cols-3 gap-6 py-4">
            <p className="text-sm text-muted-foreground col-span-2">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div>
              <ul className="flex gap-4 lg:gap-6 ">
                {TERMS_AND_CONDITION.map((item: NavigationItem) => (
                  <li key={item.path} className="mb-1">
                    <a
                      href={item.path}
                      className="text-foreground/70 underline hover:no-underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </CardFooter>
        </Card>
      </Wrapper>
    </div>
  );
};

export default Footer;
