import styles from "./Skills.module.css";
const groups = [
  {
    number: "01",
    title: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    number: "02",
    title: "Back-end",
    items: ["Node.js", "Express", "C#", "SQL"],
  },
  {
    number: "03",
    title: "Tools & workflow",
    items: ["Git", "GitHub", "REST API's", "Cloud basics", "Agile / Scrum"],
  },
];
export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.kicker}>VAARDIGHEDEN</p>
          <h2>
            Tools die ik
            <br />
            <span>onder de knie heb.</span>
          </h2>
        </div>
        <div className={styles.groups}>
          {groups.map((group) => (
            <article className={styles.group} key={group.number}>
              <div className={styles.groupHeader}>
                <h3>{group.title}</h3>
              </div>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
