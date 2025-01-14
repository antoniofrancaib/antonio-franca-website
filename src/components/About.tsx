import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
        {/* Left column with image and titles */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img
              src="/lovable-uploads/a491ad23-e401-4749-af51-70848695f435.png"
              alt="Profile"
              className="w-64 h-96 object-cover shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold mb-2">
              Machine Learning at Cambridge University
            </h2>
            <p className="text-lg text-gray-600 italic">
              Striving to exploit the plasticity of the human brain
            </p>
          </motion.div>
        </div>

        {/* Right column with bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:w-1/2"
        >
          <div className="prose prose-lg">
            <p>
              I am a PhD student at Cambridge University, working on machine learning
              and computational neuroscience. My research focuses on understanding
              and exploiting the plasticity of the human brain through advanced
              computational models and artificial intelligence.
            </p>
            <p>
              Through my work, I aim to bridge the gap between artificial neural
              networks and biological neural systems, developing new approaches that
              could revolutionize our understanding of learning and adaptation in
              both artificial and biological systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};