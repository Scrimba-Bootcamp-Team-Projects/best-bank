// This component is a simple card that displays the account title and balance.
// It is used in App.js to display the account balance.
import PropTypes from "prop-types";
import styles from "./AccountCard.module.css";

export default function AccountCard({ title, balance }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.accountTitle}>{title}</h4>
      <span>{balance}</span>
    </div>
  );
}

AccountCard.propTypes = {
  title: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};
