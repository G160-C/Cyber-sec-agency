import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { caseStudies } from '../data/caseStudies'
import CaseStudyCard from './CaseStudyCard'

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section id="case-studies" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Proven <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world security outcomes for governments, enterprises, and organizations 
            operating in high-risk environments.
          </p>
        </motion.div>

        {/* Case Study Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <CaseStudyCard caseStudy={caseStudies[activeIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevCase}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-effect rounded-lg border border-white/10 hover:border-cyber-red transition-colors"
              aria-label="Previous case study"
            >
              ←
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-cyber-red w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextCase}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-effect rounded-lg border border-white/10 hover:border-cyber-red transition-colors"
              aria-label="Next case study"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

