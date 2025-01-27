'use client';

import { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className={styles.loginContainer}>
      {/* ซ้าย: ใส่รูป */}
      <div className={styles.leftSide}>
        <img src="/assets/11.jpg" alt="Login" className={styles.loginImage} />
      </div>

      {/* ขวา: ฟอร์ม Login */}
      <div className={styles.rightSide}>
        <div className={styles.formWrapper}>
          {/* โลโก้ */}
          <div className={styles.logo}></div>

          {/* หัวข้อ */}
          <h2 className={styles.title}>Login to your account</h2>

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

          <button type="button" className={styles.loginButton} onClick={login}>
            Login
          </button>

          <div className={styles.signupLink}>
            <p>
              Don't have an account? <a href="/SignUp">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
