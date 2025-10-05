import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <img src="./assets/app_logo.png" alt="Logo" className={styles.logo} />
        <button className={styles.iconButton}>
          <img
            src="./assets/explore_models.png"
            alt="Explore Models"
            className={styles.menu}
          />
        </button>
        <button className={styles.iconButton}>
          <img
            src="./assets/my_collection.png"
            alt="My collection"
            className={styles.menu}
          />
        </button>
        <button className={styles.iconButton}>
          <img
            src="./assets/models_add.png"
            alt="Add Model"
            className={styles.menu}
          />
        </button>
        <button className={styles.iconButton}>
          <img
            src="./assets/filament_add.png"
            alt="Add filament"
            className={styles.menu}
          />
        </button>
      </div>
      <div className={styles.rightGroup}>
        <button className={styles.iconButton}>
          <img
            src="./assets/user_profile.png"
            alt="User profile"
            className={styles.menu}
          />
        </button>
        <button className={styles.iconButton}>
          <img
            src="./assets/app_settings.png"
            alt="App settings"
            className={styles.menu}
          />
        </button>
      </div>
    </header>
  );
};


export default Header;
