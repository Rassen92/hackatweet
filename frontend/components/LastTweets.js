import Card from "./Card";
import styles from "../styles/LastTweets.module.css";

function LastTweets() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default LastTweets;
