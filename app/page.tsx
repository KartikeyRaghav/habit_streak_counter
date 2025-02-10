"use client";

import Hero from "@/components/sections/Hero";
import Habits from "@/components/sections/Habit";
import Dock from "@/components/ui/Dock";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Habits />
      <Dock />
    </div>
  );
}
