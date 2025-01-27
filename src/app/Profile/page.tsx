'use client';

import { useState } from 'react';
import styles from './Profile.module.css';
import Sidebar from '../../components/Sidebar';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'john_doe',
    avatar: '/assets/avatar.jpg', // Add a default avatar or placeholder
  });

  const handleEditProfile = () => {
    // You can add functionality here for editing user profile
    alert('Edit profile functionality can be added.');
  };

  return (

    <div className={styles.profileContainer}>
      {/* Sidebar */}
      <Sidebar />
      <div className={styles.profileWrapper}>
        {/* Avatar */}
        <div className={styles.avatarSection}>
          <img
            src={userData.avatar}
            alt="User Avatar"
            className={styles.avatarImage}
          />
        </div>

        {/* Profile Info */}
        <div className={styles.profileInfo}>
          <h2 className={styles.profileTitle}>Profile</h2>
          <div className={styles.infoGroup}>
            <label>Name</label>
            <p>{userData.name}</p>
          </div>

          <div className={styles.infoGroup}>
            <label>Email</label>
            <p>{userData.email}</p>
          </div>

          <div className={styles.infoGroup}>
            <label>Username</label>
            <p>{userData.username}</p>
          </div>

          <button
            className={styles.editButton}
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
