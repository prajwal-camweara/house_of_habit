import { useState } from 'react';
import styles from './steps.module.css';

const EmailStep = ({ phone, onSubmit }) => {
  const [email, setEmail] = useState('');

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) onSubmit(email);
  };

  return (
    <form className={styles.step} onSubmit={handleSubmit}>
      <div className={styles.authContainer}>
        <h2 className={styles.title}>Your almost there</h2>
        <p className={styles.subparagraph}>
          This email will be linked to
          <br />
          <span className={styles.phoneHighlight}>+91 {phone}</span>
        </p>

        <input
          className={styles.emailInput}
          type='email'
          placeholder='Enter email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        <button type='submit' className={`${styles.submitBtn} ${isValid ? styles.btnActive : styles.btnInactive}`} disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmailStep;
