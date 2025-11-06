import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: 1,
    name: 'Cephas Eddie',
    role: 'CEO',
    specialty: 'AI Security & Security Analyst',
    credentials: ['Electrical Engineering', 'Certified Ethical Hacker'],
    image: '👩‍💼'
  },
  {
    id: 2,
    name: 'Joe Munene',
    role: 'CTO & Head of Red Team Operations',
    specialty: 'Cyber Security & Penetration Testing',
    credentials: ['Cyber Security', 'Certified Ethical Hacker', 'Certified Penetration Tester'],
    image: '👨‍💻'
  },
]
const Team = () => {
  return (
    <section id="team" className="py-24 px-6 lg:px-8 relative">
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
            Expert <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            World-class security professionals with decades of combined experience 
            in cyber operations, physical protection, and threat intelligence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              {/* Background Blur Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="text-6xl mb-4 text-center">{member.image}</div>

                {/* Name & Role */}
                <h3 className="text-xl font-heading font-bold uppercase text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-cyber-red text-center mb-2 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-400 text-center mb-4">
                  {member.specialty}
                </p>

                {/* Credentials */}
                <div className="space-y-1 pt-4 border-t border-white/10">
                  {member.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-gray-500 font-mono text-center"
                    >
                      {cred}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

