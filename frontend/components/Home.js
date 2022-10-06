import styles from "../styles/Home.module.css";
import Image from "next/image";
import {useState, useCallback} from 'react';
import React from "react";
import ReactDOM from "react-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import ModalsignIn from './modalSignIn';
//import Modal from "./modalSignIn";
//import { render } from 'react-dom';




function Home() { 

  const [isSignInModalVisible, setSignInIsModalVisible] = useState(false);
  const [isSignUpModalVisible, setSignUpIsModalVisible] = useState(false);
  const [signUpFirstname, setsignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');


  

const showModalsignUp= () => {
  setSignUpIsModalVisible(!isSignUpModalVisible)
}
const showModalsignIn= () => {
  setSignInIsModalVisible(!isSignInModalVisible)
}

const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword}),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
					}
			});
	};

const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
        }
      })}

let ModalsignUp = (
  <div className={styles.register}>
<img className={styles.logoRight} src="/logo.png" />
<div className={styles.registerSection}>
<span> Create youy hackatweet account!</span>
<input type="text" placeholder="Firstname" id="signUpFirstname" 
onChange={(e) => setsignUpFirstname(e.target.value)} value={signUpFirstname} />
<input className = {styles.input} type="text" placeholder="Username" id="signUpUsername"
onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
<input className = {styles.input} type="password" placeholder="Password" id="signUpPassword" 
onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
<button className = {styles.register} onClick={() => handleRegister()}><SignUp/></button>

</div>
</div>)

let ModalsignIn = (
  <div className={styles.register}>
<img className={styles.logoRight} src="/logo.png" />
<div className={styles.registerSection}>
<span> Connect to hackatweet ! </span>
<input className = {styles.input} type="text" placeholder="Username" id="signInUsername"
onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
<input className = {styles.input} type="password" placeholder="Password" id="signUpPassword" 
onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
<button className = {styles.register} onClick={() => handleConnection()}><SignIn/></button>

</div>
</div>)



  return (
    <div>
      <div className={styles.body}>
        <div className={styles.leftcontainer}>
        <img className={styles.logoLeft} src="/logo.png" />
        </div>
               
        <div className={styles.rightcontainer}>
        <img className={styles.logoRight} src="/logo.png" />
          <h1 className={styles.title}>
            See what's <br /> happening
          </h1>
          <h2 className={styles.subtitle}>Join Hackatweet today.</h2>
          
          <button onClick={() => Modal()} className={styles.signin}> Sign In</button>
          <h4>Already have an account?</h4>
          <button className={styles.signup}> Sign Up</button>
          
        </div>
        <div>
     
    
  );
}

export default Home;
