"use client";

import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "shadow-lg"
      )}
    >
      <div className="backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Briefcase className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold">Okhla Consultancy</span>
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
