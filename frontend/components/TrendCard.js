import styles from "../styles/trendCard.module.css";

function TrendCard() {
  return (
    <div className={styles.container}>
      <span className={styles.trend}>#hackatweet</span>
      <span>2 Tweets</span>
    </div>
  );
}

export default TrendCard;
