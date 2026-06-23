// Single source of truth for portfolio content.
// Edit values here instead of inside individual components.

export const appConfig = {
  logo: "JOLO.",
  navigation: [
    { href: "#home",     label: "Home" },
    { href: "#project",  label: "Projects" },
    { href: "#about",    label: "About Me" },
    { href: "#timeline", label: "Timeline" },
    { href: "#contact",  label: "Contact" },
  ],
};

export const profile = {
  name: "John Loyd Belen",
  title: "Full Stack Developer",
  location: "Philippines",
  email: "jloyd9836@gmail.com",
  phone: "+63 999 150 2898",
  phoneHref: "+639991502898",
  resumeUrl:
    "https://drive.google.com/file/d/17hyiQyjIaN9cRcJy6zSC-qR9jhNU0EBC/view?usp=sharing",
};

// Defined once and reused by Hero and Contact so links never drift.
export const social = {
  facebook: "https://www.facebook.com/jol0oo",
  instagram: "https://www.instagram.com/j0lo_o/",
  github: "https://github.com/Jol0o",
  linkedin: "https://www.linkedin.com/in/john-loyd-belen-180329250/",
};

export const projects = [
  {
    name: "Callexa: Voice Automation Ai",
    img: "./project/callexa.png",
    tool: ["NextJs", "Express", "Twilio"],
    link: "https://callexa-page-nw6i.vercel.app/",
    alt: "Callexa voice automation AI landing page",
    description:
      "An AI-powered voice agent platform that automates inbound and outbound calls using Twilio, OpenAI, ElevenLabs, and Deepgram — built for businesses to handle customer interactions at scale.",
    github: null,
  },
  {
    name: "ServeBeez",
    img: "./project/servebeez.png",
    tool: ["Monorepo", "Supabase", "T3 Stack"],
    link: "https://servebeez.com/",
    alt: "ServeBeez web application home page",
    description:
      "A full-stack service marketplace built on the T3 Stack with Supabase. Features a monorepo architecture, real-time data, and role-based access for service providers and clients.",
    github: null,
  },
  {
    name: "Clip Factory",
    img: "./project/clip-factory.png",
    tool: ["NextJs", "Shadcn"],
    link: "https://clip-factory-two.vercel.app/",
    alt: "Clip Factory video clip tool interface",
    description:
      "A web tool for generating and exporting custom video clips, built with Next.js and Shadcn UI components for a clean, composable interface.",
    github: null,
  },
  {
    name: "WizyEMM",
    img: "./project/wizy.png",
    // Tech tags are best-guess placeholders — edit this line as needed.
    tool: ["Next.js", "Android Enterprise", "EMM"],
    link: "https://wizyemm.com",
    alt: "WizyEMM Android enterprise device management dashboard",
    // TODO: update with your own description
    description:
      "An enterprise mobile management (EMM) platform for deploying, managing, and securing Android Enterprise devices at scale.",
    github: null,
  },
  {
    name: "Suprah",
    img: "./project/supra.png",
    // Tech tags are best-guess placeholders — edit this line as needed.
    tool: ["Next.js", "SaaS"],
    link: "https://www.suprah-app.com",
    alt: "Suprah application sign-in screen",
    // TODO: update with your own description
    description:
      "A modern SaaS application delivering a streamlined workflow experience with a clean, responsive interface.",
    github: null,
  },
];
