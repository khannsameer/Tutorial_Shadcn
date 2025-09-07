import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Page = () => {
  let isDarkMode = true;
  return (
    <>
      <p
        className={cn(
          "px-2 py-1 bg-red-500 text-white hover:bg-blue-500",
          "p-3 bg-black text-yellow-100",
          isDarkMode && "text-red-300",
          { "text-yellow-400": isDarkMode }
        )}
      >
        The quickest way to create a new Next.js app is using create-next-app,
        which sets up everything automatically for you. To create a project,
        run:
      </p>
      <Button>Click me</Button>
    </>
  );
};

export default Page;
