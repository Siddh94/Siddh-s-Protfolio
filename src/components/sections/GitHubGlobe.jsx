import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const GitHubGlobe = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        // Initial setup
        const updateDimensions = () => {
            canvas.width = canvas.parentElement.clientWidth
            canvas.height = canvas.parentElement.clientHeight
        }
        updateDimensions()

        let width = canvas.width
        let height = canvas.height

        // Globe parameters
        const GLOBE_RADIUS = width < 500 ? 100 : 180 // Smaller globe on mobile
        const DOT_RADIUS = width < 500 ? 1.2 : 1.5
        const DOT_COUNT = width < 500 ? 400 : 600
        const ROTATION_SPEED = 0.003

        let PROJECTION_CENTER_X = width / 2
        let PROJECTION_CENTER_Y = height / 2

        // Generate dots
        const dots = []
        const phi = (1 + Math.sqrt(5)) / 2
        for (let i = 0; i < DOT_COUNT; i++) {
            const y = 1 - (i / (DOT_COUNT - 1)) * 2
            const radiusAtY = Math.sqrt(1 - y * y)
            const theta = phi * i

            const x = Math.cos(theta) * radiusAtY
            const z = Math.sin(theta) * radiusAtY

            dots.push({ x: x * GLOBE_RADIUS, y: y * GLOBE_RADIUS, z: z * GLOBE_RADIUS, initialX: x * GLOBE_RADIUS, initialZ: z * GLOBE_RADIUS })
        }

        let rotation = 0

        const render = () => {
            // Re-fetch dimensions in loop in case of resize (though usually handled by event)
            // But efficient way is just clearRect
            ctx.clearRect(0, 0, width, height)
            rotation += ROTATION_SPEED

            const projectedDots = dots.map(dot => {
                const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation)
                const rotatedZ = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation)
                const scale = 300 / (300 + rotatedZ)
                const screenX = PROJECTION_CENTER_X + rotatedX * scale
                const screenY = PROJECTION_CENTER_Y + dot.y * scale

                return { ...dot, rotatedZ, screenX, screenY, scale }
            })

            projectedDots.sort((a, b) => a.rotatedZ - b.rotatedZ)

            projectedDots.forEach(dot => {
                if (dot.rotatedZ > -GLOBE_RADIUS) {
                    const alpha = Math.max(0.1, Math.min(1, (dot.rotatedZ + GLOBE_RADIUS) / (1.5 * GLOBE_RADIUS)))
                    ctx.beginPath()
                    ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`
                    ctx.arc(dot.screenX, dot.screenY, DOT_RADIUS * dot.scale, 0, Math.PI * 2)
                    ctx.fill()
                }
            })

            ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)'
            ctx.lineWidth = 0.5
            for (let i = 0; i < projectedDots.length; i += 10) {
                const p1 = projectedDots[i]
                if (p1.rotatedZ < 0) continue
                const p2 = projectedDots[(i + 5) % projectedDots.length]
                if (p2.rotatedZ > 0) {
                    const dist = Math.hypot(p1.screenX - p2.screenX, p1.screenY - p2.screenY)
                    if (dist < 40) {
                        ctx.beginPath()
                        ctx.moveTo(p1.screenX, p1.screenY)
                        ctx.lineTo(p2.screenX, p2.screenY)
                        ctx.stroke()
                    }
                }
            }

            requestAnimationFrame(render)
        }

        const animationId = requestAnimationFrame(render)

        const handleResize = () => {
            if (!canvas || !canvas.parentElement) return
            updateDimensions()
            width = canvas.width
            height = canvas.height
            PROJECTION_CENTER_X = width / 2
            PROJECTION_CENTER_Y = height / 2
        }
        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-left order-2 lg:order-1"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                        Global <span className="gradient-text">Reach</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                        Connecting with developers and clients worldwide. From open-source contributions to remote collaborations, my code lives everywhere.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border-b-2 border-purple-500 w-full max-w-[200px]">
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">300+</h4>
                            <p className="text-sm text-gray-500">GitHub Contributions</p>
                        </div>
                    </div>
                </motion.div>

                {/* Globe Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-[320px] md:h-[400px] w-full flex items-center justify-center order-1 lg:order-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-purple-500/10 rounded-full blur-3xl" />
                    <canvas ref={canvasRef} className="w-full h-full z-10" />

                    {/* New Delhi - Top Right */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-[5%] right-[2%] md:top-[10%] md:right-[10%] bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-lg border border-white/20 text-[10px] md:text-xs text-white shadow-xl z-20"
                    >
                        📍 New Delhi, IN
                    </motion.div>

                    {/* Noida - Top Left */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute top-[15%] left-[2%] md:top-[20%] md:left-[10%] bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-lg border border-white/20 text-[10px] md:text-xs text-white shadow-xl z-20"
                    >
                        📍 Noida, IN
                    </motion.div>

                    {/* Varanasi - Bottom Right */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        className="absolute bottom-[25%] right-[0%] md:bottom-[30%] md:right-[5%] bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-lg border border-white/20 text-[10px] md:text-xs text-white shadow-xl z-20"
                    >
                        📍 Varanasi, IN
                    </motion.div>

                    {/* Bangalore - Bottom Left */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        className="absolute bottom-[10%] left-[8%] md:bottom-[15%] md:left-[10%] bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-lg border border-white/20 text-[10px] md:text-xs text-white shadow-xl z-20"
                    >
                        📍 Bangalore, IN
                    </motion.div>

                    {/* Remote Ready Badge - Bottom Centerish */}
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                        className="absolute bottom-0 md:bottom-[5%] left-[50%] translate-x-[-50%] bg-green-500/20 backdrop-blur-md p-2 px-4 rounded-full border border-green-500/50 text-[10px] md:text-xs text-white shadow-xl z-20 whitespace-nowrap"
                    >
                        🌍 Remote Ready
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default GitHubGlobe
