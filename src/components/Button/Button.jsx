// This is a simple button component that takes children as a prop and renders a button with the children as its content.
// It is used in App.js to display the "Pay" and "Transfer" buttons.
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children, ...rest}) {
  return <button className={styles.button} {...rest}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
