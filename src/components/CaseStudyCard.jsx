import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [suffix, setSuffix] = useState('')

  useEffect(() => {
    // Extract suffix and numeric value
    let numericValue = 0
    let extractedSuffix = ''
    
    if (typeof end === 'string') {
      if (end.includes('M')) {
        numericValue = parseFloat(end.replace('M', ''))
        extractedSuffix = 'M'
      } else if (end.includes('K')) {
        numericValue = parseFloat(end.replace('K', ''))
        extractedSuffix = 'K'
      } else if (end.includes('%')) {
        numericValue = parseFloat(end.replace('%', ''))
        extractedSuffix = '%'
      } else if (end.includes('min')) {
        numericValue = parseFloat(end.replace('min', ''))
        extractedSuffix = 'min'
      } else {
        numericValue = parseFloat(end) || 0
        extractedSuffix = end.replace(/[\d.]/g, '')
      }
    } else {
      numericValue = end || 0
    }
    
    setSuffix(extractedSuffix)

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = numericValue * easedProgress
      
      if (extractedSuffix === 'M' || extractedSuffix === 'K') {
        setCount(Math.floor(currentValue * 100) / 100)
      } else if (extractedSuffix === '%') {
        setCount(Math.floor(currentValue * 100) / 100)
      } else {
        setCount(Math.floor(currentValue))
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final value is exact
        setCount(numericValue)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div className="glass-card p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Problem & Strategy */}
        <div className="space-y-6">
          <div>
            <span className="text-sm text-cyber-red font-mono uppercase tracking-wider">
              {caseStudy.industry}
            </span>
            <h3 className="text-3xl font-heading font-bold uppercase mt-2 mb-4">
              {caseStudy.title}
            </h3>
            <p className="text-gray-400 italic">Client: {caseStudy.client}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyber-red mb-2">Problem</h4>
            <p className="text-gray-300">{caseStudy.problem}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-dark-red mb-2">Strategy</h4>
            <p className="text-gray-300">{caseStudy.strategy}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-cyber-red/20 text-cyber-red rounded border border-cyber-red/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Impact Metrics */}
        <div>
          <h4 className="text-2xl font-heading font-bold uppercase mb-6 text-center">
            Impact Metrics
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {caseStudy.impact.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg text-center border border-white/5"
              >
                <div className="text-3xl md:text-4xl font-mono font-bold text-gradient mb-2">
                  <AnimatedCounter end={metric.metric} />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyCard

