import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen "
    >
      <div className="container mx-auto text-center z-10 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ridowan
            </span>
            <span className="text-primary-foreground opacity-0 animate-fade-in-delay-2">
              {" "}
              Sarder
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>
          <div className="flex justify-center space-x-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              <span className="text-sm md:text-base">View Projects</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-primary hover:bg-primary/10 transition duration-300 ml-4"
            >
              <span className="text-sm md:text-base">Contact Me</span>
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
