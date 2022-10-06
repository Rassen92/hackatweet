import styles from "../styles/User.module.css";

function User() {
  return (
    <div className={styles.container}>
      <img
        className={styles.logoImg}
        src="logo.png"
        width="50px"
        height="50px"
      />
      <div className={styles.user}>
        <img
          className={styles.profileImg}
          src="profile.png"
          width="50px"
          height="50px"
        />
        <div className={styles.userText}>
          <span>FirstName</span>
          <span>@UserName</span>
        </div>
      </div>
    </div>
  );
}

export default User;
