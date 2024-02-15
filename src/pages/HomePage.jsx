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
    /* 
      This query will get all of the accounts even though right now we only have one
      account in our database. This will have to be updated when we have
      multiple accounts and when we add the login feature

      accountData will end up with an array of objects that look like this
      {
        "Name": "John Doe",
        "Email": "john.doe@testmail.com",
        "Password": "password1",
        "Main Account": {
            "balance": 6700.56,
            "id": 1,
            "spendings": [] 
        },
        "Savings": {
            "id": 3,
            "balance": 36500.12,
            "spendings": []
        },
        "Expenses": {
            "spendings": [],
            "balance": 5134.63,
            "id": 2
        },
      }
    */
    getDocs(collection(db, "accounts")).then((querySnapshot) => {
      const accountData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // So if there is no data it return an empty array
        accountData.push(doc.data());
      });
      setAccountData(accountData);
      
  })
   
  }, []);

  // Map over the accounts and create an AccountCard for each account
  const accountsArr= [accountData[0]?.Main_Account, accountData[0]?.Savings,accountData[0]?.Expenses]
  const accountList = accountsArr.map((account) => {
    return (
      <AccountCard
        key={account.id}
        title={account.title}
        balance={setUsdCurrency(account.balance)}
      />
      )
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
          {accountData && accountList}
        </section>
        <section className={[styles.barList, styles.diagonal].join(" ")}>
          <SpendingList accounts={accounts} />
        </section>
      </div>
    </main>
  );
}
