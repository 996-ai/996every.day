import { Github, StarIcon, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-grid-small-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              去你的996
            </span>
            <br />
            用AI 重新夺回你的时间
          </h1>
          <p className="mx-auto text-muted-foreground md:text-xl">
            我们开发领先的AI工具来帮助学生逃离996(或类似)作息
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              {/* TODO: add page /projects */}
              {/* <Link href="/projects" className="contents"> */}
              <Link href="https://skid.996every.day/" className="contents">
                <Zap className="h-4 w-4" /> Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/996-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link
                href="/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <StarIcon />
                Donate us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
