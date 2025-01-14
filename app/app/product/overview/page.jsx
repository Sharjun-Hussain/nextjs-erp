"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import ThemeSwitcher from "@/components/theme-switcher";
import { Switch } from "@/components/ui/switch";
import useAvailableWidth from "@/hooks/useAvailableWidth ";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const page = () => {
  const availableWidth = useAvailableWidth();

  return (
    <div>
      <Breadcrumbs />
      <div
        className="content-wrapper"
        style={{
          width: `${availableWidth}px`,
        }}
      >
        <div className=" mx-4  main-layout">
          <div className="flex justify-between bg-zinc-50 dark:bg-zinc-950 p-4  rounded-lg">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className=" flex  space-x-2 items-center">
              {/* <Input placeholder="Search"></Input> */}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
