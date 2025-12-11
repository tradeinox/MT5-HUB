import { Button } from "@/components/ui/button";
import { Download, Apple } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to Automate Your
            <span className="block text-gradient-primary">Trade Copying?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Download MT5 HUB now and start synchronizing trades across your accounts in minutes.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" className="gap-3">
              <Download className="h-5 w-5" />
              Download for Windows
            </Button>
            <Button variant="heroOutline" size="xl" className="gap-3">
              <Apple className="h-5 w-5" />
              Download for macOS
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Compatible with MetaTrader 5 • Windows 10/11 & macOS 12+
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
