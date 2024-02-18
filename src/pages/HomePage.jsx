import React from "react";
import Button from "../components/Button/Button";
import AccountCard from "../components/AccountCard/AccountCard";
import SpendingList from "../components/SpendingList/SpendingList";
import accounts from "../data";
import styles from "../App.module.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import {setUsdCurrency} from "../utilities"

export default function HomePage() {
  const [accountData, setAccountData] = React.useState([]);

  React.useEffect(() => {
    
      getDocs(collection(db, "accounts"))
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setAccountData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  const accountsArr = [
    accountData[0]?.mainAccount, 
    accountData[0]?.expenses, 
    accountData[0]?.savings
  ];

// Map over the accounts and create an AccountCard for each account
const accountList = accountsArr.map((account) => {
  if (account){
    return (
      <AccountCard
        key={account.id}
        title={account.title}
        balance={setUsdCurrency(account.balance)}
      />
      )
  } else {
    return null
  }
  
});

  return (
    <main>
      <div className={[styles.buttonContainer, styles.diagonal].join(" ")}>
        <Button>Pay</Button>
        <Button>Transfer</Button>
      </div>
      <div className={styles.listContainer}>
        <section className={styles.accountList}>
          <h2>Accounts</h2>
          {accountData ? accountList : "No accounts are available at this time"}
        </section>
      </div>
    </main>
  );
}




