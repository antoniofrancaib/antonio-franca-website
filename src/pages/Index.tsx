import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Research />
    </div>
  );
};

export default Index;