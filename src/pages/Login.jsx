import React from "react";
import Button from "../components/Button/Button";
import styles from "../App.module.css";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function Login({ onSubmit, didLoginFail }) {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isFormValid = formData.email && formData.password;

    isFormValid
      ? (onSubmit(formData),
        setFormData({
          email: "",
          password: "",
        }))
      : console.log("you cannot submit the form yet");
  }

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
      {didLoginFail && <p className={styles.failed}>Login Failed</p>}
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <fieldset className={styles.formOptContainer}>
          <label htmlFor="email">Username</label>
          <input
            type="email"
            placeholder="enter your email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </fieldset>
        <fieldset className={styles.formOptContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </fieldset>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
