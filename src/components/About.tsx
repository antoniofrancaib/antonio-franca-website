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
              I am an MPhil student in Machine Learning and Machine Intelligence at Cambridge University. My academic journey began with a BSc in Mathematics at VU Amsterdam, where I completed my thesis in collaboration with CRM Barcelona, focusing on how variability in synaptic connectivity can enhance memory storage capabilities of recurrent neural networks, specifically in the CA3 region of the hippocampus.
            </p>
            <p>
              During my academic career, I completed a research internship at Artificial Neural Computing, where I focused on modeling the boundary dynamics of neural networks. I also co-founded altan.ai, a startup aimed at automating workflows using AI, and served as a Teaching Assistant at VU Amsterdam, teaching courses in Single Variable Calculus, Probability Theory, and Linear Algebra.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};