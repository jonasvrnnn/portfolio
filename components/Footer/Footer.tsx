import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#home">
          J<span>.</span> <b>JONAS VERBRUGGEN</b>
        </a>
        <p>jonas verbruggen · 2026</p>
        <a className={styles.backToTop} href="#home">
          Terug naar boven ↑
        </a>
      </div>
    </footer>
  );
}
