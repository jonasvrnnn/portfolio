import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { projects } from "@/data/projects";
import styles from "./page.module.css";
type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} | Jonas Verbruggen` : "Project | Jonas Verbruggen" };
}
export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <><Navbar /><main className={styles.main}>
    <Link className={styles.back} href="/#projecten">← Terug naar projecten</Link>
    <p className={styles.kicker}>{project.number} / {project.eyebrow}</p><h1>{project.title}<span>.</span></h1>
    <p className={styles.lead}>{project.description}</p>
    <div className={styles.visual} aria-hidden="true"><span>{project.title.slice(0, 1)}</span><small>JONAS / DEV</small></div>
    <section className={styles.details}><div><p className={styles.label}>OVER HET PROJECT</p><p>{project.longDescription}</p></div><div><p className={styles.label}>TECHNOLOGIEËN</p><div className={styles.tags}>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>
    <div className={styles.actions}>
      {project.demoUrl && <a className={styles.github} href={project.demoUrl} target="_blank" rel="noopener noreferrer">Bekijk live demo <span aria-hidden="true">↗</span></a>}
      <a className={styles.source} href={project.githubUrl} target="_blank" rel="noopener noreferrer">Bekijk code op GitHub <span aria-hidden="true">↗</span></a>
    </div>
  </main><Footer /></>;
}
