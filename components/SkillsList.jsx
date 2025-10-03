import styles from './SkillsList.module.css';

export default function SkillsList() {
  const skills = ['skills media photographer', 'visual artist', 'cookery'];

  return (
    <div className={styles.container}>
      <h2>My Skills:</h2>
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
