import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import {
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  ExpressIcon,
  SQLiteIcon,
  RustIcon,
  CppIcon,
  GitIcon,
  LinuxIcon,
  VSCodeIcon,
  PostmanIcon,
  CanvaIcon,
  SolidityIcon,
  AutoCADIcon,
  RESTAPIsIcon,
  SorobanIcon,
  CompactIcon,
  SOLIDWORKSIcon,
  Fusion360Icon,
  AutodeskInventorIcon,
} from "@/components/ui/svgs/skills-icons";

export const DATA = {
  name: "Dillion Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "I'm Ahir, a Computer Science student at _IEM Kolkata_ with a passion for _building Web3 products_ and turning ideas into reality. My journey began with _CAD design_ and naturally evolved into _blockchain development_, where I enjoy creating real-world projects through _hackathons_ and _open-source contributions_. Beyond building, I'm a _Stellar Ambassador_, _Midnight Ambassador_, and actively _organize hackathons, workshops, and developer communities_ to help others learn, collaborate, and grow.",
  avatarUrl: "/me.png",
  skills: {
    "Frontend": [
      { name: "React", icon: ReactLight },
      { name: "Next.js", icon: NextjsIconDark },
      { name: "TypeScript", icon: Typescript },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "Tailwind CSS", icon: Icons.tailwindcss },
      { name: "HTML5", icon: HTML5Icon },
      { name: "CSS3", icon: CSS3Icon },
    ],
    "Backend": [
      { name: "Node.js", icon: Nodejs },
      { name: "Express.js", icon: ExpressIcon },
      { name: "PostgreSQL", icon: Postgresql },
      { name: "SQLite", icon: SQLiteIcon },
      { name: "REST APIs", icon: RESTAPIsIcon },
    ],
    "Blockchain": [
      { name: "Soroban", icon: SorobanIcon },
      { name: "Solidity", icon: SolidityIcon },
      { name: "Compact", icon: CompactIcon },
      { name: "Rust", icon: RustIcon },
    ],
    "Languages": [
      { name: "C++", icon: CppIcon },
      { name: "Python", icon: Python },
      { name: "Java", icon: Java },
    ],
    "CAD & Design": [
      { name: "Fusion 360", icon: Fusion360Icon },
      { name: "SOLIDWORKS", icon: SOLIDWORKSIcon },
      { name: "AutoCAD", icon: AutoCADIcon },
      { name: "Autodesk Inventor", icon: AutodeskInventorIcon },
    ],
    "Tools": [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: Icons.github },
      { name: "Docker", icon: Docker },
      { name: "Postman", icon: PostmanIcon },
      { name: "Notion", icon: Icons.notion },
      { name: "Canva", icon: CanvaIcon },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/wolf1276",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahir-sarkar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ahirgrinds",
        icon: Icons.x,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@ahirsarkar2022",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Stellar Development Foundation",
      href: "https://stellar.org",
      badges: [],
      location: "Remote",
      title: "Stellar Ambassador",
      logoUrl: "/stellar.png",
      start: "Present",
      end: "Present",
      description:
        "Helping developers explore, build, and ship on the Stellar network through community initiatives, hackathons, workshops, and educational content.",
    },
    {
      company: "Midnight",
      href: "https://midnight.network",
      badges: [],
      location: "Remote",
      title: "Midnight Ambassador",
      logoUrl: "/midnight.png",
      start: "Present",
      end: "Present",
      description:
        "Supporting the Midnight ecosystem by educating developers, organizing community sessions, and promoting privacy-preserving blockchain technologies.",
    },
    {
      company: "Builder Base",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Core Team Member",
      logoUrl: "/builderbase.png",
      start: "Present",
      end: "Present",
      description:
        "Contributing to the growth of Builder Base by supporting community initiatives, collaborating with fellow builders, and helping organize developer-focused events and programs.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "CAD Designer",
      logoUrl: "/solidworks.png",
      start: "2022",
      end: "Present",
      description:
        "Designing functional 3D models, prototypes, and engineering-focused solutions from concept to production.",
    },
  ],
  education: [
    {
      school: "Institute of Engineering & Management (IEM), Kolkata",
      href: "#",
      degree: "B.Tech in Computer Science & Engineering (AI)",
      logoUrl: "/iem-logo.png",
      start: "Jul 2024",
      end: "Jun 2028",
      description:
        "CGPA: 8.20 | Coursework: Web Development, CAD Design, Web3, Data Structures & Algorithms",
    },
  ],
  projects: [
    {
      title: "Voyra",
      href: "https://github.com/wolf1276/travel",
      dates: "Couples Travel Planner",
      active: true,
      description:
        "Voyra is a travel planning platform designed for couples to create unforgettable journeys together. Plan trips, save meaningful places with personalized markers, build shared itineraries, and create experiences that strengthen memories and bring people closer.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/travel",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://travel-clarion-fry.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/travel-banner.png",
      video: "",
    },
    {
      title: "Doodle",
      href: "https://github.com/wolf1276/doodle-hexafalls",
      dates: "On-Chain Freelance Marketplace",
      active: true,
      description:
        "A decentralized freelance marketplace that connects clients and creators through transparent, on-chain workflows. Doodle enables secure project agreements, milestone-based payments, and trustless collaboration powered by blockchain technology.",
      technologies: [
        "React",
        "TypeScript",
        "Solidity",
        "Web3",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/doodle-hexafalls",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ZEKURA",
      href: "https://github.com/wolf1276/ZEKURA",
      dates: "Privacy-Preserving DeFi",
      active: true,
      description:
        "A confidential decentralized exchange built on Midnight, designed to enable privacy-first trading and secure on-chain interactions. ZEKURA combines confidential smart contracts with a modern user experience to deliver a seamless DeFi platform.",
      technologies: [
        "Midnight",
        "Compact",
        "TypeScript",
        "React",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/ZEKURA",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zekura-banner.png",
      video: "",
    },
    {
      title: "Kairos",
      href: "https://github.com/wolf1276/kairos",
      dates: "Autonomous Capital Management",
      active: true,
      description:
        "A policy-driven autonomous capital management platform built on Stellar. Kairos allows users to automate on-chain investment strategies through configurable policies while maintaining transparency, security, and full user control.",
      technologies: [
        "React",
        "TypeScript",
        "Stellar",
        "Soroban",
        "Node.js",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/wolf1276/kairos",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IDE Bootcamp",
      dates: "2025",
      location: "Ranchi",
      win: "Finalist",
      description:
        "Selected as a finalist for presenting an innovative startup and technology solution during the IDE Bootcamp.",
      image: "/ide-bootcamp.png",
      links: [],
    },
    {
      title: "IEEE YESIST12",
      dates: "2025",
      location: "Malaysia",
      win: "International Finalist",
      description:
        "Represented the project internationally as a finalist at IEEE YESIST12, showcasing innovative engineering and technology solutions.",
      image: "/yesist12.png",
      links: [],
    },
    {
      title: "IEEE Robotics Competition",
      dates: "2025",
      location: "",
      win: "3rd Place",
      description:
        "Secured 3rd place by designing and presenting an engineering-focused robotics solution.",
      image: "/ieee.png",
      links: [],
    },
    {
      title: "Axiora Robotics Track",
      dates: "2026",
      location: "",
      win: "Winner",
      description:
        "Won the Robotics Track by designing and presenting an innovative robotics project.",
      image: "/axiora.png",
      links: [],
    },
    {
      title: "GeeksforGeeks Classroom Hacks",
      dates: "2026",
      location: "",
      win: "Winner",
      description:
        "Won the GeeksforGeeks Classroom Hacks competition by building an innovative software solution.",
      image: "/gfg.svg",
      links: [],
    },
    {
      title: "Hexafalls Season 2",
      dates: "2026",
      location: "",
      win: "MLH × Solana Track Winner & 3rd Place Overall",
      description:
        "Won the MLH × Solana sponsored track and secured 3rd place overall by developing an innovative Web3 solution during Hexafalls Season 2.",
      image: "/hexafalls.png",
      links: [],
    },
  ],
} as const;
