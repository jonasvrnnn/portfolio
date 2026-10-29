import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.section} id="over">
      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <p className={styles.kicker}>02 / OVER MIJ</p>
          <h2>
            Mijn Studie
            <br />
            <span>&& motivatie</span>
          </h2>
        </div>
        <div className={styles.content}>
          <p className={styles.lead}>
            Ik ben Jonas Verbruggen en ik studeer Programmeren aan AP Hogeschool
            in Antwerpen.
          </p>

          <p>
            Wat ik zo leuk vind aan programmeren, is dat je eigenlijk van een
            simpel idee iets kunt maken dat ook echt werkt. Tijdens mijn
            opleiding leer ik van alles over frontend, backend en alles wat
            erbij komt kijken. Denk maar aan hosting, digitale technologieën en
            hoe je samenwerkt aan projecten met bijvoorbeeld Agile en Scrum.
          </p>

          <p>
            Wanneer ik aan een project werk, wil ik natuurlijk eerst dat alles
            goed werkt. Maar daar stopt het voor mij niet. Ik kijk ook graag hoe
            ik iets beter kan aanpakken. Kan mijn code wat overzichtelijker? Kan
            iets efficiënter? Of kan het er misschien gewoon wat mooier uitzien?
            Dat zijn dingen waar ik graag mee bezig ben.
          </p>

          <p>
            Ik heb zeker nog veel te leren en dat weet ik ook. Maar dat is net
            wat ik zo leuk vind aan programmeren. Er valt altijd wel iets nieuws
            te ontdekken. Mijn doel is om verder te groeien als developer,
            ervaring op te doen met andere programmeurs en samen aan leuke en
            innovatieve projecten te werken. Ik sta dan ook altijd open om
            nieuwe technologieën en tools uit te proberen!
          </p>
          <div className={styles.stats}>
            <div>
              <strong>2027</strong>
              <span>Verwachte afstudeerdatum</span>
            </div>
            <div>
              <strong>AP</strong>
              <span>Hogeschool Antwerpen</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Nieuwsgierigheid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
