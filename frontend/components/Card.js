import styles from "../styles/Card.module.css";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <img className={styles.profileImg} src="profile.png" />
        <span>FirstName @userName - 5 hours</span>
      </div>
      <span className={styles.content}>Content</span>
      <div className={styles.icons}>❤ 0</div>
    </div>
  );
}

export default Card;
