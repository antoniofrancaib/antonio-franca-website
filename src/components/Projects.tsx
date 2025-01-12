import { motion } from "framer-motion";
import { Brain, Code, Network, Cpu } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Neural Memory Enhancement",
      description: "Research project on synaptic connectivity in recurrent neural networks, focusing on the CA3 region of the hippocampus.",
      icon: Brain,
      tags: ["Neural Networks", "Memory Systems", "Computational Neuroscience"]
    },
    {
      title: "altan.ai",
      description: "Co-founded startup focused on automating workflows using artificial intelligence and machine learning.",
      icon: Cpu,
      tags: ["AI", "Automation", "Startup"]
    },
    {
      title: "Boundary Dynamics Modeling",
      description: "Research internship project modeling the boundary dynamics of neural networks at Artificial Neural Computing.",
      icon: Network,
      tags: ["Neural Networks", "Dynamic Systems", "Research"]
    },
    {
      title: "Educational Resources Platform",
      description: "Development of interactive materials for mathematics courses as Teaching Assistant at VU Amsterdam.",
      icon: Code,
      tags: ["Education", "Mathematics", "Web Development"]
    }
  ];

  return (
    <section className="py-20 bg-muted" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white hover:shadow-lg transition-shadow"
              >
                <project.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};