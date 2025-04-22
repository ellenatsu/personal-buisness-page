"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { LangSwitcher } from "../common/LangSwitcher";

export const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between px-10 py-2">
        <Image
          src="/image/logo-v3.png"
          width={150}
          height={50}
          alt="Scandiva Plumber Logo"
        />

      <div className="py-2">
        <NavigationMenu className="flex gap-4 font-bold">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#introduction">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#service">Services</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#review">Reviews</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="py-2">
        <LangSwitcher />
      </div>
      <div className="py-2">
        <a href="#contact" className="font-bold border-red-300">Contact</a>
      </div>
    </header>
  );
};
