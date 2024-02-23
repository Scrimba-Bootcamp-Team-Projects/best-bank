import React from "react";
import Button from "../components/Button/Button";
import AccountCard from "../components/AccountCard/AccountCard";
import SpendingList from "../components/SpendingList/SpendingList";
import styles from "../App.module.css";
import { setUsdCurrency } from "../utilities";

export default function HomePage({ userData }) {
  const [spendings, setSpendings] = React.useState(null);

  const accountsArr = [
    userData?.mainAccount,
    userData?.expenses,
    userData?.savings,
  ];

  function showSpendings(spendings) {
    setSpendings(spendings);
  }

  // Map over the accounts and create an AccountCard for each account
  const accountList = accountsArr.map((account) => {
    if (account) {
      return (
        <AccountCard
          key={account.id}
          title={account.title}
          balance={setUsdCurrency(account.balance)}
          onClick={() => showSpendings(account.spendings)}
        />
      );
    } else {
      return null;
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
          {userData ? accountList : "No accounts are available at this time"}
        </section>
        {spendings && (
          <section className={[styles.barList, styles.diagonal].join(" ")}>
            <h2>Spendings</h2>
            <SpendingList spendingData={spendings} />
          </section>
        )}
      </div>
    </main>
  );
}
