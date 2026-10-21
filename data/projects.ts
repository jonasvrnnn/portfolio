export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "Web" | "Full-stack";
  githubUrl: string;
  featured: boolean;
  number: string;
};

export const projects: Project[] = [
  {
    slug: "koffie",
    title: "Koffie",
    eyebrow: "Persoonlijk project",
    description:
      "Een project rond koffie en webdevelopment. Bekijk de repository voor de huidige implementatie en details.",
    longDescription:
      "Dit project is opgenomen in mijn portfolio om mijn groei als developer te tonen. Voeg hier een concrete uitleg toe over het doel, de belangrijkste functionaliteiten, jouw aanpak en wat je eruit geleerd hebt.",
    technologies: ["Webdevelopment", "In ontwikkeling"],
    category: "Web",
    githubUrl: "https://github.com/jonasvrnnn/koffie",
    featured: true,
    number: "01",
  },
  {
    slug: "project-webontwikkeling-2025",
    title: "Project webontwikkeling 2025",
    eyebrow: "Schoolproject",
    description:
      "Een webontwikkelingsproject uit mijn opleiding aan AP Hogeschool. De details kunnen worden aangevuld met de gebruikte stack en functies.",
    longDescription:
      "Dit schoolproject toont mijn ervaring met het opbouwen van een webapplicatie. Vul aan welke functionaliteiten je zelf gemaakt hebt, welke technologieën gebruikt zijn en hoe de samenwerking verliep.",
    technologies: ["Webdevelopment", "Schoolproject"],
    category: "Full-stack",
    githubUrl: "https://github.com/jonasvrnnn/project-webontwikkeling-2025",
    featured: true,
    number: "02",
  },
];
