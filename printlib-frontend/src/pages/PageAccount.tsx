import React from "react";
import { Box } from "@mui/material";
import AccountBasics from "./account/layout/AccountBasic";
import AccountSettings from "./account/layout/AccountSettings";
import styles from '../styles/PageAccount.module.scss';
import '../styles/theme.scss';

const PageAccount: React.FC = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Box className={styles.accountInformation}>
        <AccountBasics />
        <AccountSettings />
      </Box>
    </Box>
  );
};

export default PageAccount;
