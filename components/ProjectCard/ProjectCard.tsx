import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";
type ProjectCardProps = { project: Project };
export default function ProjectCard({ project }: ProjectCardProps) {
  return <article className={styles.card}>
    <div className={styles.cardTop}><span className={styles.number}>{project.number} / PROJECT</span><span className={styles.arrow} aria-hidden="true">↗</span></div>
    <div className={styles.art} aria-hidden="true"><span className={styles.artGlow} /><span className={styles.artLetters}>{project.title.slice(0, 1)}</span><span className={styles.artLabel}>JONAS / DEV</span></div>
    <div className={styles.body}><p className={styles.eyebrow}>{project.eyebrow}</p><h3>{project.title}</h3><p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <div className={styles.links}>
        {project.demoUrl && <a className={styles.demo} href={project.demoUrl} target="_blank" rel="noopener noreferrer">Bekijk live demo <span aria-hidden="true">↗</span></a>}
        <Link href={`/projects/${project.slug}`}>Project bekijken <span aria-hidden="true">→</span></Link>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Bekijk code <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>;
}
