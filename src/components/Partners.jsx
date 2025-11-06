import { motion } from 'framer-motion'

const partners = [
  { name: 'ISO 27001', type: 'Certification' },
  { name: 'SOC 2 Type II', type: 'Certification' },
  { name: 'OWASP', type: 'Partner' },
  { name: 'MITRE', type: 'Partner' },
  { name: 'ASIS International', type: 'Partner' },
  { name: 'CIS', type: 'Partner' }
]

const Partners = () => {
  return (
    <section id="partners" className="py-24 px-6 lg:px-8 relative">
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
            Trust & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Certified and recognized by leading security standards and industry organizations.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-3xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                🛡️
              </div>
              <h3 className="text-sm font-heading font-bold uppercase mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-500 font-mono">
                {partner.type}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Aegis Cyber Defense maintains compliance with{' '}
            <span className="text-cyber-red">ISO 27001</span>,{' '}
            <span className="text-cyber-red">SOC 2 Type II</span>, and follows{' '}
            <span className="text-cyber-red">NIST Cybersecurity Framework</span> guidelines.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners

