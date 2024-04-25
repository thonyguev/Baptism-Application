"use client";
import {
  UsersIcon,
  CalendarDaysIcon,
  ShareIcon,
  Cog8ToothIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "./nav-link";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSearchParams } from "next/navigation";

export function NavView({ children }: any) {
  const searchParams = useSearchParams();
  const selected = Boolean(searchParams.get("selected"));
  const name = String(searchParams.get("name"));
  const isSelected = (value: string) => {
    return selected && name == value;
  };
  return (
    <main className="min-w-dvw min-h-dvh flex">
      <nav className="border border-l p-2 min-w-fit select-none flex flex-col justify-between">
        <section className="flex flex-col">
          <h1 className="font-bold text-xl my-4 ml-4 mr-12">BaptismHub</h1>
          <NavLink
            href="/?selected=true&name=baptism"
            label="Bautizados"
            icon={UsersIcon}
            selected={isSelected("baptism")}
          />
          <NavLink
            href="/schedule?selected=true&name=schedule"
            label="Agenda"
            icon={CalendarDaysIcon}
            selected={isSelected("schedule")}
          />
          <NavLink
            href="/export-data?selected=true&name=export-data"
            label="Exportar"
            icon={ShareIcon}
            selected={isSelected("export-data")}
          />
        </section>
        <section aria-label="settings-section" className="mb-6 flex flex-col">
          <Separator className="mb-3" />
          <NavLink
            href="/reclycle-bin?selected=true&name=reclycle-bin"
            label="Papelera"
            icon={TrashIcon}
            selected={isSelected("reclycle-bin")}
          />
          <NavLink
            href="/settings?selected=true&name=settings"
            label="Ajustes"
            icon={Cog8ToothIcon}
            selected={isSelected("settings")}
          />
          <ModeToggle />
          <div className="mt-4 mx-4 flex flex-row items-start gap-2">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-xs">User</span>
              <span className="text-xs text-nav-muted-foreground">
                Administrador
              </span>
            </div>
          </div>
        </section>
      </nav>
      <section aria-label="content" className="w-full flex flex-col p-2">
        {children}
      </section>
    </main>
  );
}
