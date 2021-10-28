/* import external modules */
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#d0cece!important',
  },
  headerWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  connectButton: {
    backgroundColor: 'black!important',
    borderRadius: '0!important'
  },
}))

export default useStyles
