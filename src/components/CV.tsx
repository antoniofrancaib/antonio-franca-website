import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export const CV = () => {
  return (
    <section className="py-20 bg-white" id="cv">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-12">Curriculum Vitae</h2>
          
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="pl-8 border-l-2 border-accent">
                  <h4 className="text-lg font-semibold">MPhil in Machine Learning and Machine Intelligence</h4>
                  <p className="text-gray-600">University of Cambridge</p>
                  <p className="text-gray-500">2023 - Present</p>
                </div>
                <div className="pl-8 border-l-2 border-accent">
                  <h4 className="text-lg font-semibold">BSc in Mathematics</h4>
                  <p className="text-gray-600">VU Amsterdam</p>
                  <p className="text-gray-500">2019 - 2023</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="pl-8 border-l-2 border-accent">
                  <h4 className="text-lg font-semibold">Co-founder</h4>
                  <p className="text-gray-600">altan.ai</p>
                  <p className="text-gray-500">2022 - Present</p>
                  <p className="text-gray-600 mt-2">Leading development of AI-powered workflow automation solutions</p>
                </div>
                <div className="pl-8 border-l-2 border-accent">
                  <h4 className="text-lg font-semibold">Research Intern</h4>
                  <p className="text-gray-600">Artificial Neural Computing</p>
                  <p className="text-gray-500">2022</p>
                  <p className="text-gray-600 mt-2">Focused on modeling boundary dynamics of neural networks</p>
                </div>
                <div className="pl-8 border-l-2 border-accent">
                  <h4 className="text-lg font-semibold">Teaching Assistant</h4>
                  <p className="text-gray-600">VU Amsterdam</p>
                  <p className="text-gray-500">2021 - 2023</p>
                  <p className="text-gray-600 mt-2">Taught courses in Single Variable Calculus, Probability Theory, and Linear Algebra</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 pl-8">
                <div>
                  <h4 className="font-semibold mb-2">Technical Skills</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Machine Learning</li>
                    <li>Neural Networks</li>
                    <li>Deep Learning</li>
                    <li>Python Programming</li>
                    <li>Mathematics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research Areas</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Computational Neuroscience</li>
                    <li>Meta-Learning</li>
                    <li>Reinforcement Learning</li>
                    <li>Neural Representations</li>
                    <li>Learning Algorithms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};