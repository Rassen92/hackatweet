import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div className={styles.container}>
      <span className={styles.home}>Home</span>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          name="tweet"
          placeholder="What's up?"
        />
        <div className={styles.submit}>
          <span>0/280</span>
          <button className={styles.tweetBtn}>Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
