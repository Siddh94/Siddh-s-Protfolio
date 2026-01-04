import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaTools, FaDatabase, FaCloud, FaPalette } from 'react-icons/fa'

const SkillsUniverse = () => {
  const containerRef = useRef(null)

  // Skill data structured for the universe
  const skillNodes = [
    // Core (Center)
    { id: 'me', name: 'Siddh', group: 'core', radius: 50 },

    // AI/ML Group
    { id: 'ai', name: 'AI/ML', group: 'category', radius: 40 },
    { id: 'tf', name: 'TensorFlow', group: 'ai', radius: 30 },
    { id: 'pytorch', name: 'PyTorch', group: 'ai', radius: 32 },
    { id: 'nlp', name: 'NLP', group: 'ai', radius: 28 },
    { id: 'cv', name: 'OpenCV', group: 'ai', radius: 28 },
    { id: 'llm', name: 'LLMs', group: 'ai', radius: 35 },
    { id: 'huggingface', name: 'Hugging Face', group: 'ai', radius: 25 },

    // Frontend Group
    { id: 'fe', name: 'Frontend', group: 'category', radius: 40 },
    { id: 'react', name: 'React', group: 'fe', radius: 35 },
    { id: 'next', name: 'Next.js', group: 'fe', radius: 32 },
    { id: 'ts', name: 'TypeScript', group: 'fe', radius: 28 },
    { id: 'tailwind', name: 'Tailwind', group: 'fe', radius: 30 },
    { id: 'three', name: 'Three.js', group: 'fe', radius: 25 },

    // Backend Group
    { id: 'be', name: 'Backend', group: 'category', radius: 40 },
    { id: 'node', name: 'Node.js', group: 'be', radius: 32 },
    { id: 'python', name: 'Python', group: 'be', radius: 38 },
    { id: 'api', name: 'REST/GraphQL', group: 'be', radius: 28 },
    { id: 'django', name: 'Django', group: 'be', radius: 25 },

    // Data/Tools Group
    { id: 'data', name: 'Data & Tools', group: 'category', radius: 40 },
    { id: 'sql', name: 'SQL', group: 'data', radius: 28 },
    { id: 'mongo', name: 'MongoDB', group: 'data', radius: 28 },
    { id: 'docker', name: 'Docker', group: 'data', radius: 30 },
    { id: 'git', name: 'Git', group: 'data', radius: 25 },
    { id: 'aws', name: 'AWS', group: 'data', radius: 30 }
  ]

  // Initial positions
  const [nodes, setNodes] = useState(skillNodes.map(node => ({
    ...node,
    x: Math.random() * 800,
    y: Math.random() * 600,
    vx: 0,
    vy: 0
  })))

  const [draggingNode, setDraggingNode] = useState(null)

  // Physics simulation loop
  useEffect(() => {
    const canvas = containerRef.current
    if (!canvas) return

    let animationFrameId

    const updatePhysics = () => {
      setNodes(prevNodes => {
        const newNodes = prevNodes.map(node => {
          if (draggingNode === node.id) return node

          let fx = 0
          let fy = 0

          // Center attraction
          const centerX = canvas.clientWidth / 2
          const centerY = canvas.clientHeight / 2
          fx += (centerX - node.x) * 0.005
          fy += (centerY - node.y) * 0.005

          // Repulsion from other nodes
          prevNodes.forEach(other => {
            if (node.id === other.id) return
            const dx = node.x - other.x
            const dy = node.y - other.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            const minDist = node.radius + other.radius + 20

            if (dist < minDist) {
              const force = (minDist - dist) * 0.05
              fx += (dx / dist) * force
              fy += (dy / dist) * force
            }
          })

          // Group attraction
          if (node.group !== 'core' && node.group !== 'category') {
            const groupParent = prevNodes.find(n =>
              (node.group === 'ai' && n.id === 'ai') ||
              (node.group === 'fe' && n.id === 'fe') ||
              (node.group === 'be' && n.id === 'be') ||
              (node.group === 'data' && n.id === 'data')
            )
            if (groupParent) {
              fx += (groupParent.x - node.x) * 0.015
              fy += (groupParent.y - node.y) * 0.015
            }
          }

          if (node.group !== 'core') {
            const core = prevNodes.find(n => n.id === 'me')
            // Categories attracted to core
            if (node.group === 'category' && core) {
              fx += (core.x - node.x) * 0.01
              fy += (core.y - node.y) * 0.01
            }
          }

          // Damping
          const vx = (node.vx + fx) * 0.92
          const vy = (node.vy + fy) * 0.92

          return {
            ...node,
            vx,
            vy,
            x: node.x + vx,
            y: node.y + vy
          }
        })
        return newNodes
      })

      animationFrameId = requestAnimationFrame(updatePhysics)
    }

    updatePhysics()
    return () => cancelAnimationFrame(animationFrameId)
  }, [draggingNode])

  const handleMouseDown = (id) => {
    setDraggingNode(id)
  }

  const handleMouseUp = () => {
    setDraggingNode(null)
  }

  const handleMouseMove = (e) => {
    if (draggingNode) {
      const canvas = containerRef.current
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setNodes(prev => prev.map(n =>
        n.id === draggingNode ? { ...n, x, y, vx: 0, vy: 0 } : n
      ))
    }
  }

  const getNodeColor = (group) => {
    switch (group) {
      case 'core': return 'bg-white dark:bg-gray-900 border-4 border-primary-500'
      case 'category': return 'bg-gray-100 dark:bg-gray-800 border-2 border-primary-400'
      case 'ai': return 'bg-purple-100 dark:bg-purple-900/50 border border-purple-400'
      case 'fe': return 'bg-blue-100 dark:bg-blue-900/50 border border-blue-400'
      case 'be': return 'bg-green-100 dark:bg-green-900/50 border border-green-400'
      case 'data': return 'bg-orange-100 dark:bg-orange-900/50 border border-orange-400'
      default: return 'bg-gray-200'
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] bg-gray-50 dark:bg-gray-900/50 rounded-2xl overflow-hidden cursor-move border border-gray-200 dark:border-gray-800"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Instruction Overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full text-xs font-medium text-gray-500 backdrop-blur-sm z-10">
          🖱️ Drag nodes to explore the universe
        </div>

        {/* SVGs for connections could go here if using pure SVG, but divs are easier for simple nodes */}
        <svg className="w-full h-full opacity-20 dark:opacity-40">
          {nodes.map((node, i) => {
            // Draw lines to parent/group
            let parentId = null
            if (node.group === 'category') parentId = 'me'
            else if (node.group === 'ai') parentId = 'ai'
            else if (node.group === 'fe') parentId = 'fe'
            else if (node.group === 'be') parentId = 'be'
            else if (node.group === 'data') parentId = 'data'

            if (parentId) {
              const parent = nodes.find(n => n.id === parentId)
              if (parent) {
                return (
                  <line
                    key={`link-${node.id}-${parent.id}`}
                    x1={node.x} y1={node.y}
                    x2={parent.x} y2={parent.y}
                    stroke="currentColor"
                    strokeWidth="2"
                    className={node.group === 'core' ? 'text-primary-500' : 'text-gray-400'}
                  />
                )
              }
            }
            return null
          })}
        </svg>
      </div>

      {nodes.map(node => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing backdrop-blur-sm transition-colors duration-300 ${getNodeColor(node.group)}`}
          style={{
            width: node.radius * 2,
            height: node.radius * 2,
            x: node.x - node.radius,
            y: node.y - node.radius,
          }}
          onMouseDown={(e) => {
            e.stopPropagation()
            handleMouseDown(node.id)
          }}
          whileHover={{ scale: 1.1, zIndex: 50 }}
        >
          <span className={`text-center font-medium leading-tight select-none pointer-events-none px-2 ${node.radius < 30 ? 'text-[10px]' : 'text-xs md:text-sm'}`}>
            {node.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills Universe</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            An interactive visualization of my technical expertise. Drag the nodes to explore connections!
          </p>
        </motion.div>

        {/* Skills Universe Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SkillsUniverse />
        </motion.div>

        {/* Additional Info / Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-900/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400"></span> AI/ML & Data
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span> Frontend
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400"></span> Backend
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400"></span> Tools
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
