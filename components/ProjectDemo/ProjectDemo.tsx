import type { Project } from "@/data/projects";
import WebsiteDemoFrame from "./WebsiteDemoFrame";
import styles from "./ProjectDemo.module.css";

type ProjectDemoProps = {
  project: Project;
  compact?: boolean;
};

export default function ProjectDemo({ project, compact = false }: ProjectDemoProps) {
  const isApp = project.category === "App";

  return (
    <section
      className={`${styles.demo} ${compact ? styles.compact : ""}`}
      aria-label={`${project.title} — interactieve demo`}
    >
      <div className={styles.heading}>
        <span>{isApp ? "MOBIELE APP" : "FULL-STACK WEBSITE"}</span>
        <span className={styles.status}>{project.demoUrl ? "Probeer het hier" : "Demo volgt"}</span>
      </div>
      <div className={styles.stage}>
        <div className={isApp ? styles.phone : styles.browser}>
          <div className={styles.chrome} aria-hidden="true">
            {isApp ? <span className={styles.speaker} /> : <><span className={styles.dots}>● ● ●</span><span className={styles.browserTitle}>{project.title}</span></>}
          </div>
          {project.demoUrl && !isApp ? (
            <WebsiteDemoFrame src={project.demoUrl} title={`${project.title} — interactieve website`} />
          ) : project.demoUrl ? (
            <iframe
              className={styles.screen}
              src={project.demoUrl}
              title={`${project.title} — ${isApp ? "interactieve appdemo" : "interactieve website"}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.symbol} aria-hidden="true">{isApp ? "☕" : "↗"}</span>
              <h3>{project.title}</h3>
              <p>{isApp ? "Ontdek de app binnenkort hier, in dit telefoonvenster." : "Gebruik de website binnenkort hier, zonder het portfolio te verlaten."}</p>
              <span className={styles.pending}>Interactieve demo nog niet beschikbaar</span>
            </div>
          )}
          {isApp && <div className={styles.homeIndicator} aria-hidden="true"><span /></div>}
        </div>
      </div>
      <p className={styles.caption}>
        {isApp ? "Een mobiele app, met een interactieve webdemo in een telefoonframe." : "De volledige desktopweergave, verkleind om hier te passen. Je kunt klikken en scrollen."}
      </p>
      {project.demoUrl && <p className={styles.help}>Blijft het venster leeg? De demo kan tijdelijk onbereikbaar zijn of insluiten blokkeren.</p>}
    </section>
  );
}
