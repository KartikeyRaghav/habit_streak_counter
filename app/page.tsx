"use client";

import Hero from "@/components/sections/Hero";
import { links } from "../lib/constants/Navbar";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  return (
    <div>
      {/* <FloatingNav navItems={navItems} show /> */}
      <Hero />
      <div className="flex items-center w-fit self-center justify-center bg-transparent sticky bottom-0 z-[111111]">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
