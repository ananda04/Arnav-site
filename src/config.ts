export const siteConfig = {
  name: "Arnav Nanda",
  title: "Aspiring Technologist",
  description: "Portfolio website of Arnav Nanda",
  accentColor: "#1d4ed8",
  social: {
    email: "arnav.nanda@duke.edu",
    linkedin: "https://www.linkedin.com/in/arnav-nanda",
    github: "https://github.com/ananda04",
  },
  aboutMe:
    "I've always been someone who loves to build, tinker, and ask questions—usually the kind that start with \"what if?\" or \"why not?\" Whether it was trying to recreate Dr. Octopus's tentacles from Spider-Man or designing a tennis ball launcher from scratch using spare parts, I've never been afraid to chase an idea just because it sounded a little out there. Over the years, that curiosity has turned into a passion for engineering and research. I've built everything from embedded systems for underwater communication to in-culture hood testing devices for cancer drugs, and I've found just as much joy in debugging a stubborn line of code as I have in soldering together a circuit. I'm still learning, still experimenting, and still trying to turn strange questions into real solutions—and that's what keeps me excited every day.",
 aboutImage: "/images/aboutephoto.jpg",
 skills: ["Verilog", "C", "MatLab", "Vivado", "GTKwave", "Valgrind", "Logisim", "CAD"],
  projects: [
    {
      name: "GyroSynth",
      description:
        "Designed a gyroscope-based digital audio synthesizer on the NEXYS A7 FPGA, using Verilog to map real-time hand motion from an ADXL362 accelerometer to pitch and volume control. Implemented SPI communication, PWM-based sound generation, and a memory-mapped processor interface for interactive, gesture-controlled music synthesis",
      link: "https://docs.google.com/presentation/d/1VToCR0Ef1twNTYo6tX9oQKRNEzdj6iAZQS2saotNSW8/edit?slide=id.g34e411bce1f_0_357#slide=id.g34e411bce1f_0_357",
      skills: ["Verilog", "Vivado", "MIPS Assembly", "GTKWave", "NEXYS A7 FPGA"],
    },
    {
      name: "Garmin Tone Generator",
      description:
        "Develop a Bluetooth-enabled embedded system for real-time communication with deep-sea divers, enhancing underwater safety through psychoacoustic feedback. Designed a waterproof glove and buoy system integrating force sensors, signal processing algorithms, and PCB hardware built in KiCAD. Implemented Bluetooth protocols and data analysis using MATLAB and C for acoustic signal evaluation",
      link: "https://ieeexplore.ieee.org/document/10534714",
      skills: ["Bluetooth Communication", "Embedded Systems", "MATLAB", "C"],
    },
    {
      name: "TUNE",
      description:
        "A tunable-focus eyewear system designed to combat vision degradation from spaceflight-associated neuro-ocular syndrome (SANS) and circadian rhythm disruption. Integrated liquid lens technology, app-controlled prescription adjustment, and blue light filtration to mimic Earth-like visual conditions in microgravity",
      link: "https://www.conradchallenge.org/2022virtualfinalsshowcaseclose",
      skills: ["CAD", "Optics"],
    },
  ],
  experience: [
   {
      company: "Duke University - Digital Systems (ECE350)",
      title: "Office Hour / Greader Teaching Assitant",
      dateRange: "Jan 2026 - Present"
      bullets: [
	"Conducting office hours in digital logic design, Finite State Machine implementation, and FPGA synthesis"
	"Assisting students with debugging complex Verilog modules for a 5-stage pipelined and bypassed MIPS processor, including designing Functional Units (ALU, load/store unit, register files), and multipliers and dividers"
    ],
   },
   {
     company: "Duke Quantum Center",
      title: "Research Intern",
      dateRange: "Jan 2026 - Present",
      bullets:[
        "Designing control systems for Qsim quantum system Arbitrary Waveform Generator (AWG) for laser modulation"
      ],
   },
   {
    company: "OWL Integrations",
      title: "Intern",
      dateRange: "Aug 2025 - Present",
      bullets:[
        "Designing a multi-node IoT mesh tracking system enabling real-time localization of new entrants using Radio Frequency (RF) communication and GPS across a defined area"
      ],
   },
   {
      company: "DruvStar - Data and Cyber Defense",
      title: "Data Analytics Engineer Intern",
      dateRange: "May 2025 - Aug 2025",
      bullets:[
        "Focused on improving response time and usability in security operations through advanced language modeling and adaptive querying systems",
        "Developed a Retrieval-Augmented Generation (RAG) system using AWS Bedrock to streamline and accelerate cybersecurity incident reporting",
        "Engineered a natural language interface to generate PostgreSQL 17.5 queries, leveraging reinforcement learning with Gymnasium 1.2",
      ],
    },
    {
      company: "Duke University - Dr. Richard Fair - Digital Microfluidics Lab",
      title: "Research Assistant",
      dateRange: "Jan 2024 - Present",
      bullets: [
        "Designed KiCAD-based in-hood PCB device for real-time Electric Cell-substrate Impedance Sensing (ECIS)",
        "Developed translator integrated circuit enabling simultaneous 3D spheroid culturing and impedance measurement",
        "Monitored cancer cell death in response to cytotoxic agents through real-time impedance analysis",
      ],
    },
    {
      company: "Duke University - Dr. Joel Greenberg Lab - Quadridox Inc. -  BioRespiratory & Precision Pathology Center",
      title: "Research Assistant",
      dateRange: "Aug 2021 - June 2024",
      bullets: [
        "Implemented ML algorithm differentiating between cancerous and noncancerous brain tissue",
        "Analyzed X-Ray diffraction data through topological data reduction algorithms",
        "Published research in <a href='https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12925/129250I/X-ray-diffraction-imaging-of-glioblastoma-and-ductal-carcinoma-in/10.1117/12.3006600.short#_=_' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>SPIE Medical: X-ray diffraction imaging of glioblastoma and ductal carcinoma in-situ</a>",
      ],
    },
    {
      company:"Duke Unviersity - Introduction to Electrical Engineering(ECE 110)",
      title: "Officer Hour / Grader Teaching Assitant",
      dateRange: "Dec 2024 - June 2025",
      bullets:[
	"Strengthened technical understanding by teaching core concepts such as circuit analysis, op-amps, and digital logic to students with diverse academic backgrounds.",
	"Developed communication and mentorship skills through one-on-one support during office hours, lab guidance, and feedback on assignments.",
	"Learned how to break down complex topics into approachable explanations, reinforcing my own learning while helping others build confidence in engineering.",
      ],
    },
  ],
  education: [
    {
      school: "Duke University",
      degree: "Bachelor of Science in Engineering - Electrical & Computer Engineering and Computer Science",
      dateRange: "2023 - 2027",
      achievements: [
        "Current student pursuing double major",
        "Focus on hardware design and systems programming",
      ],
      coursework: [
        "Digital Systems",
        "Computer Architecture", 
        "Introduction to Microelectronics",
        "Probability",
        "Signals and Systems",
        "Operating Systems",
        "Fields and Waves",
        "Elements of Machine Learning"
      ],
      extracurricular: [
        "Undergraduate research in X-ray Diffraction and Microfluidics",
        "Teacher assistant for introductory electrical engineering course"
      ],
    },
  ],
};
