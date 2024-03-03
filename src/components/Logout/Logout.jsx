import React from "react"
import styles from "./Logout.module.css";
import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase"

export default function Logout({onLogout}){
    const handleLogout = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          onLogout()
          console.log("Logout successful");
        }).catch((error) => {
          onLogout()

        });
      };

    return <div className={styles.logoutContainer}>
        <p>Do you want to logout?</p>
        <div className={styles.btnContainer}>
            <Button onClick={handleLogout} className={styles.logoutBtn}>Yes</Button>
            <Button onClick={onLogout} className={styles.logoutBtn}>No</Button>
        </div>
        
    </div>
}