"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import { useSidebar } from "@/components/ui/sidebar";
import useAvailableWidth from "@/hooks/useAvailableWidth ";
import React, { useEffect, useState } from "react";

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
        <div className=" mx-4 rounded-lg main-layout">
          <div className="flex">
            <h1 className="text-4xl font-bold">Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
