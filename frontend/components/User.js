import styles from "../styles/User.module.css";

function User() {
  return (
    <div className={styles.container}>
      <img className={styles.logoImg} src="logo.png" />
      <div className={styles.user}>
        <img className={styles.profileImg} src="profile.png" />
        <div className={styles.userText}>
          <span>FirstName</span>
          <span>@UserName</span>
        </div>
      </div>
    </div>
  );
}

export default User;
