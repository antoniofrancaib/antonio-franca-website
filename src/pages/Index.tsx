import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Blog } from "@/components/Blog";
import { Projects } from "@/components/Projects";
import { CV } from "@/components/CV";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Blog />
      <Projects />
      <CV />
    </div>
  );
};

export default Index;