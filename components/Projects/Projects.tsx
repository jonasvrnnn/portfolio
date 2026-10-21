"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
const filters = ["Alles", "Web", "Full-stack"] as const;
type Filter = (typeof filters)[number];
export default function Projects() {
  const [filter, setFilter] = useState<Filter>("Alles");
  const filteredProjects = useMemo(() => filter === "Alles" ? projects : projects.filter((project) => project.category === filter), [filter]);
  return <section className={styles.section} id="projecten"><div className={styles.container}>
    <div className={styles.top}><div><p className={styles.kicker}>04 / GESELECTEERD WERK</p><h2>Projecten in<br /><span>de praktijk.</span></h2></div><p className={styles.intro}>Een selectie van projecten waaraan ik gewerkt heb. Open een project voor meer informatie of bekijk de code op GitHub.</p></div>
    <div className={styles.filters} aria-label="Filter projecten">{filters.map((item) => <button type="button" key={item} className={filter === item ? styles.activeFilter : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
    <div className={styles.grid}>{filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    <p className={styles.hint}>Meer projecten worden toegevoegd naarmate ik verder bouw en bijleer.</p>
  </div></section>;
}
