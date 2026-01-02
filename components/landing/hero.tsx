"use client";

import { Briefcase, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-cyan-400/10" />

      {/* Animated orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1000ms" }}
      />

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center pt-20">
          {/* Logo */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-12 h-12 text-blue-600" />
              <h1 className="text-3xl font-bold">Okhla Consultancy</h1>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={200}>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Empowering Your Business
              </span>
            </h2>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={400}>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-12">
              with Full Stack, DevOps & AI Solutions
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </div>
          </FadeIn>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
