import React, { useState } from "react";
import { ui, uiConfig, login } from '../config/firebase';
import styles from "../App.module.css";
import Button from "../components/Button/Button";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginFailed(false); // Reset login failure state on new submission
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login error:", error);
      setLoginFailed(true);
      console.log(loginFailed) // Set login failure state on error
    }
  };

  return (
      <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src="img/logo.svg"
            alt="best bank logo"
          />
          <h1 className={styles.title}>Best Bank</h1>
        </div>
      </header>
      {loginFailed && <p className={styles.failed}>Login Failed</p>}
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <fieldset className={styles.formOptContainer}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            placeholder="enter your email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </fieldset>
        <fieldset className={styles.formOptContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </fieldset>
        <Button type="submit">Login</Button>
      </form>
    </>
    
  );
}


 