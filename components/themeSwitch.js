/** @format */
"use client";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="inline-flex items-center">
      <SunIcon
        className={`mr-3 h-6 w-6 cursor-pointer duration-300 ${
          currentTheme === "dark"
            ? "text-[#f7f7f7]"
            : "text-[#1c1c1c]"
        }`}
        onClick={() =>
          theme == "dark" ? setTheme("light") : setTheme("dark")
        }
      />
    </div>
  );
}
