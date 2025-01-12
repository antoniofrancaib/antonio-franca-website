import { motion } from "framer-motion";
import { BookOpen, Brain, Code } from "lucide-react";

export const Blog = () => {
  const posts = [
    {
      title: "Neural Network Architectures for Memory",
      excerpt: "Exploring how different neural network architectures can enhance memory capabilities...",
      icon: Brain,
      date: "March 15, 2024"
    },
    {
      title: "The Future of Meta-Learning",
      excerpt: "Investigating adaptive learning systems and their potential applications...",
      icon: Code,
      date: "March 1, 2024"
    },
    {
      title: "Computational Neuroscience Insights",
      excerpt: "Recent discoveries in brain plasticity and their implications for AI...",
      icon: BookOpen,
      date: "February 15, 2024"
    }
  ];

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-12">Latest Posts</h2>
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-muted hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <post.icon className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-2">{post.excerpt}</p>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};