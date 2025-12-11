import { Button } from "@/components/ui/button";
import { Download, Apple } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col items-start animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">Professional Trade Copier</span>
            </div>
            
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Copy Trades
              <span className="block text-gradient-primary">Across MT5 Accounts</span>
            </h1>
            
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Manage and synchronize trades from one master account to multiple slave accounts with precision control over instruments and lot sizing.
            </p>
            
            {/* Download buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row" id="download">
              <Button variant="hero" size="xl" className="gap-3">
                <Download className="h-5 w-5" />
                Download for Windows
              </Button>
              <Button variant="heroOutline" size="xl" className="gap-3">
                <Apple className="h-5 w-5" />
                Download for macOS
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              Free to try • No credit card required
            </p>
          </div>
          
          {/* Right content - Dashboard image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-50" />
              <img
                src={heroDashboard}
                alt="MT5 HUB Dashboard showing trade copier connections"
                className="relative rounded-xl"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-primary/20 blur-2xl" />
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
