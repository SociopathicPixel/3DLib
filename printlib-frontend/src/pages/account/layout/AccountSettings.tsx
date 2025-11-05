import { Box, Button } from '@mui/material';
import styles from '../../../styles/PageAccount.module.scss';

const AccountSettings = () => {
  return (
    <Box className={styles.accountSettings}>
      <Button variant="contained" color="primary" className={styles.passwordChange}>
        Change Password
      </Button>
      <Button variant="contained" color="error" className={styles.accountDelete}>
        Delete Account
      </Button>
    </Box>
  );
}
export default AccountSettings;