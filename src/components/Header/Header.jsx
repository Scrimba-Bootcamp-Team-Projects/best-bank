// Header component contains the logo and the navigation menu.
// It is used in App.js to display the header of the application.
import React from "react"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase"
import styles from "./Header.module.css";
import Button from "../Button/Button";

export default function Header() {
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Logout successful");
    }).catch((error) => {
      // An error happened.
      console.error("Logout failed", error);
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="img/logo.svg" alt="best bank logo" />
        <h1 className={styles.title}>Best Bank</h1>
      </div>
      <nav className={styles["menu-list"]}>
        <Link
          className={`${styles.buttonLikeLink} ${styles.activeButton}`}
          to="/"
        >
          Home
        </Link>

        <Link 
          className={styles.buttonLikeLink} 
          to="/payments">
          Payments
        </Link>

        <Link className={styles.buttonLikeLink} href="#">
          Savings
        </Link>

        <Link className={styles.buttonLikeLink} href="#">
          Financing
        </Link>

        <Link className={styles.buttonLikeLink} href="#">
          Stocks
        </Link>
        <Button className={styles.buttonLogout} onClick={handleLogout}>Logout</Button>
      </nav>
    </header>
  );
}
