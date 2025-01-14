"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import CustomOverviewCard from "@/components/custom-card";
import ThemeSwitcher from "@/components/theme-switcher";
import { Switch } from "@/components/ui/switch";
import useAvailableWidth from "@/hooks/useAvailableWidth ";
import { LayoutGrid, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const page = () => {
  const { availableWidth, state: sidebarToggleState } = useAvailableWidth();

  return (
    <div className="">
      <Breadcrumbs />
      <div
        className="content-wrapper"
        style={{
          width: `${availableWidth}px`,
        }}
      >
        <div className=" mx-4 space-y-2  main-layout">
          <div className="flex justify-between bg-zinc-50 dark:bg-zinc-950 p-4  rounded-lg">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className=" flex  space-x-2 items-center">
              {/* <Input placeholder="Search"></Input> */}
              <ThemeSwitcher />
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <CustomOverviewCard
              title="Total Prodcuts"
              amount="200"
              index={1}
              sidebarToggleState={sidebarToggleState}
              note="+5% from last month"
              Icon={LayoutGrid}
            />
            <CustomOverviewCard
              title="Out of Stock"
              amount="20"
              index={1}
              note="Top: Paracetamol"
              sidebarToggleState={sidebarToggleState}
              Icon={LayoutGrid}
            />
            <CustomOverviewCard
              title="Total Categories"
              amount="78"
              index={1}
              note="Top: Paracetamo"
              sidebarToggleState={sidebarToggleState}
              Icon={LayoutGrid}
            />
            <CustomOverviewCard
              title="Out of Stock"
              amount="20"
              index={1}
              note="Top: Paracetamol"
              sidebarToggleState={sidebarToggleState}
              Icon={LayoutGrid}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
