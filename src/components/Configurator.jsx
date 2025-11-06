import { motion } from 'framer-motion'
import { services } from '../data/services'

const Configurator = ({ activeCategory, setActiveCategory }) => {
  const categories = ['App', 'Web', 'AI', 'Physical', 'Cloud', 'Operations']

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  const filteredServices = activeCategory
    ? services.filter(s => s.category === activeCategory)
    : []

  return (
    <div className="glass-card p-8 space-y-6">
      <div>
        <h3 className="text-2xl font-heading font-bold uppercase mb-2">
          Defense Configurator
        </h3>
        <p className="text-gray-400 text-sm">
          Select a service category to visualize protection layers
        </p>
      </div>

      {/* Category Toggles */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category
          return (
            <motion.button
              key={category}
              onClick={() => toggleCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyber-red to-dark-red text-white shadow-lg shadow-cyber-red/50'
                  : 'glass-effect border border-white/10 hover:border-cyber-red/50'
              }`}
            >
              {category}
            </motion.button>
          )
        })}
      </div>

      {/* Active Services Display */}
      {activeCategory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3 mt-4"
        >
          <p className="text-sm text-gray-400 font-medium">
            {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Available
          </p>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-3 glass-effect rounded-lg border border-white/5 hover:border-cyber-red/30 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{service.icon}</span>
                  <span className="text-sm font-medium">{service.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Visual Indicator */}
      <div className="relative h-32 rounded-lg overflow-hidden mt-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/20 via-dark-red/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: activeCategory ? [1, 1.2, 1] : 1,
              opacity: activeCategory ? [0.5, 1, 0.5] : 0.3,
            }}
            transition={{ repeat: activeCategory ? Infinity : 0, duration: 2 }}
            className="w-20 h-20 rounded-full border-2 border-cyber-red"
          />
        </div>
      </div>
    </div>
  )
}

export default Configurator

