"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 justify-start hover:bg-accent hover:text-accent-foreground"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] not-sr-only dark:sr-only" />
          <MoonIcon className="dark:h-[1.2rem] dark:w-[1.2rem] sr-only dark:not-sr-only" />
          <span className="dark:ml-2 sr-only dark:not-sr-only">Oscuro</span>
          <span className="ml-2 not-sr-only dark:sr-only">Claro</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
