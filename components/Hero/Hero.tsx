import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroGrid}>
        <div className={styles.copy}>
          <p className={styles.availability}><span className={styles.pulse} /> STUDENT PROGRAMMEREN <span className={styles.separator}>/</span> AP HOGESCHOOL</p>
          <h1>Ik bouw ideeën<br />om tot <span className={styles.gradient}>digitale<br className={styles.desktopBreak} /> ervaringen.</span></h1>
          <p className={styles.intro}>Ik ben Jonas, een student programmeren met een passie voor webdevelopment. Ik leer graag nieuwe technologieën, bouw projecten en zoek steeds naar manieren om beter te worden.</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#projecten">Bekijk mijn projecten <span aria-hidden="true">↘</span></a>
            <a className={styles.secondaryButton} href="#contact">Contacteer mij <span aria-hidden="true">↗</span></a>
          </div>
          <p className={styles.note}><span /> Nieuwsgierig, leergierig en klaar om bij te leren.</p>
        </div>
        <div className={styles.visual} aria-label="Decoratieve initialen J voor Jonas" role="img">
          <div className={styles.orbit} />
          <div className={styles.orbitInner} />
          <div className={styles.glow} />
          <div className={styles.monogram}>J<span>.</span></div>
          <div className={`${styles.floatTag} ${styles.tagTop}`}><span className={styles.tagDot} /> BUILDING THE NEXT</div>
          <div className={`${styles.floatTag} ${styles.tagBottom}`}><span>HTML</span> · <span>CSS</span> · <span>TS</span></div>
          <div className={styles.visualCaption}>DESIGN <span>×</span> CODE <span>×</span> CURIOSITY</div>
        </div>
      </div>
      <div className={styles.bottomLine}><span>01 / INTRODUCTIE</span><span>SCROLL OM TE ONTDEKKEN <span aria-hidden="true">↓</span></span></div>
    </section>
  );
}
