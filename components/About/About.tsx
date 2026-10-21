import styles from "./About.module.css";
export default function About() {
  return <section className={styles.section} id="over"><div className={styles.container}>
    <div className={styles.headingBlock}><p className={styles.kicker}>02 / OVER MIJ</p><h2>Altijd aan het<br /><span>bijleren.</span></h2></div>
    <div className={styles.content}><p className={styles.lead}>Ik ben Jonas Verbruggen, student graduaat Programmeren aan AP Hogeschool in Antwerpen.</p>
      <p>Ik hou ervan om ideeën om te zetten in werkende digitale producten. Tijdens mijn opleiding bouw ik mijn kennis van front-end en back-end development verder uit. Ik werk graag praktisch, probeer nieuwe tools uit en leer uit elke uitdaging.</p>
      <p>Mijn doel is om mijn technische vaardigheden verder te ontwikkelen, samen te werken met andere developers en projecten te maken waar mensen echt iets aan hebben.</p>
      <div className={styles.stats}><div><strong>2027</strong><span>Verwachte afstudeerdatum</span></div><div><strong>AP</strong><span>Hogeschool Antwerpen</span></div><div><strong>∞</strong><span>Nieuwsgierigheid</span></div></div>
    </div></div></section>;
}
