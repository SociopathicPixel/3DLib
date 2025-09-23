import React from 'react';
import styles from './3DPrintLib.module.scss';

export default function PrintLibIntro() {
  return (
    <div className={styles.introContainer}>
      <span className={styles.introLead}>
        Access your personalized workspace with
      </span>
      <span className={styles.introTitle}>
        3D PrintLib
      </span>
    </div>
  );
}
