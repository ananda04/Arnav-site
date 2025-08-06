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
      company: "DruvStar - Data and Cyber Defense",
      title: "Data Analytics Engineer Intern",
      dataRange: "May 2025 - Present",
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
      company: "Duke University - Dr. Joel Greenberg Lab - BioRespiratory & Precision Pathology Center",
      title: "Research Assistant",
      dateRange: "Aug 2021 - June 2024",
      bullets: [
        "Implemented ML algorithm differentiating between cancerous and noncancerous brain tissue",
        "Analyzed X-Ray diffraction data through topological data reduction algorithms",
        "Published research in <a href='https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12925/129250I/X-ray-diffraction-imaging-of-glioblastoma-and-ductal-carcinoma-in/10.1117/12.3006600.short#_=_' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>SPIE Medical: X-ray diffraction imaging of glioblastoma and ductal carcinoma in-situ</a>",
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
