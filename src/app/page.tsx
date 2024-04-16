import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserRoundPlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="hover:border h-14 w-full pr-2 grid grid-cols-1 justify-items-end content-center">
        <div className="hover:border grid grid-rows-1 grid-flow-col place-items-center gap-3">
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <div className="hover:border w-full md:w-2/3 lg:w-2/4 xl:w-2/6 pl-6 pr-6 grid grid-cols-1 gap-6 justify-items-center">
        <span className="font-bold text-5xl">BaptismHub</span>
        <Input placeholder="Buscar" className="h-11"></Input>
        <Button variant={"secondary"}>
          <UserRoundPlus className="mr-2 h-4 w-4" />
          Añadir Bautizado
        </Button>
      </div>
      <footer className="invisible border h-14 w-full pl-2 grid grid-cols-1 justify-items-start content-center">
        <span className="font-medium text-sm"> version 0.0.1</span>
      </footer>
    </main>
  );
}
