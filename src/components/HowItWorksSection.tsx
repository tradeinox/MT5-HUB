import { CircleDot, Link, Play } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: CircleDot,
    title: "Connect Your Accounts",
    description: "Add your MT5 master and slave account credentials. MT5 HUB securely stores them locally on your machine.",
  },
  {
    step: "02",
    icon: Link,
    title: "Configure Connections",
    description: "Create copy connections between accounts. Set which instruments to copy and define lot size ratios for each.",
  },
  {
    step: "03",
    icon: Play,
    title: "Start Copying",
    description: "Enable the copier and watch trades sync in real-time. Monitor everything from the intuitive dashboard.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Get Started in
            <span className="block text-gradient-primary">Three Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Set up your first trade copier connection in minutes.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/30 bg-card">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
