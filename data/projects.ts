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
    eyebrow: "schoolproject",
    description:
      "Een koffie-app waarin je warme en koude koffies worden opsomt, favorieten bewaart en je bestellingen bijhoudt.",
    longDescription:
      "Zin in een chai latte of een espresso? Bestel dan via mijn zelfgemaakte koffie-app! Hier vind je een uitgebreide keuze aan verschillende koffies en theetjes. Duid ook je favoriete drankjes aan, zodat je ze later gemakkelijk kan terugvinden en niet telkens opnieuw hoeft te zoeken wanneer je iets wilt bestellen.",
    technologies: ["Expo", "React Native", "TypeScript", "REST API"],
    category: "App",
    githubUrl: "https://github.com/jonasvrnnn/koffie",
    demoUrl: process.env.NEXT_PUBLIC_KOFFIE_DEMO_URL || undefined,
    featured: true,
    number: "01",
  },
  {
    slug: "project-webontwikkeling-2025",
    title: "Project Bijbelboeken",
    eyebrow: "Schoolproject",
    description:
      "Een webapplicatie om Bijbelboeken en categorieën te verkennen, met zoeken, filters en gebruikersaccounts.",
    longDescription: `Registreer je en log vervolgens in om alle Bijbelboeken te ontdekken! Filter de boeken op basis van jouw voorkeuren en vind gemakkelijk wat je zoekt.

Klopt er iets niet, zoals een jaartal of andere informatie? Dan kan je dit zelf aanpassen via het adminaccount.

Gebruikersnaam: admin
Wachtwoord: admin`,
    technologies: ["TypeScript", "Express", "EJS", "MongoDB"],
    category: "Full-stack",
    githubUrl: "https://github.com/jonasvrnnn/project-webontwikkeling-2025",
    demoUrl: process.env.NEXT_PUBLIC_WEBONTWIKKELING_DEMO_URL
      ? "/demo/boeken"
      : undefined,
    featured: true,
    number: "02",
  },
];
