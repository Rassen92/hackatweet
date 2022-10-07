import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div className={styles.container}>
      <h1 className={styles.home}>Home</h1>
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
