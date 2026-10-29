import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <p className={styles.kicker}>CONTACT</p>
        <h2>
          Interesse voor een samenwerking?
          <br />
          <span>Ik hoor graag van u!</span>
        </h2>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href="mailto:Jonas.verbruggen@student.ap.be"
          >
            Stuur me een e-mail <span aria-hidden="true">{"\u2197\uFE0E"}</span>
          </a>
          <a
            className={styles.secondary}
            href="https://github.com/jonasvrnnn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub-profiel <span aria-hidden="true">{"\u2197\uFE0E"}</span>
          </a>
        </div>
        <a className={styles.cv} href="/cv.pdf" download>
          Download mijn cv <span aria-hidden="true">{"\u2193\uFE0E"}</span>
        </a>
      </div>
    </section>
  );
}
