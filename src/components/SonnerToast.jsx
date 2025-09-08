"use client";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const SonnerToast = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Toast
      </Button>

      <Button
        className="toast-button"
        onClick={() => {
          toast.success("This is a success toast");
        }}
      >
        Render toast
      </Button>

      <Button
        className="toast-button"
        onClick={() => {
          toast.error("This is an error toast");
        }}
      >
        Render toast
      </Button>
    </>
  );
};

export default SonnerToast;
