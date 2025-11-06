import { motion } from 'framer-motion'
import { useState } from 'react'

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card h-full flex flex-col group cursor-pointer"
    >
      {/* Icon & Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl"
          >
            {service.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-heading font-bold uppercase">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{service.category}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-sm text-gray-400 flex items-start space-x-2"
          >
            <span className="text-cyber-red mt-1">▸</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* Compliance Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {service.compliance.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-dark-red/20 text-dark-red rounded border border-dark-red/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto w-full py-2 text-sm font-medium text-cyber-red border border-cyber-red/50 rounded-lg hover:bg-cyber-red/10 transition-colors"
      >
        Learn More
      </motion.button>
    </motion.div>
  )
}

export default ServiceCard

