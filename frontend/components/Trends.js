import TrendCard from "./TrendCard";
import styles from "../styles/trends.module.css";

function Trends() {
  return (
    <div className={styles.container}>
      <h1>Trends</h1>
      <div className={styles.cardsContainer}>
        <TrendCard />
        <TrendCard />
        <TrendCard />
      </div>
    </div>
  );
}

export default Trends;
