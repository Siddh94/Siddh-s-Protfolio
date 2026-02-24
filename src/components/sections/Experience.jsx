import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFolderOpen, FaJs, FaReact, FaMarkdown, FaFileCode, FaColumns, FaCog, FaCopy } from 'react-icons/fa'

const IDEExperience = () => {
  const [activeFile, setActiveFile] = useState('experience.json')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const experienceData = [
    {
      "id": 1,
      "role": "Security Engineer – Zscaler",
      "company": "Qvolv Technologies",
      "period": "2025 - 2026",
      "stack": ["Zscaler ZIA", "ZPA", "SAML", "Log Analysis", "Zero Trust"],
      "highlights": [
        "Supported ZIA & ZPA environments for 500+ users, ensuring secure access",
        "Troubleshot PAC file misconfigurations, Client Connector errors, and traffic forwarding",
        "Assisted in SAML and MFA authentication integrations with identity providers",
        "Analyzed logs and defined micro-segmentation policies for Zero Trust Architecture"
      ]
    }
  ]

  const educationData = [
    {
      "degree": "Bachelor of Engineering in Computer Science",
      "institution": "Chandigarh University",
      "period": "2021 - 2025",
      "cgpa": 7.26,
      "achievements": [
        "Published research paper: 'Helmet & Number Plate Detection Using YOLOv5'",
        "NCC Cadet – Naval Wing",
        "Gold Medalist – Regional Kabaddi Tournament"
      ]
    }
  ]

  const files = [
    { name: 'experience.json', icon: <FaFileCode className="text-yellow-400" />, content: experienceData },
    { name: 'education.json', icon: <FaFileCode className="text-yellow-400" />, content: educationData },
    { name: 'README.md', icon: <FaMarkdown className="text-blue-400" />, type: 'markdown' }
  ]

  const renderContent = () => {
    if (activeFile === 'README.md') {
      return (
        <div className="text-gray-300 font-sans p-4 leading-relaxed">
          <h1 className="text-2xl font-bold text-blue-400 mb-4"># Career Overview</h1>
          <p className="mb-4">
            Welcome to my interactive resume! <br />
            Navigate through the JSON files to inspect my raw data.
          </p>
          <p>
            <span className="text-purple-400">const</span> <span className="text-blue-300">goal</span> = <span className="text-green-300">"Build intelligent, scalable systems"</span>;
          </p>
        </div>
      )
    }

    const data = files.find(f => f.name === activeFile)?.content
    const jsonString = JSON.stringify(data, null, 2)

    return (
      <div className="font-mono text-sm md:text-base leading-6 overflow-x-auto">
        {jsonString.split('\n').map((line, i) => (
          <div key={i} className="table-row hover:bg-white/5 w-full">
            <span className="table-cell text-gray-600 px-4 text-right select-none w-12 border-r border-gray-700/50">{i + 1}</span>
            <span className="table-cell pl-4 whitespace-pre">
              <span dangerouslySetInnerHTML={{
                __html: line
                  .replace(/"(.*?)":/g, '<span class="text-blue-300">"$1"</span>:')
                  .replace(/: "(.*?)"/g, ': <span class="text-green-300">"$1"</span>')
                  .replace(/: (\d+)/g, ': <span class="text-orange-300">$1</span>')
                  .replace(/[\[\]\{\}]/g, '<span class="text-yellow-500">$&</span>')
              }} />
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Career <span className="gradient-text">Source Code</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore my background in its natural habitat—the IDE.
          </p>
        </motion.div>

        {/* IDE Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1e1e1e] rounded-xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col md:flex-row h-[600px] max-w-6xl mx-auto"
        >
          {/* Activity Bar (Leftmost strip) */}
          <div className="w-12 bg-[#333333] flex flex-col items-center py-4 border-r border-black/20 hidden md:flex">
            <FaCopy className="text-2xl text-white mb-6 cursor-pointer opacity-100" />
            <FaCog className="text-2xl text-gray-500 mt-auto cursor-pointer hover:text-white transition-colors" />
          </div>

          {/* Sidebar (Explorer) */}
          <div className={`${isSidebarOpen ? 'w-full md:w-64' : 'w-0'} bg-[#252526] transition-all duration-300 overflow-hidden flex flex-col border-r border-black/20`}>
            <div className="p-3 text-xs font-bold text-gray-400 uppercase tracking-wider flex justify-between items-center">
              <span>Explorer</span>
              <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-white">✕</button>
            </div>
            <div className="flex-1">
              <div className="px-2 py-1 flex items-center text-gray-300 cursor-pointer hover:bg-[#2a2d2e] font-bold text-sm">
                <span className="mr-1">▼</span> PORTFOLIO-V1
              </div>
              {files.map(file => (
                <div
                  key={file.name}
                  onClick={() => setActiveFile(file.name)}
                  className={`px-4 py-1 flex items-center text-sm cursor-pointer border-l-2 ${activeFile === file.name ? 'bg-[#37373d] text-white border-blue-400' : 'text-gray-400 border-transparent hover:bg-[#2a2d2e] hover:text-gray-200'}`}
                >
                  <span className="mr-2 text-lg">{file.icon}</span>
                  {file.name}
                </div>
              ))}
              <div className="px-2 py-1 flex items-center text-gray-300 cursor-pointer hover:bg-[#2a2d2e] font-bold text-sm mt-4">
                <span className="mr-1">▶</span> DEPENDENCIES
              </div>
              <div className="px-4 py-1 text-xs text-gray-500">node_modules</div>
            </div>
          </div>

          {/* Main Editor Area */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
            {/* Tab Bar */}
            <div className="flex bg-[#252526] overflow-x-auto no-scrollbar">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-3 text-gray-400 hover:text-white md:hidden"
              >
                <FaColumns />
              </button>
              {files.map(file => (
                <div
                  key={file.name}
                  onClick={() => setActiveFile(file.name)}
                  className={`px-4 py-3 flex items-center min-w-fit text-sm cursor-pointer border-t-2 ${activeFile === file.name ? 'bg-[#1e1e1e] text-white border-blue-400' : 'bg-[#2d2d2d] text-gray-500 border-transparent hover:bg-[#2d2d2d]/80'}`}
                >
                  <span className="mr-2">{file.icon}</span>
                  {file.name}
                </div>
              ))}
            </div>

            {/* Breadcrumbs */}
            <div className="px-4 py-1 text-xs text-gray-500 bg-[#1e1e1e] border-b border-gray-800 flex items-center">
              src <span className="mx-1">›</span> data <span className="mx-1">›</span> {activeFile}
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
              {renderContent()}
            </div>

            {/* Status Bar */}
            <div className="bg-[#007acc] text-white text-xs px-3 py-1 flex justify-between items-center">
              <div className="flex gap-4">
                <span>main*</span>
                <span>0 errors, 0 warnings</span>
              </div>
              <div className="flex gap-4">
                <span>Ln 12, Col 45</span>
                <span>UTF-8</span>
                <span>JSON</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Traditional Download Button */}
        <div className="text-center mt-8">
          <a
            href="/Siddh_Yadav_Resume.pdf"
            download
            target="_blank"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
          >
            <span className="mr-2">📄</span> Prefer a standard resume? Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}

export default IDEExperience
