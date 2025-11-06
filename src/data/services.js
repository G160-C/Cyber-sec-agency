export const services = [
  {
    id: 'app-security',
    title: 'App Security',
    icon: '🔒',
    category: 'App',
    description: 'Comprehensive application security assessment and hardening',
    features: [
      'Static Application Security Testing (SAST)',
      'Dynamic Application Security Testing (DAST)',
      'Mobile application security audits (iOS & Android)',
      'API security testing and validation',
      'Secure code review and remediation guidance'
    ],
    compliance: ['OWASP Top 10', 'CWE', 'ISO 27001'],
    color: 'cyber-red'
  },
  {
    id: 'web-security',
    title: 'Web Security & Penetration Testing',
    icon: '🌐',
    category: 'Web',
    description: 'Advanced web application penetration testing and vulnerability assessment',
    features: [
      'Full-stack penetration testing',
      'Web application firewall (WAF) bypass techniques',
      'Authentication and authorization testing',
      'Business logic vulnerability assessment',
      'Post-exploitation security analysis'
    ],
    compliance: ['OWASP', 'PTES', 'NIST'],
    color: 'cyber-red'
  },
  {
    id: 'ai-security',
    title: 'AI Security',
    icon: '🤖',
    category: 'AI',
    description: 'AI model security, adversarial defense, and LLM red-teaming',
    features: [
      'LLM red-teaming and prompt injection defense',
      'Adversarial attack simulation and mitigation',
      'Model audit and bias assessment',
      'AI system security architecture review',
      'Training data integrity verification'
    ],
    compliance: ['NIST AI RMF', 'ISO/IEC 23894'],
    color: 'dark-red'
  },
  {
    id: 'cloud-security',
    title: 'Cloud & Infrastructure Security',
    icon: '☁️',
    category: 'Cloud',
    description: 'Cloud security posture management and infrastructure hardening',
    features: [
      'Multi-cloud security assessment (AWS, Azure, GCP)',
      'Infrastructure as Code (IaC) security scanning',
      'Container and Kubernetes security',
      'Cloud-native threat detection implementation',
      'Compliance mapping (CIS, SOC 2, HIPAA)'
    ],
    compliance: ['CIS Benchmarks', 'SOC 2', 'HIPAA'],
    color: 'cyber-red'
  },
  {
    id: 'red-blue-team',
    title: 'Red Team / Blue Team Operations',
    icon: '⚔️',
    category: 'Operations',
    description: 'Adversarial simulation and defensive security operations',
    features: [
      'Full-spectrum red team exercises',
      'Blue team capability development',
      'Purple team collaboration workshops',
      'Threat hunting and detection engineering',
      'Incident response playbook development'
    ],
    compliance: ['MITRE ATT&CK', 'NIST CSF'],
    color: 'dark-red'
  },
  {
    id: 'incident-response',
    title: 'Incident Response & Forensics',
    icon: '🚨',
    category: 'Response',
    description: '24/7 incident response and digital forensics services',
    features: [
      'Rapid incident containment and eradication',
      'Digital forensics and evidence collection',
      'Malware analysis and reverse engineering',
      'Threat intelligence correlation',
      'Post-incident security enhancement'
    ],
    compliance: ['NIST 800-61', 'ISO 27035'],
    color: 'cyber-red'
  },
  {
    id: 'grc',
    title: 'GRC (Governance, Risk & Compliance)',
    icon: '📋',
    category: 'Compliance',
    description: 'Strategic governance, risk management, and compliance programs',
    features: [
      'Security governance framework development',
      'Risk assessment and treatment planning',
      'Compliance gap analysis (ISO 27001, SOC 2, GDPR)',
      'Policy and procedure documentation',
      'Third-party vendor risk assessment'
    ],
    compliance: ['ISO 27001', 'SOC 2', 'GDPR', 'NIST'],
    color: 'dark-red'
  },
  {
    id: 'physical-security',
    title: 'Physical Security',
    icon: '🛡️',
    category: 'Physical',
    description: 'Executive protection, facility security, and secure transport',
    features: [
      'Executive protection and close protection services',
      'K9 security units for detection and deterrence',
      'Secure transport and logistics',
      'Facility security assessments and hardening',
      'Access control system design and implementation'
    ],
    compliance: ['ISO 31000', 'ASIS'],
    color: 'dark-red'
  },
  {
    id: 'security-training',
    title: 'Security Training & Simulations',
    icon: '🎓',
    category: 'Training',
    description: 'Comprehensive security awareness and technical training programs',
    features: [
      'Phishing simulation and awareness campaigns',
      'Secure coding workshops for developers',
      'Incident response tabletop exercises',
      'Red team training and certification prep',
      'Executive security briefings'
    ],
    compliance: ['NIST', 'CIS Controls'],
    color: 'cyber-red'
  },
  {
    id: 'mdr',
    title: 'Managed Detection & Response (MDR)',
    icon: '👁️',
    category: 'MDR',
    description: '24/7 security monitoring, threat detection, and response',
    features: [
      '24/7 Security Operations Center (SOC) monitoring',
      'Advanced threat detection and correlation',
      'Automated incident response orchestration',
      'Threat intelligence integration',
      'Custom detection rule development'
    ],
    compliance: ['SOC 2', 'ISO 27001'],
    color: 'cyber-red'
  },
  {
    id: 'cti-osint',
    title: 'Cyber Threat Intelligence & OSINT',
    icon: '🔍',
    category: 'Intelligence',
    description: 'Strategic threat intelligence and open-source intelligence gathering',
    features: [
      'Threat actor profiling and attribution',
      'OSINT collection and analysis',
      'Dark web monitoring and threat hunting',
      'Indicators of Compromise (IOC) management',
      'Strategic threat briefings for leadership'
    ],
    compliance: ['NIST', 'MITRE ATT&CK'],
    color: 'dark-red'
  }
];

