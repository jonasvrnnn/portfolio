"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#over", label: "Over mij" },
  { href: "#skills", label: "Skills" },
  { href: "#projecten", label: "Projecten" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#home"
          aria-label="Jonas Verbruggen — naar boven"
        >
          <span className={styles.brandMark}>
            J<span>.</span>
          </span>
          <span className={styles.brandName}>JONAS VERBRUGGEN</span>
        </a>
        <button
          className={styles.menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Sluiten" : "Menu"}{" "}
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Hoofdnavigatie"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
