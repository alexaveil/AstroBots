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
  },
  logoImage: {
    maxWidth: 60
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '20px 0',
  },
  iconsItem: {
    padding: '0 10px'
  },
}))

export default useStyles
