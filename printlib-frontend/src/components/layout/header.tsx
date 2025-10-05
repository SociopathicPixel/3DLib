import React from "react";
import styles from "./header.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {  
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === "/landing";

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <img src="./assets/app_logo.png" alt="Logo" className={styles.logo} />
        {!isLandingPage ? (
          <div>
            <button className={styles.iconButton} onClick={() => navigate("/explore")}>
              <img src="./assets/explore_models.png" alt="Explore Models" className={styles.menu}/>
            </button>
            <button className={styles.iconButton} onClick={() => navigate("/collection")}>
              <img src="./assets/my_collection.png" alt="My collection" className={styles.menu}/>
            </button>
            <button className={styles.iconButton} onClick={() => navigate("/add-model")}>
              <img src="./assets/models_add.png" alt="Add Model" className={styles.menu}/>
            </button>
            <button className={styles.iconButton} onClick={() => navigate("/add-filament")}>
              <img src="./assets/filament_add.png" alt="Add filament" className={styles.menu}/>
            </button>
            <button className={styles.iconButton} onClick={() => navigate("/my-devices")}>
              <img src="./assets/my_devices.png" alt="My devices" className={styles.menu} />
            </button>
          </div>
        ) : ( <></>)}
      </div>
      {isLandingPage ? (
        <div className={styles.middleGroup}>
          <input type="text" placeholder="Search..." className={styles.searchBar} />
        </div>
      ): ( <></>)}
      <div className={styles.rightGroup}>
        <button className={styles.iconButton} onClick={() => navigate("/profile")}>
          <img src="./assets/user_profile.png" alt="User profile" className={styles.menu}/>
        </button>
        <button className={styles.iconButton} onClick={() => navigate("/settings")}>
          <img src="./assets/app_settings.png" alt="App settings" className={styles.menu}/>
        </button>
      </div>
    </header>
  );
};


export default Header;
