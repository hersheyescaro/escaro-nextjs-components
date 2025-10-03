import styles from './FloatingSparkles.module.css';

export default function FloatingSparkles() {
  return (
    <div className={styles.sparkleContainer}>
      <div className={styles.sparkle} style={{ left: '10%', animationDelay: '0s' }}>💗</div>
      <div className={styles.sparkle} style={{ left: '20%', animationDelay: '1s' }}>🍧</div>
      <div className={styles.sparkle} style={{ left: '80%', animationDelay: '0.5s' }}>🍥</div>
      <div className={styles.sparkle} style={{ left: '70%', animationDelay: '2s' }}>💗</div>
      <div className={styles.sparkle} style={{ left: '40%', animationDelay: '1.5s' }}>🍧</div>
      <div className={styles.sparkle} style={{ left: '90%', animationDelay: '0.8s' }}>🧁</div>
    </div>
  );
}
