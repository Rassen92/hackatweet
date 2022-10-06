import styles from '../styles/Home.module.css';
import Image from 'next/image';


function Home() {
  return (
    <div>
      <div className = {styles.body}> 
      <div className={styles.leftcontainer}> 
      <img  src='../public/logo.png'  />
      </div>
      <div className={styles.rightcontainer}>
        
         <h1 className={styles.title}>
          See what's <br /> happening
         </h1>
         <h2 className={styles.subtitle}>
          Join Hackatweet today.
         </h2>
         <img src='../public/logo.png' />
         <button className={styles.signin}> Sign In</button>
         <h4>Already have an account?</h4>
         <button className={styles.signup}> Sign Up</button>
        
      
        </div>
    </div>
    </div>
  );
}

export default Home;

