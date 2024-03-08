import { useState } from "react";
import { login, create } from "../config/firebase";
import styles from "../App.module.css";
import Button from "../components/Button/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCompare, setPasswordCompare] = useState("");
  const [loginFailed, setLoginFailed] = useState({
    hasMessage: false,
    message: "",
  });
  const [createUser, setCreateUser] = useState(false);

  function toggleCreateUser() {
    setCreateUser(!createUser);
    // Clear password that was entered on the form
    setPassword("");
    setPasswordCompare("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoginFailed({ hasMessage: false, message: "" }); // Reset login failure state on new submission

    if (createUser) {
      // Check if passwords match
      if (password !== passwordCompare) {
        setLoginFailed({
          hasMessage: true,
          message: "Password does not match",
        });
        // Clear the password fields
        setPassword("");
        setPasswordCompare("");
      } else {
        const log = await create(email, password);
        log?.failed &&
          setLoginFailed({ hasMessage: true, message: log.message });
        // Clear the password fields
        setPassword("");
        setPasswordCompare("");
      }
    } else {
      // Login in if not creating new user
      const log = await login(email, password);
      log?.failed && setLoginFailed({ hasMessage: true, message: log.message });
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
      {loginFailed.hasMessage && (
        <p className={styles.failed}>{loginFailed.message}</p>
      )}
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <fieldset className={styles.formOptContainer}>
          <label htmlFor="email">Email</label>
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
        {createUser && (
          <fieldset className={styles.formOptContainer}>
            <label htmlFor="passwordCompare">Re-enter Password</label>
            <input
              type="password"
              placeholder="enter your password"
              id="passwordCompare"
              name="passwordCompare"
              onChange={(e) => setPasswordCompare(e.target.value)}
              value={passwordCompare}
            />
          </fieldset>
        )}
        <div>
          <Button type="submit">{!createUser ? "Login" : "Create"}</Button>
          <Button onClick={toggleCreateUser} type="button">
            {!createUser ? "New User" : "Back"}
          </Button>
        </div>
      </form>
    </>
  );
}
