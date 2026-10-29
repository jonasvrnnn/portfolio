import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectDemo from "@/components/ProjectDemo/ProjectDemo";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {/* NIEUW: klikbare laag over de card */}
      <Link
        href={`/projects/${project.slug}`}
        className={styles.cardLink}
        aria-label={`Bekijk details van ${project.title}`}
      />

      <div className={styles.cardTop}>
        <span className={styles.number}>{project.number} / PROJECT</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>

      <div className={styles.demoWrapper}>
        <ProjectDemo project={project} compact />
      </div>

      <div className={styles.body}>
        <p className={styles.eyebrow}>{project.eyebrow}</p>

        <h3>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Bekijk code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <link />
    </article>
  );
}
