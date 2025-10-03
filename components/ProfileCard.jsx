import styles from './ProfileCard.module.css';

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <img 
        src="/image/chad.jpg" 
        alt="Profile" 
          style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '50%',
          marginBottom: '1rem'
  }}
        className={styles.image}
      />
      <h2 className={styles.name}>Chad Michael A. Dado</h2>
      <p className={styles.age}>20 years old </p>
      <p className={styles.description}>
        I'm a good photographer and visual artist who loves capturing stories through images. Im also pretty good at cooking, where I get to be creative in a different way.

      </p>
    </div>
  );
}
