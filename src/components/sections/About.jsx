import React, { useState, useEffect } from 'react'
import { FaDownload, FaCode, FaPalette, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Coding Typer Component
const CodingTyper = () => {
  const [text, setText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const codeSnippet = `
class AI_Engineer:
    def __init__(self):
        self.name = "Siddh Yadav"
        self.skills = ["Python", "TensorFlow", "React"]
        self.passion = "Building Intelligent Systems"

    def solve_problem(self, challenge):
        # Analyzing requirements...
        solution = self.deploy_scalable_app(challenge)
        return solution

    def deploy_scalable_app(self, idea):
        return "🚀 Production Ready MVP"

me = AI_Engineer()
print(me.solve_problem("Complex Real-World Issue"))
# Output: 🚀 Production Ready MVP
`

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(codeSnippet.substring(0, i))
      i++
      if (i > codeSnippet.length) {
        // Reset animation after a long pause
        setTimeout(() => { i = 0 }, 5000)
      }
    }, 50) // Typing speed

    const cursorTimer = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden font-mono text-xs sm:text-sm border border-gray-700 w-full max-w-[calc(100vw-2rem)] md:max-w-md lg:max-w-lg mx-auto">
      {/* VS Code Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-gray-400 text-xs truncate">siddh_portfolio.py</span>
      </div>

      {/* Code Area - Fixed Height */}
      <div className="p-2 md:p-4 h-64 overflow-auto custom-scrollbar bg-[#1e1e1e]">
        <pre className="text-gray-300 font-mono leading-relaxed text-xs sm:text-sm">
          <code>
            {text.split('\n').map((line, i) => (
              <div key={i} className="flex hover:bg-[#2d2d2d] transition-colors rounded">
                <span className="text-gray-600 text-right pr-2 md:pr-4 select-none w-6 md:w-8 flex-shrink-0 sticky left-0 bg-[#1e1e1e]">{i + 1}</span>
                <span className="whitespace-pre">
                  <span dangerouslySetInnerHTML={{
                    __html: line
                      .replace(/class /g, '<span class="text-blue-400">class </span>')
                      .replace(/def /g, '<span class="text-blue-400">def </span>')
                      .replace(/self/g, '<span class="text-orange-400">self</span>')
                      .replace(/return /g, '<span class="text-purple-400">return </span>')
                      .replace(/import /g, '<span class="text-purple-400">import </span>')
                      .replace(/"(.*?)"/g, '<span class="text-green-400">"$1"</span>')
                      .replace(/# (.*)/g, '<span class="text-gray-500"># $1</span>')
                  }} />
                  {i === text.split('\n').length - 1 && cursorVisible && <span className="inline-block w-2.5 h-4 bg-blue-400 ml-1 align-middle opacity-75"></span>}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'AI/ML Development',
      description: 'Expertise in Deep Learning, NLP, and building personalized recommendation systems.'
    },
    {
      icon: FaPalette,
      title: 'Research & Innovation',
      description: 'Published research on traffic safety systems and advancing LLM applications.'
    },
    {
      icon: FaRocket,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from ML models to production-ready applications.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know me better and understand what drives my passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a Full-Stack Developer and AI/ML enthusiast with a proven ability to learn fast and deliver results.
                As the founder of Roviraa, I built an entire e-commerce platform from scratch handling everything from
                database design to deployment. This hands-on experience has sharpened my skills across the full stack.
              </p>
              <p>
                My journey spans multiple roles: developing multi-tenant educational systems at Qvolv Technologies,
                co-founding AnacodicAI to build AI automation products, and publishing research on computer vision.
                Each role has pushed me to master new technologies quickly from React and Node.js to Python ML pipelines.
              </p>
              <p>
                I thrive in environments where I can combine my full-stack development expertise with AI/ML capabilities
                to build intelligent, production-ready solutions. I'm actively seeking opportunities where I can contribute
                to innovative projects while continuing to grow as an engineer.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1RvjU0vcM-v6W6XjcnvJI8F08BZ4WaQV6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <FaDownload className="inline mr-2" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Content - Coding Typer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <CodingTyper />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-2">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Core Java</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Internshala</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Structures & Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coursera</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Published Research Paper</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Helmet & Number Plate Detection Using YOLOv5</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">LeetCode Achievement</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">130+ Problems Solved</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Advance AI Research Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking a Research Consultant role to advance user engagement models using LLMs.
              Whether you have a research opportunity or want to discuss AI/ML projects, let's connect!
            </p>
            <a
              href="mailto:siddhyadav7464@gmail.com?subject=AI/ML Engineer Opportunity Discussion&body=Hi Siddh,%0D%0A%0D%0AI'd like to discuss AI/ML engineering opportunities with you.%0D%0A%0D%0ABest regards,"
              className="btn-secondary inline-block"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
