import React from "react";
import styles from "./LandingPage.module.scss"; // optional if you're styling
import Header from "../components/layout/header";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Welcome to 3D PrintLib</h1>
      <p>Explore printable objects, manage your library, and start creating!</p>
      {/* Add navigation buttons or feature highlights here */}
    </div>
  );
};

export default LandingPage;
