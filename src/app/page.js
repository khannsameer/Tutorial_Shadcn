import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DialogDemo from "@/components/ui/DialogDemo";
import DrawerDemo from "@/components/ui/DrawerDemo";
import CarouselDemo from "@/components/ui/CarouselDemo";
import SheetDemo from "@/components/ui/SheetDemo";

const Page = () => {
  let isDarkMode = true;
  return (
    <section className="grid place-items-center">
      {/* <p
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
      </p> */}
      <Button>Click me</Button>
      <section>
        <DialogDemo />
      </section>

      <section>
        <DrawerDemo />
      </section>

      <section>
        <CarouselDemo />
      </section>

      <section>
        <SheetDemo />
      </section>
    </section>
  );
};

export default Page;
