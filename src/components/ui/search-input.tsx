import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "grid grid-rows-1 grid-flow-col place-items-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        <SearchIcon className="h-6 w-6" />
        <input type="text" ref={ref} {...props} />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
export { SearchInput };
