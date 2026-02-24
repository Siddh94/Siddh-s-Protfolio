import React, { useState, useEffect } from 'react'
import { FaDownload, FaCode, FaPalette, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Coding Typer Component
const CodingTyper = () => {
  const [text, setText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const codeSnippet = `
class Security_Engineer:
    def __init__(self):
        self.name = "Siddh Yadav"
        self.focus = ["Zscaler", "Zero Trust", "Networking"]
        self.goal = "Enterprise Security"

    def analyze_traffic(self, traffic):
        # Inspecting SSL traffic...
        if self.detect_threat(traffic):
            return self.block_and_log()
        return "Traffic Allowed ✅"

    def block_and_log(self):
        return "Threat Mitigated 🛡️"

me = Security_Engineer()
print(me.analyze_traffic("Suspicious Behavior"))
# Output: Threat Mitigated 🛡️
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
      title: 'Zscaler & Security',
      description: 'Expertise in Zscaler Internet Access (ZIA), Private Access (ZPA), and SSL Inspection.'
    },
    {
      icon: FaPalette,
      title: 'Network & Zero Trust',
      description: 'Strong foundation in TCP/IP, DNS, HTTP/HTTPS, VPN, and SASE Framework.'
    },
    {
      icon: FaRocket,
      title: 'Identity & Access',
      description: 'Experience with SAML, MFA, Active Directory, and Role-Based Access Control.'
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
                I am a Cyber Security Enthusiast with hands-on experience in Zscaler within an enterprise environment.
                My focus lies in troubleshooting internet access issues, SSL inspection policies, and understanding
                Zero Trust Architecture concepts.
              </p>
              <p>
                As a Security Engineer at Qvolv Technologies, I supported ZIA & ZPA environments for over 500+ users.
                I regularly analyzed logs, optimized traffic forwarding rules, and assisted with crucial identity
                integrations like SAML and MFA.
              </p>
              <p>
                I thrive in roles where I can leverage my strong foundation in networking (TCP/IP, DNS, HTTP/HTTPS) to resolve
                complex access issues. I am actively seeking a Zscaler Engineer or L1 Security Support role to contribute
                to enterprise security operations.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="/Siddh_Yadav_Resume.pdf"
                download
                target="_blank"
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zero Trust Architecture</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Micro-segmentation & SASE</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Published Research</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Helmet & Number Plate Detection using YOLOv5</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Leadership</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">NCC Cadet – Naval Wing</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sports Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gold Medalist – Regional Kabaddi</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Network Protocols</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">TCP/IP, HTTP/S, DNS</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Security</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">JWT, SAML, OAuth integrations</p>
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
              Ready to Secure Your Network Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking a Zscaler Engineer or L1 Security Support role.
              Whether you need to enforce Zero Trust Architecture or manage secure access, let's connect!
            </p>
            <a
              href="mailto:siddhyadav7464@gmail.com?subject=Zscaler Security Engineer Role Discussion&body=Hi Siddh,%0D%0A%0D%0AI'd like to discuss a Security Engineering opportunity with you.%0D%0A%0D%0ABest regards,"
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
