import { ArrowRightLeft, Filter, Gauge, Shield, Zap, Settings2 } from "lucide-react";

const features = [
  {
    icon: ArrowRightLeft,
    title: "Multi-Account Copying",
    description: "Copy trades from one master account to unlimited slave accounts simultaneously with real-time synchronization.",
  },
  {
    icon: Filter,
    title: "Instrument Filtering",
    description: "Select exactly which trading instruments to copy. Filter by currency pairs, indices, commodities, or custom lists.",
  },
  {
    icon: Gauge,
    title: "Lot Size Ratio Control",
    description: "Configure custom lot size multipliers for each connection. Scale positions up or down based on account size.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Ultra-low latency trade copying ensures your slave accounts execute at the same price as the master.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with enterprise-grade security. Your credentials never leave your machine.",
  },
  {
    icon: Settings2,
    title: "Easy Configuration",
    description: "Intuitive interface makes setting up complex copy configurations simple. No coding required.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Powerful Features for
            <span className="block text-gradient-primary">Professional Traders</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to manage trade copying across multiple MT5 accounts with precision.
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
