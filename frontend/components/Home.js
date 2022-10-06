import styles from '../styles/Home.module.css';
import Image from 'next/image';


function Home() {
  return (
    <div>
      <div className = {styles.body}> 
      <div className={styles.leftcontainer}> 
      </div>
      <div className={styles.rightcontainer}>
         <h1 className={styles.title}>
          See what's happening
         </h1>
         <h2 className={styles.subtitle}>
          Join Hackatweet today.
         </h2>
         <button id="signIn"> signIn</button>
         <h3>Already have an account?</h3>
         <button id="signUp"> signUp</button>
        
      
        </div>
    </div>
    </div>
  );
}

export default Home;
