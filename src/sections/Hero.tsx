import React from "react";
import  Button  from "../components/ui/Button";

/**
 * Hero section with background banner and call‑to‑action
 * Located at: /sections/Hero.tsx
 * Responsive & accessible; relies on TailwindCSS & a reusable <Button /> component.
 */
const Hero: React.FC = () => {
  return (
    <section
      role="banner"
      aria-label="Primary call to action"
      className="relative flex items-center justify-center min-h-[36rem] lg:min-h-screen bg-center bg-cover text-white"
      style={{ backgroundImage: "url('/assets/hero-banner.jpg')" }}
    >
      {/* Overlay for better text contrast */}
      <span aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Empower Your Workflow
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200">
          Build engaging experiences with our intuitive tools & React components.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="lg" aria-label="Get started">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;