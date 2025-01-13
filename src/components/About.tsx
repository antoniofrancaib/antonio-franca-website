import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 bg-muted" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              I am Antonio, an MPhil student in Machine Learning and Machine Intelligence at Cambridge University. Before starting my master's, I completed a BSc in Mathematics at VU Amsterdam, where I worked on my thesis in collaboration with CRM Barcelona, researching how variability in synaptic connectivity can enhance the memory storage capabilities of recurrent neural networks (CA3 region of the hippocampus).
            </p>
            <p>
              I also completed a research internship at Artificial Neural Computing, focusing on modeling the boundary dynamics of neural networks. Additionally, I co-founded altan.ai, a startup aimed at automating workflows using AI, and I had the opportunity to teach courses in Single Variable Calculus, Probability Theory, and Linear Algebra as a Teaching Assistant at VU Amsterdam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};