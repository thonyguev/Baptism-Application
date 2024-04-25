import Link from "next/link";
import React, { ReactElement } from "react";
import { UrlObject } from "url";
import { Separator } from "../ui/separator";

type Url = string | UrlObject;

export function NavLink(props: {
  href: Url;
  selected?: boolean | undefined;
  label: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}) {
  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      className={`${
        props.selected ? "bg-accent/60 text-accent-foreground" : ""
      } rounded-md flex flex-row items-center py-2 pl-1 pr-4 font-medium text-sm hover:bg-accent/60 hover:text-accent-foreground`}
    >
      <Separator
        orientation="vertical"
        className={`${
          props.selected ? "visible animate-slide-in-right" : "invisible"
        } rounded-md bg-lime-500 w-1 mr-2`}
      />
      <props.icon className="h-[1.2rem] w-[1.2rem] mr-2" />
      <span>{props.label}</span>
    </Link>
  );
}
