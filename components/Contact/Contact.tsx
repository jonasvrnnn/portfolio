import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <p className={styles.kicker}>05 / CONTACT</p>
        <h2>
          Interesse voor samenwerking?
          <br />
          <span>Ik hoor graag van je!</span>
        </h2>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href="mailto:Jonas.verbruggen@student.ap.be"
          >
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
      </div>
    </section>
  );
}
