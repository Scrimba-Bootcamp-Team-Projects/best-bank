import React from 'react'
import Button from "../components/Button/Button";
import AccountCard from "../components/AccountCard/AccountCard";
import SpendingList from "../components/SpendingList/SpendingList";
import accounts from "../data";
import styles from "../App.module.css";

export default function HomePage() {

// Map over the accounts and create an AccountCard for each account
  const accountList = accounts.map((account) => {
    return (
      <AccountCard
        key={account.id}
        title={account.title}
        balance={account.balance}
      />
    );
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
                    {accountList}
                </section>
                <section className={[styles.barList, styles.diagonal].join(" ")}>
                    <SpendingList accounts={accounts} />
                </section>
            </div>
        </main>
    )
}