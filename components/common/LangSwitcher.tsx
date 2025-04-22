"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();  //get current url. /en#service, keep user at same section
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale; // Replace the locale segment
    const newPath = segments.join("/") || "/";
    router.push(newPath);  //not full reload, internally client-side navigation
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">🌐 Language</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuCheckboxItem
          checked={currentLocale === "en"}
          onSelect={() => handleLanguageChange("en")}
        >
          English
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={currentLocale === "zh"}
          onSelect={() => handleLanguageChange("zh")}
        >
          简体中文
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
