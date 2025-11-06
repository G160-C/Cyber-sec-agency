import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Request a security assessment, discuss your requirements, or reach out for 
            emergency incident response. All communications are encrypted and confidential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">General Inquiries</p>
                  <p className="text-cyber-red font-mono">
                    ceoeddieo@gmail.com
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Security Inquiries</p>
                  <p className="text-cyber-red font-mono">
                    ceoeddieo@gmail.com
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Emergency Hotline</p>
                  <p className="text-dark-red font-mono font-semibold">
                    +254 (798) 755-127
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">
                Secure Communication
              </h3>
              
              <div className="space-y-3">
                <a
                  href="/pgp.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 glass-effect rounded-lg border border-white/10 hover:border-cyber-red/50 transition-colors group"
                >
                  <span className="text-sm font-medium">PGP Public Key</span>
                  <span className="text-cyber-red group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <a
                  href="/security.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 glass-effect rounded-lg border border-white/10 hover:border-cyber-red/50 transition-colors group"
                >
                  <span className="text-sm font-medium">Security Disclosure</span>
                  <span className="text-cyber-red group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">
                Office Locations
              </h3>
              
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <strong className="text-cyber-red">Headquarters:</strong><br />
                  Kenya
                </p>
                <p>
                  <strong className="text-cyber-red">Service Area:</strong><br />
                  Global Operations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

