import styles from "./App.module.css";
import { useState } from "react";
const App = () => {
  //const [userDetails, setUserDetails] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const handleRegistration = (event) => {
    event.preventDefault();
    const userDetails = {
      firstName,
      lastName,
      email,
      password,
      contact,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setContact("");
    console.log(userDetails);
  };
  return (
    <>
      <p className={styles.displayDetails}>
        {`Hello, my name is `} <span className={styles.details}> {`${firstName} ${lastName}`}</span>
        {`. My email address is `}
        <span className={styles.details}>{`${email} `}</span>
        {`and my phone number is `}
        <span className={styles.details}>{`${contact}.`}</span>
      </p>
      <form onSubmit={handleRegistration}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <h1 className={styles.heading}>Sign Up</h1>
            <p className={styles.description}>
              Please fill in this form to create an account.
            </p>
            <label htmlFor="firstName">
              <b>First Name </b>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="lastName">
              <b>Last Name </b>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <label htmlFor="email">
              <b>Email </b>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@xmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">
              <b>Password </b>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="contact">
              <b>Phone Number </b>
            </label>
            <input
              type="text"
              name="contact"
              id="contact"
              placeholder="9876543211"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default App;
