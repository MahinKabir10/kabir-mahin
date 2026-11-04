export const personal = {
  name: 'Kabir',
  fullName: 'Mahin Kabir',
  location: 'Brisbane, QLD',
  email: 'mahinkabirofficial@gmail.com',
  phone: '0493 148 477',
  linkedin: 'https://www.linkedin.com/in/mahin-kabir-569384361/',
  github: 'https://github.com/MahinKabir10',
  role: 'Cybersecurity Student · IT Support · Brisbane',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#journey' },
  { label: 'Projects', href: '#initiatives' },
  { label: 'Skills', href: '#craft' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  description:
    'Second-year cybersecurity student at Victoria University Brisbane. I build detection tools in Python and run after-hours IT support on campus.',
  cta: 'Get in touch',
};

export const about = {
  label: 'About me',
  // Three segments rendered with mixed styles (regular / italic serif / regular)
  headlineSegments: [
    { text: "I'm Mahin Kabir,", className: 'font-normal' },
    {
      text: 'a cybersecurity student from Dhaka, now studying in Brisbane.',
      className: 'italic font-serif',
    },
    {
      text: 'I build tools that spot attacks in logs, and I fix tech problems for students after hours.',
      className: 'font-normal',
    },
  ],
  body:
    "I'm in the second year of a Bachelor of Cybersecurity at Victoria University Brisbane, and I won the 2026 Block Star award for Best Cybersecurity Student. On campus I work as an iHelper, running IT support on my own from 5 to 9 PM, and as a Student Mentor. Before university I played national-level table tennis in Bangladesh. I still train my technical skills the way I trained for matches: the same basics, most days.",
};

export const journey = [
  {
    period: 'Mar 2026 – Present',
    role: 'IT Support Assistant (iHelper)',
    company: 'Victoria University Brisbane',
    impact:
      'I run after-hours IT support on campus from 5 to 9 PM, on my own, with no backup on site.',
    bullets: [
      'I fix laptops, personal devices, operating systems, network connections, Microsoft 365 and software setup.',
      'I sort requests by urgency and decide what to fix on the spot and what to send to the VU IT team.',
      'I manage print cards, printing access and lift-access cards.',
    ],
    tags: ['IT support', 'Microsoft 365', 'Access control'],
  },
  {
    period: 'Mar 2026 – Present',
    role: 'Student Ambassador & Student Mentor',
    company: 'Victoria University Brisbane',
    impact: 'I help new and continuing students settle in at VU.',
    bullets: [
      'I guide students through enrolment, USI setup, study materials and VU systems.',
      'I co-run orientation and peer-support sessions with VU staff.',
      'I represent VU Brisbane as a student ambassador on the university website.',
    ],
    tags: ['Mentoring', 'Orientation'],
  },
  {
    period: 'Jul 2025 – Present',
    role: 'Team Member, Customer Service, Dairy & Grocery',
    company: 'Coles Local Coorparoo',
    impact: 'I serve around 200 customers a day at the service desk.',
    bullets: [
      'I handle transactions, questions and returns in a busy store.',
      'I follow FIFO rotation, temperature checks and cold-chain food safety across three departments.',
      'I pick click & collect and home-delivery orders on early-morning and evening shifts.',
    ],
    tags: ['Customer service', 'Compliance'],
  },
  {
    period: '2018 – 2023',
    role: 'National-level table tennis player',
    company: 'Bangladesh',
    impact: 'Five years of competitive table tennis taught me discipline and how to stay calm under pressure.',
    bullets: ['I trained and competed at national level in Bangladesh from 2018 to 2023.'],
    tags: ['Discipline', 'Composure'],
  },
];

export const initiatives = [
  {
    n: '01',
    title: 'SentryLog.',
    blurb:
      'A Python SIEM that reads Linux auth.log and Windows Security logs and flags attacks.',
    points: [
      'Rules for brute force, privilege escalation and compromised logins.',
      'Severity levels, with the raw log lines kept as evidence.',
      '39 tests and a read-only MCP server for plain-English summaries.',
    ],
    accent: 'Threat detection',
    link: 'https://github.com/MahinKabir10/SentryLog',
  },
  {
    n: '02',
    title: 'NetRecon.',
    blurb: 'A Python network scanner I run on my own lab network.',
    points: [
      'Ping sweep, TCP connect scan and banner grabbing.',
      'A rough OS guess from TTL values.',
      'HTML and JSON reports.',
    ],
    accent: 'Network reconnaissance',
    link: 'https://github.com/MahinKabir10/Netrecon',
  },
  {
    n: '03',
    title: 'Home Lab.',
    blurb: 'Kali Linux and Metasploitable on an isolated VirtualBox network.',
    points: [
      'Metasploit, XSS and SQL injection practice.',
      'Hardening with ACLs and OpenSSL encryption.',
      'A three-site OSPF network designed in Cisco Packet Tracer.',
    ],
    accent: 'Attack and defence',
  },
];

export const skillGroups = [
  {
    title: 'Security',
    skills: ['Log analysis', 'SIEM and detection rules', 'Kali Linux', 'Metasploit', 'XSS and SQL injection'],
  },
  {
    title: 'Networking',
    skills: ['TCP/IP', 'OSPF routing', 'VLSM subnetting', 'Cisco Packet Tracer'],
  },
  {
    title: 'Systems',
    skills: ['Linux', 'Windows', 'Server administration', 'Microsoft 365', 'VirtualBox'],
  },
  {
    title: 'Code',
    skills: ['Python', 'Git and GitHub', 'Unit testing', 'MCP servers'],
  },
  {
    title: 'People',
    skills: ['Plain-language explanations', 'Mentoring', 'Customer service'],
  },
  {
    title: 'Languages',
    skills: ['English (fluent)', 'Bengali (native)', 'Hindi (fluent)', 'Chinese (basic)', 'Japanese (basic)'],
  },
];

export const education = {
  degree: 'Bachelor of Cybersecurity',
  school: 'Victoria University · Brisbane Campus',
  period: 'Apr 2025 – Apr 2028',
  note: 'Year 2. Best Cybersecurity Student (Block Star), VU Brisbane 2026. Server Administration & Management 86 (HD), Data Privacy & Cyber Physical Systems Security 78 (D).',
};

export const contact = {
  headline: [
    { text: "I'm looking for a cyber", className: 'font-normal' },
    { text: 'internship in Brisbane.', className: 'italic font-serif' },
  ],
  body:
    "I'm open to cybersecurity internships, IT support work and mentoring roles in Brisbane. Email or call me.",
};

export const media = {
  heroVideo:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4',
  initiativesVideo:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
  icons: [
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
  ],
};
