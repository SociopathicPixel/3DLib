import { Box, TableContainer } from "@mui/material";
import styles from '../../../styles/PageAccount.module.scss';
const AccountBasic = () => {
    return (
      <Box className={styles.accountBasic}>
        <Box
          component="img"
          src="/assets/app_logo.png"
          className={styles.accountAvatar}
        />
        <TableContainer className={styles.accountBasicInformation}>
          <tr id={styles.accountBasicInfoRow}>
            <td id={styles.keyColumn}>
              Username:
            </td>
            <td id={styles.valueColumn}>
              {sessionStorage.getItem('username')}
            </td>
          </tr>
          <tr id={styles.accountBasicInfoRow}>
            <td id={styles.keyColumn}>
              E-mail:
            </td>
            <td id={styles.valueColumn}>
              {sessionStorage.getItem('email')}
            </td>
          </tr>
        </TableContainer>
      </Box>
    );
}

export default AccountBasic;