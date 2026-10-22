export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "App" | "Web" | "Full-stack";
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  number: string;
};

export const projects: Project[] = [
  {
    slug: "koffie",
    title: "Koffie",
    eyebrow: "Mobiele app · Persoonlijk project",
    description:
      "Een koffie-app waarin je warme en koude koffies ontdekt, favorieten bewaart en je bestellingen bijhoudt.",
    longDescription:
      "Gebouwd met Expo en React Native, met ondersteuning voor de browser. De app haalt koffies op via een externe API. Je kunt koffies bekijken, favorieten opslaan en een bestellijst met aantallen bijhouden. Favorieten en bestellingen worden lokaal op je apparaat bewaard.",
    technologies: ["Expo", "React Native", "TypeScript", "REST API"],
    category: "App",
    githubUrl: "https://github.com/jonasvrnnn/koffie",
    demoUrl: process.env.NEXT_PUBLIC_KOFFIE_DEMO_URL || undefined,
    featured: true,
    number: "01",
  },
  {
    slug: "project-webontwikkeling-2025",
    title: "Project webontwikkeling 2025",
    eyebrow: "Schoolproject",
    description:
      "Een webapplicatie om Bijbelboeken en categorieën te verkennen, met zoeken, filters en gebruikersaccounts.",
    longDescription:
      "Een schoolproject met een Express-server en EJS-templates. Boeken, categorieën, gebruikers en sessies worden opgeslagen in MongoDB. Bezoekers kunnen een account aanmaken en boeken doorzoeken en filteren; beheerders kunnen boekgegevens aanpassen.",
    technologies: ["TypeScript", "Express", "EJS", "MongoDB"],
    category: "Full-stack",
    githubUrl: "https://github.com/jonasvrnnn/project-webontwikkeling-2025",
    demoUrl: process.env.NEXT_PUBLIC_WEBONTWIKKELING_DEMO_URL ? "/demo/boeken" : undefined,
    featured: true,
    number: "02",
  },
];
