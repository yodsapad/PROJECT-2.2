'use client';

import { useState } from 'react';
import styles from './SignUp.module.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    console.log('Signing up with:', { email, username, password });
  };

  return (
    <div className={styles.signupContainer}>
      {/* ซ้าย: ใส่รูป */}
      <div className={styles.leftSide}>
        <img src="/assets/11.jpg" alt="Sign Up" className={styles.signupImage} />
      </div>

      {/* ขวา: ฟอร์ม Sign Up */}
      <div className={styles.rightSide}>
        <div className={styles.formWrapper}>
          {/* โลโก้ */}
          <div className={styles.logo}></div>

          {/* หัวข้อ */}
          <h2 className={styles.title}>Account Sign Up</h2>

          <div className={styles.inputGroup}>
            <label className={styles.labelLeft}>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className={styles.customInput}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.labelLeft}>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter your username"
              className={styles.customInput}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.labelLeft}>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className={styles.customInput}
              required
            />
          </div>

          <button type="button" className={styles.signupButton} onClick={signUp}>
            Sign Up
          </button>

          <div className={styles.loginLink}>
            <p>
              Have an account? <a href="/Login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
