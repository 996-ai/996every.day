import ExampleVideoPlayer from "@/components/home/ExampleVideoPlayer";
import HeroSection from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <HeroSection />

        {/* Video Section Wrapper */}
        <div className="w-full py-16 md:py-24">
          {" "}
          {/* 1. Add padding for spacing */}
          <div className="max-w-5xl mx-auto px-4">
            {" "}
            {/* 2. Center and constrain width */}
            <p className="text-center text-muted-foreground mb-4">
              See It In Action
            </p>
            <div className="aspect-video overflow-hidden rounded-xl border shadow-lg">
              {" "}
              {/* 3. Aspect ratio container */}
              <ExampleVideoPlayer />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="p-6 flex flex-col items-center justify-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">Students Life matters</p>
          <p className="text-sm text-muted-foreground">Open source & ❤️️</p>
        </div>
      </footer>
    </div>
  );
}
