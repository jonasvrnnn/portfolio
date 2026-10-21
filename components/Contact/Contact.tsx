import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <p className={styles.kicker}>05 / CONTACT</p>
        <h2>
          Een idee of kans?
          <br />
          <span>Ik hoor graag van je.</span>
        </h2>
        <p className={styles.description}>
          Wil je samenwerken, iets vragen of gewoon even kennismaken? Stuur me
          gerust een bericht.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="mailto:VUL-HIER-JE-EMAIL-IN">
            Stuur me een e-mail <span aria-hidden="true">↗</span>
          </a>
          <a
            className={styles.secondary}
            href="https://github.com/jonasvrnnn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub-profiel <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className={styles.cv} href="/cv.pdf" download>
          Download mijn cv <span aria-hidden="true">↓</span>
        </a>
        <p className={styles.setupNote}>
          Vergeet niet je e-mailadres in te vullen en je cv als{" "}
          <code>public/cv.pdf</code> toe te voegen.
        </p>
      </div>
    </section>
  );
}
