"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitcher = ({ ...props }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      {...props}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center p-2 hover:cursor-pointer"
    >
      {theme === "light" ? <Moon width={20} /> : <Sun width={20} />}
    </button>
  );
};

export default ThemeSwitcher;
