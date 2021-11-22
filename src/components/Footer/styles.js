/* import external modules */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0',
    borderTop: '1px solid rgb(255 255 255 / 30%)',
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '20px 0',
    [theme.breakpoints.down("md")]: {
      margin: 0
    },
  },
  logoImage: {
    maxWidth: 130,
    [theme.breakpoints.down("md")]: {
      maxWidth: 80,
    },
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '20px 0',
  },
  iconsItem: {
    padding: '0 10px',
    [theme.breakpoints.down("md")]: {
      padding: "0",
      transform: "scale(0.75)",
    },
  },
}))

export default useStyles
