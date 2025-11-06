export const caseStudies = [
  {
    id: 1,
    title: 'Government Agency Data Protection',
    client: 'National Infrastructure Authority',
    industry: 'Government',
    problem: 'Critical infrastructure systems faced persistent threat actor activity with potential for data exfiltration affecting 2.4M citizen records.',
    strategy: 'Deployed comprehensive threat hunting operations, implemented zero-trust architecture, and established 24/7 MDR services with custom detection rules.',
    impact: [
      { metric: '2.4M', label: 'Records Protected' },
      { metric: '0', label: 'Data Breaches' },
      { metric: '94%', label: 'Threat Detection Rate' },
      { metric: '15min', label: 'Mean Time to Response' }
    ],
    tags: ['MDR', 'Threat Intelligence', 'Zero Trust']
  },
  {
    id: 2,
    title: 'Financial Institution AI Security',
    client: 'Global Investment Bank',
    industry: 'Finance',
    problem: 'Deployment of AI-powered trading algorithms required comprehensive security audit to prevent adversarial attacks and ensure model integrity.',
    strategy: 'Conducted thorough LLM red-teaming, adversarial attack simulation, and implemented robust input validation and output monitoring systems.',
    impact: [
      { metric: '99.9%', label: 'Model Accuracy Maintained' },
      { metric: '0', label: 'Adversarial Breaches' },
      { metric: '200+', label: 'Attack Vectors Tested' },
      { metric: 'ISO 23894', label: 'Compliance Achieved' }
    ],
    tags: ['AI Security', 'LLM Red-teaming', 'Model Auditing']
  },
  {
    id: 3,
    title: 'NGO Communication Security',
    client: 'International Humanitarian Organization',
    industry: 'NGO',
    problem: 'Field operations required secure communication channels and protection against state-level surveillance in high-risk regions.',
    strategy: 'Implemented end-to-end encryption, secure messaging platforms, physical security protocols, and executive protection services for key personnel.',
    impact: [
      { metric: '100%', label: 'Secure Communications' },
      { metric: '0', label: 'Security Incidents' },
      { metric: '50+', label: 'Personnel Protected' },
      { metric: '24/7', label: 'Security Coverage' }
    ],
    tags: ['Physical Security', 'Encryption', 'Executive Protection']
  },
  {
    id: 4,
    title: 'Healthcare Cloud Migration Security',
    client: 'Regional Hospital Network',
    industry: 'Healthcare',
    problem: 'Cloud migration of sensitive patient data required HIPAA compliance and protection against ransomware attacks.',
    strategy: 'Performed comprehensive cloud security assessment, implemented multi-layered encryption, and established incident response procedures.',
    impact: [
      { metric: 'HIPAA', label: 'Compliance Maintained' },
      { metric: '500K+', label: 'Patient Records Secured' },
      { metric: '0', label: 'Ransomware Attacks' },
      { metric: '99.99%', label: 'Uptime Maintained' }
    ],
    tags: ['Cloud Security', 'HIPAA', 'Incident Response']
  }
];

