// Single source of truth for both the terminal and the portfolio views.
// Edit this file to update content everywhere.
window.RESUME = {
  name: "Priyanshu",
  handle: "priyanshu",
  title: "Cybersecurity Professional",
  tagline: "I map what attackers can see before they do, and help close it.",
  location: "Hyderabad, India",
  email: "priyanshu.kumar9650@gmail.com",
  phone: "+91-9650493485",
  linkedin: "https://www.linkedin.com/in/priyanshu12/",
  resume: "assets/Priyanshu_Resume.pdf",

  summary:
    "Cybersecurity professional with 3+ years of experience across Incident Response, Threat Intelligence, " +
    "External Attack Surface Management, Vulnerability Management, and Access Management. Experienced in " +
    "OSINT-driven risk analysis, managing external exposure, and improving organizational cyber risk ratings " +
    "through strong internet hygiene. Hands-on in vulnerability identification, validation, remediation tracking, " +
    "and penetration testing. I use SIEM, EDR, and WAF technologies for real-time threat detection and response, " +
    "and turn technical findings into risk insights teams can act on.",

  // Plain-language version for non-technical visitors.
  simpleSummary:
    "I help large organizations stay safe online. I find the weak spots attackers could use (exposed systems, " +
    "leaked passwords, fake look-alike websites) and work with the right teams to fix them before they become a problem.",

  stats: [
    { value: "3+", label: "Years in cybersecurity" },
    { value: "4", label: "Roles across 2 companies" },
    { value: "8+", label: "Certifications" },
    { value: "M.Tech", label: "Cybersecurity, NFSU" },
  ],

  experience: [
    {
      company: "Bank of America",
      role: "Info Security Analyst",
      period: "Oct 2025 – Present",
      tags: ["EASM", "Threat Intel", "OSINT"],
      simple: "Watch over everything the bank exposes to the internet and get risky items fixed fast.",
      points: [
        "Monitored and managed the organization's external attack surface using SecurityScorecard, RiskRecon, BitSight, and Xpanse, improving cyber risk ratings through proactive internet hygiene.",
        "Performed OSINT-driven analysis using Shodan, VirusTotal, and similar tools to identify perimeter risks: shadow IT, phishing domains, leaked data, and credential exposure.",
        "Validated and triaged vendor-reported findings, eliminated false positives, analyzed OSINT risk scores, and escalated P1/P2 issues for timely remediation.",
        "Mapped external assets to applications and owners; worked with Infrastructure, Application, Cloud, SOC, and Vendor Risk teams to prioritize remediation.",
      ],
    },
    {
      company: "Bank of America",
      role: "Senior Tech Associate",
      period: "Aug 2024 – Oct 2025",
      tags: ["Vuln Mgmt", "Qualys", "Automation"],
      simple: "Found and verified security weaknesses across servers and cloud, and tracked them until fixed.",
      points: [
        "Conducted vulnerability identification and validation across servers, applications, and cloud assets using Qualys VMDR, Qualys TotalCloud, and Tanium.",
        "Performed manual validation (Nmap, PowerShell, version verification) to eliminate false positives; worked with Qualys support on tool issues.",
        "Partnered with application, infrastructure, and cloud teams to recommend, track, and validate remediation by risk priority and SLA.",
        "Automated vulnerability reporting and built weekly dashboards for scan coverage, remediation status, SLA adherence, and risk trends.",
      ],
    },
    {
      company: "Bank of America",
      role: "Apprentice",
      period: "Aug 2023 – Aug 2024",
      tags: ["IAM", "Mainframe", "Training"],
      simple: "Managed who gets access to critical mainframe systems, and trained the security team on cyber attacks.",
      points: [
        "Worked with the Global Access Operations Mainframe team to control and maintain enterprise-wide mainframe access.",
        "Administered user access provisioning/deprovisioning on mainframe systems with timely updates and protocol adherence.",
        "Resolved access-related issues to support end users and improve system efficiency.",
        "Led training sessions on cyber attacks for the entire information security team, from common attack vectors to mitigation.",
      ],
    },
    {
      company: "RAXA Techno Security Solutions, GMR Group",
      role: "Cybersecurity Trainee",
      period: "Dec 2022 – Aug 2023",
      tags: ["VAPT", "Red Team", "WAF", "SIEM"],
      simple: "Tested apps and systems by safely attacking them, and helped defend them in real time.",
      points: [
        "Configured and managed Web Application Firewall (WAF) to protect web applications.",
        "Executed Vulnerability Assessment and Penetration Testing (VAPT) for diverse applications and systems.",
        "Identified and exploited vulnerabilities using automated tools and manual techniques.",
        "Monitored vulnerabilities in real time using CASM (Continuous Attack Surface Monitoring).",
        "Used SIEM and EDR tools to detect and respond to security incidents in real time.",
        "Led red teaming simulations to assess the effectiveness of security implementations.",
        "Led quarterly VM scans on servers, network, and security devices, with remediation plans.",
      ],
    },
  ],

  skills: [
    { group: "Vulnerability Management", items: ["Nessus Professional", "Qualys VMDR", "Vulnerability Assessment", "CASM (CloudSek)", "Tanium"] },
    { group: "Threat Intelligence", items: ["OSINT", "SecurityScorecard", "BitSight", "Xpanse", "RiskRecon", "Shodan"] },
    { group: "Access & Identity", items: ["SailPoint IIQ", "IBM z/OS Mainframe"] },
    { group: "Security Operations", items: ["SIEM (Seceon)", "EDR (CrowdStrike)", "Incident Response", "Threat Hunting"] },
    { group: "Security Tools", items: ["Prophaze WAF", "FTK", "FourCore", "Burp Suite", "Nmap"] },
    { group: "Programming & Analysis", items: ["Python", "Malware Analysis", "Digital Forensics", "PowerShell"] },
  ],

  projects: [
    {
      name: "ICS Vulnerability Assessment Tool",
      cmd: "ics-assess",
      tags: ["ICS/OT", "Python", "Parsers"],
      simple: "A tool that checks factory/industrial controller settings for security weaknesses without disrupting operations.",
      points: [
        "Built a passive ICS vulnerability assessment tool that analyzes PLC configuration files for security weaknesses.",
        "Implemented parsers for L5X and CXT files to extract asset and configuration data without impacting operations.",
        "Improved assessment efficiency and strengthened protection of critical infrastructure environments.",
      ],
    },
    {
      name: "Static Malware Analysis",
      cmd: "malscan",
      tags: ["Malware", "Python", "Automation"],
      simple: "A tool that inspects many suspicious files at once so analysts can decide faster which ones are dangerous.",
      points: [
        "Developed a Python-based static malware analysis tool that analyzes multiple samples concurrently.",
        "Automated key analysis steps, improving investigation speed and consistency.",
        "Enabled faster triage and assessment for security analysts.",
      ],
    },
  ],

  certifications: [
    { name: "Certificate of Cloud Security Knowledge v5", short: "CCSK", issuer: "Cloud Security Alliance" },
    { name: "Certificate of Competence in Zero Trust", short: "CCZT", issuer: "Cloud Security Alliance" },
    { name: "Practical Malware Analysis & Triage", short: "PMAT", issuer: "TCM Security" },
    { name: "Certified Network Security Practitioner", short: "CNSP", issuer: "The SecOps Group" },
    { name: "Certified AppSec Practitioner", short: "CAP", issuer: "The SecOps Group" },
    { name: "Proofpoint Certified Email Authentication Specialist", short: "PCEAS", issuer: "Proofpoint" },
    { name: "Network Security Expert 1, 2 & 3", short: "NSE", issuer: "Fortinet" },
    { name: "IBM z/OS Mainframe Practitioner", short: "z/OS", issuer: "Coursera" },
  ],

  education: [
    { degree: "Master of Technology, Cybersecurity", school: "National Forensic Sciences University", period: "2021 – 2023", place: "Gandhinagar" },
    { degree: "Bachelor of Technology, Information Technology", school: "PDM College of Engineering", period: "2016 – 2020", place: "Bahadurgarh" },
  ],

  interests: ["Motorbiking", "Trekking", "Cricket", "Competitive Gaming"],

  // CTF writeups and blog posts. Both views show a "coming soon" state while this is empty.
  // Add entries like:
  // {
  //   title: "HTB: Example Box",
  //   type: "CTF",                 // "CTF" or "Blog"
  //   date: "2026-11-02",
  //   summary: "Initial foothold via exposed .git, privesc through a misconfigured cron job.",
  //   tags: ["Web", "Linux", "PrivEsc"],
  //   url: "https://medium.com/@you/htb-example",
  // },
  writeups: [],
};
