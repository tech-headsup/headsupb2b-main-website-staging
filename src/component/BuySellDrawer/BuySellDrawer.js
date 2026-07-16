import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import BuySellNow from "@/component/buySellNow/BuySellNow";

function BuySellDrawer({categoryProductOptions}) {
  return (
    <Drawer direction="right" className="md:w-96 z-[99999]">
      <DrawerTrigger asChild>
        <Button
          size="sm"
          className="text-sm bg-headupb2b border border-white relative group transition-all duration-300 hover:shadow-lg"
        >
          <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
            Tell Us Your Requirements ↑
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent
        style={{ left: "auto", right: 0, top: 0, bottom: 0, marginTop: 0 }}
        className="fixed z-[100] h-full w-full sm:w-[420px] md:w-[450px] lg:w-[470px] xl:w-[500px] max-w-full bg-transparent border-none rounded-none flex items-center justify-center px-3 py-3 sm:p-4 [&>div:first-child]:hidden"
      >
        <BuySellNow categoryProductOptions={categoryProductOptions} />
      </DrawerContent>
    </Drawer>
  );
}

export default BuySellDrawer;
