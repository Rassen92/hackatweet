import LastTweets from "./LastTweets";
import Trends from "./Trends";
import User from "./User";
import Tweet from "./Tweet";
import styles from "../styles/Hub.module.css";

function Hub() {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <User />
      </div>
      <div className={styles.tweetContainer}>
        <Tweet />
      </div>
      <div className={styles.lastTweetsContainer}>
        <LastTweets />
      </div>
      <div className={styles.Trendscontainer}>
        <Trends />
      </div>
    </div>
  );
}

export default Hub;
