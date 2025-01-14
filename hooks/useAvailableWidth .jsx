"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

const useAvailableWidth = () => {
  const sidebar_width = 256; // Width in pixels for expanded sidebar
  const sidebar_toggled_width = 48; // Width in pixels for collapsed sidebar
  const [availableWidth, setAvailableWidth] = useState(0); // Default to 0 initially
  const { state } = useSidebar(); // Sidebar state: "expanded" or "collapsed"

  useEffect(() => {
    const calculateWidth = () => {
      const sidebarWidth =
        state === "expanded" ? sidebar_width : sidebar_toggled_width;
      setAvailableWidth(window.innerWidth - sidebarWidth);
    };

    // Initial calculation
    calculateWidth();

    // Recalculate on window resize
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, [state]);

  return { availableWidth, state };
};

export default useAvailableWidth;
