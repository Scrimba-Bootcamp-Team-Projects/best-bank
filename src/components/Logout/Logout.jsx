import React from "react"
import styles from "./Logout.module.css";
import Button from "../Button/Button";

export default function Logout({onYesClick, onNoClick}){
    return <div className={styles.logoutContainer}>
        <p>Do you want to logout?</p>
        <div className={styles.btnContainer}>
            <Button onClick={onYesClick} className={styles.logoutBtn}>Yes</Button>
            <Button onClick={onNoClick} className={styles.logoutBtn}>No</Button>
        </div>
        
    </div>
}