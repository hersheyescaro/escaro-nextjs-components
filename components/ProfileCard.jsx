import styles from './ProfileCard.module.css';

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <img 
        src="/image/me.jpg" 
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
      <h2 className={styles.name}>HERSHEY JOY B. ESCARO</h2>
      <p className={styles.age}>Age: 19 </p>
      <p className={styles.description}>
        A designer and multimedia enthusiast who enjoys creating user interfaces, editing videos, and even experimenting with cooking. 
        Always eager to grow, they strive to keep improving and sharing meaningful work.

      </p>
    </div>
  );
}
