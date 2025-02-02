"use client";

import Hero from "@/components/sections/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "../lib/constants/Navbar";

export default function Home() {
  return (
    <div>
      <FloatingNav navItems={navItems} />
      <Hero />
    </div>
  );
}