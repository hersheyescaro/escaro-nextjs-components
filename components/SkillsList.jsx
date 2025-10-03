import styles from './SkillsList.module.css';

export default function SkillsList() {
  const skills = ['Cooking', 'Front-End Designing', 'Multimedia Editing'];

  return (
    <div className={styles.container}>
      <h2>GOOD AT:</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCircle}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
