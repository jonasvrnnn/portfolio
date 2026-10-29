import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroGrid}>
        <div className={styles.copy}>
          <p className={styles.availability}>
            <span className={styles.pulse} /> STUDENT PROGRAMMEREN{" "}
            <span className={styles.separator}>/</span> AP HOGESCHOOL
          </p>
          <h1>
            Hallo,
            <br />
            Ik ben Jonas{" "}
            <span className={styles.gradient}>
              software
              <br className={styles.desktopBreak} /> devoleper.
            </span>
          </h1>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#projecten">
              Bekijk mijn projecten <span aria-hidden="true">↘</span>
            </a>
            <a className={styles.secondaryButton} href="#contact">
              Contacteer mij <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div
          className={styles.visual}
          aria-label="Decoratieve initialen J voor Jonas"
          role="img"
        >
          <div className={styles.orbit} />
          <div className={styles.orbitInner} />
          <div className={styles.glow} />
          <div className={styles.monogram}>
            J<span>.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
