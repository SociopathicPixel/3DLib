import { Box } from "@mui/material";
import styles from '../../../styles/PageAccount.module.scss';
const AccountBasic = () => {
    return (
      <Box className={styles.accountBasic}>
        <Box
          component="img"
          src="/assets/app_logo.png"
          className={styles.accountAvatar}
        />
        <Box>
          <Box className={styles.accountCredentials}>
            <Box  id="key">Username:</Box>
            <Box id="value">John Doe</Box>
          </Box>
          <Box className={styles.accountCredentials}>
            <Box id="key">E-mail:</Box>
            <Box id="value">john.doe@email.com</Box>
          </Box>
        </Box>
      </Box>
    );
}

export default AccountBasic;